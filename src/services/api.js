import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:7000/'
    }),
    endpoints: (builder) => ({
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
                url:'/login',
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
        //gumnaam
        trippost: builder.mutation({
            query: (args) => ({
                method: 'POST',
                url: 'trip',
                body: args,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        //
        availablerider: builder.query({
            query: () => ({
                method: 'GET',
                url: 'riderdata',
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        allAvailableRides: builder.query({
            query: () => ({
                method: 'GET',
                url: 'available_rides',
                headers: {
                    'Content-Type':'application/json'
                }
           }) 
        }),
        depToDesRides: builder.mutation({
            query: (args) => ({
                method: 'POST',
                url: 'deptodes',
                body: args,
                // headers: {
                //     'Content-Type':'application/json'
                // }
            })
        }),
        tripAndRidersId: builder.mutation({
            query: (trip_id) => ({
                method: 'POST',
                url: 'tripsid_rider',
                body: trip_id ,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        tripDetails: builder.mutation({
            query: ({date, time, departure, destination,u_name}) => {
                const body = new FormData()
                body.append("departure",departure)
                body.append("destination",destination)
                body.append("date",date)
                body.append("time",time)
                body.append("u_name",u_name)
                return {
                    method: 'POST',
                    url: 'tripdetails',
                    body: body,
                    // headers: {
                    //     'Content-Type':'application/json'
                    // }
                }
              
            }
        }),
    })
})

export const { useSignupMutation,
    useSigninMutation,
    useChangePasswordMutation,
    useTrippostMutation,
    useAvailableriderQuery,
    useAllAvailableRidesQuery,
    useDepToDesRidesMutation,
    useTripAndRidersIdMutation,
    useTripDetailsMutation
} = Api