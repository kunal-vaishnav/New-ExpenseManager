import Expenseform from "./Expenseform";
import "./NewExpense.css";
export default function NewExpense(props) {
  const { addToggler } = props;
  const changexpense = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.AddData(expenseData);
    // console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <Expenseform AddExpense={changexpense} addToggler={addToggler} />
    </div>
  );
}
