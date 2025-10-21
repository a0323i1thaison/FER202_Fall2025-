import React, { useReducer } from "react";

function toggleReducer(state) {
  return !state;
}

export default function ToggleSwitch() {
  const [isOn, dispatch] = useReducer(toggleReducer, false);

  return (
    <div className="container text-center mt-5">
      <div className="card shadow-lg rounded-4 p-5 border-0 bg-light">
        <h2 className="mb-4 text-primary">Exercise 2: Toggle Switch</h2>

        <button
          className={`btn ${
            isOn ? "btn-success" : "btn-secondary"
          } px-5 py-3 fs-5 rounded-4 shadow-sm`}
          onClick={() => dispatch()}
        >
          {isOn ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}
