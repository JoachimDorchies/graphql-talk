import { Field, Int, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Likable {
  @Field(() => Int)
  likes: number;
}
