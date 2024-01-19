interface Props {
  cartItems: string[];
  onClear: () => void;
}
const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <div>
      <h4>Cart</h4>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem}>{cartItem}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Cart;
