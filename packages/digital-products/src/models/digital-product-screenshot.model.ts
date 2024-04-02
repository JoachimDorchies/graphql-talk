import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DigitalProductScreenshot {
  @Field(() => String)
  id: string;

  @Field(() => String)
  url: string;
}
