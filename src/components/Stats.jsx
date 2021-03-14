import React from "react";

function Stats(props) {
  let male = props.users.filter((user) => user.gender === "male").length,
    female = props.users.length - male,
    age = props.users.reduce((acc, user) => acc + user.dob.age, 0),
    average = (age / props.users.length).toFixed(2);

  return (
    <div className="container stats">
      <h2>Estatísticas</h2>
      <ul className="stat-list">
        <li>Sexo Masculino: {male}</li>
        <li>Sexo Feminino: {female}</li>
        <li>Soma das idades: {age}</li>
        <li>Média das idades: {isNaN(average) ? 0 : average}</li>
      </ul>
    </div>
  );
}

export default Stats;
