import Image from "next/image";
import Link from "next/link";
import {
    Clock3,
    Flame,
    Star,
} from "lucide-react";
import { ILibrary } from "@/types/LibraryType";

interface WorkoutCardProps {
    workout: ILibrary;
}

export default function WorkoutCard({
    workout,
}: WorkoutCardProps) {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="workout-card"
        >
            <div className="workout-image">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={500}
                    height={350}
                />
            </div>

            <div className="workout-card-content">
                <div className="tag-wrapper">
                    {workout.muscleGroups.map((group) => (
                        <span key={group} className="tag">
                            {group}
                        </span>
                    ))}
                </div>

                <h3>{workout.name}</h3>

                <p className="equipment">
                    {workout.equipment}
                </p>

                <div className="stats">
                    <span>
                        <Clock3 size={15} />
                        {workout.duration} min
                    </span>

                    <span>
                        <Flame size={15} />
                        {workout.caloriesBurned} kcal
                    </span>

                    <span>
                        <Star size={15} />
                        {workout.rating}
                    </span>
                </div>
            </div>
        </Link>
    );
}