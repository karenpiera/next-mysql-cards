import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM product");
    return NextResponse.json(result);
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
    const {
      name,
      model,
      year,
      type,
      capacity,
      transmission,
      description,
      price,
      image,
    } = await request.json();
    const result = await conn.query("INSERT INTO product SET ?", {
      name,
      model,
      year,
      type,
      capacity,
      transmission,
      description,
      price,
      image,
    });

    return NextResponse.json({
      name,
      model,
      year,
      type,
      capacity,
      transmission,
      description,
      price,
      image,
      id: result.insertId,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
