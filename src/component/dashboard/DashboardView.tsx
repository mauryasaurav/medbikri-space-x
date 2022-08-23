import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { dashboardByIDAction } from "../../action/dashboard.ts";
import SimpleLoading from "../common/LoadingScreen/SimpleLoading.tsx";
import { DashboardModel } from '../../models/dashboards'

import "./index.scss";

function DashboardView() {
  const params = useParams(); // Get ID from url
  const dispatch = useDispatch(); // for dispatch action

  const dashboards = useSelector((state: DashboardModel) => state.dashboard); // Global state for dashboard

  const { dashboard, isLoading } = dashboards;

  useEffect(() => {
    dispatch(dashboardByIDAction(params.id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!isLoading && <SimpleLoading />}
      <div className="d-view-container">
        <div className="name">{dashboard.name}</div>
        <div className="details">{dashboard.details}</div>
        <div className="launchpad">{dashboard.timezone}</div>
      </div>
    </>
  );
}

export default DashboardView;
