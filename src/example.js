import CircleCountDown from "./src/CircleCountDown";
import { useRef } from "react";

function App() {
  const countDownRef = useRef();
  const start = () => {
    countDownRef.current.startTimer();
  };
  const stop = () => {
    countDownRef.current.stopTimer();
  };
  const resume = () => {
    countDownRef.current.resumeTimer();
  };
  const reset = () => {
    countDownRef.current.resetTimer();
  };
  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>stop</button>
      <button onClick={resume}>resume</button>
      <button onClick={reset}>reset</button>
      <CircleCountDown
        ref={countDownRef}
        size={150}
        strokeBgColor="#4d4d4d"
        strokeWidth={10}
        strokeColor="red"
        seconds={30}
        prefixTime={"s"}
      />
    </div>
  );
}

export default App;
