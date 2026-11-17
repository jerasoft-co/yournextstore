# commerce-kit

`commerce-kit` is a simple TypeScript library designed specifically for e-commerce applications built with Next.js. It provides a range of utilities to interact with products, categories, and orders, seamlessly integrating with Stripe for payment processing.

Built by [Your Next Store](https://yournextstore.com).

## Features

- **Product Browsing**: Easily fetch and display products.
- **Category Management**: Manage and retrieve product categories.
- **Order Handling**: Create and manage customer orders.
- **Cart Operations**: Add products to cart and retrieve cart details.
- **Stripe Integration**: Built-in support for payment processing using Stripe.

## Installation

Install the package via npm:

```bash
npm install commerce-kit
```

## Usage

`commerce-kit` is intended for use with Next.js applications. Here's a simple example of how to use it to fetch and display products:

```tsx
import * as Commerce from "commerce-kit";
import { formatMoney } from "commerce-kit/currencies";
import Image from "next/image";
import Link from "next/link";

export async function ProductList() {
  const products = await Commerce.productBrowse({ first: 6 });

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/product/${product.metadata.slug}`}>
            <article>
              {product.images[0] && (
                <Image src={product.images[0]} width={300} height={300} alt={product.name} />
              )}
              <h2>{product.name}</h2>
              {product.default_price.unit_amount && (
                <p>
                  {formatMoney({
                    amount: product.default_price.unit_amount,
                    currency: product.default_price.currency,
                    locale: "en-US",
                  })}
                </p>
              )}
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

## Debugging

This library uses a custom logger to output debug information. To control the debug output, use the `LOG_LEVEL` environment variable. The following levels are supported:

- **ERROR** – Critical issue for a specific request that needs immediate attention.
- **WARN** – Something that should be reviewed eventually.
- **LOG** – Details on regular operations.
- **DEBUG** – Debug information, including `time` and `timeEnd` function outputs.

## License

This project is licensed under the AGPL Version 3 license – see the LICENSE.md file for details.
