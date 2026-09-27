import Link from "next/link";

export default function NotFound() {
    return (
        <section className="not-found">
            <div>
                <p className="eyebrow">404 ERROR</p>

                <h1>WORKOUT NOT FOUND</h1>

                <p>
                    The page you are looking for does not exist.
                </p>

                <Link href="/" className="primary-button">
                    GO TO WORKOUTS
                </Link>
            </div>
        </section>
    );
}