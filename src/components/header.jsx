import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const onSignout = () => {
        localStorage.removeItem("id");

        navigate("/signin");
    };
    return (
        <header className="header">
            <div className="logoandsearch">
                <img
                    onClick={() => {
                        window.location.reload();
                    }}
                    className="linkedinlogo"
                    src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png"
                    alt="logo"
                />

                <input className="searchinput" type="text" placeholder="search" />
            </div>

            <nav className="headernav">
                <div className="logodivs" style={{ borderBottom: "2px solid black" }}>
                    <img
                        className="logo"
                        src="https://img.icons8.com/?size=512&id=2797&format=png"
                        alt="home"
                    />
                    <p className="logotext">Home</p>
                </div>

                <div className="logodivs">
                    <img
                        className="logo"
                        src="https://cdn-icons-png.flaticon.com/512/2118/2118701.png"
                        alt="network"
                    />
                    <p className="logotext">Network</p>
                </div>

                <div className="logodivs">
                    <img
                        className="logo"
                        src="https://img.icons8.com/?size=512&id=l9Bm3496jiWO&format=png"
                        alt="jobs"
                    />
                    <p className="logotext">Jobs</p>
                </div>

                <div className="logodivs">
                    <img
                        className="logo"
                        src="https://img.icons8.com/?size=512&id=37966&format=png"
                        alt="message"
                    />
                    <p className="logotext">Messaging</p>
                </div>

                <div className="logodivs">
                    <img
                        className="logo"
                        src="https://img.icons8.com/?size=512&id=11668&format=png"
                        alt="notification"
                    />
                    <p className="logotext">notification</p>
                </div>

                <div className="logodivs">
                    <img
                        className="logo"
                        src="https://img.icons8.com/?size=512&id=7819&format=png"
                        alt="me"
                    />
                    <p className="logotext">Me</p>
                </div>

                <div className="logodivs">
                    <img
                        className="logo"
                        src="https://img.icons8.com/?size=512&id=GhW7E6TRTWHw&format=png"
                        alt="for business"
                    />
                    <p className="logotext">For Business</p>
                </div>

                <button className="logout" onClick={onSignout}>
                    <img
                        style={{ width: "20px" }}
                        src="https://icons.veryicon.com/png/o/internet--web/website-icons/logout-8.png"
                        alt=""
                    />
                </button>
            </nav>
        </header>
    );
};

export default Header;
