import { formatDistanceToNow } from "date-fns";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function BirthdayListItem({ person }) {
  const { id, firstName, lastName, birthday, age } = person;
  const formatBirthday = formatDistanceToNow(new Date(birthday));

  const handleDelete = async (id) => {
    const docRef = doc(db, "people", id);
    await deleteDoc(docRef);
  };

  return (
    <div className="flex items-center gap-5">
      <div className="bg-white w-14 h-14 rounded-full flex justify-center items-center text-2xl font-bold">
        {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
      </div>
      <h3 className="text-secondary">{`${firstName} ${lastName}`}</h3>
      <p className="text-secondary">{formatBirthday}</p>
      <p className="text-secondary">{age} years old</p>
      <div className="text-light" onClick={() => handleDelete(id)}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </div>
    </div>
  );
}
