import {
  Args,
  Query,
  Parent,
  ResolveField,
  Resolver,
  Mutation,
  ResolveReference,
} from '@nestjs/graphql';
import { LikeInput } from 'src/models/like-input.model';
import { DigitalProduct } from 'src/models/digital-product.model';
import { DigitalProductScreenshotsService } from 'src/services/digital-product-screenshot.service';
import { DigitalProductsService } from 'src/services/digital-product.service';
import { User } from 'src/models/user.model';

@Resolver(() => DigitalProduct)
export class DigitalProductResolver {
  constructor(
    private digitalProductsService: DigitalProductsService,
    private digitalProductScreenshotsService: DigitalProductScreenshotsService,
  ) {}

  @Query(() => [DigitalProduct])
  async digitalProducts() {
    return this.digitalProductsService.findAll();
  }

  @Query(() => DigitalProduct)
  async digitalProduct(@Args('id', { type: () => String }) id: string) {
    return this.digitalProductsService.findOneById(id);
  }

  @ResolveField(() => String)
  async logo(
    @Parent() digitalProduct: DigitalProduct,
    @Args('format', {
      type: () => String,
      nullable: true,
      defaultValue: 'original',
    })
    format = 'original',
  ) {
    const { logo } = digitalProduct;

    if (format === 'base64') {
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    }

    return logo;
  }

  @ResolveField()
  async screenshots(@Parent() digitalProduct: DigitalProduct) {
    const { id } = digitalProduct;
    return this.digitalProductScreenshotsService.findAllByDigitalProductId(id);
  }

  @Mutation(() => DigitalProduct)
  async like(@Args('likeInput') likeInput: LikeInput) {
    const digitalProductUpdated = this.digitalProductsService.likeById(
      likeInput.digitalProductId,
    );

    return digitalProductUpdated;
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): DigitalProduct {
    return this.digitalProductsService.findOneById(reference.id);
  }

  @ResolveField(() => [User])
  users(@Parent() digitalProduct: DigitalProduct) {
    return digitalProduct.users.map((user) => ({
      __typename: 'User',
      ldap: user.ldap,
    }));
  }
}
