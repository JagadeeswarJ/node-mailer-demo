import { useState } from "react";
import Bridge from "./bridge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello</h1>
        <Bridge />
        <div>
        </div>
      </div>
    </>
  );
}

export default App;
