// import React, { useState, useCallback } from "react";
// import Dropzone from "react-dropzone";
// import { useNavigate } from "react-router-dom";

// function bottomNav() {
//   // write a fucntion which handles uploading the file and then redirecting to the next page
//   const [preview, setPreview] = useState(null);
//   const navigate = useNavigate();

//   const onDrop = useCallback(
//     (acceptedFiles) => {
//       if (acceptedFiles.length > 0) {
//         const file = acceptedFiles[0];
//         const previewUrl = URL.createObjectURL(file);
//         setPreview(previewUrl);

//         // Workaround for immediate redirection after file upload
//         setTimeout(() => {
//           navigate("/tax", { state: { imageFile: file } });
//         }, 20); // Delay of 250ms to wait for the dialog to close
//       }
//     },
//     [navigate]
//   );
//   return (
//     <div className="grid grid-cols-1 btm-nav">
//       <button className="mt-2 text-accent active">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           x="0px"
//           y="0px"
//           width="28"
//           height="28"
//           viewBox="0,0,256,256"
//           // style="fill:#000000;"
//         >
//           <g
//             fill="#ffffff"
//             fill-rule="nonzero"
//             stroke="none"
//             stroke-width="1"
//             stroke-linecap="butt"
//             stroke-linejoin="miter"
//             stroke-miterlimit="10"
//             stroke-dasharray=""
//             stroke-dashoffset="0"
//             font-family="none"
//             font-weight="none"
//             font-size="none"
//             text-anchor="none"
//             // style="mix-blend-mode: normal"
//           >
//             <g transform="scale(5.12,5.12)">
//               <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM37,26h-11v11h-2v-11h-11v-2h11v-11h2v11h11z"></path>
//             </g>
//           </g>
//         </svg>
//       </button>
//       <Dropzone onDrop={onDrop}>
//         {({ getRootProps, getInputProps }) => (
//           <section>
//             <div {...getRootProps()}>
//               <input {...getInputProps()} />
//               <p>Calculate Taxes</p>
//             </div>
//           </section>
//         )}
//       </Dropzone>
//       {preview && (
//         <aside>
//           <h4>Selected File Preview</h4>
//           <img
//             src={preview}
//             alt="Preview"
//             style={{ width: "50%", height: "auto" }}
//           />
//         </aside>
//       )}
//     </div>
//   );
// }

