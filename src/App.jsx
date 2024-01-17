import Player from "./components/Player";
import TimeChallange from "./components/TimeChallenge";

function App() {
    return (
        <>
            <Player />
            <div id="challenges">
                <TimeChallange title="Easy" targetTime={1} />
                <TimeChallange title="Not Easy" targetTime={5} />
                <TimeChallange title="Getting Tough" targetTime={10} />
                <TimeChallange title="Pros Only" targetTime={15} />
            </div>
        </>
    );
}

export default App;
