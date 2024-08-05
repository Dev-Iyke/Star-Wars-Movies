import { Outlet, useNavigate } from "react-router-dom";

const AccessibleRoute = ({allow, redirect, children}) => {
    const navigate = useNavigate()
    if (!allow){
        return navigate(redirect)
    }
    return ( 
        children ? <div>{children}</div> : <Outlet />
     );
}
 
export default AccessibleRoute;