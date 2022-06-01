import Button from "react-bootstrap/Button";
function Staff(props) {
  const { name, job } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{job}</td>
      <td>
        <Button>Delete</Button>
      </td>
    </tr>
  );
}

export default Staff;
