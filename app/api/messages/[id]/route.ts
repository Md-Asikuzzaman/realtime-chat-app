import prisma from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";

interface ApiResponse {
  message?: string;
  messages?: MessageType[];
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse<ApiResponse>> {
  try {
    const messages = await prisma.message.findMany({
      where: {
        senderId: params?.id,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
    if (messages) {
      return NextResponse.json({ messages }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          message: "someting went wrong!",
        },
        { status: 404 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "someting went wrong!",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse<ApiResponse>> {
  try {
    await prisma.message.delete({
      where: {
        id: params?.id,
      },
    });

    return NextResponse.json({ message: "Message deleted!!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "someting went wrong!",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse<ApiResponse>> {
  console.log(params.id);

  try {
    await prisma.message.updateMany({
      data: {
        status: 1,
      },
      where: {
        senderId: params?.id,
      },
    });

    return NextResponse.json({ message: "Status Updated!!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "someting went wrong!",
      },
      { status: 500 },
    );
  }
}
