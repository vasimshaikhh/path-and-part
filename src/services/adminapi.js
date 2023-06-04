import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const Adminapi = createApi({
    reducerPath: 'Adminapi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:7000/'
    }),
    endpoints: (builder) => ({
        riderPost: builder.mutation({
            query: (args) => ({
                method: 'POST',
                body: args,
                url: 'rider',
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        signup: builder.mutation({
            query: (dt) => ({
                url:'/signup',
                method: 'POST',
                body: dt,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        signin: builder.mutation({
            query: (ab) => ({
                url:'/adminsignin',
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
        // riderDetailById: builder.query({
        //     query: (id) => ({
        //         url:`riderdata/${id}`,
        //         method: 'GET',
        //         headers: {
        //             'Content-Type':'application/json'
        //         }
        //     })
        // }),
       
        riderDetailById: builder.query({
            query: (id) => ({
                url:`riderdata/${id}`,
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),


        updateRiderDetail: builder.mutation({
            query: ({ id, profile, name, description, vehiclename }) => {
                const body = new FormData();
                body.append('profile',profile)
                body.append('name',name)
                body.append('description',description)
                body.append('vehiclename',vehiclename)
                    return {
                        url:`update_rider/${id}`,
                        // method: 'POST',
                        method: 'PATCH',
                        body:body,
                        // headers: {
                        //     'Content-Type':'application/json'
                        // }
                    }              
            }
        }),
        uploadRiderPath: builder.mutation({
            // query: (argss) => ({               
            query: ({date, time, departure, destination}) => ({               
                url: 'trip',
                method: 'POST',
                // body: argss,
                body: JSON.stringify({date, time, departure, destination}),
                headers: { 'Content-Type': 'applicaton/json','charset' : 'utf-8' }
            })
        }),
        getUsers: builder.query({
            query: () => ({
                url:`alluser`,
                method: 'GET',
                headers: {
                    'Content-Type':'application/json','charset' : 'utf-8'
                }
            })
        }),
        getRiderData: builder.query({
            query: () => ({
                url:`riderdetails`,
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => {
                console.log(id,"Id from apu")
                return {
                    method: 'POST',
                    url: 'user_delete',
                    body: JSON.stringify({id}),
                    headers: {
                        'Content-Type':'application/json','charset' : 'utf-8'
                    }
                }              
            }
        }),
        deleteRider: builder.mutation({
            query: (id) => {
                console.log(id,"Id from apu")
                return {
                    method: 'POST',
                    url: 'rider_delete',
                    body: JSON.stringify({id}),
                    headers: {
                        'Content-Type':'application/json','charset' : 'utf-8'
                    }
                }              
            }
        }),
    })
})

export const { useRiderPostMutation,
    useSigninMutation,
    useSignupMutation,
    useChangePasswordMutation,
    useRiderDetailByIdQuery,
    // useLazyRiderDetailByIdQuery,
    useUpdateRiderDetailMutation,
    useUploadRiderPathMutation,
    useGetUsersQuery,
    useGetRiderDataQuery,
    useDeleteRiderMutation,
    useDeleteUserMutation
} = Adminapi