import mongodb from "mongodb";
import * as dotenv from "dotenv";

dotenv.config({silent:true});

function getClient() {
    const uri = process.env.MONGODB_CONECTION_STRING;
    return new mongodb.MongoClient(uri);
}

export { getClient }