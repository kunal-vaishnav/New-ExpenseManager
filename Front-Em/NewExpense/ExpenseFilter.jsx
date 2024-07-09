import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const dropdownhandler = (event) => {
    props.changefilter(event.target.value);
    // console.log(event.target.value);
  };
  return (
    <div className="expense_filter">
      <div className="expense_filter_control">
        <label>Filter By Year</label>
        <select
          value={props.selected}
          onChange={dropdownhandler}
          style={{ marginLeft: "10px" }}
        >
          <option value={"none"}>None</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
