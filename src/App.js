import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/tickets" element={<TicketPage/>} />
          <Route path="/tickets/:id" element={<TicketPage edit={true} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
