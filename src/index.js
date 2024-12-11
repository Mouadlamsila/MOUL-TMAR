import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { MolTmar } from "./Redux/Store";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Provider store={MolTmar}>
            <App/>
        </Provider>
    </div>
    
)