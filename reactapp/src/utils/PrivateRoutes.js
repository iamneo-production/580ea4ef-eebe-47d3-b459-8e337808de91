import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let  token = localStorage.getItem("token") == null ? false : true;
    return(
        token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes