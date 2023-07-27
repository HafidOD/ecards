import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';

 
export async function GET(request, {params}) {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      categories: true,
    }
  })
  return NextResponse.json({ product }, {status: 200 })
}

export async function DELETE(request, {params}){
  const productDeleted = await prisma.product.delete({
    where: {
      id: parseInt(params.id),
    }
  })
  return NextResponse.json({ 
    message: 'Product deleted',
    enterprise: productDeleted }, 
    { status: 200 })
}