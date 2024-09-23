import CourseGoal from "./components/CourseGoal";
// import "./App.css";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: "Learn React + TS",
        description: "Learn it from the ground up",
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

 function handlerDeleteGoal(id :number){
  setGoals((prevGoals) => prevGoals.filter((goals) => goals.id !== id)
 )
 }

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <button onClick={handleAddGoal}>Add Goal</button>
        <CourseGoalList goals={goals} onDeleteGoal={handlerDeleteGoal} />
      </main>
      <p className="kai"></p>
    </>
  );
}

export default App;
