export default function Nav() {
    return (
        <nav className="w-full bg-white/80 backdrop-blur border-b border-gray-100">
            
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo" className="h-9 w-9" />
                    <span className="text-lg font-semibold text-gray-900">
                        SocialClone
                    </span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-10">
                    <a className="text-gray-600 hover:text-purple-600 transition-colors duration-200" href="/">
                        Home
                    </a>
                    <a className="text-gray-600 hover:text-purple-600 transition-colors duration-200" href="/profile">
                        Profile
                    </a>
                    <a className="text-gray-600 hover:text-purple-600 transition-colors duration-200" href="/settings">
                        Settings
                    </a>
                </div>

                {/* Mobile button placeholder */}
                <div className="md:hidden">
                    <button className="text-gray-700 text-2xl">
                        ☰
                    </button>
                </div>

            </div>
        </nav>
    );
}