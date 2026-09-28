import mysql from "mysql2/promise";
import { GetDBSettings } from "../../../sharedCode/common";
import { NextRequest, NextResponse } from "next/server";

const connectionParams = GetDBSettings();

export async function GET(req: NextRequest) {
  try {
    const connection = await mysql.createConnection(connectionParams);

    let get_product_query = ''

    get_product_query = 'SELECT * FROM femme';

    const values: any[] = []

    const [products] = await connection.execute(get_product_query, values);

    connection.end();

    return NextResponse.json(products);
  } catch (err) {
    console.log('ERROR: API - ', (err as Error).message)

    const response = {
      error: (err as Error).message,

      returnedStatus: 200,
    }

    return NextResponse.json(response, { status: 200 })
  }
}
