"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Clock3,
    Flame,
    Star,
    Check,
    X,
} from "lucide-react";
import toast from "react-hot-toast";

import { useFitLog } from "@/context/FitLogContext";
import PlanCard from "./PlanCard";

export default function PlanContent() {
    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = useFitLog();

    const [activeTab, setActiveTab] = useState<
        "plan" | "saved"
    >("plan");

    const exercises = plan.length;

    const minutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const calories = plan.reduce(
        (total, workout) =>
            total + workout.caloriesBurned,
        0
    );

    const currentItems =
        activeTab === "plan" ? plan : saved;

    const handleDone = (id: number) => {
        markAsDone(id);
        toast.success("Workout marked as done");
    };

    const handleRemove = (id: number) => {
        if (activeTab === "plan") {
            removeFromPlan(id);
        } else {
            removeFromSaved(id);
        }

        toast.success("Workout removed");
    };

    return (
        <section className="plan-section">
            <div className="container">
                <div className="plan-header">
                    <div>
                        <p className="eyebrow">YOUR WORKOUT LOG</p>

                        <h1>MY PLAN</h1>

                        <p>
                            Cap of five lifts for today. Finish them,
                            then load more.
                        </p>
                    </div>
                </div>

                <div className="metrics">
                    <div className="metric-card">
                        <span>EXERCISES</span>
                        <strong>{exercises}</strong>
                    </div>

                    <div className="metric-card">
                        <span>MINUTES</span>
                        <strong>{minutes}</strong>
                    </div>

                    <div className="metric-card">
                        <span>CALORIES</span>
                        <strong>{calories}</strong>
                    </div>
                </div>

                <div className="tabs">
                    <button
                        className={
                            activeTab === "plan" ? "tab active" : "tab"
                        }
                        onClick={() => setActiveTab("plan")}
                    >
                        TODAY'S PLAN ({plan.length})
                    </button>

                    <button
                        className={
                            activeTab === "saved"
                                ? "tab active"
                                : "tab"
                        }
                        onClick={() => setActiveTab("saved")}
                    >
                        SAVED ({saved.length})
                    </button>
                </div>

                <div className="plan-list">
                    {currentItems.length === 0 ? (
                        <div className="empty-state">
                            <h2>NOTHING HERE YET</h2>

                            <p>
                                Browse the library and add a lift to get
                                today moving.
                            </p>

                            <Link
                                href="/"
                                className="primary-button"
                            >
                                GO TO WORKOUTS
                            </Link>
                        </div>
                    ) : (
                        currentItems.map((workout) => (
                            <PlanCard
                                key={workout.id}
                                workout={workout}
                                showPlanActions={activeTab === "plan"}
                                onDone={handleDone}
                                onRemove={handleRemove}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}