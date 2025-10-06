import React from 'react';
import { BarChart2, Users, Calendar, FileText, Award, Settings } from 'lucide-react';
export function PlatformMockupSection() {
  return <section id="platform-mockup" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          The SMB Platform
        </h2>
        <div className="max-w-5xl mx-auto bg-charcoal rounded-xl overflow-hidden shadow-2xl border border-white/10">
          {/* Platform Header */}
          <div className="bg-black p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/SMB_Logo.png" alt="SMB Logo" className="h-10 w-10 mr-3" />
              <span className="font-bold text-crossGold">Send Me Pro</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-charcoal/70 p-2 rounded-full">
                <Settings size={18} className="text-white/70" />
              </div>
              <div className="bg-crossGold text-black font-bold text-sm px-3 py-1 rounded-full">
                Admin
              </div>
            </div>
          </div>
          {/* Platform Content */}
          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div className="w-48 bg-black/50 border-r border-white/10 py-6 px-3">
              <ul className="space-y-4">
                <li className="bg-crossGold/20 p-2 rounded flex items-center text-crossGold">
                  <BarChart2 size={18} className="mr-2" />
                  <span className="text-sm font-medium">Dashboard</span>
                </li>
                <li className="p-2 rounded flex items-center text-white/70 hover:text-white">
                  <Users size={18} className="mr-2" />
                  <span className="text-sm font-medium">Mentorship</span>
                </li>
                <li className="p-2 rounded flex items-center text-white/70 hover:text-white">
                  <Calendar size={18} className="mr-2" />
                  <span className="text-sm font-medium">Projects</span>
                </li>
                <li className="p-2 rounded flex items-center text-white/70 hover:text-white">
                  <FileText size={18} className="mr-2" />
                  <span className="text-sm font-medium">Resources</span>
                </li>
                <li className="p-2 rounded flex items-center text-white/70 hover:text-white">
                  <Award size={18} className="mr-2" />
                  <span className="text-sm font-medium">Skills</span>
                </li>
              </ul>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
              <h3 className="text-xl font-bold mb-6">
                Community Impact Dashboard
              </h3>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                  <div className="text-sm text-white/70 mb-1">
                    Active Mentorships
                  </div>
                  <div className="text-2xl font-bold text-white">87</div>
                  <div className="text-xs text-green-500 mt-1">
                    ↑ 12% this month
                  </div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                  <div className="text-sm text-white/70 mb-1">
                    Projects Completed
                  </div>
                  <div className="text-2xl font-bold text-white">24</div>
                  <div className="text-xs text-green-500 mt-1">
                    ↑ 8% this month
                  </div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                  <div className="text-sm text-white/70 mb-1">
                    Skills Certified
                  </div>
                  <div className="text-2xl font-bold text-white">156</div>
                  <div className="text-xs text-green-500 mt-1">
                    ↑ 15% this month
                  </div>
                </div>
              </div>
              {/* Recent Activity */}
              <div className="bg-black/30 rounded-lg border border-white/10 mb-8">
                <div className="border-b border-white/10 p-4">
                  <h4 className="font-bold">Recent Activity</h4>
                </div>
                <div className="p-4">
                  <ul className="space-y-4">
                    <li className="flex items-center pb-3 border-b border-white/5">
                      <div className="w-10 h-10 rounded-full bg-steelBlue/20 flex items-center justify-center mr-3">
                        <Users size={16} className="text-steelBlue" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          Jackson completed electrical wiring certification
                        </div>
                        <div className="text-xs text-white/50">
                          Today at 2:30 PM
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center pb-3 border-b border-white/5">
                      <div className="w-10 h-10 rounded-full bg-crossGold/20 flex items-center justify-center mr-3">
                        <Calendar size={16} className="text-crossGold" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          New project scheduled: Trailer #14 Renovation
                        </div>
                        <div className="text-xs text-white/50">
                          Yesterday at 10:15 AM
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-forestGreen/20 flex items-center justify-center mr-3">
                        <Award size={16} className="text-forestGreen" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          Pastor Mike completed mentorship training
                        </div>
                        <div className="text-xs text-white/50">2 days ago</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Upcoming Projects */}
              <div className="bg-black/30 rounded-lg border border-white/10">
                <div className="border-b border-white/10 p-4">
                  <h4 className="font-bold">Upcoming Projects</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="bg-charcoal/50 p-3 rounded flex justify-between items-center">
                      <div>
                        <div className="font-medium">
                          Oakwood Trailer Park - Unit 7
                        </div>
                        <div className="text-sm text-white/70">
                          Plumbing repairs, drywall, painting
                        </div>
                      </div>
                      <div className="bg-crossGold text-black text-xs px-2 py-1 rounded-full font-bold">
                        Starting June 15
                      </div>
                    </div>
                    <div className="bg-charcoal/50 p-3 rounded flex justify-between items-center">
                      <div>
                        <div className="font-medium">
                          Westside Apartments - Building C
                        </div>
                        <div className="text-sm text-white/70">
                          Electrical upgrades, fixtures
                        </div>
                      </div>
                      <div className="bg-crossGold text-black text-xs px-2 py-1 rounded-full font-bold">
                        Starting June 22
                      </div>
                    </div>
                    <div className="bg-charcoal/50 p-3 rounded flex justify-between items-center">
                      <div>
                        <div className="font-medium">
                          Highland Community - 4 Units
                        </div>
                        <div className="text-sm text-white/70">
                          Full renovation project
                        </div>
                      </div>
                      <div className="bg-crossGold text-black text-xs px-2 py-1 rounded-full font-bold">
                        Starting July 5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg text-gray-300">
            Our SaaS platform connects churches, mentors, and youth in a
            seamless ecosystem that tracks progress, manages projects, and
            measures impact across communities.
          </p>
          <div className="mt-8">
            <a href="#technology" className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-3 px-8 rounded-full inline-block transition-colors">
              Learn More About Our Technology
            </a>
          </div>
        </div>
      </div>
    </section>;
}