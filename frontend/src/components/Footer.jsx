export default function Footer() {
    return (
        <>
        <footer className="bg-gray-800 text-white py-4 px-6">
            <div className="flex justify-between items-center">
                <span className="text-sm">&copy; 2026 SocialClone. All rights reserved.</span>
                <div className="flex space-x-4">
                    <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
                </div>
            </div>
        </footer>
        </>
    )
}