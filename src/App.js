import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <h2 className="heading">Software Developer Staff</h2>
      <p>
        Add to the table with a name and a job title. Remove by clicking the
        delete button.
      </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Job</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mohamed</td>
            <td>Instructor</td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
          <tr>
            <td>Mohamed</td>
            <td>Instructor</td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
          <tr>
            <td>Mohamed</td>
            <td>Instructor</td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="heading">Add New</h2>
      <form>
        <h5 className="h5-heading">Name</h5>
        <input type="text" class="form-control" />
        <h5 className="h5-heading">Job</h5>
        <input type="text" class="form-control" />
        <Button className="submit-button">Submit</Button>
      </form>
    </div>
  );
}

export default App;
