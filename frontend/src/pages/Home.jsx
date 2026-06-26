export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white">

            {/* Background */}
            <div className="absolute inset-0 -z-0 overflow-hidden">
                <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#C084FC"
                        opacity="0.35"
                        d="M1440,0 C1320,200 1240,280 1120,340 C980,420 920,520 860,650 C760,860 540,820 430,760 C250,650 120,730 0,900 L1440,900 Z"
                    />

                    <path
                        fill="#A855F7"
                        opacity="0.45"
                        d="M1440,0 C1320,280 1180,380 1080,450 C930,560 900,720 760,790 C620,860 500,740 360,740 C180,740 90,820 0,900 L1440,900 Z"
                    />

                    <path
                        fill="#9333EA"
                        opacity="0.6"
                        d="M1440,0 C1350,320 1220,460 1080,560 C930,670 860,780 780,900 L1440,900 Z"
                    />
                </svg>
            </div>

            {/* Content */}
            <main className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 sm:px-8 lg:px-12">

                <div className="max-w-3xl">

                    <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                        Friend<span className="text-purple-600">Inform</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-700 sm:text-xl">
                        Welcome to FriendInform, your go-to platform for staying connected with friends and sharing updates.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="/login"
                            className="rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 transition"
                        >
                            Login
                        </a>

                        <a
                            href="/signup"
                            className="rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 transition"
                        >
                            Sign Up
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}