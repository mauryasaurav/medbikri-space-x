import { axiosRequest } from "./helper.ts"

/* GET ALL DASHBOARD API */
export const getDashboardApi = () => {
    return axiosRequest(`GET`, `launchpads`)
}

/* GET ALL DASHBOARD API */
export const getDashboardByIdApi = (id: string) => {
    return axiosRequest(`GET`, `launchpads/${id}`)
}