import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DigitalProductScreenshot } from './digital-product-screenshot.model';
import { CustomDateScalar } from 'src/scalars/custom-date.scalar';
import { DigitalProductStatus } from 'src/enums/digital-product-status.enum';
import { Likable } from './likable.model';

@ObjectType({
  implements: () => [Likable],
})
export class DigitalProduct {
  @Field(() => ID)
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
}
