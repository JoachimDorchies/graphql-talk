import { registerEnumType } from '@nestjs/graphql';

export enum DigitalProductStatus {
  DRAFT,
  LIVE,
}

registerEnumType(DigitalProductStatus, {
  name: 'DigitalProductStatus',
});
