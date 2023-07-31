import { NextResponse } from "next/server";

export async function GET(request) {
  return new NextResponse({ message: "Hola mundo" }, { status: 200 });
}
