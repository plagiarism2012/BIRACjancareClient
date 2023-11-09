import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Login from './Login';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Load from './Load';

const Home = () => {
    const nav = useNavigate();
    const [flag, setFlag] = useState(0);


    React.useEffect(() => {
        alreadyLoggedIn();
    }, []);

    const alreadyLoggedIn = async () => {
        if (localStorage.getItem('authToken')) {
            const authToken = localStorage.getItem('authToken');
            const response = await fetch('https://biracjancare-home-server.onrender.com/hospital/getHospital', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'x-auth-token': authToken }
            });
            const content = await response.json();
            if (content.success) {
                setFlag(1);
                let hospital = content.hospital;
                nav('/dashboard', { state: hospital });
            }
        }
        else {
            setFlag(2);
        }
    }


    return (
        <div>
            {flag === 2 ? <Login /> : <Load/>}            
        </div>
    )
}

export default Home;