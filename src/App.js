import "./App.css";
import Contacts from "./components/Contacts";
import Edit from "./components/Contacts/Edit";
import Error from "./components/Contacts/Error";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Routes>
          <Route exact path="/" element={<Contacts />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
