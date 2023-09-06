import "./signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { readLocalStorage } from "../helpers/helpers";
// linkedIn

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onRegister = (e) => {
        e.preventDefault();
        const users = readLocalStorage("users");

        let currentuser = users.length;

        const newUser = {
            id: currentuser,
            name: name,
            surname: surname,
            email: email,
            password: password,
        };

        currentuser++;

        if (password.length < 6) {
            alert("პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს");
            return;
        }

        const emailExists = users.find((user) => user.email === newUser.email);
        if (emailExists) {
            setError("იმეილი დაკავებულია!");
            return;
        }

        const updated = users.concat([newUser]);
        localStorage.setItem("users", JSON.stringify(updated));
        localStorage.setItem("id", newUser.id);
        navigate("/");
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            {error && <div>{error}</div>}
            <header>
                <img
                    className="signup-linkedin-logo"
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
                    alt=""
                />
            </header>

            <div className="signup-bcg">
                <p className="signup-head-p">make the most of your professional life</p>

                <form onSubmit={onRegister} className="signup-form">
                    <label>
                        Name
                        <input
                            className="signup-input"
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            required
                        />
                    </label>

                    <label>
                        Surname
                        <input
                            className="signup-input"
                            type="text"
                            value={surname}
                            onChange={(e) => {
                                setSurname(e.target.value);
                            }}
                            required
                        />
                    </label>

                    <label>
                        Email
                        <input
                            className="signup-input"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        />
                    </label>

                    <label>
                        Password (6+ characters)
                        <input
                            className="signup-input"
                            type="text"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        />
                    </label>

                    <p className="signup-form-p">
                        By clicking Agree & Join, you agree to the LinkedIns{" "}
                        <span style={{ cursor: "pointer" }}>User</span>
                        <br />
                        <span style={{ marginLeft: "20px", color: "black" }}>
                            <span style={{ cursor: "pointer" }}> Agreement, Privacy Policy</span> and
                            <span style={{ cursor: "pointer" }}> Cookie Policy</span> .
                        </span>
                    </p>

                    <button className="join-button" onClick={onRegister}>
                        Agree & join
                    </button>

                    <p>
                        Already on linkedIn?{" "}
                        <button
                            className="go-to-signin"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/signin");
                            }}
                        >
                            Sign in
                        </button>
                    </p>
                </form>
            </div>

            <footer>
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

export default Signup;
