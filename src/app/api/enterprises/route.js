import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';

export async function GET(request) {
  const enterprises = await prisma.enterprise.findMany({
    include: {
      addresses: true,
      users: true,
    }
  })
  return NextResponse.json({ enterprises }, { status: 200 })
}

export async function POST (request) {

  const { ...newEnterprise} = await request.json();
  const enterprise = await prisma.enterprise.create({
    data: newEnterprise,
  })
  return NextResponse.json({ enterprise }, {status: 200})
}