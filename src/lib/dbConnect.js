import { MongoClient, ServerApiVersion } from "mongodb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// console.log(uri);
export const collectionsNameObj={
    productsCollection: "products"
}
export default function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName)
}
