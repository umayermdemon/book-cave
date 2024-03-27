/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ReadChart = ({ chartData }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip font-bold font-serif bg-gray-100 p-8 rounded-xl">
          <p className="label text-xl text-pink-900">{`Book Name: ${label}`}</p>
          <p className="label text-lg text-blue-900">{`Pages: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="mt-16">
      <BarChart
        width={1350}
        height={600}
        data={chartData}
        margin={{ top: 20, right: 30, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="pages" tick={{ fill: "gray" }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="pages"
          className="font-sans"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

ReadChart.propTypes = {
  chartData: PropTypes.array.isRequired,
};

export default ReadChart;
