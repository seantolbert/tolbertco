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
    <div className="flex flex-col h-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="p-2 shadow-pressedMedDark focus:shadow-smallDark rounded-md text-primary caret-primary bg-transparent"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />
        <input
          className="p-2 shadow-pressedMedDark focus:shadow-smallDark rounded-md text-primary caret-primary bg-transparent"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />
        <div className="flex gap-5">
          <input
            className="w-1/2 p-2 shadow-pressedMedDark focus:shadow-smallDark rounded-md text-primary caret-primary bg-transparent"
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            required
          />
          <input
            className="w-1/4 p-2 shadow-pressedMedDark focus:shadow-smallDark rounded-md text-primary caret-primary bg-transparent"
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button
          className="text-primary shadow-smallDark active:shadow-pressedMedDark rounded-md text-xl font-bold p-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
