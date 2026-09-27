import Image from "next/image";
import { ILibrary } from "@/types/LibraryType";
import DetailActions from "./DetailActions";

interface WorkoutDetailsProps {
    workout: ILibrary;
}

export default function WorkoutDetails({
    workout,
}: WorkoutDetailsProps) {
    return (
        <section className="details-section">
            <div className="container details-grid">
                <div className="details-image">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={800}
                        height={700}
                        priority
                    />
                </div>

                <div className="details-content">
                    <p className="eyebrow">WORKOUT DETAILS</p>

                    <h1>{workout.name}</h1>

                    <p className="details-description">
                        {workout.description}
                    </p>

                    <div className="tag-wrapper">
                        {workout.muscleGroups.map((group) => (
                            <span key={group} className="tag">
                                {group}
                            </span>
                        ))}
                    </div>

                    <div className="specs">
                        <div>
                            <span>EQUIPMENT</span>
                            <strong>{workout.equipment}</strong>
                        </div>

                        <div>
                            <span>DIFFICULTY</span>
                            <strong>{workout.difficulty}</strong>
                        </div>

                        <div>
                            <span>SETS</span>
                            <strong>{workout.sets}</strong>
                        </div>

                        <div>
                            <span>REPS</span>
                            <strong>{workout.reps}</strong>
                        </div>

                        <div>
                            <span>DURATION</span>
                            <strong>{workout.duration} min</strong>
                        </div>

                        <div>
                            <span>CALORIES</span>
                            <strong>{workout.caloriesBurned} kcal</strong>
                        </div>

                        <div>
                            <span>RATING</span>
                            <strong>{workout.rating}</strong>
                        </div>
                    </div>

                    <div className="instructions">
                        <h2>INSTRUCTIONS</h2>

                        <ol>
                            {workout.instructions.map(
                                (instruction, index) => (
                                    <li key={index}>
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                        <p>{instruction}</p>
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    <DetailActions workout={workout} />
                </div>
            </div>
        </section>
    );
}