import { createContext, useState } from "react";
import "./styles.css";
import Comp1 from "./Comp1";
const MyContext = createContext();
export default function App() {
  const [mytest, setmytest] = useState("MyTest Here");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyContext.Provider value={mytest}>
        <Comp1 />
      </MyContext.Provider>
    </div>
  );
}

export { MyContext };
