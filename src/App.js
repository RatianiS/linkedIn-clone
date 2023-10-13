import Header from "./components/header";
import WelcomeUser from "./components/welcomeuser";
import AddTask from "./components/addTask";
import Description from "./components/description";
import RenderTask from "./components/renderTask";
import { useState, useEffect } from "react";

function App() {
    const [showDescription, setShowDescription] = useState(true);
    const [showWelcomeUser, setShowWelcomeUser] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1160) {
                setShowDescription(false);
            } else {
                setShowDescription(true);
            }

            if (window.innerWidth < 840) {
                setShowWelcomeUser(false);
            } else {
                setShowWelcomeUser(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <Header />
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "50px" }}>
                {showWelcomeUser && <WelcomeUser />}
                <div>
                    <AddTask />
                    <RenderTask />
                </div>
                {showDescription && <Description />}
            </div>
        </div>
    );
}

export default App;
