import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';
 
export async function GET(request) {
  const categories = await prisma.category.findMany();
  return NextResponse.json({ categories },{status: 200})
}

export async function POST(request) {
  const { ...newCategory } = await request.json();
  const category = await prisma.category.create({
    data: newCategory,
  })

  return NextResponse.json({ category }, {status:200})
}