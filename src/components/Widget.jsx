import React from "react";
import StudentChart from "../components/StudentChart";
import studentsData from "../studentData.json";
import "../CSS/widget.css";

const groupDataByKey = (key, data) => {
  return data.reduce((group, data) => {
    const dataKey = data[key];

    group[dataKey] = group[data.project] ?? [];
    group[dataKey].push({
      name: data.name,
      project: data.project,
      difficulty: data.difficulty,
      enjoyability: data.enjoyability,
    });

    return group;
  }, {});
};

const getAveragesForGroup = (data) => {
  return Object.keys(data).map((key) => {
    const totalAmount = data[key].length;

    const averageEnjoyability =
      data[key].reduce((a, b) => a + b.enjoyability, 0) / totalAmount;
    const averageDifficulty =
      data[key].reduce((a, b) => a + b.difficulty, 0) / totalAmount;

    return {
      project: key,
      difficulty: averageDifficulty,
      enjoyability: averageEnjoyability,
    };
  });
};

const Widget = () => {
  const studentDataPerName = groupDataByKey("name", studentsData);
  const averagesPerStudent = getAveragesForGroup(studentDataPerName);

  return (
    <div className="widget">
      <div className="widgetChartContainer">
        <StudentChart
          data={averagesPerStudent}
          title="Student Analytics Enjoyability and Difficulty Per Student"
          grid
        />
      </div>
    </div>
  );
};

export default Widget;
