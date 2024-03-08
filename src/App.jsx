import { useState } from "react";
import "./App.css";
import Flow from "./components/Flow";
import Sidebar from "./components/Sidebar";
import { MdMenu } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isHamburgerClick, setIsHamburgerClick] = useState(false);

  function handleHamburgerClick() {
    setIsHamburgerClick(true);
    setIsSidebarOpen(true);
  }
  const { data } = useGlobalContext();
  console.log(data);
  return (
    <div className="flex items-start justify-center w-full h-full">
      {isSidebarOpen ? (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isHamburgerClick={isHamburgerClick}
        />
      ) : (
        <MdMenu
          className="text-3xl w-72 cursor-pointer "
          onClick={handleHamburgerClick}
        />
      )}
      <Flow />
    </div>
  );
}

export default App;
