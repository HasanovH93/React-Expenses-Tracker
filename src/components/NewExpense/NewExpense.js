import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  let currentId = 5;
  function generateId() {
    const id = "e" + currentId;
    currentId += 1;
    return id;
  }

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: generateId(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
