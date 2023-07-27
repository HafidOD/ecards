import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';

export async function GET(request, {params}) {
  // console.log(request); ;
  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      products: true,
    }
  })
  return NextResponse.json({ category }, 
    { status: 200 })
}

export async function DELETE (request, {params}) {
  const deleteCategory = await prisma.category.delete({
    where: {
      id: parseInt(params.id),
    },
  })
  return NextResponse.json({ 
    message: 'Category deleted',
    enterprise: deleteCategory }, 
    { status: 200 })
}