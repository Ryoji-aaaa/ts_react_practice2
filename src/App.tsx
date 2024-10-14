import CourseGoal from "./components/CourseGoal";
// import "./App.css";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal(goal :string , summary :string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
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
        <p>hi there</p>
        <NewGoal onAddGoal={handleAddGoal}/>
        <CourseGoalList goals={goals} onDeleteGoal={handlerDeleteGoal} />
      </main>
      <p className="kai"></p>
    </>
  );
}

export default App;
