import { useState } from "react";
import { produce } from "immer";

const UpdateButton = () => {
  const [burger, setBurger] = useState({
    name: "BigMac",
    price: 19,
  });
  const [costumer, setCostumer] = useState({
    name: "Johny",
    address: {
      city: "New York",
      codeZip: 1234,
    },
  });
  const [tags, setTags] = useState(["hungry", "sleepy"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  const handleClick = () => {
    const newBurger = {
      name: burger.name,
      // ...burger - skopjuje wszystkie własności obiektu object których nie trzeba przepisywać
      price: 20,
    };
    setBurger({ ...burger, price: 20 }); //updating objects // zmianiamy jedną rzecz w obiekcie dlatego mozna to zrobic prosciej i czytelniej
    setCostumer({
      ...costumer,
      address: { ...costumer.address, codeZip: 12356 },
      name: "Adam",
    }); //updating nested object cięższa konstrukcja, lepiej jej unikac
  };

  const handleClick2 = () => {
    //Add
    setTags([
      ...tags,
      "sad",
      //Remove
      ...tags.filter((tag) => tag !== "sleepy"), // filtruje odpowiedzi i je wyświetla, w tym wypadku ma wyswietlic wszystko oprócz sleppy
      //Update
      ...tags.map((tag) => (tag === "hungry" ? "happy" : tag)),
    ]); // przechodzi przez każdy element (map) i sprawdza czy jest hungry jesli tak zmienia go na happy jesli nie zwraca cały tag bez zmian
  };

  const handleClick3 = () => {
    // setBugs(bugs.map(bug=>bug.id === 1 ?{...bug, fixed: true}: bug)); // - immutable
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
    //mutable
  };
  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        Update {costumer.name} Price {burger.price}
      </button>

      <br></br>
      {tags.map((tag) => (
        <p>{tag}</p>
      ))}
      <button className="btn btn-primary" onClick={handleClick2}>
        Click to update
      </button>

      <br></br>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed == true ? "Fixed" : "New"}
        </p>
      ))}
      <button className="btn btn-primary" onClick={handleClick3}>
        Click Me
      </button>
    </>
  );
};

export default UpdateButton;

// nie można bezpośrednio zmienic wartości dla price w sposób przypisania nowej kwoty
// const handleClick = ()=>{
//     burger.price = 20;
//     setBurger(burger);
// };

// trzeba  objekt burger przypisać do nowego obiektu i cały obiekt wraz z nazwa i cena dopiero przekazac setBurger
