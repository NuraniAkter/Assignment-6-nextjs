"use client";

import Image from "next/image";
import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
    const pathname = usePathname();
    const { plan, saved } = useFitLog();

    const isWorkoutActive = pathname === "/";
    const isPlanActive = pathname === "/my-plan";

    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <Link href="/" className="logo">
                    <Image
                        src="/logo.png"
                        alt="FitLog Logo"
                        width={45}
                        height={45}
                        priority
                    />

                    <span>FITLOG</span>
                </Link>

                <nav className="nav-links">
                    <Link
                        href="/"
                        className={isWorkoutActive ? "nav-link active" : "nav-link"}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={isPlanActive ? "nav-link active" : "nav-link"}
                    >
                        My Plan
                    </Link>
                </nav>

                <div className="nav-badges">
                    <Link href="/my-plan" className="plan-badge">
                        Plan <span>{plan.length}</span>
                    </Link>

                    <Link href="/my-plan" className="saved-badge">
                        Saved <span>{saved.length}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}