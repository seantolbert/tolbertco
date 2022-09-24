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

    await addDoc(ref, {
      firstName,
      lastName,
      birthday,
      age,
    });

    setBirthday("");
    setFirstName("");
    setLastName("");
    setAge("");
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />
        <div className="flex justify-between">
          <input
            className="w-1/2"
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            required
          />
          <input
            className="w-1/3"
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button className="text-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
