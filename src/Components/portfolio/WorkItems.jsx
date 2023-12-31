import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt="" className="work-img" />
      <h3 className="work-title">{item.title}</h3>
      
      <a href="{Link}" className="work-btn" target="_blank">
        Live <i className="bx bx-right-arrow-alt work-btn-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
