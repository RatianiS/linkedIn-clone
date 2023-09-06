import { Navigate } from "react-router-dom";
import { readLocalStorage } from "../helpers/helpers";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const userId = localStorage.getItem("id");

    if (userId === null) {
        return <Navigate to={"/signin"} />;
    }

    const users = readLocalStorage("users");
    const user = users.find((user) => user.id === parseInt(userId));

    if (!user) {
        <Navigate to={"/signin"} />;
    }

    const onSignout = () => {
        localStorage.removeItem("id");

        navigate("/signin");
    };

    return <div>{props.children}</div>;
};

export default ProtectedRoute;
