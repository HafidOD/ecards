import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';

export async function GET(request, {params}) {
  // console.log(request); ;
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })
  return NextResponse.json({ user }, 
    { status: 200 })
}

export async function PUT (request, {params}) {
  // cosnt updateData = await re
  const user = await prisma.user.update({
    where: {
      id: parseInt(params.id),
    },
    data: await request.json(),
    include: {
      enterprises: true,
    }
  })
  return NextResponse.json({ user }, {status: 200});
}

export async function DELETE (request, {params}) {
  const deleteUser = await prisma.user.delete({
    where: {
      id: parseInt(params.id),
    },
  })
  return NextResponse.json({ 
    message: 'User deleted',
    enterprise: deleteUser }, 
    { status: 200 })
}