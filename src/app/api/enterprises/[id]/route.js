
import { NextResponse } from 'next/server'

 
export async function GET(request, {params}) {
  // console.log(request);
  const id = params.id;
  return NextResponse.json({ id: id})
}