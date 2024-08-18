import { useState } from "react";
import Model from "./Component/Model";
import SecondTask from "./Component/SecondTask";

function App() {
  const [showModel, setShowModel] = useState(false);
  const onClose = () => {
    setShowModel(false);
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center my-16">
        <h1 className="text-3xl font-bold mb-8">
          Task 1 Set B By{" "}
          <span className="text-green-400"> Sagar Kumar Sah Kanu</span>
        </h1>
        <button
          onClick={() => setShowModel(true)}
          className="text-3xl font-bold  shadow-2xl p-4 rounded-md bg-green-500 "
        >
          Open The Modal
        </button>
        {showModel && <Model onClose={onClose} />}
        <SecondTask />
      </div>
    </>
  );
}

export default App;
