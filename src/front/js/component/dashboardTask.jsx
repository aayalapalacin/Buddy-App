import React, { useEffect } from "react";
import useStore from "../store/zustand";

function DashboardTask() {
  // const [categories,setCategories]=useState();
  let selectedCategories = useStore((state) => state.selectedCategories);
  console.log("selectedCat", selectedCategories);
  // let selectedCategories = [{ task: "task1" }, { task: "task2" }];
  useEffect(() => {
    if (selectedCategories.length > 0) {
    }
  }, [selectedCategories]);
  return (
    <div>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          {selectedCategories.map((item, index) => {
            return (
              <button
                className={index == 0 ? "nav-link active" : "nav-link"}
                key={index}
                id={`nav-${item.task.task}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#nav-${item.task.task}`}
                type="button"
                role="tab"
                aria-controls={`nav-${item.task.task}`}
                aria-selected={index == 0 ? "true" : "false"}
              >
                {item.task.task}
              </button>
            );
          })}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {selectedCategories.map((item, index) => {
          return (
            <div
              className={
                index == 0 ? "tab-pane fade show active" : "tab-pane fade"
              }
              key={index}
              id={`nav-${item.task.task}`}
              role="tabpanel"
              aria-labelledby={`nav-${item.task.task}-tab`}
            >
              ...
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardTask;