// export default bottomNav;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHidden = location.pathname === "/";
  const toTax = () => {
    navigate("/tax");
  };
  const gst = () => {
    navigate("/gst");
  };
  const handleCh = () => {
    navigate("/connect");
  };
  const handleHome = () => {
    navigate("/home");
  };
  const handleChat = () => {
    navigate("/chat");
  };
  return (
    <div
      className="fixed bottom-0 z-50 w-full text-white bg-gray-800 shadow-lg rounded-t-2xl"
      hidden={isHidden}
    >
      <div className="flex justify-around py-2">
        <button
          onClick={handleCh}
          className={`flex flex-col items-center ${
            location.pathname === "/connect" ? "text-accent" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M680-80q-17 0-28.5-11.5T640-120v-50q-39-13-70-39.5T521-273q-8-15 0-30t24-22q14-6 28 1t22 21q16 29 44 46t61 17h120q25 0 42.5 17.5T880-180v60q0 17-11.5 28.5T840-80H680Zm80-200q-33 0-56.5-23.5T680-360q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360q0 33-23.5 56.5T760-280ZM120-520q-17 0-28.5-11.5T80-560v-60q0-25 17.5-42.5T140-680h120q33 0 61-17t44-46q8-14 22-22.5t29-3.5q17 5 25 19t2 28q-17 40-49 69t-74 43v50q0 17-11.5 28.5T280-520H120Zm80-200q-33 0-56.5-23.5T120-800q0-33 23.5-56.5T200-880q33 0 56.5 23.5T280-800q0 33-23.5 56.5T200-720Zm200 320q-17 0-28.5-11.5T360-440q0-134 93-227t227-93q17 0 28.5 11.5T720-720q0 17-11.5 28.5T680-680q-100 0-170 70t-70 170q0 17-11.5 28.5T400-400Zm160 0q-17 0-28.5-11.5T520-440q0-66 47-113t113-47q17 0 28.5 11.5T720-560q0 17-11.5 28.5T680-520q-33 0-56.5 23.5T600-440q0 17-11.5 28.5T560-400Z" />
          </svg>
          <p className="text-xs">CA Connect</p>
        </button>
        <button
          onClick={gst}
          className={`flex flex-col items-center ${
            location.pathname === "/gst" ? "text-accent" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M237-120q-23 0-44.5-16T164-175q-25-84-41-145.5t-25.5-108Q88-475 84-511t-4-69q0-92 64-156t156-64h200q27-36 68.5-58t91.5-22q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22t-5.5 24l91 91h47q17 0 28.5 11.5T880-620v210q0 13-7.5 23T852-372l-85 28-50 167q-8 26-29 41.5T640-120h-80q-33 0-56.5-23.5T480-200h-80q0 33-23.5 56.5T320-120h-83Zm3-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-39t7.5-37q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 41 21 140.5T240-200Zm400-320q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-160-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680H360q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600h120Zm0 102Z" />
          </svg>
          <p className="text-xs">GST Hub</p>
        </button>
        <button
          onClick={handleHome}
          className={`flex flex-col items-center ${
            location.pathname === "/home" ? "text-accent" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" />
          </svg>
          <p className="text-xs">Home</p>
        </button>
        <button
          onClick={toTax}
          className={`flex flex-col items-center ${
            location.pathname === "/tax" ? "text-accent" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M320-320v50q0 13 8.5 21.5T350-240q13 0 21.5-8.5T380-270v-50h50q13 0 21.5-8.5T460-350q0-13-8.5-21.5T430-380h-50v-50q0-13-8.5-21.5T350-460q-13 0-21.5 8.5T320-430v50h-50q-13 0-21.5 8.5T240-350q0 13 8.5 21.5T270-320h50Zm230 50h140q13 0 21.5-8.5T720-300q0-13-8.5-21.5T690-330H550q-13 0-21.5 8.5T520-300q0 13 8.5 21.5T550-270Zm0-100h140q13 0 21.5-8.5T720-400q0-13-8.5-21.5T690-430H550q-13 0-21.5 8.5T520-400q0 13 8.5 21.5T550-370Zm70-208 35 35q9 9 21 9t21-9q8-8 8.5-20.5T698-585l-36-37 35-35q9-9 9-21t-9-21q-9-9-21-9t-21 9l-35 35-35-35q-9-9-21-9t-21 9q-9 9-9 21t9 21l35 35-36 37q-8 9-8 21t9 21q9 9 21 9t21-9l35-35Zm-340-14h140q13 0 21.5-8.5T450-622q0-13-8.5-21.5T420-652H280q-13 0-21.5 8.5T250-622q0 13 8.5 21.5T280-592Zm-80 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
          </svg>
          <p className="text-xs">Tax Calculator</p>
        </button>
        <button
          onClick={handleChat}
          className={`flex flex-col items-center ${
            location.pathname === "/chat" ? "text-accent" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 -960 960 960"
            fill="currentColor"
          >
            <path d="M160-120v-200q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v200zm200-320q-83 0-141.5-58.5T160-640t58.5-141.5T360-840h240q83 0 141.5 58.5T800-640t-58.5 141.5T600-440zM240-200h480v-120H240zm120-320h240q50 0 85-35t35-85-35-85-85-35H360q-50 0-85 35t-35 85 35 85 85 35m0-80q17 0 28.5-11.5T400-640t-11.5-28.5T360-680t-28.5 11.5T320-640t11.5 28.5T360-600m240 0q17 0 28.5-11.5T640-640t-11.5-28.5T600-680t-28.5 11.5T560-640t11.5 28.5T600-600m-120-40" />
          </svg>
          <p className="text-xs">Tax AI</p>
        </button>
      </div>
    </div>
  );
}

export default BottomNav;
