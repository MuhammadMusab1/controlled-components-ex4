import Staff from "./Staff";
function StaffList(props) {
  const { staffList } = props;
  const reactStaffElements = staffList.map((staff, index) => {
    return <Staff name={staff.name} job={staff.job} key={index} id={index} />;
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Job</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>{reactStaffElements}</tbody>
    </table>
  );
}

export default StaffList;
