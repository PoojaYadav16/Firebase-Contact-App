import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";


const Modal = ({onClose,isOpen,children}) => {

  return createPortal(
     <>
     {isOpen && (
     <div 
     
     className="grid place-items-center absolute top-0 z-40 h-screen backdrop-blur w-screen">
     <div className=" relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4">
    
    <div className="flex justify-end">
        <AiOutlineClose onClick={onClose} className="self-end text-2xl"/>
    </div>
    {children}
    </div>

   

     </div>
   ) }
    </>
    ,document.getElementById("modal-root"));
  
};

export default Modal