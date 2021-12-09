import "./index.css";
import ReactDOM  from "react-dom";
import { App } from "./components";


//Initialize the app with 7 columns and 6 rows
ReactDOM.render(
  <App columns={7} rows={6} />,
  document.getElementById("root")
);