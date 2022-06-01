import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
//components imports
import Header from "./components/Header";
import Add from "./components/Add";
import Form from "./components/Form";
import StaffList from "./components/StaffList";

function App() {
  const initialState = [
    { name: "Mohammed", job: "Instructor" },
    { name: "Chris", job: "Instructor" },
    { name: "Jessica", job: "Instructor" },
  ];

  const [staffs, setStaffs] = useState(initialState);
  //Add new staff
  function handleAddNewStaff(staff) {
    setStaffs((prevState) => {
      return [{ name: staff.name, job: staff.job }, ...prevState];
    });
  }
  return (
    <div className="app">
      <Header />
      <StaffList staffList={staffs} />
      <Add />
      <Form addNewStaff={handleAddNewStaff} />
    </div>
  );
}

export default App;
