import Button from "react-bootstrap/Button";
function Staff(props) {
  const { name, job, id } = props;
  return (
    <tr data-id={id}>
      <td>{name}</td>
      <td>{job}</td>
      <td>
        <Button>Delete</Button>
      </td>
    </tr>
  );
}

export default Staff;
