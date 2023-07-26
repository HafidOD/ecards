
import { NextResponse } from 'next/server'

 
export async function GET(request) {
  const id = request.url.split('products/')[1];
  // console.log(request);
  return NextResponse.json({ id: id})
}