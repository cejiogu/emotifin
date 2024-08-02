import React, { useState } from "react";
import "./HomePage.css";

export default function HomePage() {
  const [budgets, setBudgets] = useState({
    happiness: "",
    angry: "",
    sad: "",
    neutral: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudgets({
      ...budgets,
      [name]: value
    });
  };

  const handleSubmit = () => {
    alert(`Budgets set to: 
      Happiness: ${budgets.happiness}
      Angry: ${budgets.angry}
      Sad: ${budgets.sad}
      Neutral: ${budgets.neutral}`);
  };

  return (
    <div className="setting-maximum-budget clip-contents">
      <div className="logging-page clip-contents">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/76cax2hr57t-24%3A11?alt=media&token=65a2e6ff-d117-45e0-8856-4c0e7edc0e12"
          alt="Not Found"
          className="image-6"
        />
        <div className="group-371">
          <p className="maximum-budgets">Maximum Budgets</p>
          <div className="group-999">
            <div className="group-4106">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/76cax2hr57t-28%3A282?alt=media&token=b8243957-4a99-43fe-8ddb-0150ffcc87be"
                alt="Not Found"
                className="happiness-2"
              />
              <input
                type="number"
                name="happiness"
                value={budgets.happiness}
                onChange={handleChange}
                className="input"
                placeholder="Enter an amount"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/76cax2hr57t-25%3A224?alt=media&token=1514ef5f-cd33-4c43-bbf7-a7ac4789d5d5"
                alt="Not Found"
                className="angry-2"
              />
              <input
                type="number"
                name="angry"
                value={budgets.angry}
                onChange={handleChange}
                className="input"
                placeholder="Enter an amount"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/76cax2hr57t-28%3A317?alt=media&token=346d10f7-36aa-476d-8ad9-d31a784afd37"
                alt="Not Found"
                className="sad-2"
              />
              <input
                type="number"
                name="sad"
                value={budgets.sad}
                onChange={handleChange}
                className="input"
                placeholder="Enter an amount"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/76cax2hr57t-28%3A330?alt=media&token=2478594a-b814-43cd-a62e-25ff6ad9097e"
                alt="Not Found"
                className="neutral-face-1"
              />
              <input
                type="number"
                name="neutral"
                value={budgets.neutral}
                onChange={handleChange}
                className="input"
                placeholder="Enter an amount"
              />
            </div>
          </div>
        </div>
        <div className="button clip-contents" onClick={handleSubmit}>
          <div className="state-layer">
            <p className="label-text">Set Maximum Budgets</p>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/76cax2hr57t-28%3A351?alt=media&token=58cc0e29-e065-49c1-91f0-4b257cd2d043"
          alt="Not Found"
          className="navigation-bar"
        />
      </div>
    </div>
  );
}
