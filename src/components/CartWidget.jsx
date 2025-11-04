const CartWidget = (props) => {
  return (
    <div>
      <span>🛒</span>
      <span style={{ color: "blue" }}>{props.counter}</span>
    </div>
  );
};
export default CartWidget;
