# React Circle Timer
React Js countdown timer component in a circle shape with color and progress animation.

![Capture](https://github.com/RedFlagA/react-circle-timer/assets/39400184/e7cbb1af-be55-438a-956c-7e14a16f524c)

## Install

```
npm i react-circle-timer
```
or
```
yarn add react-circle-timer
```

## Usage

### Example

```jsx
import { useRef } from "react";
import ReactCircleTimer from 'react-circle-timer';

function Example() {
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
      <ReactCircleTimer
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

export default Example;
```

## Props

| Prop Name               | Type                                                                                                              | Default     | Description                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ref                | string                                                                                                            | _required_  | component reference                                                                                                                                                                 |
| size                  | number                                                                                                | 80  | Width and height of the SVG element                               |
| colorsTime              | object                                                                                                          | -           | time color|
| autoPlay               | boolean                                                                                                           | false       | auto play animation                                                                                                                                                                       |
| strokeWidth             | number                                                                                                            | 10          | Path stroke width                                                                                                                                                                             |
| strokeBgColor        | string                                                                                                            | #ccc | fixed background                                                                                                                                                                     |
| strokeColor        | string                                                                                                            | red | stroke color                                                                                                                                                                           |
| seconds           | number                                                                                           | 30       | Time time to run out of circle                                                                                                                                                                          |
| prefixTime                | string                                                                                     | -   | prefix after time                                                                                                                                                              |
| start                 | () => void                                                                                     | -   | start countdown                                                                                                                                                              |
| stop                | () => void                                                                                     | -   | stop countdown                                                                                                                                                              |
| resume                | () => void                                                                                     | -   | resume countdown                                                                                                                                                             |
| reset                | () => void                                                                                     | -   | reset countdown                                                                                                                                                             |
