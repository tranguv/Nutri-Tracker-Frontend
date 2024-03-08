import React from "react";
import { SlOptions } from "react-icons/sl";
import homeIcon from "../../assets/homeIcon.jpg";

const TaskName = ({ currentTask }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "400px",
        gap: "10px",
        padding: "10px",
        fontSize: "1rem",
      }}
    >
      <img
        src={homeIcon}
        alt="homeIcon"
        width={50}
        height={50}
        style={{ borderRadius: "50px" }}
      />
      <div style={{ fontSize: "0.8rem" }}>
        <div style={{ fontWeight: "bold" }}>Home Workouts</div>
        <div>Task ({currentTask}/15)</div>
      </div>
      <SlOptions style={{ marginLeft: "auto", color: "black" }} />
    </div>
  );
};

export default TaskName;
