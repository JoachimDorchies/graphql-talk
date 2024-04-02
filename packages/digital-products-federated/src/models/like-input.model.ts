import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LikeInput {
  @Field()
  digitalProductId: string;
}
