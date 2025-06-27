import { FC } from 'react';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';

const portfolioData = [
  { name: 'Bitcoin', symbol: 'BTC', amount: 0.75, price: 43120, change: '+2.4%', icon: <FaBitcoin className="text-yellow-400" /> },
  { name: 'Ethereum', symbol: 'ETH', amount: 8.2, price: 3120, change: '+1.8%', icon: <FaEthereum className="text-blue-400" /> },
  { name: 'Solana', symbol: 'SOL', amount: 120, price: 135, change: '-0.9%', icon: <SiSolana className="text-purple-400" /> },
];

export const PortfolioSection: FC = () => {
  const totalValue = portfolioData.reduce((sum, asset) => sum + asset.amount * asset.price, 0);

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-10 text-lime-400">
          Your Portfolio
        </h2>

        <div className="bg-black border border-lime-700 rounded-2xl shadow-lg p-6 mb-16 text-center">
          <p className="text-sm text-gray-400">Total Portfolio Value</p>
          <h3 className="text-4xl font-bold text-green-400 mt-2">${totalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((asset, idx) => (
            <div
              key={idx}
              className="bg-gray-950 border border-gray-700 rounded-xl p-6 shadow-xl hover:shadow-lime-500/20 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{asset.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold">{asset.name}</h4>
                  <p className="text-sm text-gray-400">{asset.symbol}</p>
                </div>
              </div>
              <div className="text-gray-300 mb-2 text-sm">
                <span className="mr-1">Holdings:</span>
                <span className="font-semibold">{asset.amount} {asset.symbol}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Price:</span>
                <span>${asset.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Change:</span>
                <span className={asset.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                  {asset.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 