import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function BirthdayListItem({ person, show }) {
  const { id, firstName, lastName, birthday } = person;

  const handleDelete = async (id) => {
    const docRef = doc(db, "people", id);
    await deleteDoc(docRef);
  };

  const currentYear = new Date().getFullYear();
  const snagMonth = (d) =>
    new Date(d).toLocaleDateString("en-US", { month: "long" });
  const snagDay = (d) => new Date(d).getDate() + 1;

  return (
    <div className="flex justify-between bg-gradient-to-r from-primary to-secondary p-2 rounded-md">
      <div className="flex gap-5 items-center">
        <div className="bg-white w-14 h-14 rounded-full flex justify-center items-center text-2xl font-bold">
          {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
        </div>
        <div className="flex flex-col">
          <h3 className="text-zinc-600 font-extrabold">{`${firstName} ${lastName}`}</h3>
          <p className="text-zinc-600 text-sm">
            {currentYear - new Date(birthday).getFullYear()} years old
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        {show && (
          <div
            className="text-grey cursor-pointer self-end"
            onClick={() => handleDelete(id)}
          >
            <FontAwesomeIcon icon={faDeleteLeft} />
          </div>
        )}
        <p className="text-dark text-xl self-start font-extrabold bg-transparent p-1 rounded-md">
          {snagMonth(birthday)}, {snagDay(birthday)}
        </p>
      </div>
    </div>
  );
}
