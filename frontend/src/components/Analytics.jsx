import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import axios from "axios";
import { useState, useEffect } from "react";
const Analytics = () => {
  const [data, setData] = useState([
    { name: "A+", value: 400 },
    { name: "A-", value: 300 },
    { name: "B+", value: 300 },
    { name: "B-", value: 200 },
    { name: "AB+", value: 400 },
    { name: "AB-", value: 300 },
    { name: "O+", value: 300 },
    { name: "O-", value: 200 },
  ]);

  const [cdata, setCData] = useState([
    {
      name: "Number of Donors & Campaigns held",
      Donors: 400,
      Campaigns: 130,
    },
  ]);

  useEffect(() => {
    const FetChData = async () => {
      let request = await axios("http://localhost:5000/availables/all");

      let data = await request.data;

      let final_data = data.data;

      let chart_data = [];

      final_data.forEach((value, index) => {
        chart_data.push({ name: value.blood_group, value: value.count });
      });

      setData(chart_data);
    };

    const FetchChart2 = async () => {
      let request = await axios("http://localhost:5000/analytics");

      let data = await request.data;

      setCData([
        {
          name: "Number of Donors & Campaigns held",
          Donors: data.total_registerd_donors,
          Campaigns: data.current_campaigns,
        },
      ]);
    };

    FetChData();
    FetchChart2();
  }, []);

  const COLORS = [
    "#4c0311",
    "#6f0c1f",
    "#84061f",
    "#930020",
    "#96011f",
    "#880032",
    "#830123",
    "#95001e",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data[index].name}
      </text>
    );
  };

  const renderPieChart = () => {
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          //   cx={400}
          //   cy={300}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={175}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  };

  const renderBarGraph = () => {
    return (
      <BarChart
        width={400}
        height={400}
        data={cdata}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Donors" fill="#810020" />
        <Bar dataKey="Campaigns" fill="#b10334" />
      </BarChart>
    );
  };

  return (
    <section>
      <div class="analytics_container" id="analytics">
        <div class="content">
          <div class="title">
            <h1 class="text-3xl"># Analytics</h1>
          </div>
          <div class="body my-14">
            <div className="chart1 chart">
              <div className="title">
                <h1>Availables Types Of Blood</h1>
              </div>
              <div className="output">{renderPieChart()}</div>
            </div>

            <div className="chart2 chart">
              <div className="title">
                <h1>Number of Donors & Campaigns held</h1>
              </div>
              <div className="output">{renderBarGraph()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
