import styles from "./item.module.css";
const Item = (props) => {
  //console.log(styles);
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className="kg-span">{props.foodItem}</span>
    </li>
  );
};
export default Item;
