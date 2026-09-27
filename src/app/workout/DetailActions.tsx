"use client";

import { ILibrary } from "@/types/LibraryType";
import { Check, BookmarkPlus } from "lucide-react";
import toast from "react-hot-toast";
import { useFitLog } from "@/context/FitLogContext";

interface DetailActionsProps {
    workout: ILibrary;
}

export default function DetailActions({
    workout,
}: DetailActionsProps) {
    const {
        plan,
        saved,
        addToPlan,
        addToSaved,
    } = useFitLog();

    const isInPlan = plan.some(
        (item) => item.id === workout.id
    );

    const isSaved = saved.some(
        (item) => item.id === workout.id
    );

    const handlePlan = () => {
        if (isInPlan) {
            toast.error("Already in today's plan");
            return;
        }

        if (plan.length >= 5) {
            toast.error("Today's plan can contain only 5 lifts");
            return;
        }

        addToPlan(workout);
        toast.success("Added to today's plan");
    };

    const handleSave = () => {
        if (isSaved) {
            toast.error("Already saved");
            return;
        }

        addToSaved(workout);
        toast.success("Workout saved for later");
    };

    return (
        <div className="detail-actions">
            <button
                onClick={handlePlan}
                className="primary-button"
            >
                <Check size={18} />
                {isInPlan
                    ? "ADDED TO PLAN"
                    : "ADD TO TODAY'S PLAN"}
            </button>

            <button
                onClick={handleSave}
                className="secondary-button"
            >
                <BookmarkPlus size={18} />
                {isSaved ? "SAVED" : "SAVE FOR LATER"}
            </button>
        </div>
    );
}