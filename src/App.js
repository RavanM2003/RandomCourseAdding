import "./App.css";
import Course from "./Course";
import { useState } from "react";

function getrandomCourse() {
  const CoursesArray = ["Angular", "Bootstrap", "CandCsharp", "KompleWeb"];
  return CoursesArray[Math.floor(Math.random() * CoursesArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const clickButton = () => {
    setCourses([...courses, getrandomCourse()]);
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <div className="App">
      <button className="button" onClick={clickButton}>Add Course</button>
      <div className="images">{courseList}</div>
    </div>
  );
}

export default App;
