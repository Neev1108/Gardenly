import { MongoClient } from 'mongodb'


//the url for the cluster and the database name
let uri = process.env.MONGODB_URI
let dbName = process.env.MONGODB_DB

//the cached client and db will allow us to cache the connection to the database and the client
let cachedClient = null
let cachedDb = null


//checks
if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}


//connect to database will check if connections exist, create a new connection
//and then return a cache connection of the client and the db
export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}