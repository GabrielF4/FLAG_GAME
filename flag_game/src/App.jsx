import { useAppContext } from "./AppContext";
import "./App.css";
import StartPage from "./components/StartPage";
import GameComponent from "./components/GameComponent";

function App() {
    let { activeFrame, setActiveFrame } = useAppContext();

    //Render content based on the active state
    const RenderFrameContent = () => {
        switch (activeFrame) {
            case "start":
                return <StartPage />;
            case "game":
                return <GameComponent />;
            default:
                return <StartPage />;
        }
    };

    return (
        <div className="frame">
            <RenderFrameContent />
        </div>
    );
}

export default App;
