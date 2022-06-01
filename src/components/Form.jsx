import Button from "react-bootstrap/Button";
function Form(props) {
  return (
    <form>
      <h5 className="h5-heading">Name</h5>
      <input type="text" class="form-control" />
      <h5 className="h5-heading">Job</h5>
      <input type="text" class="form-control" />
      <Button className="submit-button">Submit</Button>
    </form>
  );
}

export default Form;
