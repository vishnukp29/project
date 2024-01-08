import Card from "./Components/Cards/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Card/>} />
      </Routes>
    </Router>
    <ToastContainer toastClassName=" relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer" />
    </>
  );
}

export default App;
