import React, { useState } from 'react';
import { UserCircle, Lock, ChevronRight, Bell, MessageSquare, Calendar, FileText, Settings, Users } from 'lucide-react';
type UserRole = 'youth' | 'mentor' | 'fbo' | 'partner';
export function CommunityPortalPreview() {
  const [activeTab, setActiveTab] = useState<UserRole>('youth');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const handleRoleChange = (role: UserRole) => {
    setActiveTab(role);
    setShowLoginForm(false);
  };
  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'youth':
        return 'bg-steelBlue';
      case 'mentor':
        return 'bg-crossGold';
      case 'fbo':
        return 'bg-forestGreen';
      case 'partner':
        return 'bg-brickRed';
    }
  };
  return <section id="community-portal" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Community Portal
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Our secure online platform connects youth, mentors, faith-based
          organizations, and partners in a collaborative ecosystem
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            {/* Portal header with tabs */}
            <div className="bg-black border-b border-white/10 p-4">
              <div className="flex flex-wrap justify-center gap-2">
                <button onClick={() => handleRoleChange('youth')} className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'youth' ? 'bg-steelBlue text-white' : 'bg-charcoal/50 text-white/70 hover:text-white hover:bg-charcoal/70'}`}>
                  Youth Portal
                </button>
                <button onClick={() => handleRoleChange('mentor')} className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'mentor' ? 'bg-crossGold text-black' : 'bg-charcoal/50 text-white/70 hover:text-white hover:bg-charcoal/70'}`}>
                  Mentor Portal
                </button>
                <button onClick={() => handleRoleChange('fbo')} className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'fbo' ? 'bg-forestGreen text-white' : 'bg-charcoal/50 text-white/70 hover:text-white hover:bg-charcoal/70'}`}>
                  FBO Portal
                </button>
                <button onClick={() => handleRoleChange('partner')} className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'partner' ? 'bg-brickRed text-white' : 'bg-charcoal/50 text-white/70 hover:text-white hover:bg-charcoal/70'}`}>
                  Partner Portal
                </button>
              </div>
            </div>
            {/* Portal content */}
            <div className="p-6 md:p-8">
              {showLoginForm ? <div className="max-w-md mx-auto bg-charcoal/50 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-6 text-center">
                    Log in to{' '}
                    {activeTab === 'youth' ? 'Youth' : activeTab === 'mentor' ? 'Mentor' : activeTab === 'fbo' ? 'FBO' : 'Partner'}{' '}
                    Portal
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="username" className="block text-white/70 text-sm mb-2">
                        Username or Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserCircle size={20} className="text-white/50" />
                        </div>
                        <input type="text" id="username" className="w-full bg-black/50 border border-white/20 rounded-lg pl-10 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your username or email" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-white/70 text-sm mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock size={20} className="text-white/50" />
                        </div>
                        <input type="password" id="password" className="w-full bg-black/50 border border-white/20 rounded-lg pl-10 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your password" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-sm text-white/70">
                          Remember me
                        </label>
                      </div>
                      <button type="button" className="text-sm text-white/70 hover:text-white">
                        Forgot password?
                      </button>
                    </div>
                    <button type="button" className={`w-full py-3 rounded-lg font-bold text-center ${getRoleColor(activeTab)} ${activeTab === 'mentor' ? 'text-black' : 'text-white'}`}>
                      Log In
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <button onClick={() => setShowLoginForm(false)} className="text-white/70 hover:text-white text-sm">
                      ← Back to portal preview
                    </button>
                  </div>
                </div> : <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">
                      {activeTab === 'youth' ? 'Youth Dashboard' : activeTab === 'mentor' ? 'Mentor Dashboard' : activeTab === 'fbo' ? 'FBO Dashboard' : 'Partner Dashboard'}
                    </h3>
                    <button onClick={() => setShowLoginForm(true)} className={`px-4 py-2 rounded-lg font-medium text-sm ${getRoleColor(activeTab)} ${activeTab === 'mentor' ? 'text-black' : 'text-white'}`}>
                      Log In
                    </button>
                  </div>
                  {/* Dashboard preview content */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-charcoal/50 rounded-lg border border-white/10 overflow-hidden">
                      <div className="p-4 border-b border-white/10 font-medium">
                        {activeTab === 'youth' ? 'My Progress' : activeTab === 'mentor' ? 'My Mentees' : activeTab === 'fbo' ? 'Our Outposts' : 'Our Impact'}
                      </div>
                      <div className="p-4 space-y-4">
                        {activeTab === 'youth' && <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-white/70">
                                Electrical Skills
                              </span>
                              <div className="w-1/2 h-2 bg-black/50 rounded-full overflow-hidden">
                                <div className="h-full bg-steelBlue rounded-full" style={{
                            width: '75%'
                          }}></div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white/70">
                                Plumbing Skills
                              </span>
                              <div className="w-1/2 h-2 bg-black/50 rounded-full overflow-hidden">
                                <div className="h-full bg-steelBlue rounded-full" style={{
                            width: '45%'
                          }}></div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white/70">
                                Carpentry Skills
                              </span>
                              <div className="w-1/2 h-2 bg-black/50 rounded-full overflow-hidden">
                                <div className="h-full bg-steelBlue rounded-full" style={{
                            width: '60%'
                          }}></div>
                              </div>
                            </div>
                          </div>}
                        {activeTab === 'mentor' && <div className="space-y-3">
                            <div className="flex items-center p-2 bg-black/30 rounded-lg">
                              <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center mr-3">
                                <span className="text-white/70">J</span>
                              </div>
                              <div>
                                <p className="font-medium">Jackson T.</p>
                                <p className="text-sm text-white/70">
                                  Electrical Training
                                </p>
                              </div>
                              <ChevronRight size={16} className="ml-auto text-white/50" />
                            </div>
                            <div className="flex items-center p-2 bg-black/30 rounded-lg">
                              <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center mr-3">
                                <span className="text-white/70">M</span>
                              </div>
                              <div>
                                <p className="font-medium">Marcus W.</p>
                                <p className="text-sm text-white/70">
                                  Carpentry Training
                                </p>
                              </div>
                              <ChevronRight size={16} className="ml-auto text-white/50" />
                            </div>
                          </div>}
                        {activeTab === 'fbo' && <div className="space-y-3">
                            <div className="flex items-center p-2 bg-black/30 rounded-lg">
                              <div className="w-10 h-10 rounded-full bg-forestGreen/20 flex items-center justify-center mr-3">
                                <span className="text-forestGreen">J</span>
                              </div>
                              <div>
                                <p className="font-medium">
                                  Jacksonville Outpost
                                </p>
                                <p className="text-sm text-white/70">
                                  3 mentors, 12 youth
                                </p>
                              </div>
                              <ChevronRight size={16} className="ml-auto text-white/50" />
                            </div>
                            <div className="flex items-center p-2 bg-black/30 rounded-lg">
                              <div className="w-10 h-10 rounded-full bg-forestGreen/20 flex items-center justify-center mr-3">
                                <span className="text-forestGreen">W</span>
                              </div>
                              <div>
                                <p className="font-medium">Westside Outpost</p>
                                <p className="text-sm text-white/70">
                                  2 mentors, 8 youth
                                </p>
                              </div>
                              <ChevronRight size={16} className="ml-auto text-white/50" />
                            </div>
                          </div>}
                        {activeTab === 'partner' && <div className="space-y-3">
                            <div className="p-2 bg-black/30 rounded-lg">
                              <div className="flex justify-between mb-1">
                                <span>Youth Supported</span>
                                <span className="font-bold text-brickRed">
                                  24
                                </span>
                              </div>
                              <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                                <div className="h-full bg-brickRed rounded-full" style={{
                            width: '80%'
                          }}></div>
                              </div>
                            </div>
                            <div className="p-2 bg-black/30 rounded-lg">
                              <div className="flex justify-between mb-1">
                                <span>Projects Funded</span>
                                <span className="font-bold text-brickRed">
                                  6
                                </span>
                              </div>
                              <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                                <div className="h-full bg-brickRed rounded-full" style={{
                            width: '60%'
                          }}></div>
                              </div>
                            </div>
                          </div>}
                      </div>
                    </div>
                    <div className="bg-charcoal/50 rounded-lg border border-white/10 overflow-hidden">
                      <div className="p-4 border-b border-white/10 font-medium">
                        {activeTab === 'youth' ? 'Upcoming Training' : activeTab === 'mentor' ? 'Scheduled Sessions' : activeTab === 'fbo' ? 'Upcoming Projects' : 'Resource Allocation'}
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          {(activeTab === 'youth' || activeTab === 'mentor' || activeTab === 'fbo') && <>
                              <div className="flex items-start p-3 bg-black/30 rounded-lg">
                                <Calendar size={18} className={`mr-3 ${activeTab === 'youth' ? 'text-steelBlue' : activeTab === 'mentor' ? 'text-crossGold' : 'text-forestGreen'}`} />
                                <div>
                                  <p className="font-medium">
                                    Electrical Wiring Workshop
                                  </p>
                                  <p className="text-sm text-white/70">
                                    Tomorrow, 3:00 PM - 5:00 PM
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start p-3 bg-black/30 rounded-lg">
                                <Calendar size={18} className={`mr-3 ${activeTab === 'youth' ? 'text-steelBlue' : activeTab === 'mentor' ? 'text-crossGold' : 'text-forestGreen'}`} />
                                <div>
                                  <p className="font-medium">
                                    Drywall Installation
                                  </p>
                                  <p className="text-sm text-white/70">
                                    Friday, 2:00 PM - 6:00 PM
                                  </p>
                                </div>
                              </div>
                            </>}
                          {activeTab === 'partner' && <>
                              <div className="p-3 bg-black/30 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium">
                                    Tools & Equipment
                                  </span>
                                  <span className="text-brickRed">$3,500</span>
                                </div>
                                <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                                  <div className="h-full bg-brickRed rounded-full" style={{
                              width: '70%'
                            }}></div>
                                </div>
                              </div>
                              <div className="p-3 bg-black/30 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium">
                                    Building Materials
                                  </span>
                                  <span className="text-brickRed">$5,200</span>
                                </div>
                                <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                                  <div className="h-full bg-brickRed rounded-full" style={{
                              width: '85%'
                            }}></div>
                                </div>
                              </div>
                            </>}
                        </div>
                      </div>
                    </div>
                    <div className="bg-charcoal/50 rounded-lg border border-white/10 overflow-hidden">
                      <div className="p-4 border-b border-white/10 font-medium">
                        {activeTab === 'youth' ? 'Notifications' : activeTab === 'mentor' ? 'Resources' : activeTab === 'fbo' ? 'Community Updates' : 'Impact Reports'}
                      </div>
                      <div className="p-4">
                        {activeTab === 'youth' && <div className="space-y-3">
                            <div className="flex items-start p-2 bg-black/30 rounded-lg">
                              <Bell size={18} className="text-steelBlue mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm">
                                  Your carpentry certification has been
                                  scheduled for next week.
                                </p>
                                <p className="text-xs text-white/50 mt-1">
                                  2 hours ago
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start p-2 bg-black/30 rounded-lg">
                              <MessageSquare size={18} className="text-steelBlue mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm">
                                  New message from your mentor about tomorrow's
                                  session.
                                </p>
                                <p className="text-xs text-white/50 mt-1">
                                  Yesterday
                                </p>
                              </div>
                            </div>
                          </div>}
                        {activeTab === 'mentor' && <div className="space-y-3">
                            <div className="flex items-start p-2 bg-black/30 rounded-lg">
                              <FileText size={18} className="text-crossGold mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium">
                                  Mentorship Handbook
                                </p>
                                <p className="text-xs text-white/70">
                                  Guide to effective youth mentoring
                                </p>
                              </div>
                              <ChevronRight size={16} className="ml-auto text-white/50" />
                            </div>
                            <div className="flex items-start p-2 bg-black/30 rounded-lg">
                              <FileText size={18} className="text-crossGold mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium">
                                  Training Materials
                                </p>
                                <p className="text-xs text-white/70">
                                  Lesson plans and curriculum
                                </p>
                              </div>
                              <ChevronRight size={16} className="ml-auto text-white/50" />
                            </div>
                          </div>}
                        {activeTab === 'fbo' && <div className="space-y-3">
                            <div className="flex items-start p-2 bg-black/30 rounded-lg">
                              <Users size={18} className="text-forestGreen mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm">
                                  3 new youth have joined the Jacksonville
                                  Outpost program this month.
                                </p>
                                <p className="text-xs text-white/50 mt-1">
                                  1 week ago
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start p-2 bg-black/30 rounded-lg">
                              <Settings size={18} className="text-forestGreen mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm">
                                  Westside Outpost rehabilitation is 75%
                                  complete.
                                </p>
                                <p className="text-xs text-white/50 mt-1">
                                  3 days ago
                                </p>
                              </div>
                            </div>
                          </div>}
                        {activeTab === 'partner' && <div className="space-y-3">
                            <div className="flex items-start p-2 bg-black/30 rounded-lg">
                              <FileText size={18} className="text-brickRed mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium">
                                  Q2 Impact Report
                                </p>
                                <p className="text-xs text-white/70">
                                  Detailed analysis of your contributions
                                </p>
                              </div>
                              <ChevronRight size={16} className="ml-auto text-white/50" />
                            </div>
                            <div className="flex items-start p-2 bg-black/30 rounded-lg">
                              <FileText size={18} className="text-brickRed mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium">
                                  Success Stories
                                </p>
                                <p className="text-xs text-white/70">
                                  Youth supported by your partnership
                                </p>
                              </div>
                              <ChevronRight size={16} className="ml-auto text-white/50" />
                            </div>
                          </div>}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-white/70 text-sm mb-4">
                      This is a preview of our secure community portal. Log in
                      to access your full dashboard.
                    </p>
                    <button onClick={() => setShowLoginForm(true)} className={`px-6 py-3 rounded-lg font-medium ${getRoleColor(activeTab)} ${activeTab === 'mentor' ? 'text-black' : 'text-white'}`}>
                      Log In to{' '}
                      {activeTab === 'youth' ? 'Youth' : activeTab === 'mentor' ? 'Mentor' : activeTab === 'fbo' ? 'FBO' : 'Partner'}{' '}
                      Portal
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300">
            Our community portal connects all stakeholders in the Send Me
            Builders ecosystem, providing tools for tracking progress, managing
            projects, and measuring impact.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-3 px-8 rounded-full transition-colors">
              Request Portal Access
            </a>
            <a href="#resources" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors">
              View Resources
            </a>
          </div>
        </div>
      </div>
    </section>;
}