import { Checkbox } from "@chakra-ui/react";
import { MdDragHandle } from "react-icons/md";

const CheckBar = ({ tasks, handleOnClick }) => {
  return (
    <div
      style={{
        height: "40px",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "10px",
        background: "white",
        color: "black",
        gap: "10px",
        padding: "10px",
        fontSize: "1rem",
        opacity: handleOnClick ? 0.5 : 1,
        transition: "opacity 0.5s ease",
        marginBottom: "10px",
      }}
    >
      <Checkbox colorScheme="green" defaultChecked />

      {/* Name of the task */}
      <div
        style={{
          // color: "black",
          textDecoration: handleOnClick ? "line-through" : null,
        }}
      >
        Plank
      </div>
      <div style={{ width: "1px", height: "90%", background: "grey" }}></div>
      {/* Time Stamp */}
      <div> 00:00 </div>
      <MdDragHandle style={{ marginLeft: "auto" }} />
    </div>
  );
};

export default CheckBar;
