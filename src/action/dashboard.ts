import { getDashboardApi, getDashboardByIdApi } from '../api/dashboard.ts'

export const GET_DASHBOARD_START = "GET_DASHBOARD_START"
export const GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS"
export const GET_DASHBOARD_ERROR = "GET_DASHBOARD_ERROR"

export const GET_DASHBOARD_BY_ID_START = "GET_DASHBOARD_BY_ID_START"
export const GET_DASHBOARD_BY_ID_SUCCESS = "GET_DASHBOARD_BY_ID_SUCCESS"
export const GET_DASHBOARD_BY_ID_ERROR = "GET_DASHBOARD_BY_ID_ERROR"

/* Dashboard Action */
const getDashBoardStart = () => ({
    type: GET_DASHBOARD_START
})

const getDashboardSuccess = (dashboards) => ({
    type: GET_DASHBOARD_SUCCESS,
    dashboards
})

const getDashboardError = (dashboardError) => ({
    type: GET_DASHBOARD_ERROR,
    dashboardError
})

/* Dashboard By Id Action */
const getDashBoardByIdStart = () => ({
    type: GET_DASHBOARD_BY_ID_START
})

const getDashboardByIdSuccess = (dashboard) => ({
    type: GET_DASHBOARD_BY_ID_SUCCESS,
    dashboard
})

const getDashboardByIdError = (dashboardError) => ({
    type: GET_DASHBOARD_BY_ID_ERROR,
    dashboardError
})

/* Dashboard Action */
export const dashboardAction = () => async dispatch => {
    dispatch(getDashBoardStart());
    try {
        const resp = await getDashboardApi()
        dispatch(getDashboardSuccess(resp.data));
        return resp;
    }
    catch (error) {
        dispatch(getDashboardError(error.response))
        return false
    }
}

/* Dashboard By Id Action */
export const dashboardByIDAction = (id: string) => async dispatch => {
    dispatch(getDashBoardByIdStart());
    try {
        const resp = await getDashboardByIdApi(id)
        dispatch(getDashboardByIdSuccess(resp.data));
        return resp;
    }
    catch (error) {
        dispatch(getDashboardByIdError(error.response))
        return false
    }
}
