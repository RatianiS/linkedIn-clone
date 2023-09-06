import "./welcomeuser.css";
import React, { useState } from "react";
import { readLocalStorage } from "../helpers/helpers";

const WelcomeUser = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const users = readLocalStorage("users");
    const currentId = readLocalStorage("id");

    const currentUser = users.filter((user) => {
        return user.id === currentId;
    });

    const username = currentUser.map((user) => {
        return user.name;
    });

    return (
        <div>
            <div className="maindiv">
                <div className="profileimg">
                    <img className="img" src={file} />
                    <h3 style={{ fontSize: "16px" }}>Welcome {username}</h3>
                    <label className="custom-file-input">
                        <span>Add a photo</span>
                        <input
                            type="file"
                            onChange={handleChange}
                            accept="image/*"
                            capture="environment"
                        />
                    </label>
                </div>

                <div style={{ borderBottom: "1px gray solid", padding: "15px 5px", cursor: "pointer" }}>
                    <p style={{ color: "gray", fontSize: "14px" }}>Connections</p>
                    <p>Grow your network</p>
                </div>

                <div style={{ borderBottom: "1px gray solid", padding: "15px 5px", cursor: "pointer" }}>
                    <p style={{ color: "gray", fontSize: "13px" }}>Access exclusive tools & insights</p>
                    <a style={{ color: "black", fontSize: "15px" }} href="">
                        Learn New Skills, Try Premium Free
                    </a>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 5px",
                        cursor: "pointer",
                    }}
                >
                    <img
                        style={{ width: "20px" }}
                        src="https://img.icons8.com/?size=512&id=59740&format=png"
                        alt=""
                    />
                    <h4 style={{ fontSize: "13px", marginLeft: "5px" }}>My items</h4>
                </div>
            </div>

            <div className="divforatagandbutton">
                <div className="divforatag">
                    <a className="a" href="">
                        Groups
                    </a>
                    <a className="a" href="">
                        Events
                    </a>
                    <a className="a" href="">
                        Followed Hashtags
                    </a>
                </div>
                <button className="dicoverbutton">Discover more</button>
            </div>
        </div>
    );
};

export default WelcomeUser;
