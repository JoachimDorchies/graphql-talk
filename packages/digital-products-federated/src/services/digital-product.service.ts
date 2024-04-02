import { Injectable } from '@nestjs/common';
import { DigitalProductStatus } from 'src/enums/digital-product-status.enum';
import { DigitalProduct } from 'src/models/digital-product.model';

@Injectable()
export class DigitalProductsService {
  private products: DigitalProduct[] = [
    {
      id: '1',
      name: 'Digital Product 1',
      likes: 1,
      screenshots: [],
      logo: 'https://awesome-logos.com/1',
      releaseDate: new Date(),
      status: DigitalProductStatus.LIVE,
      users: [{ ldap: '1' }, { ldap: '2' }],
    },
    {
      id: '2',
      name: 'Digital Product 2',
      likes: 2,
      screenshots: [],
      logo: 'https://awesome-logos.com/2',
      releaseDate: new Date(),
      status: DigitalProductStatus.LIVE,
      users: [{ ldap: '2' }],
    },
    {
      id: '3',
      name: 'Digital Product 3',
      likes: 0,
      screenshots: [],
      logo: null,
      releaseDate: new Date(),
      status: DigitalProductStatus.DRAFT,
      users: [],
    },
  ];

  findAll(): DigitalProduct[] {
    return this.products;
  }

  findOneById(id: string): DigitalProduct {
    const product = this.products.find((product) => product.id === id);

    if (product) {
      return product;
    }

    throw new Error('Product not found');
  }

  findAllByUserLdap(ldap: string): DigitalProduct[] {
    const products = this.products.filter((product) =>
      product.users.some((user) => user.ldap === ldap),
    );

    return products;
  }

  likeById(id: string): DigitalProduct {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    this.products[productIndex].likes += 1;

    return this.products[productIndex];
  }
}
