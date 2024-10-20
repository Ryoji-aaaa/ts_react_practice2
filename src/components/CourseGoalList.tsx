import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no goals yet. Startadding some!</InfoBox>
    );
  }

  let warinigBox : ReactNode;
  if (goals.length >=4) {
    warinigBox = (
      <InfoBox mode="warning" severity="high">
        You have a lot of goals. Consider removing some of them
      </InfoBox>
    );
  }

  return (
    <>
    {warinigBox}
      <ul>
        {goals.map((goals) => (
          <li key={goals.id}>
            <CourseGoal
              id={goals.id}
              title={goals.title}
              onDelete={onDeleteGoal}
            >
              <p>{goals.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
