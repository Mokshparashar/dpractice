import { MdDragHandle, MdMarkEmailUnread } from "react-icons/md";

import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../context/globalContext";

function Sidebar({ setIsSidebarOpen, isSidebarOpen, isHamburgerClick }) {
  let { data } = useGlobalContext();
  function handleDrag(e) {
    const item = e.target.attributes.value.value;
    console.log(item);
    data = [{ ...data, value: item }];
    console.log(data);
  }
  return (
    <div
      className={`w-72 h-full bg-gray-800 relative top-0 z-10 left-0 
       
      `}
    >
      <div className="flex items-center justify-between -mb-8 p-4">
        <h1 className="text-white  text-3xl">Actions </h1>
        <IoClose
          className="text-white text-3xl cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>

      <div
        className=" h-3/4 
      mt-20   flex-col grid grid-cols-3 gap-12 p-8 content-center -ml-9"
      >
        <div
          className="w-20 flex flex-col items-center justify-center"
          onDrag={handleDrag}
          draggable={true}
          value="email"
        >
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>

        <div className="w-20 flex flex-col items-center justify-center">
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>
        <div className="w-20 flex flex-col items-center justify-center">
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>
        <div className="w-20 flex flex-col items-center justify-center">
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>
        <div className="w-20 flex flex-col items-center justify-center">
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>
        <div className="w-20 flex flex-col items-center justify-center">
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>
        <div className="w-20 flex flex-col items-center justify-center">
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>
        <div className="w-20 flex flex-col items-center justify-center">
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>
        <div className="w-20 flex flex-col items-center justify-center">
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>
        <div className="w-20 flex flex-col items-center justify-center">
          <div className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-col">
            <MdMarkEmailUnread className="text-white text-xl  " />
          </div>
          <div className="text-xs text-white mt-2">Send Sms</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
