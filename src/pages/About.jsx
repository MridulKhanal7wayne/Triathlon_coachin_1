export default function About() {
    return (
        <div className="w-full min-h-screen bg-black text-white px-20 py-40 font-[font2]">

       
            <h1 className="text-[7vw] uppercase font-bold leading-[0.9] tracking-tight">
                Train With <br /> Purpose
            </h1>

         
            <div className="max-w-4xl mt-14 space-y-10">
                <p className="text-2xl leading-relaxed text-white/90">
                    Whether you’re preparing for your first Ironman, chasing a sub-10 finish, or aiming for the
                    Ironman World Championship, Velowolves coaching is built around the demands of long-course endurance racing.
                    Every plan is tailored to your physiology and race goals—developing durability, pacing discipline,
                    and the aerobic engine needed for the world’s toughest endurance events.
                </p>

                <p className="text-2xl leading-relaxed text-white/90">
                    We deliver fully customized programming grounded in endurance science—structured swim, bike, and run
                    sessions, performance testing, weekly data-driven adjustments, and 1-on-1 coaching from national-level
                    triathletes. The result is sustainable progression, peak race readiness, and the mental resilience
                    essential for Ironman success.
                </p>
            </div>

            {/* social media */}
            <div className="flex justify-center gap-10 mt-28">
                <a
                    href=" https://www.instagram.com/velowolves/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="text-4xl uppercase tracking-wide px-12 py-6 rounded-full border border-white/40 hover:border-red-500 hover:text-red-500 transition-all duration-300">
                        Instagram
                    </button> </a>

                <a
                    href="https://www.youtube.com/@VeloWolves"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="text-4xl uppercase tracking-wide px-12 py-6 rounded-full border border-white/40 hover:border-red-500 hover:text-red-500 transition-all duration-300">
                        YouTube
                    </button>
                </a>
                <a
                    href="https://www.strava.com/clubs/1404158"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="text-4xl uppercase tracking-wide px-12 py-6 rounded-full border border-white/40 hover:border-red-500 hover:text-red-500 transition-all duration-300">
                        Strava
                    </button>
                </a>
            </div>

        </div>
    );
}
