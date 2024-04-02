import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { DigitalProduct } from 'src/models/digital-product.model';

import { User } from 'src/models/user.model';
import { DigitalProductsService } from 'src/services/digital-product.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private digitalProductsService: DigitalProductsService) {}

  @ResolveField(() => [DigitalProduct])
  public digitalProducts(@Parent() user: User): DigitalProduct[] {
    return this.digitalProductsService.findAllByUserLdap(user.ldap);
  }
}
