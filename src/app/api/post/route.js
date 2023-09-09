import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET() {
  try {
    const results = await conn.query("SELECT * FROM posts");
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const { userID, productID, description, rating } = await request.json();

    const statusB = 1;

    const result = await conn.query("INSERT INTO posts SET ?", {
      userID,
      productID,
      description,
      rating,
      statusB,
    });

    return NextResponse.json({
      userID,
      productID,
      description,
      rating,
      statusB,
      id: result.insertId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
