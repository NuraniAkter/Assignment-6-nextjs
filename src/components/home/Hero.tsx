import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-content">
                    <p className="eyebrow">WORKOUT LIBRARY</p>

                    <h1>
                        TRAIN WITH INTENT.
                        <br />
                        LOG EVERY SET.
                    </h1>

                    <p className="hero-description">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>

                    <Link href="#library" className="primary-button">
                        BROWSE WORKOUTS
                        <ArrowDown size={18} />
                    </Link>
                </div>

                <div className="hero-image">
                    <Image
                        src="/banner.png"
                        alt="Workout Banner"
                        width={700}
                        height={550}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}