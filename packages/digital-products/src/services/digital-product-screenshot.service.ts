import { Injectable } from '@nestjs/common';
import { DigitalProductScreenshot } from 'src/models/digital-product-screenshot.model';

@Injectable()
export class DigitalProductScreenshotsService {
  private screenshots: (DigitalProductScreenshot & {
    digitalProductId: string;
  })[] = [
    {
      id: '1',
      url: 'https://awesome-screenshots.com/1',
      digitalProductId: '1',
    },
    {
      id: '2',
      url: 'https://awesome-screenshots.com/1',
      digitalProductId: '1',
    },
    {
      id: '3',
      url: 'https://awesome-screenshots.com/1',
      digitalProductId: '2',
    },
  ];

  findAll(): DigitalProductScreenshot[] {
    return this.screenshots;
  }

  findAllByDigitalProductId(
    digitalProductId: string,
  ): DigitalProductScreenshot[] {
    return this.screenshots.filter(
      (screenshot) => screenshot.digitalProductId === digitalProductId,
    );
  }
}
