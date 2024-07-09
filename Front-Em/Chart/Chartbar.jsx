import "./Chartbar.css";
const Chartbar = (props) => {
  let Barheight = "0%";
  if (props.maxvalue > 0) {
    Barheight = Math.round((props.value / props.maxvalue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div
          className="chart-bar-fill"
          style={{
            height: Barheight,
          }}
        ></div>
      </div>
      <div className="chart-bar-label">{props.label}</div>
    </div>
  );
};
export default Chartbar;
