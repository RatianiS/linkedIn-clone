import Header from "./components/header";
import WelcomeUser from "./components/welcomeuser";
import AddTask from "./components/addTask";
import Description from "./components/description";
import RenderTask from "./components/renderTask";

function App() {
    return (
        <div>
            <Header />
            <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
                <WelcomeUser />

                <div>
                    <AddTask />
                    <RenderTask />
                </div>

                <Description />
            </div>
        </div>
    );
}

export default App;
