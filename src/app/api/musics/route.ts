import { type NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  return new NextResponse(JSON.stringify({ id: 5 }));
}
