import Hero from "@/components/home/Hero";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";
import { getAllWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getAllWorkouts();

  return (
    <>
      <Hero />
      <WorkoutLibrary workouts={workouts} />
    </>
  );
}