import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
const valuationData = [{
  name: 'ServiceTitan',
  value: 9500,
  label: '$9.5B+'
}, {
  name: 'Jobber',
  value: 2000,
  label: '$2B'
}, {
  name: 'Housecall Pro',
  value: 1500,
  label: '$1.5B'
}, {
  name: 'Levels',
  value: 1000,
  label: '$1B'
}, {
  name: 'Noom',
  value: 750,
  label: '$750M'
}, {
  name: 'SMB (5yr)',
  value: 75,
  label: '$75M'
}, {
  name: 'SMB (Current)',
  value: 7.5,
  label: '$7.5M'
}];
export function TechnologySection() {
  return <section id="technology" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technology Platform
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Building Value Through Technology
            </h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3 text-steelBlue">
                FSM SaaS Valuation Comparables
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>ServiceTitan: Valued at over $9.5 billion</li>
                <li>Jobber: Industry-leading field service platform</li>
                <li>Housecall Pro: Comprehensive service management</li>
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3 text-steelBlue">
                Wellness Platform Comparables
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Levels: Health metrics and analytics platform</li>
                <li>Noom: Behavioral change and wellness app</li>
                <li>Both valued between $500M–$1B</li>
              </ul>
            </div>
            <div className="bg-black/40 p-6 rounded-lg border-l-4 border-crossGold">
              <h4 className="text-lg font-semibold mb-2 text-white">
                SMB's Valuation Trajectory
              </h4>
              <p className="mb-2 text-gray-300">
                Inception valuation: $5M–$10M
              </p>
              <p className="text-gray-300">
                5-year projected value: $50M–$100M
              </p>
            </div>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={valuationData} layout="vertical" margin={{
              top: 20,
              right: 30,
              left: 100,
              bottom: 20
            }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} stroke="#333" />
                <XAxis type="number" tickFormatter={value => `$${value / 1000}B`} domain={[0, 10000]} stroke="#fff" />
                <YAxis dataKey="name" type="category" width={100} stroke="#fff" />
                <Tooltip formatter={value => [`$${(value / 1000).toFixed(1)}B`, 'Valuation']} labelFormatter={label => `${label}`} contentStyle={{
                backgroundColor: '#1C1C1E',
                borderColor: '#333',
                color: '#fff'
              }} />
                <Bar dataKey="value" fill={entry => entry.name.includes('SMB') ? '#FFD700' : '#3A6EA5'} radius={[0, 10, 10, 0]}>
                  <LabelList dataKey="label" position="right" fill="#fff" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>;
}