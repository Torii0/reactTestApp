import { useState } from "react";

const UpdateButton = () => {
  const [burger, setBurger] = useState({
    name: "BigMac",
    price: 19,
  });

  const handleClick = () => {
    const newBurger = {
      name: burger.name,
      // ...burger - skopjuje wszystkie własności obiektu object których nie trzeba przepisywać
      price: 20,
    };
    setBurger({ ...burger, price: 20 }); // zmianiamy jedną rzecz w obiekcie dlatego mozna to zrobic prosciej i czytelniej
  };
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Update Price {burger.price}
    </button>
  );
};

export default UpdateButton;

// nie można bezpośrednio zmienic wartości dla price w sposób przypisania nowej kwoty
// const handleClick = ()=>{
//     burger.price = 20;
//     setBurger(burger);
// };

// trzeba  objekt burger przypisać do nowego obiektu i cały obiekt wraz z nazwa i cena dopiero przekazac setBurger
