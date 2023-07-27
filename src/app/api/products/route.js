import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';
 
export async function GET(request) {
  const products = await prisma.product.findMany({
    include: {
      enterprise: true,
      categories: true,
    }
  });
  return NextResponse.json({ products: products },{status: 200})
}

export async function POST (request) {

  const { nameProduct, imageProduct, priceLocal, priceNacional, priceExt, descriptionProduct, stockProduct, unitsPackage, published, enterpriseId} = await request.json();
  const product = await prisma.product.create({
    data: {
      nameProduct,
      imageProduct,
      priceLocal,
      priceNacional,
      priceExt,
      descriptionProduct,
      stockProduct, 
      unitsPackage, 
      published, 
      enterpriseId,
      categories: {
        connect: [
          {id: 1}
        ]
      }
    },
  })
  return NextResponse.json({ product }, {status: 200})
}