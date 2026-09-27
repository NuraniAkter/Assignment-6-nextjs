import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <Image
                        src="/logo.png"
                        alt="FitLog"
                        width={40}
                        height={40}
                    />

                    <span>FITLOG</span>
                </div>

                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
}