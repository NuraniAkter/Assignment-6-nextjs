"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import WorkoutCard from "./WorkoutCard";
import { ILibrary } from "@/types/LibraryType";

interface WorkoutLibraryProps {
    workouts: ILibrary[];
}

type SortType = "duration" | "calories" | "rating";

export default function WorkoutLibrary({
    workouts,
}: WorkoutLibraryProps) {
    const [sortBy, setSortBy] = useState<SortType>("duration");

    const sortedWorkouts = useMemo(() => {
        return [...workouts].sort((a, b) => {
            if (sortBy === "duration") {
                return a.duration - b.duration;
            }

            if (sortBy === "calories") {
                return a.caloriesBurned - b.caloriesBurned;
            }

            return a.rating - b.rating;
        });
    }, [workouts, sortBy]);

    return (
        <section id="library" className="library-section">
            <div className="container">
                <div className="library-header">
                    <div>
                        <p className="eyebrow">WORKOUT COLLECTION</p>

                        <h2>THE LIBRARY</h2>

                        <p>
                            Twelve lifts covering every major muscle group.
                        </p>
                    </div>

                    <div className="sort-box">
                        <span>Sort By</span>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value as SortType)
                            }
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>

                        <ChevronDown size={17} />
                    </div>
                </div>

                <div className="workout-grid">
                    {sortedWorkouts.map((workout) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}