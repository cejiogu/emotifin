import React, { useState } from "react";
import "./LoggingPage.css";

export default function LoggingPage() {
  const [streakCount, setStreakCount] = useState(30);

  const handleConfirmEmotion = () => {
    setStreakCount(streakCount + 1);
  };

  return (
    <div className="logging-page">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/2560px-Capital_One_logo.svg.png"
        alt="Not Found"
        className="rectangle-3"
      />
      <div className="center-content">
        <div className="rectangle-31">
          <p className="_-30-day-logging-streak">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/787/016/non_2x/fire-icon-on-transparent-background-free-png.png"
              alt="Not Found"
              className="image-8"
            />
            {streakCount} Day Logging Streak!
          </p>
        </div>
        <p className="how-are-you-feeling-john">How are you feeling, John?</p>
        <div className="emoji-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nqlfby2ifh-28%3A380?alt=media&token=1527174b-0c78-4464-935c-5ebba5a73d81"
            alt="Not Found"
            className="angry-1"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nqlfby2ifh-31%3A103?alt=media&token=a748ef12-44a9-4155-b559-22d880366c16"
            alt="Not Found"
            className="sad-3"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nqlfby2ifh-31%3A104?alt=media&token=b269ce80-4262-4582-9498-6a818190a88f"
            alt="Not Found"
            className="neutral-face-2"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nqlfby2ifh-31%3A105?alt=media&token=253df445-eb16-4a60-b91e-166015ea794f"
            alt="Not Found"
            className="happiness-3"
          />
        </div>
        <button className="button" onClick={handleConfirmEmotion}>
          <div className="state-layer">
            <p className="label-text">Confirm Emotion</p>
          </div>
        </button>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nqlfby2ifh-28%3A406?alt=media&token=78c12bbd-f7c5-4741-9d46-f70e8305d702"
        alt="Not Found"
        className="navigation-bar"
      />
    </div>
  );
}
