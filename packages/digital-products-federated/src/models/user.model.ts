import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { DigitalProduct } from './digital-product.model';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "ldap")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  ldap: string;

  @Field(() => [DigitalProduct])
  digitalProducts?: DigitalProduct[];
}
