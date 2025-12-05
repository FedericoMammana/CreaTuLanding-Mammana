const CartWidget = ({ counter }) => {
  // console.log(props)
  // const {counter}= props
  return (
    <div>
      <span>🛒</span>
      <span style={{ color: "red" }}>{counter}</span>
    </div>
  );
};
export default CartWidget;
