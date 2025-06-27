import { FC } from 'react';

const forexNews = [
  {
    title: 'USD Hits 3-Week High on Rate Hike Expectations',
    source: 'Reuters',
    time: '2h ago',
    summary: 'The U.S. dollar surged amid signs that the Fed may hold rates higher for longer.',
    image: 'https://images.unsplash.com/photo-1644363832001-0876e81f37a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGJpdGNvaW58ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'EUR/USD Weakens Ahead of ECB Decision',
    source: 'Bloomberg',
    time: '4h ago',
    summary: 'Investors brace for the ECB’s stance on inflation and monetary tightening.',
    image: 'https://plus.unsplash.com/premium_photo-1675876765105-f1422c25011a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJpdGNvaW58ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'JPY Slides as BOJ Maintains Ultra-Loose Policy',
    source: 'Nikkei Asia',
    time: '1h ago',
    summary: 'The yen declined after the Bank of Japan held rates steady despite inflation.',
    image: 'https://images.unsplash.com/photo-1660050913083-5514bb379e78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJpdGNvaW58ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'GBP Holds Firm Amid Economic Recovery Signs',
    source: 'Financial Times',
    time: '3h ago',
    summary: 'Sterling remains resilient as UK economic data points to gradual recovery.',
    image: 'https://images.unsplash.com/photo-1621501011941-c8ee93618c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJpdGNvaW58ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'AUD Gains on Commodity Price Rally',
    source: 'CNBC',
    time: '5h ago',
    summary: 'Australian dollar climbs following strong iron ore and gold performance.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2540352917/display_1500/stock-vector-bullish-bitcoin-market-concept-with-charging-bull-and-rising-cryptocurrency-chart-symbolizing-2540352917.jpg',
  },
  {
    title: 'CHF Steady as Swiss Inflation Softens',
    source: 'Investing.com',
    time: '6h ago',
    summary: 'The Swiss franc trades flat as inflation pressures show signs of easing.',
    image: 'https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Yml0Y29pbnxlbnwwfHwwfHx8MA%3D%3D',
  },
];

export const ForexNewsSection: FC = () => {
  return (
    <section
      id="news"
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-12 text-lime-400">
          Forex Market News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {forexNews.map((news, idx) => (
            <div
              key={idx}
              className="bg-gray-950 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lime-500/20 transition duration-300"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lime-400 text-sm font-medium">{news.source}</span>
                  <span className="text-gray-500 text-sm">{news.time}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{news.title}</h3>
                <p className="text-gray-400 text-sm">{news.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 