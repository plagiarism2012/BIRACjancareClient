import * as React from 'react';
import { useLocation } from 'react-router-dom';

  function Dashboard() {
    const location = useLocation();
    const connectionUrl = location.state?.connectionUrl;
    const hospital_name = location.state?.name;

    return (
      <div>
        <h1>Dashboard</h1>
        <p>Hospital : {hospital_name} </p>
        <p>Connection URL: {connectionUrl}</p>
      </div>
    );
  }

  export default Dashboard;