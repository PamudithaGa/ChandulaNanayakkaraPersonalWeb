import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#171616] py-4">
            <div className="mt-4 text-center text-xl text-white">
                <p>&copy; 2025 Chandula Nanayakkara</p>
                <div className="mt-2">
                    <a href="/privacy-policy" className="mx-2 text-sm text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="/terms-of-service" className="mx-2 text-sm text-gray-400 hover:text-white">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
