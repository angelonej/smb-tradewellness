import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HomeIcon, BookOpenIcon } from 'lucide-react';
const data = [{
  name: 'Annual Shortage',
  value: 450000,
  fill: '#FFD700'
}];
export function CrisisSection() {
  return <section id="crisis" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">The Crisis</h2>
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="bg-steelBlue p-4 rounded-full inline-block mb-4">
              <div size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Trades Gap</h3>
            <p className="text-gray-300">
              400,000–500,000 new workers needed annually in the trades
              industry, creating a critical workforce shortage.
            </p>
          </div>
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="bg-steelBlue p-4 rounded-full inline-block mb-4">
              <HomeIcon size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Youth Crisis</h3>
            <p className="text-gray-300">
              Millions of youth in trailers and apartments lack father figures
              and clear pathways to meaningful careers.
            </p>
          </div>
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="bg-steelBlue p-4 rounded-full inline-block mb-4">
              <BookOpenIcon size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Church Disconnect</h3>
            <p className="text-gray-300">
              Pastors are not embedded in high-need neighborhoods where their
              guidance and support are most needed.
            </p>
          </div>
        </div>
        <div className="bg-black/40 p-8 rounded-lg shadow-lg border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Annual Skilled Trades Workforce Shortage
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{
              top: 20,
              right: 30,
              left: 60,
              bottom: 20
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis type="number" domain={[0, 500000]} tickFormatter={tick => `${tick / 1000}k`} stroke="#fff" />
                <YAxis dataKey="name" type="category" stroke="#fff" />
                <Tooltip formatter={value => [`${value.toLocaleString()} workers`, 'Needed Annually']} contentStyle={{
                backgroundColor: '#1C1C1E',
                borderColor: '#333',
                color: '#fff'
              }} />
                <Bar dataKey="value" fill="#FFD700" radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-gray-300 mt-4">
            The trades industry faces a critical shortage, with nearly half a
            million new workers needed each year.
          </p>
        </div>
      </div>
    </section>;
}