import { FC } from 'react';
import {
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaGithub,
} from 'react-icons/fa';

export const Footer: FC = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        <div>
          <h3 className="text-lime-400 text-2xl font-bold font-orbitron mb-2">CryptX</h3>
          <p className="text-gray-500 mb-4">Empowering the future of crypto & forex trading with cutting-edge tools and insights.</p>
          <div className="flex space-x-4 text-lg text-gray-500">
            <a href="https://twitter.com" target="_blank" className="hover:text-lime-400"><FaTwitter /></a>
            <a href="https://discord.com" target="_blank" className="hover:text-lime-400"><FaDiscord /></a>
            <a href="https://t.me" target="_blank" className="hover:text-lime-400"><FaTelegram /></a>
            <a href="https://github.com" target="_blank" className="hover:text-lime-400"><FaGithub /></a>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-lime-400 font-semibold mb-3">Navigation</h4>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text-lime-400">Home</a></li>
            <li><a href="#markets" className="hover:text-lime-400">Markets</a></li>
            <li><a href="#trade" className="hover:text-lime-400">Trade</a></li>
            <li><a href="#portfolio" className="hover:text-lime-400">Portfolio</a></li>
            <li><a href="#news" className="hover:text-lime-400">News</a></li>
            <li><a href="#testimonials" className="hover:text-lime-400">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lime-400 font-semibold mb-3">Stay Updated</h4>
          <p className="text-gray-500 mb-4">Subscribe to get the latest insights & product updates.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@cryptx.com"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-5 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} CryptX. All rights reserved.
      </div>
    </footer>
  );
};
 