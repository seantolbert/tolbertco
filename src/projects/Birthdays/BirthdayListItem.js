import { formatDistanceToNowStrict } from "date-fns";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function BirthdayListItem({ person, show }) {
  const { id, firstName, lastName, birthday, age } = person;

  const handleDelete = async (id) => {
    const docRef = doc(db, "people", id);
    await deleteDoc(docRef);
  };

  // console.log(birthday)


 

  // console.log(month);
  // console.log(day);

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="bg-white w-14 h-14 rounded-full flex justify-center items-center text-2xl font-bold">
          {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
        </div>
        <div className="flex flex-col">
          <h3 className="text-secondary font-extrabold">{`${firstName} ${lastName}`}</h3>
          <p className="text-secondary text-sm">
            {formatDistanceToNowStrict(new Date(birthday))}
          </p>
          <p className="text-secondary text-sm">
            {birthday}
          </p>
        </div>
      </div>
      {show && (
        <div
          className="text-light cursor-pointer mr-5"
          onClick={() => handleDelete(id)}
        >
          <FontAwesomeIcon icon={faDeleteLeft} />
        </div>
      )}
    </div>
  );
}
