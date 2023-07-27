import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';

export async function GET(request, {params}) {
  // console.log(request); ;
  const address = await prisma.address.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      enterprise: true,
    }
  })
  return NextResponse.json({ address }, 
    { status: 200 })
}

export async function DELETE (request, {params}) {
  const deleteAddress = await prisma.address.delete({
    where: {
      id: parseInt(params.id),
    },
  })
  return NextResponse.json({ 
    message: 'Address deleted',
    enterprise: deleteAddress }, 
    { status: 200 })
}