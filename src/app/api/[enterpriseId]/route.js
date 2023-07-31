import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET(request, { params }) {
  // console.log(params.enterpriseId);
  try {
    const enterprise = await prisma.enterprise.findMany({
      where: {
        id: parseInt(params.enterpriseId),
      },
    });
    return NextResponse.json({ data: enterprise }, { status: 200 });
  } catch (error) {
    return new NextResponse(
      { message: "Internal Error", error },
      { status: 500 }
    );
  }
}

// export async function POST(request) {
//   const { ...newEnterprise } = await request.json();
//   const enterprise = await prisma.enterprise.create({
//     data: newEnterprise,
//   });
//   return NextResponse.json({ enterprise }, { status: 200 });
// }
