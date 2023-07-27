import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';

export async function GET(request, {params}) {
  // console.log(request); ;
  const enterprise = await prisma.enterprise.findUnique({
    where: {
      id: parseInt(params.id),
    }, 
    include: {
      addresses: true,
      users: true,
    }
  })
  return NextResponse.json({ enterprise }, 
    { status: 200 })
}

export async function PUT (request, {params}) {
  const enterprise = await prisma.enterprise.update({
    where: {
      id: parseInt(params.id),
    },
    data: await request.json(),
    include: {
      users: true,
      addresses: true,
    }
  })
  return NextResponse.json({ enterprise }, {status: 200});
}

export async function DELETE (request, {params}) {
  const deleteEnterprise = await prisma.enterprise.delete({
    where: {
      id: parseInt(params.id),
    },
  })
  return NextResponse.json({ 
    message: 'Enterprise deleted',
    enterprise: deleteEnterprise }, 
    { status: 200 })
}