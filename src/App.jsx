import { getImageUrl } from "./funcs/utils";
import { people } from "./data/data";
import "./App.css";

function App() {
  const chemists = people.filter((person) => person.profession === "chemist");

  const chemistList = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  const scientists = people.filter((person) => person.profession !== "chemist");

  const scientistList = scientists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <>
      <article>
        <h1>Scientists</h1>
        <ul>{scientistList}</ul>
        <h1>Chemists</h1>
        <ul>{chemistList}</ul>
      </article>
    </>
  );
}

export default App;
