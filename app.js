import React from "react"
import { createRoot } from "react-dom/client"
const App=()=>{
    return <div className="font-bold text-3xl text-pink-500">
        Hello This is Netflix gpt from namaste-react
    </div>
}

const root=createRoot(document.getElementById("root"))
root.render(<App/>)
