import { scoringapi } from "./serviceDefination";

export const tournamentsapi=scoringapi.injectEndpoints({
    endpoints:(builder)=>({
        getTournaments:builder.query<any,void>({
            query:()=>"/tournments",
            transformResponse:(response:any,meta)=>{
                if(meta?.response?.status===200){
                    return response
                }
                else{
                    return []
                }
            }
        })
    })
})
export const {useGetTournamentsQuery}=tournamentsapi;