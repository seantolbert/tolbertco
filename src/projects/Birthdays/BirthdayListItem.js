import React from "react";

export default function BirthdayListItem({ person }) {

  const {firstName, lastName, birthday} = person

  console.log(birthday.seconds)

  const correctBirthday = new Date(birthday.seconds).toLocaleDateString('en-GB', {timeZone:'UTC'})

  return (
    <div>
      <h3>{`${firstName} ${lastName}`}</h3>
      <p>{correctBirthday}</p>
    </div>
  );
}
