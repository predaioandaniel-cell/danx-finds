export type Product = {
  id: string
  brand: string
  title: string
  image: string
  condition: string
  sizes: string
  price: number
}

export const products: Product[] = [
  {
    id: 'supreme-af1',
    brand: 'Nike x Supreme',
    title: 'Nike Air Force 1 Low x Supreme "Box Logo White"',
    image: '/products/supreme-af1.png',
    condition: 'Deadstock (DS)',
    sizes: 'EU 40 – 45 in stock',
    price: 399,
  },
  {
    id: 'af1-cdg-supreme',
    brand: 'Nike x CDG x Supreme',
    title: 'Air Force 1 CDG Supreme',
    image: '/products/af1-cdg-supreme.png',
    condition: 'Deadstock (DS)',
    sizes: 'EU 40 – 45 in stock',
    price: 399,
  },
  {
    id: 'lv-skate-black',
    brand: 'Louis Vuitton',
    title: 'Louis Vuitton Skate Sneaker "Monogram Black"',
    image: '/products/lv-skate-black.png',
    condition: '10/10 OG All',
    sizes: 'EU 41 – 45 in stock',
    price: 550,
  },
  {
    id: 'lv-skate-white',
    brand: 'Louis Vuitton',
    title: 'Louis Vuitton Skate Sneaker "Monogram White"',
    image: '/products/lv-skate-white.png',
    condition: '10/10 OG All',
    sizes: 'EU 41 – 45 in stock',
    price: 550,
  },
  {
    id: 'balenciaga-runner-black',
    brand: 'Balenciaga',
    title: 'Balenciaga Runner "Triple Black"',
    image: '/products/balenciaga-runner-black.png',
    condition: 'Deadstock (DS)',
    sizes: 'EU 40 – 44 in stock',
    price: 550,
  },
  {
    id: 'balenciaga-runner-white-black',
    brand: 'Balenciaga',
    title: 'Balenciaga Runner "White / Black"',
    image: '/products/balenciaga-runner-white-black.png',
    condition: 'Deadstock (DS)',
    sizes: 'EU 40 – 44 in stock',
    price: 550,
  },
  {
    id: 'dior-b22-white',
    brand: 'Dior',
    title: 'Dior B22 "White Edition"',
    image: '/products/dior-b22-white.png',
    condition: 'Deadstock (DS)',
    sizes: 'EU 42 – 46 in stock',
    price: 399,
  },
  {
    id: 'jordan-4',
    brand: 'Air Jordan',
    title: 'Air Jordan 4 Retro "White Cement"',
    image: '/products/jordan-4.png',
    condition: 'Deadstock (DS)',
    sizes: 'EU 41 – 46 in stock',
    price: 599,
  },
]

export const brands = [
  'NIKE',
  'AIR JORDAN',
  'BALENCIAGA',
  'DIOR',
  'LOUIS VUITTON',
  'OFF-WHITE',
  'TRAVIS SCOTT',
  'SUPREME',
]

export function formatRon(value: number) {
  return `${new Intl.NumberFormat('ro-RO', {
    maximumFractionDigits: 0,
  }).format(value)} RON`
}
