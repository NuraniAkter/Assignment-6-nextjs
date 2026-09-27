"use client";

import { ILibrary } from "@/types/LibraryType";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface FitLogContextType {
    plan: ILibrary[];
    saved: ILibrary[];
    addToPlan: (workout: ILibrary) => void;
    removeFromPlan: (id: number) => void;
    addToSaved: (workout: ILibrary) => void;
    removeFromSaved: (id: number) => void;
    markAsDone: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export function FitLogProvider({ children }: { children: ReactNode }) {
    const [plan, setPlan] = useState<ILibrary[]>([]);
    const [saved, setSaved] = useState<ILibrary[]>([]);

    useEffect(() => {
        const savedPlan = localStorage.getItem("fitlog-plan");
        const savedItems = localStorage.getItem("fitlog-saved");

        if (savedPlan) {
            setPlan(JSON.parse(savedPlan));
        }

        if (savedItems) {
            setSaved(JSON.parse(savedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }, [plan]);

    useEffect(() => {
        localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }, [saved]);

    const addToPlan = (workout: ILibrary) => {
        setPlan((prev) => {
            if (prev.some((item) => item.id === workout.id)) {
                return prev;
            }

            if (prev.length >= 5) {
                return prev;
            }

            return [...prev, workout];
        });
    };

    const removeFromPlan = (id: number) => {
        setPlan((prev) => prev.filter((item) => item.id !== id));
    };

    const addToSaved = (workout: ILibrary) => {
        setSaved((prev) => {
            if (prev.some((item) => item.id === workout.id)) {
                return prev;
            }

            return [...prev, workout];
        });
    };

    const removeFromSaved = (id: number) => {
        setSaved((prev) => prev.filter((item) => item.id !== id));
    };

    const markAsDone = (id: number) => {
        setPlan((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                removeFromPlan,
                addToSaved,
                removeFromSaved,
                markAsDone,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
}

export function useFitLog() {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error("useFitLog must be used inside FitLogProvider");
    }

    return context;
}