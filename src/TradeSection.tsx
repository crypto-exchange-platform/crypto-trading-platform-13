import { FC } from 'react';

export const TradeSection: FC = () => {
  return (
    <section
      id="trade"
      className="relative py-28 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      <div className="absolute -top-20 right-0 w-96 h-96 bg-green-700 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-6 text-lime-400">
          Instant Crypto Trading
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          Trade seamlessly with real-time rates, transparent fees, and lightning-fast execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-black border border-green-700 rounded-xl p-8 shadow-lg hover:shadow-green-700/30 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Buy Crypto</h3>
            <p className="text-sm text-gray-400 mb-6">Fund with USD to receive live-rate crypto instantly.</p>
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Amount in USD"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none"
              />
              <select className="w-full px-4 py-3 rounded-md bg-gray-800 text-white">
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>Solana (SOL)</option>
              </select>
              <div className="text-sm text-gray-400 flex justify-between">
                <span>Estimated Rate:</span>
                <span>$43,120 / BTC</span>
              </div>
              <div className="text-sm text-gray-400 flex justify-between">
                <span>Trading Fee:</span>
                <span>0.25%</span>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-3 rounded-md transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-black border border-lime-700 rounded-xl p-8 shadow-lg hover:shadow-lime-600/30 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-lime-400">Sell Crypto</h3>
            <p className="text-sm text-gray-400 mb-6">Convert your crypto into USD with accurate rates.</p>
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Amount in Crypto"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none"
              />
              <select className="w-full px-4 py-3 rounded-md bg-gray-800 text-white">
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>Solana (SOL)</option>
              </select>
              <div className="text-sm text-gray-400 flex justify-between">
                <span>Estimated Rate:</span>
                <span>$43,120 / BTC</span>
              </div>
              <div className="text-sm text-gray-400 flex justify-between">
                <span>Trading Fee:</span>
                <span>0.25%</span>
              </div>
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 rounded-md transition">
                Sell Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 