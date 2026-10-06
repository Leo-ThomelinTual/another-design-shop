import mysql from "mysql2/promise";
import { GetDBSettings } from "../../../sharedCode/common";
import { NextRequest, NextResponse } from "next/server";

const connectionParams = GetDBSettings();

export async function GET(req: NextRequest, { params }: { params: Promise<{ gender: string }> },
) {
  try {
    const availableType = ["homme", "femme", "ado", "enfant"];
    const gender = (await params).gender;

    let get_product_query = ''

    if (availableType.indexOf(gender) > -1) {
      if (gender === availableType[0]) {
      get_product_query = 'SELECT * FROM homme';
      } else if (gender === availableType[1]) {
        get_product_query = 'SELECT * FROM femme';
      }
    } else {
      console.log("Erreur vous essayez d'accéder à un type inconnu ou non autorisé");
    }

    const connection = await mysql.createConnection(connectionParams);

    // const values = [];

    const [products] = await connection.execute(get_product_query);

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
