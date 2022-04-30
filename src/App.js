import React from "react";

function App() {
  const [input, setInput] = React.useState("");
  let mock = input.split("");
  mock = mock.map((char, i) =>
    i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
  );

  mock = mock.join("");

  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>{mock}</p>
      <button
        onClick={() => {
          navigator.clipboard.writeText(mock);
          alert("text copied");
        }}
      >
        Copy
      </button>
      <button
        onClick={() => {
          setInput("");
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
