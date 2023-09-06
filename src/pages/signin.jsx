import "./signin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { readLocalStorage } from "../helpers/helpers";

const Signin = () => {
    const navigate = useNavigate();
    const [email, seteMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        const users = readLocalStorage("users");

        const user = users.find((user) => user.email === email);
        if (!user) {
            setError("მომხმარებელი არ მოიძებნა");
            alert(error);
            return;
        }

        const passwordValid = user.password === password;

        if (!passwordValid) {
            setError("პაროლი არასწორია ");
            alert(error);
            return;
        }

        localStorage.setItem("id", user.id);
        navigate("/");
    };

    return (
        <div className="signin-bcg" style={{ backgroundColor: "white", height: "100vh" }}>
            <header className="signin-header">
                <img
                    style={{ width: "135px", height: "35px", cursor: "pointer" }}
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
                    alt=""
                />

                <nav className="signin-nav">
                    <div className="sigin-buttons">
                        <img
                            className="header-logo"
                            src="https://cdn-icons-png.flaticon.com/512/265/265104.png"
                            alt=""
                        />
                        <p>Articles</p>
                    </div>

                    <div className="sigin-buttons">
                        <img
                            className="header-logo"
                            src="https://cdn-icons-png.flaticon.com/512/2118/2118701.png"
                            alt=""
                        />
                        <p>People</p>
                    </div>

                    <div className="sigin-buttons">
                        <img
                            className="header-logo"
                            src="https://d30y9cdsu7xlg0.cloudfront.net/png/13653-200.png"
                            alt=""
                        />
                        <p>learning</p>
                    </div>

                    <div className="sigin-buttons">
                        <img
                            className="header-logo"
                            src="https://icon-library.com/images/job-icon/job-icon-6.jpg"
                            alt=""
                        />
                        <p>Jobs</p>
                    </div>

                    <button
                        className="join-now-button"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/signup");
                        }}
                    >
                        Join now
                    </button>
                    <button className="sign-in-button">Sign in</button>
                </nav>
            </header>

            <div className="form-and-image" style={{ display: "flex" }}>
                <form className="form" onSubmit={onFormSubmit}>
                    <p className="form-p">
                        Welcome to your <br /> professional community
                    </p>

                    <label>
                        Email
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => {
                                seteMail(e.target.value);
                            }}
                        />
                    </label>

                    <label>
                        Password
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </label>
                    <button className="form-signin-button" onClick={onFormSubmit}>
                        Sign in
                    </button>

                    <button
                        className="form-signup-button"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/signup");
                        }}
                    >
                        New to LinkedIn? Join now
                    </button>

                    <div>
                        <button
                            className="forgot-password-button"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/forgot-password");
                            }}
                        >
                            Forgot password?
                        </button>
                    </div>
                </form>

                <img
                    style={{ height: "600px", marginTop: "50px", marginLeft: "30px" }}
                    src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Signin;
