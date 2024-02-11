import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { navigation } from "./router/navigation";
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

// css
import "./App.css";

function App() {
  return (
    <div>
    <TooltipComponent content="Setting">
    <h1 className="text-3xl text-blue-500 underline" >App</h1>

    </TooltipComponent>
    </div>
  );
}

export default App;
