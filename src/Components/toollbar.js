import React from "react";
import cn from "classnames";
import "../App.css";
import { v4 as uuidv4 } from 'uuid';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {["All", ...filters].map((filter) => (
        <button
          key={uuidv4()}
          className={cn({ "App-link": selected === filter })}
          onClick={() => onSelectFilter(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;