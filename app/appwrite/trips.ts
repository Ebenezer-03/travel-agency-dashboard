import { Query } from "appwrite"
import { appwriteConfig, database } from "./client"
import { tripXAxis } from "~/constants";

export const getAllTrips = async (limit:number,offset:number) =>{
    const allTrips = await database.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.tripCollectionId,
        [Query.limit(limit), Query.offset(offset), Query.orderDesc('createdAt')]
    )

    if(allTrips.total === 0){
        console.error('No Trips found');
        return{allTrips:[],total:0}
    }
    return{
        allTrips:allTrips.documents,
        total:allTrips.total,

    }
}

export const getTripById=async (tripId:string)=>{
    const trip = await database.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.tripCollectionId,
        tripId
    )
    if(!trip.$id){
        console.log("Trip not found")
        return null;
    }
    return trip;
}