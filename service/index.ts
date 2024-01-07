import { Api } from "./myApi";


export const service = new Api({
    baseUrl : 'https://iit.aminaabdelkafi93.workers.dev',
    baseApiParams : {
        headers : 
        {
            "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NDNkMThlYS1hMzBlLTQ1NzctYjkxYi04YjkxMmRiNTBiMTQiLCJleHAiOjE3MDU1MjQyNjMsImlhdCI6MTcwNDIyODI2MywidHlwZSI6ImFjY2VzcyIsInJvbGVzIjpbInVzZXIiXX0.J3R5k_gxoIDkKMLgKAh11SFEk6uMzQDqfVliMRLZEpc",

        }
    }
})


