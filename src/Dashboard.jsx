import * as React from 'react';
import { useLocation } from 'react-router-dom';

  function Dashboard() {
    const location = useLocation();
    const connectionUrl = location.state?.url;

    return (
      <div>
        <h1>Dashboard</h1>
        <p>Connection URL: {connectionUrl}</p>
      </div>
    );
  }

  export default Dashboard;