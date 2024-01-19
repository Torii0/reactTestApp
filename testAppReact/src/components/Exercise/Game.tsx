import { useState } from "react";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["pepperoni"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, tittle: "Product1", quantity: 1 },
      { id: 2, tittle: "Product2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Anna" } });
  };

  const handleClick2 = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "olive"] });
  };

  const handleClick3 = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <>
      {game.player.name}
      <br></br>
      <button onClick={handleClick}>Change name</button>
      <br></br>
      {pizza.name}
      {pizza.toppings.map((topping) => (
        <p>{topping}</p>
      ))}
      <button onClick={handleClick2}>Add topping</button>
      <br></br>
      {cart.items.map((item) => (
        <p key={item.id}>
          {item.tittle}, {item.quantity}
        </p>
      ))}
      <button onClick={handleClick3}>Click Me</button>
    </>
  );
};

export default Game;
