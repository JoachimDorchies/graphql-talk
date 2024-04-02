import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "ldap")')
export class User {
  @Field(() => ID)
  ldap: string;

  @Field(() => String)
  name: string;
}
