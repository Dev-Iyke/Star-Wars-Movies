import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AccessibleRoute = ({allow, redirect, children}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!allow) {
            navigate(redirect);
        }
    }, [allow, navigate, redirect]);

    if (!allow) {
        // Render nothing while redirecting
        return null;
    }

    return children ? <div>{children}</div> : <Outlet />;
}
 
export default AccessibleRoute;