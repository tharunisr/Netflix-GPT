import React from "react"
import { createRoot } from "react-dom/client";
import Body from "./src/Component/Body";

const App=()=>{
    return (
    <div>
       <Body/>
    </div>
)}

const root=createRoot(document.getElementById("root"))
root.render(<App/>)
