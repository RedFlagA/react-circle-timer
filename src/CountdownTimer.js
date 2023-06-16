import React, { useState, useEffect, forwardRef } from "react";

const CountdownTimer = (props, ref) => {
  const {
    size = 80,
    strokeBgColor = "#4d4d4d",
    strokeWidth = 10,
    strokeColor = "red",
    seconds = 30,
    prefixTime = "",
    autoPlay = false,
    customTextStyles = {},
  } = props;
  const [countdown, setCountdown] = useState(seconds * 1000);
  const [isPlaying, setIsPlaying] = useState(false);
  const milliseconds = seconds * 1000;
  const radius = size / 2;
  const circumference = size * Math.PI;

  const strokeDashoffset = () => {
    return circumference - (countdown / milliseconds) * circumference;
  };

  useEffect(() => {
    let interval = null;

    if (isPlaying || autoPlay) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 0 && !autoPlay) {
            clearInterval(interval);
            setIsPlaying(false);
            setCountdown(seconds * 1000);
          }
          if (prevCountdown <= 0 && autoPlay) {
            setCountdown(seconds * 1000);
          }
          return prevCountdown - 10;
        });
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, autoPlay]);

  const stopTimer = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (ref && ref.current) {
      ref.current = { startTimer, stopTimer, resumeTimer, resetTimer };
    }
  }, []);

  const startTimer = () => {
    setCountdown(seconds * 1000);
    setIsPlaying(true);
  };
  const resumeTimer = () => {
    setIsPlaying(true);
  };
  const resetTimer = () => {
    setIsPlaying(false);
    setCountdown(seconds * 1000);
  };

  const countdownSizeStyles = {
    height: size,
    width: size,
  };

  const textStyles = {
    color: strokeColor,
    fontSize: size * 0.3,
  };

  const timer = (countdown / 1000).toFixed();

  return (
    <div>
      <div
        style={{
          ...styles.countdownContainer,
          ...countdownSizeStyles,
        }}
      >
        <p style={{ ...textStyles, ...customTextStyles }}>
          {timer} {prefixTime}
        </p>
        <svg style={styles.svg}>
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke={strokeBgColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
        <svg style={styles.svg}>
          <circle
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset() || 0}
            r={radius}
            cx={radius}
            cy={radius}
            fill="none"
            strokeLinecap="round"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default forwardRef(CountdownTimer);

const styles = {
  countdownContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    margin: "auto",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: "rotateY(-180deg) rotateZ(-90deg)",
    overflow: "visible",
  },
  button: {
    fontSize: "16px",
    padding: "10px 30px",
    margin: "10px auto 30px",
    display: "block",
    backgroundColor: "#4d4d4d",
    color: "lightgray",
    border: "none",
    cursor: "pointer",
    outline: 0,
    borderRadius: "5px",
  },
};
