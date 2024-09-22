import CourseGoal from "./components/CourseGoal";
// import "./App.css";
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header";

function App() {

  return (
    <>
      <main>
        <Header image={{src:goalsImg,alt :"A list of goals"}}>
          <h1>Your Course Goals</h1>
        </Header>
        <CourseGoal title="Learn React + TS">
          <p>Learn it from the ground up</p>
        </CourseGoal>
        <CourseGoal title="Learn React + TS">
          <p>aaaa</p>
        </CourseGoal>
      </main>
      <p className="kai"></p>


    </>
  );
}

export default App;
