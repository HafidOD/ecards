import { NextResponse } from 'next/server'
import { prisma } from '@/libs/db';
 
export async function GET(request) {
  // const { searchParams } = new URL(request.url)
  // const id = searchParams.get('id')
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const product = await res.json()
 
  // return NextResponse.json({ product })
  const users = await prisma.user.findMany({
    include: {
      enterprises: true,
    }
  })
  // console.log(users);
  return NextResponse.json({ users }, { status: 200 })
}

export async function POST (request) {

  const { email, password, userName } = await request.json();
  const user = await prisma.user.create({
    data: {
      email,
      password,
      userName,
      enterprises: {
        connect: [
          {id: 1},
          {id: 2},
        ]
      }

    },
  })
  return NextResponse.json({ user }, {status: 200})
}