import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homepage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import profilePage from "./pages/users/profilePage";

const renderUserRouter = ({ Routes, Route }) => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: HomePage,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: profilePage,
        },
    ];
    return ( <MasterLayout>
        <Routes>
            {userRouters.map((item, key) => (
                <Route key={key} path={item.path} element={<item.component />} />
            ))}
        </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter({ Routes, Route });
};

export default RouterCustom;