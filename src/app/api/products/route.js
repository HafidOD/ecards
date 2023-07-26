import { NextResponse } from 'next/server'

const products =  [
    {
      "id": 1,
      "enterpriseName": "Bomboy",
      "logo": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "enterpriseName": "City Express",
      "logo": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "enterpriseName": "Marriot",
      "logo": "https://reqres.in/img/faces/3-image.jpg"
    },
  ]
 
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
  return NextResponse.json({ data: products })
}