import React, { useState } from "react";
import "./modal.css";
import { readLocalStorage } from "../../helpers/helpers";

const Modal = ({ isOpen, onClose }) => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const users = readLocalStorage("users");
    const currentId = readLocalStorage("id");

    const currentUser = users.filter((user) => {
        return user.id === currentId;
    });

    const username = currentUser.map((user) => {
        return user.name;
    });

    const usersurname = currentUser.map((user) => {
        return user.surname;
    });

    const userId = currentUser.map((user) => {
        return user.id;
    });

    const addPostInStorage = (e) => {
        e.preventDefault();

        const tasks = readLocalStorage("tasks");

        const newTask = {
            postid: new Date().getTime(),
            userId: userId,
            username: username[0],
            usersurname: usersurname[0],
            text: inputText,
            like: 0,
            comment: [],
            date: new Date().toLocaleString(),
            likedUsers: [],
        };

        const updatedArray = tasks.concat([newTask]);
        localStorage.setItem("tasks", JSON.stringify(updatedArray));

        setInputText("");
        onClose();
        window.location.reload();
    };

    return (
        <div className={`modal ${isOpen ? "open" : ""}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Start a Post</h2>
                    <span className="close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <div className="input-container">
                        <textarea
                            className="modal-input"
                            placeholder="What do you want to talk about"
                            value={inputText}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <button className="modal-post-button" onClick={addPostInStorage}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
