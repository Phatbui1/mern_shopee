import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homepage";
import { ROUTERS } from "./utils/router";

const renderUserRouter = ({ Routes, Route }) => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: HomePage,
        },
    ];
    return (
        <Routes>
            {userRouters.map((item, key) => (
                <Route key={key} path={item.path} element={<item.component />} />
            ))}
        </Routes>
    );
};

const RouterCustom = () => {
    return renderUserRouter({ Routes, Route });
};

export default RouterCustom;