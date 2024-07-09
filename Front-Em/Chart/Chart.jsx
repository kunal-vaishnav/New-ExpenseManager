import "./Chart.css";
import Chartbar from "./Chartbar";
const Chart = (props) => {
  const datapointvalue = props.datapoints.map((datapoint) => datapoint.value);
  const getmaximum = Math.max(...datapointvalue);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <Chartbar
          key={datapoint.label}
          value={datapoint.value}
          maxvalue={getmaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
