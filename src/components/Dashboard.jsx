/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Card from "./Card";
import BarChart from "./BarChart";

const Dashboard = ({ props }) => {
  return (
    <div css={dashboardStyle}>
      <div css={cardListStyle}>
        <Card state="good" />
        <Card state="bad" />
        <Card state="normal" />
      </div>
      <div css={mainChartStyle}>
        <BarChart />
      </div>
    </div>
  );
};

const dashboardStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
});

const cardListStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "15px",
});

const mainChartStyle = css({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "20px",
  margin: "30px",
});

export default Dashboard;
