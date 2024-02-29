import { useEffect, useState } from "react";
import getAll from "../../../services/getAll";
import Department from "../../../models/Department";

const DepartmentField = () => {
  const [department, setDepartment] = useState<string>("");
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const getDepartments = async () => {
      const data = await getAll("departments");
      setDepartments(data);
    };
    getDepartments();
  });

  const departmentOptions = departments.map((department: Department) => {
    return (
      <option key={department.id} value={department.id}>
        {department.name}
      </option>
    );
  });

  return (
    <label>
      Department:{" "}
      <select
        value={department}
        onChange={(e) => {
          setDepartment(e.target.value);
        }}
      >
        {departmentOptions}
      </select>
    </label>
  );
};

export default DepartmentField;