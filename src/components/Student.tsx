import React, { useState } from "react";

import { StudentList } from "./StudentList";
import { db } from "../db/db";

const Student = () => {
  const defaultAge = 21;
  const [name, setName] = useState("");
  const [age, setAge] = useState(defaultAge);
  const [status, setStatus] = useState("");

  async function addStudent() {
    var id;
    try {
      if (name && age) {
        id = await db.students.add({
          name,
          age,
        });
      } else {
        alert(" provide name and age field of student ");
      }
      setStatus(`Student ${name} successfully added. Got id ${id}`);
      setName("");
      setAge(defaultAge);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  return (
    <React.Fragment>
      <h1> Add stduent </h1>
      <p>{status}</p>
      Name:
      <input
        type="text"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      Age:
      <input
        type="number"
        value={age}
        onChange={(ev) => setAge(Number(ev.target.value))}
      />
      <button onClick={addStudent}>Add</button>
      <div className="">
        <h1>Student listing </h1>
        <div className="">
          <StudentList />
        </div>
      </div>
    </React.Fragment>
  );
};

export { Student };
