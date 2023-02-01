import { Route, Routes } from "react-router-dom";
import ButtonAppBar from './components/Header';
import Hehe from "./feature";
import About1 from "./feature/components/About/About1";
import AddList1 from "./feature/components/AddStudents/AddList1";
import Update1 from "./feature/components/Update/Update1";



function App() {

  return (
    <div >
      <ButtonAppBar />
      <p></p>
      <Routes>
        <Route path="/" element={<Hehe />} />
        <Route path="/add" element={<AddList1 />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/update" element={<Update1 />} />
      </Routes> 


    </div>
  );
}

export default App;
