export const DASHBOARD_LOAD_ATTEMPED = 'DASHBOARD_LOAD_ATTEMPED';
export const DASHBOARD_LOAD_SUCCESSFUL = 'DASHBOARD_LOAD_SUCCESSFUL';
export const DASHBOARD_LOAD_FAILED = 'DASHBOARD_LOAD_FAILED';

export const attemptLoadDashboard = payload => {
  return {
    type: DASHBOARD_LOAD_ATTEMPED, payload
  };
};

export const dashboardLoadSuccess = payload => {
  return {
      type: DASHBOARD_LOAD_SUCCESSFUL,
      payload
  }
};
