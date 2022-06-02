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
    { id: 1, name: "Mohammed", job: "Instructor" },
    { id: 2, name: "Chris", job: "Instructor" },
    { id: 3, name: "Jessica", job: "Instructor" },
  ];

  const [staffs, setStaffs] = useState(initialState);
  const randomId = +(Math.random() * 100).toFixed(4);
  //Add new staff
  function handleAddNewStaff(staff) {
    setStaffs((prevState) => {
      return [{ name: staff.name, job: staff.job, id: randomId }, ...prevState];
    });
  }
  //Remove existing staff
  function handleRemoveStaff(staffId) {
    setStaffs((prevState) => {
      return prevState.filter((staff) => staff.id !== staffId);
    });
  }
  return (
    <div className="app">
      <Header />
      <StaffList staffList={staffs} removeStaff={handleRemoveStaff} />
      <Add />
      <Form addNewStaff={handleAddNewStaff} />
    </div>
  );
}

export default App;
