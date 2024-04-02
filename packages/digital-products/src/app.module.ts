import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DigitalProductResolver } from './resolvers/digital-product.resolver';
import { DigitalProductsService } from './services/digital-product.service';
import { DigitalProductScreenshotsService } from './services/digital-product-screenshot.service';
import { CustomDateScalar } from './scalars/custom-date.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      resolvers: { Date: CustomDateScalar },
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [],
  providers: [
    DigitalProductResolver,
    DigitalProductsService,
    DigitalProductScreenshotsService,
  ],
})
export class AppModule {}
