import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { DigitalProductResolver } from './resolvers/digital-product.resolver';
import { DigitalProductsService } from './services/digital-product.service';
import { DigitalProductScreenshotsService } from './services/digital-product-screenshot.service';
import { CustomDateScalar } from './scalars/custom-date.scalar';
import { User } from './models/user.model';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      sortSchema: true,
      resolvers: { Date: CustomDateScalar },
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  controllers: [],
  providers: [
    DigitalProductResolver,
    DigitalProductsService,
    DigitalProductScreenshotsService,
    UserResolver,
  ],
})
export class AppModule {}
