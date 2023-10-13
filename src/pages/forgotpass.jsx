import "./forgotpass.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <header className="forgot-pass-header">
                <img
                    style={{ width: "110px", height: "28px" }}
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
                    alt=""
                />

                <div>
                    <button
                        style={{ height: "32px" }}
                        className="forgetpass-buttons"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/signup");
                        }}
                    >
                        Join now
                    </button>
                    <button
                        style={{ height: "32px" }}
                        className="sign-in-button"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/signin");
                        }}
                    >
                        Sign in
                    </button>
                </div>
            </header>

            <form className="forgot-pass-form">
                <h2>Forgot password?</h2>
                <p>Reset password in two quick steps</p>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <input style={{ width: "350px" }} type="email" placeholder="Email" />
                    <button className="join-button">Reset password</button>
                    <button
                        className="forgetpass-buttons"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/signin");
                        }}
                    >
                        Back
                    </button>
                </div>
            </form>

            <footer className="footer-forgetpass" style={{ backgroundColor: "transparent" }}>
                <a className="signup-a-tag" href="">
                    About
                </a>
                <a className="signup-a-tag" href="">
                    Accessibility
                </a>
                <a className="signup-a-tag" href="">
                    User Agreement
                </a>
                <a className="signup-a-tag" href="">
                    Privacy Policy
                </a>
                <a className="signup-a-tag" href="">
                    Cookie Policy
                </a>
                <a className="signup-a-tag" href="">
                    Copyright Policy
                </a>
                <a className="signup-a-tag" href="">
                    Brand Policy
                </a>
                <a className="signup-a-tag" href="">
                    Guest Controls
                </a>
                <a className="signup-a-tag" href="">
                    Community Guidelines
                </a>
            </footer>
        </div>
    );
};

export default ForgotPassword;
