import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function BirthdayCreate() {
  const [birthday, setBirthday] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "people");
    if (birthday === "") {
      await addDoc(ref, {
        firstName,
        lastName,
        age,
      });
    } else {
      await addDoc(ref, {
        firstName,
        lastName,
        birthday,
        age,
      });
    }
    setBirthday("");
    setFirstName("");
    setLastName("");
    setAge("");
  };

  return (
    <div className="flex flex-col max-w-md">
      <h4 className="text-secondary">Add Birthday</h4>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <div className="flex justify-between">
          <input
            className="w-1/2"
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
          />
          <input
            className="w-1/3"
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className="text-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
