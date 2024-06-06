import { Student, db } from "../db/db";

import { useLiveQuery } from "dexie-react-hooks";

const StudentList = () => {
  const students = useLiveQuery(() => db.students.toArray());

  const updateStudent = async (data: Student) => {
    const { id } = data;
    await db.students.put({ id, name: "your name 😂😂", age: 20 });
    alert("updated your database with static data ");
  };

  const clearAll = () => {
    db.delete()
      .then(() => {
        alert(" database deleted ");
      })
      .catch((err) => {
        console.error("Could not delete database", err);
        alert("Could not delete database");
      })
      .finally(() => {
        // Do what should be done next...
      });
  };
  return (
    <ul>
      <button disabled={students?.length === 0} onClick={clearAll}>
        Delete data base{" "}
      </button>
      {students?.map((student) => (
        <li key={student.id}>
          {student.name} {student.age}
          <button className="" onClick={() => updateStudent(student)}>
            Edit {student.id}
          </button>
        </li>
      ))}
    </ul>
  );
};

export { StudentList };
