import { FC } from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const dummyData = [
  { time: '10AM', value: 42000 },
  { time: '11AM', value: 42300 },
  { time: '12PM', value: 42800 },
  { time: '1PM', value: 42500 },
  { time: '2PM', value: 43000 },
];

const cryptoData = [
  { name: 'Bitcoin', price: 102810.28, change: '+2.5%', volume: '36.2B', marketCap: '850B' },
  { name: 'Ethereum', price: 3190.55, change: '+1.2%', volume: '18.9B', marketCap: '380B' },
  { name: 'Solana', price: 132.42, change: '-0.8%', volume: '4.1B', marketCap: '59B' },
  { name: 'Cardano', price: 0.48, change: '+4.3%', volume: '2.5B', marketCap: '16B' },
  { name: 'BNB', price: 610.12, change: '+0.7%', volume: '1.9B', marketCap: '94B' },
  { name: 'XRP', price: 0.52, change: '-1.1%', volume: '1.2B', marketCap: '28B' },
];

export const MarketSection: FC = () => {
  return (
    <section
      id="markets"
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-12 text-white">
          Market Pulse
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cryptoData.map((crypto, idx) => (
            <div
              key={idx}
              className="bg-black border border-lime-700 rounded-2xl p-6 shadow-xl hover:shadow-lime-500/20 transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{crypto.name}</h3>
                <span className="text-lime-400 text-sm">Live</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Real-time analytics, volume indicators, price trend, and predictive chart.
              </p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Volume: ${crypto.volume}</span>
                <span>Market Cap: ${crypto.marketCap}</span>
              </div>
              <div className="mb-4">
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={dummyData}>
                    <Line type="monotone" dataKey="value" stroke="#84cc16" strokeWidth={2} dot={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#84cc16' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-400">${crypto.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{crypto.change} Today</p>
                </div>
                <div className="h-12 w-24 bg-gradient-to-r from-lime-500 to-green-600 rounded-lg animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#trade"
            className="inline-block border-2 border-lime-500 hover:border-lime-400 text-white hover:text-lime-300 font-semibold uppercase px-8 py-3 rounded-full transition"
          >
            Start Trading
          </a>
        </div>
      </div>
    </section>
  );
};
 