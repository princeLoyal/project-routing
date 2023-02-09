import { Outlet, useNavigation } from "react-router-dom";
import Navigation from "./MainNavigation";

const RootLayout = () => {
    // const navigate  = useNavigation();
    return (
         <>
           {/* {navigate.state === 'loading' && <p>{navigate.state}</p>} */}
           <Navigation />
           <Outlet />
        </>
    );
};

export default RootLayout;