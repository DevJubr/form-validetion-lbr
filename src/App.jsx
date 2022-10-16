import React from "react";
import useFormHook from "./hook/useFormHook";
const init = {
  name: "jr",
  title: "br",
  phone: "092",
};
const App = () => {
  const val = useFormHook({ init }, true);
  console.log(val);
  return <div>App</div>;
};

export default App;
