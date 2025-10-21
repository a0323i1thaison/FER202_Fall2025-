// EX6_QuizApp.jsx
import React, { useReducer, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const questions = [
  {
    question: "React là thư viện của ngôn ngữ nào?",
    options: ["Python", "C#", "JavaScript", "Java"],
    correct: 2,
  },
  {
    question: "Hook nào dùng để quản lý state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correct: 1,
  },
  {
    question: "React được phát triển bởi ai?",
    options: ["Microsoft", "Facebook", "Google", "Amazon"],
    correct: 1,
  },
];

const initialState = {
  index: 0,
  score: 0,
  selected: null,
  showResult: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT":
      return { ...state, selected: action.payload };
    case "NEXT":
      return {
        ...state,
        index: state.index + 1,
        selected: null,
        showResult: state.index + 1 === questions.length,
      };
    case "RESTART":
      return initialState;
    case "ANSWER":
      return {
        ...state,
        score: state.score + (action.payload ? 1 : 0),
      };
    default:
      return state;
  }
}

export default function QuizApp() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [timeLeft, setTimeLeft] = useState(10);

  const currentQ = questions[state.index];

  useEffect(() => {
    if (timeLeft === 0) {
      dispatch({ type: "NEXT" });
      setTimeLeft(10);
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, state.index]);

  const handleAnswer = (index) => {
    dispatch({ type: "SELECT", payload: index });
    dispatch({ type: "ANSWER", payload: index === currentQ.correct });
  };

  if (state.showResult) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card text-center shadow-lg p-4" style={{ borderRadius: "15px", width: "400px" }}>
          <h3 className="text-success">🎯 Kết quả của bạn</h3>
          <h5 className="mt-3">
            Điểm: <strong>{state.score}</strong> / {questions.length}
          </h5>
          <button
            className="btn btn-primary mt-4 rounded-3"
            onClick={() => {
              dispatch({ type: "RESTART" });
              setTimeLeft(10);
            }}
          >
            Làm lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "500px", borderRadius: "20px" }}>
        <h4 className="text-center mb-3 text-primary">🧠 Câu hỏi {state.index + 1} / {questions.length}</h4>
        <div className="text-center mb-2">
          <span className={`badge ${timeLeft <= 5 ? "bg-danger" : "bg-secondary"} fs-6`}>
            ⏰ {timeLeft}s
          </span>
        </div>

        <h5 className="mb-4">{currentQ.question}</h5>
        <div className="d-grid gap-2">
          {currentQ.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className={`btn rounded-3 py-2 ${
                state.selected === idx
                  ? idx === currentQ.correct
                    ? "btn-success"
                    : "btn-danger"
                  : "btn-outline-primary"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            className="btn btn-primary rounded-3 px-4"
            disabled={state.selected === null}
            onClick={() => {
              dispatch({ type: "NEXT" });
              setTimeLeft(10);
            }}
          >
            Câu tiếp theo →
          </button>
        </div>
      </div>
    </div>
  );
}
