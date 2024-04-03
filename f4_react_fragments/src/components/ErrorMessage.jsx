const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>No items available.</h3>}</>;
};
export default ErrorMessage;
