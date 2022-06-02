import Button from "react-bootstrap/Button";
function Staff(props) {
  const { name, job, id, removeStaff } = props;
  function handleClick(e) {
    const id = +e.target.closest("tr").dataset.id;
    removeStaff(id);
  }
  return (
    <tr data-id={id}>
      <td>{name}</td>
      <td>{job}</td>
      <td>
        <Button onClick={handleClick}>Delete</Button>
      </td>
    </tr>
  );
}

export default Staff;
