import { useState } from "react";
import Button from "react-bootstrap/Button";
function Form(props) {
  const { addNewStaff } = props;
  //State
  //since input has its own state we need to control that and assign it a state
  //so we keep track of the current value inside the input boxes
  const [jobInput, setJobInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  //onChange for inputs
  function handleOnChangeJobInput(e) {
    setJobInput(e.target.value);
  }
  function handleOnChangeNameInput(e) {
    setNameInput(e.target.value);
  }
  //submit for form
  function handleSubmit(e) {
    e.preventDefault();
    if (nameInput === "" || jobInput === "") {
      return;
    } else {
      //since we have both the values in state we will use that.
      addNewStaff({ name: nameInput, job: jobInput });
      setJobInput("");
      setNameInput("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h5 className="h5-heading">Name</h5>
      <input
        onChange={handleOnChangeNameInput}
        type="text"
        value={nameInput}
        className="form-control"
      />
      <h5 className="h5-heading">Job</h5>
      <input
        onChange={handleOnChangeJobInput}
        type="text"
        value={jobInput}
        className="form-control"
      />
      <Button className="submit-button" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Form;
