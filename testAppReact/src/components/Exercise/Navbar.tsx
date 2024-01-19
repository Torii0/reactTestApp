interface Props {
  cartItemsCount: number;
}
const Navbar = ({ cartItemsCount }: Props) => {
  return (
    <div>
      <p>Navbar: {cartItemsCount}</p>
    </div>
  );
};

export default Navbar;
