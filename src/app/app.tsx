import { useState } from "react";

import { CampingNavbar } from "@/widgets/navbar/ui";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full absolute top-0 left-0 z-50">
        <CampingNavbar />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
