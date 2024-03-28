import CheckBar from "../CheckBar/CheckBar";
import TaskName from "../TaskName/TaskName";
import styles from "./DailyTask.module.css";
import { MdClose } from "react-icons/md";

const DailyTask = () => {
  const taskName = [
    "Drink Water",
    "Eat Breakfast",
    "Eat Lunch",
    "Eat Dinner",
    "Exercise",
    "Exercise"
  ];
  return (
    <div className={styles["daily-task-bar"]}>
      <div className={styles["top-section"]}>
        <div className={styles["icon-container"]}>
          <MdClose />
        </div>
        <div className={styles["title-container"]}>
          <h2>Daily Tasks</h2>
        </div>
      </div>
      <div>
        <h2 className={styles["finish-task-header"]}>
          Finish Tasks To Earn Points
        </h2>
        <div className={styles["task-name-div"]}> 
          <TaskName currentTask={2} />
        </div>
        {taskName.map((task, index) => {
          return <CheckBar tasks={task} />;
        })}
      </div>
    </div>
  );
};

export default DailyTask;
