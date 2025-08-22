import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";

export async function POST(req) {
  const data = await req.json();
  const productsCollection = await dbConnect(
    collectionsNameObj.productsCollection
  );
  const result = await productsCollection.insertOne(data);
  return new Response(JSON.stringify({ success: true, id: result.insertedId }));
}
