import { ILibrary } from "@/types/LibraryType";

const API_URL =
    "https://api.api-store.workers.dev/api/fitlog";

export async function getAllWorkouts(): Promise<ILibrary[]> {
    const response = await fetch(API_URL, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
}

export async function getWorkout(
    id: string
): Promise<ILibrary> {
    const response = await fetch(`${API_URL}/${id}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Workout not found");
    }

    return response.json();
}