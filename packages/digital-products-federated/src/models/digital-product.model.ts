import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { DigitalProductScreenshot } from './digital-product-screenshot.model';
import { CustomDateScalar } from 'src/scalars/custom-date.scalar';
import { DigitalProductStatus } from 'src/enums/digital-product-status.enum';
import { Likable } from './likable.model';
import { User } from './user.model';

@ObjectType({
  implements: () => [Likable],
})
@Directive('@extends')
@Directive('@key(fields: "id")')
export class DigitalProduct {
  @Field(() => ID)
  @Directive('@external')
  id: string;

  @Field(() => String)
  name: string;

  likes: number;

  @Field(() => String, { nullable: true })
  logo?: string;

  @Field(() => CustomDateScalar)
  releaseDate: Date;

  @Field(() => DigitalProductStatus)
  status: DigitalProductStatus;

  @Field(() => [DigitalProductScreenshot])
  screenshots: DigitalProductScreenshot[];

  @Field(() => [User])
  users: User[];
}
