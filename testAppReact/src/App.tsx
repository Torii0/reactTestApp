//import Alert from "./components/Alert";
//import Button from "./components/Button/Button";
 import { useState } from "react";
// import ListGroup from "./components/ListGroup";
// import { FaHeart } from "react-icons/fa";
// import Like from "./components/Like";
// import Message from "./components/Message";
// import UpdateButton from "./components/UpdateButton";
// import "./App.css";
// import Navbar from "./components/Exercise/Navbar";
// import Cart from "./components/Exercise/Cart";
// import Game from "./components/Exercise/Game";
// import ExpandableText from "./components/ExpandableText";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import Form from "./components/Forms/Form";
import FormUseForm from "./components/Forms/FormUseForm";
import FormUseState from "./components/Forms/FormUseState";
function App() {
  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const [expenses, setExpenses] = useState([
    { id: 1, des: "Milk", amount: 5, category: "Groccery" },
    { id: 2, des: "Honey", amount: 12, category: "Groccery" },
  ]);
  return (
    <div>
      {/* <Like onClick={() => console.log("klik")} />
      <Message />
      <Message />
      <Message />
      <UpdateButton />
      <br></br>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => {
          setCartItems([]);
        }}
      />
      <br></br>
      <Game />
      <ExpandableText maxChars={101}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, rem
        repellat explicabo quo nesciunt nemo sint, iusto blanditiis iste fugit
        molestias harum possimus quisquam, voluptas labore cupiditate! Odio
        voluptatibus molestiae officia nulla ad. Corporis dicta, qui at unde
        consequatur delectus nesciunt sit tempora impedit modi amet non, enim
        dolorum quos natus nisi ducimus nostrum fuga necessitatibus doloribus
        suscipit voluptatum. Nihil distinctio accusantium reprehenderit sequi
        maxime iure doloremque, nisi ex odio, ad porro. Vel eos ut nulla quidem,
        labore nesciunt excepturi suscipit ducimus perspiciatis debitis vitae et
        laboriosam minus quasi? Explicabo et libero dignissimos nihil tempora
        sint ea voluptate aut voluptatum.
      </ExpandableText> */}

      {/* <Form/> */}
      {/* <FormUseState/> */}
      
      <ExpenseList items={expenses} onDelete={(id) => setExpenses(expenses.filter((i)=>(i.id !== id)))}/>
    </div>
  );
}

export default App;
