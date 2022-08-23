import { GET_DASHBOARD_ERROR, GET_DASHBOARD_START, GET_DASHBOARD_BY_ID_START, GET_DASHBOARD_SUCCESS, GET_DASHBOARD_BY_ID_ERROR, GET_DASHBOARD_BY_ID_SUCCESS } from "../action/dashboard.ts";

/* Global state for dashboard */
const initialState = {
    isLoading: false,
    dashboards: [],
    dashboard: {},
    dashBoardErr: {}
}

/*Handle dashboard reducer */
const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DASHBOARD_START:
        case GET_DASHBOARD_BY_ID_START:

            return {
                ...state,
                isLoading: false
            };

        case GET_DASHBOARD_SUCCESS:
            return {
                ...state,
                isLoading: true,
                dashboards: action.dashboards
            };

        case GET_DASHBOARD_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: true,
                dashboard: action.dashboard
            };


        case GET_DASHBOARD_ERROR:
        case GET_DASHBOARD_BY_ID_ERROR:
            return {
                ...state,
                isLoading: false,
                dashBoardErr: action.dashboardError
            };
        default:
            return state;
    }
}

export default dashboardReducer