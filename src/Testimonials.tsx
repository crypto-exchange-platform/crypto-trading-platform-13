import { FC } from 'react';

const testimonials = [
  {
    name: 'Alice Nakamoto',
    title: 'Crypto Analyst @ BlockSphere',
    feedback:
      'CryptoLanding has redefined my trading strategy. Clean UI, real-time data, and seamless execution!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'James Tanaka',
    title: 'FX Trader @ Tokyo Exchange',
    feedback:
      'The forex insights and portfolio tracking tools are top-tier. This platform feels like the future.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Lina Krüger',
    title: 'DeFi Strategist @ MetaYield',
    feedback:
      'Efficient, secure, and beautifully designed. I confidently recommend CryptoLanding to every trader I know.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Rahul Mehta',
    title: 'Blockchain Educator @ LearnChain',
    feedback:
      'The UI feels premium and the platform’s focus on usability is top-notch. Love using it with my students.',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Sara Velasquez',
    title: 'Market Strategist @ CoinMinds',
    feedback:
      'I appreciate how clean and fast everything is — it’s become a daily part of my market routine.',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    name: 'Tom Becker',
    title: 'Investor @ Digital Horizons',
    feedback:
      'CryptoLanding provides clarity and confidence in a volatile market. Best UX in the industry.',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
];

export const TestimonialsSection: FC = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-12 text-lime-400">
          What Traders Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-black border border-gray-700 rounded-xl p-6 text-center shadow-md hover:shadow-lime-500/20 transition"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-lime-400"
              />
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{t.title}</p>
              <p className="text-gray-300 text-sm italic">“{t.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 