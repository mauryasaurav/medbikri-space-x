import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dashboardAction } from '../../action/dashboard.ts';
import Cards from '../common/ Card/Cards.tsx';
import { DashboardModel } from '../../models/dashboards'

import './index.scss';

const Dashboard = () => {
    const dispatch = useDispatch(); /* for dispatch action */
    const dashboard = useSelector((state: DashboardModel) => state.dashboard); /* Global state */
    const { dashboards, isLoading } = dashboard

    useEffect(() => {
        dispatch(dashboardAction())
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <h2 className="header">SpaceX Launch Programs</h2>
            <div className="holder2">
                <Cards
                    dashboards={dashboards}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}

export default Dashboard;
