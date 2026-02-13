import { useState } from "react";
import { valentineColors } from "../constants/colors";
import createGrievance from "../hooks/createGrievance";

export default function ValentineModal() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");


  return (
    <>
      <button
        style={{backgroundColor: valentineColors["pastelRed"]}}
        className="px-4 py-2 border border-pink-500 rounded hover:bg-pink-100"
        onClick={() => setOpen(true)}
      >
        POST NEW NOTE!
      </button>

      {open && (
        <div className="flex fixed inset-0 z-50 items-center justify-center">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30" 
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="flex flex-col bg-white p-6 rounded shadow-lg max-w-sm mx-auto z-10 relative">
            <h2 className="text-lg font-bold">Complain about me fat</h2>
            
            <input onChange={(e) => {setText(e.target.value)}} placeholder="emaan thinks jam is fat..." className="min-w-30 min-h-30 border-gray-600">
            
            </input>

            <button
                disabled={text === ""}
                className="mt-4 border border-red-400 px-3 py-1 rounded hover:bg-red-50"
                onClick={(e) => {
                    createGrievance(text).then(res => {
                        window.location.reload(); 
                    });
                              
                    }}
            >
              Post!
            </button>

            <button
            style={{backgroundColor: valentineColors["pastelRed"]}}
              className="mt-4 border border-red-400 px-3 py-1 rounded hover:bg-red-50"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}