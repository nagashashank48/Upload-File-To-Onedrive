import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const scoringapi=createApi({
    baseQuery:fetchBaseQuery({
     baseUrl:"https://scoringappfn.azurewebsites.net/api",
    prepareHeaders:(headers:any)=>{
        headers.set("accept","text/plain")
    },
}),
endpoints:(builder)=>({})
})