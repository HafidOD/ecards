import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';
 
export async function GET(request) {
  const addresses = await prisma.address.findMany({
    include: {
      enterprise: true,
    }
  })
  return NextResponse.json({ addresses }, { status: 200 })
}

export async function POST (request) {

  const { ...newAddress} = await request.json();
  const address = await prisma.address.create({
    data: newAddress,
  })
  return NextResponse.json({ address }, {status: 200})
}