export default function WaveBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-white">

            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1440 900"
                preserveAspectRatio="none"
            >
                {/* Back Layer */}
                <path
                    fill="#C084FC"
                    opacity="0.35"
                    d="
                    M1440,0
                    C1320,200 1240,280 1120,340
                    C980,420 920,520 860,650
                    C760,860 540,820 430,760
                    C250,650 120,730 0,900
                    L1440,900
                    Z
                    "
                />

                {/* Middle Layer */}
                <path
                    fill="#A855F7"
                    opacity="0.45"
                    d="
                    M1440,0
                    C1320,280 1180,380 1080,450
                    C930,560 900,720 760,790
                    C620,860 500,740 360,740
                    C180,740 90,820 0,900
                    L1440,900
                    Z
                    "
                />

                {/* Front Layer */}
                <path
                    fill="#9333EA"
                    opacity="0.65"
                    d="
                    M1440,0
                    C1350,320 1220,460 1080,560
                    C930,670 860,780 780,900
                    L1440,900
                    Z
                    "
                />
            </svg>

        </div>
    );
}