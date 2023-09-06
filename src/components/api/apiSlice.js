import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { authAction } from "../store/auth"

const baseQuery = fetchBaseQuery({
    baseUrl: "",
    credentials: 'include',
    prepareHeaders: (header, { getState }) => {
        const token = getState().auth.token
        if (token) {
            header.set("authorization", `Bearer ${token}`)
        }

        return header
    }


})

const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')

        const refreshResult = await baseQuery('/refresh', api.extraOptions)
        console.log(refreshResult)

        if (refreshResult?.data) {
            const user = api.getState().auth.user

            api.dispatch(authAction.setCredentials({ ...refreshResult.data, user }))

            result = await baseQuery(args, api, extraOptions)
        }
    } else {
        api.dispatch(authAction.logOut())
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: builder => ({

    })
})