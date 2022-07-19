import { useContext } from "react";
import { MyContext } from "./App";

export default function Comp2() {
  const data = useContext(MyContext);
  return data;
}
