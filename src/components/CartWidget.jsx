const CartWidget = ({ counter }) => {
  return (
    <div>
      <span>🛒</span>
      <span style={{ color: "red" }}>{counter}</span>
    </div>
  );
};
export default CartWidget;
