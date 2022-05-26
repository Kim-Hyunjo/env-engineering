/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "MLSS PER DAY",
    },
  },
};

const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const data = {
  labels,
  datasets: [
    {
      label: "MLSS",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "MLVSS",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Card = (props) => {
  return (
    <div css={cardStyle} {...props}>
      <div css={textStyle}>
        <div css={textValueStyle}>13.5mg/L</div>
        <div css={textTitleStyle}>MLSS</div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

const cardStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "300px",
  height: "200px",
  backgroundColor: "#E9C46A",
  borderRadius: "20px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  padding: "15px",
  margin: "15px",
});

const textStyle = css({
  textAlign: "start",
});

const textValueStyle = css({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "28px",
});

const textTitleStyle = css({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "18px",
});

export default Card;
