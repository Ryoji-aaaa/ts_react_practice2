import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal } from "../App"

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id:number) => void ;
};

export default function CourseGoalList({ goals ,onDeleteGoal}: CourseGoalListProps) {

  return (
    <ul>
      {goals.map((goals) => (
        <li key={goals.id}>
          <CourseGoal id={goals.id} title={goals.title} onDelete = {onDeleteGoal}>
            <p>{goals.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
