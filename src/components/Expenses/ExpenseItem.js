import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDates from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clicked = (e) => {
    setTitle("Mobile Phone");
  };
  return (
    <Card className="expense-item">
      <ExpenseDates date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clicked}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
