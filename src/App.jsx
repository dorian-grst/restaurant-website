import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div className="main cursor-none">
      <div
        className="cursor z-50"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
      <Home></Home>
    </div>
  );
}

export default App;
