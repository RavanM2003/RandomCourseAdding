import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CandCsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

const CourseMap = {
  Angular,
  Bootstrap,
  CandCsharp,
  KompleWeb,
};

function Course({ courseName }) {
  return (
    <div className="image">
      <img src={CourseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
