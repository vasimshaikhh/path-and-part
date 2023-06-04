import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const RiderApi = createApi({
    reducerPath: 'RiderApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:7000/'
    }),
    endpoints: (builder) => ({

        signup: builder.mutation({
            query: (dt) => ({
                url:'/ridersignup',
                method: 'POST',
                body: dt,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        signin: builder.mutation({
            query: (ab) => ({
                url:'/ridersignin',
                method: 'POST',
                body: ab,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        changePassword: builder.mutation({
            query: (body) => ({
                url:'/changepassword',
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        createRide: builder.mutation({
            query: (args) => ({
                method: 'POST',
                url: 'availableallrides',
                body: args,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),

    })
})

export const {
    useSigninMutation,
    useSignupMutation,
    useCreateRideMutation,
 
} = RiderApi