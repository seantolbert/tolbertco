import { useCollection } from "../../hooks/useCollection";
import BirthdayCreate from "./BirthdayCreate";
import BirthdayListItem from "./BirthdayListItem";
import { useState } from "react";

export default function BirthdayList() {
  const { documents: people } = useCollection("people");
  const [showEdit, setShowEdit] = useState(false);
  const [filter, setFilter] = useState(true);

  // grab the date 3 months from now and current date
  let laterDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
  let today = new Date();

  // extract the month of laterDate and current date in individual variables
  let laterMonth = new Date(laterDate).getMonth();
  const month = today.getMonth();

  // create new filtered list for birthdays occurring between now
  // and three months from now
  const agingPeople = people
    ? people.filter((person) => {
        let birthMonth = new Date(person.birthday).getMonth();
        return month <= birthMonth && birthMonth <= laterMonth;
      })
    : null;

  return (
    <main
      className="max-w-sm rounded-lg p-2 flex flex-col justify-center gap-5 group shadow-smallDark"
      id="birthdays"
    >
      <h3 className="text-primary text-2xl">
        {people && agingPeople.length !== 0 ? (
          <p>{agingPeople.length} Birthdays coming up over the next 3 months</p>
        ) : (
          <p>No Birthdays coming up over the next 3 months</p>
        )}
      </h3>
      <div className="flex flex-col gap-3 max-h-52 overflow-scroll">
        {people && filter
          ? agingPeople.map((person) => (
              <BirthdayListItem
                key={person.id}
                person={person}
                show={showEdit}
              />
            ))
          : people.map((person) => (
              <BirthdayListItem
                key={person.id}
                person={person}
                show={showEdit}
              />
            ))}
      </div>
      <div className="flex gap-4 items-center">
        <button
          className="text-primary font-bold transition duration-500 group-hover:shadow-smallDark active:shadow-pressedMedDark w-fit rounded p-2"
          onClick={() => setShowEdit(!showEdit)}
        >
          {showEdit ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={() => setFilter(!filter)}
          className="text-primary font-bold transition duration-500 group-hover:shadow-smallDark active:shadow-pressedMedDark rounded p-2"
        >
          {filter ? "Show All" : "Next 3 months"}
        </button>

        {/* potential filtering method */}
        {/* {filter && (
          <>
            <input
              className="w-10 text-2xl bg-transparent text-light flex justify-center items-center"
              type="number"
              value={timeDistance}
              onChange={(e) => setTimeDistance(e.target.value)}
            />
            <div className="text-primary font-bold w-96">Months</div>
          </>
        )} */}
      </div>

      {showEdit && <BirthdayCreate />}
    </main>
  );
}
