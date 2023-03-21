import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { useAppStore } from "./store/appStore";
function App() {
  const [backgroundColor, setBackgroundColor] = useState("#353E4D");
  const appStore = useAppStore((state) => state.color);

  useEffect(() => {
    setBackgroundColor(appStore);
  });

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${backgroundColor}`,
        transition: "background-color 1s ease",
        overflow: "hidden",
        overflowY: "hidden",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
