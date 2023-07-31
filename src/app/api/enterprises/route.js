import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET(request) {
  try {
    const enterprises = await prisma.enterprise.findMany({
      include: {
        addresses: true,
        users: true,
        categories: true,
        products: true,
      },
    });
    return NextResponse.json({ enterprises }, { status: 200 });
  } catch (error) {
    return new NextResponse(
      { message: "Internal Error", error },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { ...newEnterprise } = await request.json();
    const enterprise = await prisma.enterprise.create({
      data: newEnterprise,
    });
    return NextResponse.json({ enterprise }, { status: 200 });
  } catch (error) {
    return new NextResponse(
      { message: "Internal Error", error },
      { status: 500 }
    );
  }
}
