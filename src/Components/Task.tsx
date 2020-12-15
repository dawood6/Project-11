import React, { useState } from "react";
import { taskObj } from "./index";
import "./Task.css";
export interface taskProps extends taskObj {}

const Task: React.FC<taskProps> = ({ title, done }) => {
  const [checked, setChecked] = useState(done);

  return (
    <div className="ListItem">
      <input
        className="check"
        type="checkbox"
        checked={checked}
        onChange={() => {
        setChecked(!checked);
        }}
      />
      <p>{title}</p>
      <p className="remove">🗑️</p>
    </div>
  );
};

export default Task;