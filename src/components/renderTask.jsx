import React, { useState, useEffect } from "react";
import { readLocalStorage } from "../helpers/helpers";
import "./renderTask.css";

const RenderTask = () => {
    const [likedPosts, setLikedPosts] = useState(() => {
        const likedPostsFromStorage = JSON.parse(localStorage.getItem("likedPosts")) || [];
        return likedPostsFromStorage;
    });

    const tasks = readLocalStorage("tasks");

    const toggleLike = (postId) => {
        setLikedPosts((prevLikedPosts) => {
            if (prevLikedPosts.includes(postId)) {
                const updatedLikedPosts = prevLikedPosts.filter((id) => id !== postId);
                updateLikeCount(postId, -1);
                return updatedLikedPosts;
            } else {
                const updatedLikedPosts = [...prevLikedPosts, postId];
                updateLikeCount(postId, 1);
                return updatedLikedPosts;
            }
        });
    };

    const updateLikeCount = (postId, increment) => {
        const updatedTasks = tasks.map((task) => {
            if (task.postid === postId) {
                return {
                    ...task,
                    like: task.like + increment,
                };
            }
            return task;
        });

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
        console.log("likedPosts:", likedPosts);
    }, [likedPosts]);

    const tasklist = tasks.map((task) => {
        const isLiked = likedPosts.includes(task.postid);

        return (
            <div key={task.postid} className="task">
                <header className="tasklist-header">
                    <div className="tasklist-profile">
                        <p style={{ fontWeight: "700" }}>{task.username}</p>
                        <p style={{ fontWeight: "700" }}>{task.usersurname}</p>
                    </div>
                    <p style={{ fontSize: "12px" }}>{task.date}</p>
                </header>

                <div>
                    <p style={{ fontSize: "20px" }} className="text">
                        {task.text}
                    </p>
                </div>

                <div className="like-comment">
                    <p> like: {task.like}</p>
                    <p>for comments</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <button className="modal-buttons" onClick={() => toggleLike(task.postid)}>
                        <img
                            className="modal-img"
                            src={
                                "https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png"
                            }
                            alt=""
                        />{" "}
                        {isLiked ? <p>Unlike</p> : <p>Like</p>}
                    </button>

                    <button className="modal-buttons">
                        <img
                            className="modal-img"
                            src="https://static.vecteezy.com/system/resources/previews/014/396/446/original/comic-style-comment-icon-with-transparent-background-file-png.png"
                            alt=""
                        />
                        Comment
                    </button>

                    <button className="modal-buttons">
                        <img
                            className="modal-img"
                            src="https://static.thenounproject.com/png/3566328-200.png"
                            alt=""
                        />
                        Repost
                    </button>

                    <button className="modal-buttons">
                        <img
                            className="modal-img"
                            src="https://icons.veryicon.com/png/o/internet--web/iview-3-x-icons/ios-send.png"
                            alt=""
                        />
                        Send
                    </button>
                </div>
            </div>
        );
    });

    return <div>{tasklist}</div>;
};

export default RenderTask;
