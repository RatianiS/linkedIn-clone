import "./addTask.css";
import { useState } from "react";
import Modal from "./modal/modal";
import { readLocalStorage } from "../helpers/helpers";

const AddTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="container">
            <div className="ImgAndButtonDiv">
                <img className="addtaskimg" src="" alt="" />
                <button className="postButton" onClick={toggleModal}>
                    Start a post
                </button>
            </div>

            <div className="Buttons">
                <div className="buttondivs">
                    <img
                        className="buttonimage"
                        src="https://img.icons8.com/?size=512&id=53386&format=png"
                        alt=""
                    />
                    <p>Photo</p>
                </div>
                <div className="buttondivs">
                    <img
                        className="buttonimage"
                        src="https://img.icons8.com/?size=512&id=37326&format=png"
                        alt=""
                    />
                    <p>Video</p>
                </div>
                <div className="buttondivs">
                    <img
                        className="buttonimage"
                        src="https://img.icons8.com/?size=512&id=WpQIVxfhhzqt&format=png"
                        alt=""
                    />
                    <p>Event</p>
                </div>
                <div className="buttondivs" style={{ width: "130px" }}>
                    <img
                        className="buttonimage"
                        src="https://icon-library.com/images/article-icon-png/article-icon-png-25.jpg"
                        alt=""
                    />
                    <p>Write article</p>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
};

export default AddTask;
