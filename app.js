import React from "react"
import { createRoot } from "react-dom/client";
import Body from "./src/Component/Body";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const App=()=>{
    return (
    <div>
        <Provider store={appStore}>
                <Body/>
       </Provider>
    </div>
)}

const root=createRoot(document.getElementById("root"))
root.render(<App/>)
