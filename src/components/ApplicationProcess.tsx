import React, { useState } from 'react';
import { ClipboardCheck, UserCheck, BookOpen, Handshake, CheckCircle, ArrowRight, ChevronRight, FileText, Calendar, Users } from 'lucide-react';
type ApplicationType = 'mentor' | 'fbo' | 'youth' | 'partner';
type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};
export function ApplicationProcess() {
  const [activeTab, setActiveTab] = useState<ApplicationType>('mentor');
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const processSteps: Record<ApplicationType, ProcessStep[]> = {
    mentor: [{
      id: 1,
      title: 'Application',
      description: 'Fill out the online application form with your contact information, trade skills, and mentorship interests.',
      icon: <ClipboardCheck size={24} className="text-white" />
    }, {
      id: 2,
      title: 'Background Check',
      description: 'Complete a background check to ensure the safety and security of our youth participants.',
      icon: <UserCheck size={24} className="text-white" />
    }, {
      id: 3,
      title: 'Training',
      description: 'Participate in our mentor training program to learn effective mentorship techniques and our program model.',
      icon: <BookOpen size={24} className="text-white" />
    }, {
      id: 4,
      title: 'Matching',
      description: 'Get matched with youth based on your skills, interests, and availability for maximum impact.',
      icon: <Handshake size={24} className="text-white" />
    }],
    fbo: [{
      id: 1,
      title: 'Initial Consultation',
      description: "Schedule a call with our team to discuss your organization's vision for community impact and outpost potential.",
      icon: <ClipboardCheck size={24} className="text-white" />
    }, {
      id: 2,
      title: 'Partnership Agreement',
      description: 'Review and sign our partnership agreement outlining roles, responsibilities, and resource commitments.',
      icon: <FileText size={24} className="text-white" />
    }, {
      id: 3,
      title: 'Outpost Planning',
      description: 'Work with our team to identify trailer locations, renovation needs, and youth pastor placement.',
      icon: <Calendar size={24} className="text-white" />
    }, {
      id: 4,
      title: 'Launch & Support',
      description: 'Receive ongoing support as you launch your outpost and begin mentoring youth in your community.',
      icon: <Handshake size={24} className="text-white" />
    }],
    youth: [{
      id: 1,
      title: 'Application',
      description: 'Submit a simple application form with your contact information and interests in trades training.',
      icon: <ClipboardCheck size={24} className="text-white" />
    }, {
      id: 2,
      title: 'Interview',
      description: 'Meet with an outpost leader to discuss your goals, interests, and commitment to the program.',
      icon: <Users size={24} className="text-white" />
    }, {
      id: 3,
      title: 'Orientation',
      description: 'Attend an orientation session to learn about the program, expectations, and opportunities.',
      icon: <BookOpen size={24} className="text-white" />
    }, {
      id: 4,
      title: 'Mentor Matching',
      description: 'Get matched with mentors based on your interests and career goals for personalized guidance.',
      icon: <Handshake size={24} className="text-white" />
    }],
    partner: [{
      id: 1,
      title: 'Initial Discussion',
      description: "Connect with our team to explore partnership opportunities aligned with your company's goals.",
      icon: <ClipboardCheck size={24} className="text-white" />
    }, {
      id: 2,
      title: 'Partnership Design',
      description: 'Develop a custom partnership package that leverages your resources for maximum community impact.',
      icon: <FileText size={24} className="text-white" />
    }, {
      id: 3,
      title: 'Agreement',
      description: 'Finalize partnership terms, resource commitments, and impact measurement frameworks.',
      icon: <Calendar size={24} className="text-white" />
    }, {
      id: 4,
      title: 'Implementation',
      description: 'Launch your partnership with regular updates, engagement opportunities, and impact reporting.',
      icon: <Handshake size={24} className="text-white" />
    }]
  };
  const getActiveSteps = () => {
    return processSteps[activeTab];
  };
  const getStepColor = (type: ApplicationType) => {
    switch (type) {
      case 'mentor':
        return 'bg-crossGold text-black';
      case 'fbo':
        return 'bg-forestGreen text-white';
      case 'youth':
        return 'bg-steelBlue text-white';
      case 'partner':
        return 'bg-brickRed text-white';
    }
  };
  const getLineColor = (type: ApplicationType) => {
    switch (type) {
      case 'mentor':
        return 'bg-crossGold';
      case 'fbo':
        return 'bg-forestGreen';
      case 'youth':
        return 'bg-steelBlue';
      case 'partner':
        return 'bg-brickRed';
    }
  };
  const handleNextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    } else {
      setShowForm(false);
      setFormStep(1);
    }
  };
  const handleTabChange = (tab: ApplicationType) => {
    setActiveTab(tab);
    setShowForm(false);
    setFormStep(1);
  };
  return <section id="application" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Join the Movement
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Learn how to get involved with Send Me Builders as a mentor, FBO
          partner, youth participant, or corporate partner
        </p>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button onClick={() => handleTabChange('mentor')} className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'mentor' ? 'bg-crossGold text-black' : 'bg-charcoal/70 text-white hover:bg-charcoal'}`}>
            Become a Mentor
          </button>
          <button onClick={() => handleTabChange('fbo')} className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'fbo' ? 'bg-forestGreen text-white' : 'bg-charcoal/70 text-white hover:bg-charcoal'}`}>
            FBO Partnership
          </button>
          <button onClick={() => handleTabChange('youth')} className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'youth' ? 'bg-steelBlue text-white' : 'bg-charcoal/70 text-white hover:bg-charcoal'}`}>
            Youth Application
          </button>
          <button onClick={() => handleTabChange('partner')} className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'partner' ? 'bg-brickRed text-white' : 'bg-charcoal/70 text-white hover:bg-charcoal'}`}>
            Corporate Partnership
          </button>
        </div>
        {!showForm ? <>
            {/* Process steps */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className={`absolute left-8 top-10 bottom-10 w-1 ${getLineColor(activeTab)}`}></div>
                <div className="space-y-12">
                  {getActiveSteps().map((step, index) => <div key={step.id} className="flex items-start">
                      <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${getStepColor(activeTab)} flex items-center justify-center mr-6`}>
                        {step.icon}
                      </div>
                      <div className="pt-3">
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <span className={`mr-2 ${activeTab === 'mentor' ? 'text-crossGold' : activeTab === 'fbo' ? 'text-forestGreen' : activeTab === 'youth' ? 'text-steelBlue' : 'text-brickRed'}`}>
                            Step {index + 1}:
                          </span>{' '}
                          {step.title}
                        </h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>)}
                  <div className="flex items-start">
                    <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white/10 border-2 ${activeTab === 'mentor' ? 'border-crossGold' : activeTab === 'fbo' ? 'border-forestGreen' : activeTab === 'youth' ? 'border-steelBlue' : 'border-brickRed'} flex items-center justify-center mr-6`}>
                      <CheckCircle size={24} className={activeTab === 'mentor' ? 'text-crossGold' : activeTab === 'fbo' ? 'text-forestGreen' : activeTab === 'youth' ? 'text-steelBlue' : 'text-brickRed'} />
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-bold mb-2">
                        Ready to Begin!
                      </h3>
                      <p className="text-gray-300">
                        Start your journey with Send Me Builders and make a
                        lasting impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <button onClick={() => setShowForm(true)} className={`px-8 py-4 rounded-lg font-bold text-lg transition-colors ${activeTab === 'mentor' ? 'bg-crossGold text-black hover:bg-crossGold/90' : activeTab === 'fbo' ? 'bg-forestGreen text-white hover:bg-forestGreen/90' : activeTab === 'youth' ? 'bg-steelBlue text-white hover:bg-steelBlue/90' : 'bg-brickRed text-white hover:bg-brickRed/90'}`}>
                  Start Application Process
                </button>
              </div>
            </div>
          </> : <>
            {/* Application form */}
            <div className="max-w-2xl mx-auto">
              <div className={`bg-charcoal/70 rounded-xl overflow-hidden shadow-xl border ${activeTab === 'mentor' ? 'border-crossGold/30' : activeTab === 'fbo' ? 'border-forestGreen/30' : activeTab === 'youth' ? 'border-steelBlue/30' : 'border-brickRed/30'}`}>
                {/* Form header */}
                <div className={`${activeTab === 'mentor' ? 'bg-crossGold text-black' : activeTab === 'fbo' ? 'bg-forestGreen text-white' : activeTab === 'youth' ? 'bg-steelBlue text-white' : 'bg-brickRed text-white'} p-6`}>
                  <h3 className="text-xl font-bold">
                    {activeTab === 'mentor' ? 'Mentor Application' : activeTab === 'fbo' ? 'FBO Partnership Application' : activeTab === 'youth' ? 'Youth Program Application' : 'Corporate Partnership Inquiry'}
                  </h3>
                  <p className="opacity-80">Step {formStep} of 3</p>
                </div>
                {/* Form steps */}
                <div className="p-6">
                  {formStep === 1 && <div className="space-y-6">
                      <h4 className="text-lg font-bold mb-4">
                        Basic Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="fullName" className="block text-white/70 text-sm mb-2">
                            Full Name
                          </label>
                          <input type="text" id="fullName" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your full name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-white/70 text-sm mb-2">
                            Email Address
                          </label>
                          <input type="email" id="email" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your email address" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-white/70 text-sm mb-2">
                            Phone Number
                          </label>
                          <input type="tel" id="phone" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your phone number" />
                        </div>
                        <div>
                          <label htmlFor="location" className="block text-white/70 text-sm mb-2">
                            Location (City, State)
                          </label>
                          <input type="text" id="location" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your city and state" />
                        </div>
                      </div>
                    </div>}
                  {formStep === 2 && <div className="space-y-6">
                      <h4 className="text-lg font-bold mb-4">
                        {activeTab === 'mentor' ? 'Skills & Experience' : activeTab === 'fbo' ? 'FBO Information' : activeTab === 'youth' ? 'Interests & Goals' : 'Partnership Interests'}
                      </h4>
                      <div className="space-y-4">
                        {activeTab === 'mentor' && <>
                            <fieldset>
                              <legend className="block text-white/70 text-sm mb-2">
                                Trade Skills (Select all that apply)
                              </legend>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <input type="checkbox" id="electrical" className="mr-2" />
                                  <label htmlFor="electrical">Electrical</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="plumbing" className="mr-2" />
                                  <label htmlFor="plumbing">Plumbing</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="carpentry" className="mr-2" />
                                  <label htmlFor="carpentry">Carpentry</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="hvac" className="mr-2" />
                                  <label htmlFor="hvac">HVAC</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="other" className="mr-2" />
                                  <label htmlFor="other">
                                    Other (please specify)
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                            <div>
                              <label htmlFor="experience" className="block text-white/70 text-sm mb-2">
                                Years of Experience
                              </label>
                              <select id="experience" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30">
                                <option value="">
                                  Select years of experience
                                </option>
                                <option value="1-3">1-3 years</option>
                                <option value="4-7">4-7 years</option>
                                <option value="8-15">8-15 years</option>
                                <option value="15+">15+ years</option>
                              </select>
                            </div>
                          </>}
                        {activeTab === 'fbo' && <>
                            <div>
                              <label htmlFor="churchName" className="block text-white/70 text-sm mb-2">
                                Organization Name
                              </label>
                              <input type="text" id="churchName" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your organization name" />
                            </div>
                            <div>
                              <label htmlFor="denomination" className="block text-white/70 text-sm mb-2">
                                Affiliation
                              </label>
                              <input type="text" id="denomination" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your affiliation" />
                            </div>
                            <div>
                              <label htmlFor="congregationSize" className="block text-white/70 text-sm mb-2">
                                Organization Size
                              </label>
                              <select id="congregationSize" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30">
                                <option value="">
                                  Select organization size
                                </option>
                                <option value="under-100">Under 100</option>
                                <option value="100-250">100-250</option>
                                <option value="251-500">251-500</option>
                                <option value="501-1000">501-1000</option>
                                <option value="1000+">1000+</option>
                              </select>
                            </div>
                          </>}
                        {activeTab === 'youth' && <>
                            <div>
                              <label htmlFor="age" className="block text-white/70 text-sm mb-2">
                                Age
                              </label>
                              <input type="number" id="age" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your age" min="16" max="24" />
                            </div>
                            <fieldset>
                              <legend className="block text-white/70 text-sm mb-2">
                                Trade Interests (Select all that apply)
                              </legend>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <input type="checkbox" id="electrical-youth" className="mr-2" />
                                  <label htmlFor="electrical-youth">
                                    Electrical
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="plumbing-youth" className="mr-2" />
                                  <label htmlFor="plumbing-youth">
                                    Plumbing
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="carpentry-youth" className="mr-2" />
                                  <label htmlFor="carpentry-youth">
                                    Carpentry
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="hvac-youth" className="mr-2" />
                                  <label htmlFor="hvac-youth">HVAC</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="other-youth" className="mr-2" />
                                  <label htmlFor="other-youth">
                                    Other (please specify)
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                            <div>
                              <label htmlFor="status" className="block text-white/70 text-sm mb-2">
                                Current Education/Employment Status
                              </label>
                              <select id="status" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30">
                                <option value="">
                                  Select your current status
                                </option>
                                <option value="high-school">
                                  In high school
                                </option>
                                <option value="hs-graduate">
                                  High school graduate
                                </option>
                                <option value="some-college">
                                  Some college
                                </option>
                                <option value="part-time">
                                  Employed part-time
                                </option>
                                <option value="full-time">
                                  Employed full-time
                                </option>
                                <option value="neet">
                                  Not in education or employment
                                </option>
                              </select>
                            </div>
                          </>}
                        {activeTab === 'partner' && <>
                            <div>
                              <label htmlFor="companyName" className="block text-white/70 text-sm mb-2">
                                Company/Organization Name
                              </label>
                              <input type="text" id="companyName" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your company name" />
                            </div>
                            <div>
                              <label htmlFor="industry" className="block text-white/70 text-sm mb-2">
                                Industry
                              </label>
                              <input type="text" id="industry" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your industry" />
                            </div>
                            <fieldset>
                              <legend className="block text-white/70 text-sm mb-2">
                                Partnership Interests (Select all that apply)
                              </legend>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <input type="checkbox" id="financial" className="mr-2" />
                                  <label htmlFor="financial">
                                    Financial Support
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="in-kind" className="mr-2" />
                                  <label htmlFor="in-kind">
                                    In-kind Donations (Tools, Materials)
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="volunteer" className="mr-2" />
                                  <label htmlFor="volunteer">
                                    Employee Volunteer Program
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="hiring" className="mr-2" />
                                  <label htmlFor="hiring">
                                    Hiring/Apprenticeship Opportunities
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="other-partner" className="mr-2" />
                                  <label htmlFor="other-partner">
                                    Other (please specify)
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                          </>}
                      </div>
                    </div>}
                  {formStep === 3 && <div className="space-y-6">
                      <h4 className="text-lg font-bold mb-4">
                        Additional Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="motivation" className="block text-white/70 text-sm mb-2">
                            {activeTab === 'mentor' ? 'Why do you want to become a mentor?' : activeTab === 'fbo' ? "What is your organization's vision for community impact?" : activeTab === 'youth' ? 'What are your goals for participating in this program?' : "What are your company's community impact goals?"}
                          </label>
                          <textarea id="motivation" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30 h-32" placeholder="Please share your thoughts..."></textarea>
                        </div>
                        <div>
                          <label htmlFor="referral" className="block text-white/70 text-sm mb-2">
                            How did you hear about Send Me Builders?
                          </label>
                          <select id="referral" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30">
                            <option value="">Select an option</option>
                            <option value="website">Website</option>
                            <option value="social">Social Media</option>
                            <option value="friend">Friend/Family</option>
                            <option value="fbo">FBO</option>
                            <option value="event">Community Event</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="terms" className="mr-2" />
                          <label htmlFor="terms" className="text-sm">
                            I agree to the terms and conditions and privacy
                            policy
                          </label>
                        </div>
                      </div>
                    </div>}
                  <div className="mt-8 flex justify-between">
                    <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                      Cancel
                    </button>
                    <button onClick={handleNextStep} className={`px-6 py-2 rounded-lg font-medium flex items-center transition-colors ${activeTab === 'mentor' ? 'bg-crossGold text-black hover:bg-crossGold/90' : activeTab === 'fbo' ? 'bg-forestGreen text-white hover:bg-forestGreen/90' : activeTab === 'youth' ? 'bg-steelBlue text-white hover:bg-steelBlue/90' : 'bg-brickRed text-white hover:bg-brickRed/90'}`}>
                      {formStep === 3 ? 'Submit Application' : 'Next Step'}
                      {formStep < 3 && <ArrowRight size={16} className="ml-2" />}
                    </button>
                  </div>
                </div>
              </div>
              {/* Form steps indicator */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? activeTab === 'mentor' ? 'bg-crossGold text-black' : activeTab === 'fbo' ? 'bg-forestGreen text-white' : activeTab === 'youth' ? 'bg-steelBlue text-white' : 'bg-brickRed text-white' : 'bg-white/20 text-white'}`} aria-label="Step 1">
                    {formStep > 1 ? <CheckCircle size={16} /> : 1}
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${formStep > 1 ? activeTab === 'mentor' ? 'bg-crossGold' : activeTab === 'fbo' ? 'bg-forestGreen' : activeTab === 'youth' ? 'bg-steelBlue' : 'bg-brickRed' : 'bg-white/20'}`} aria-hidden="true"></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? activeTab === 'mentor' ? 'bg-crossGold text-black' : activeTab === 'fbo' ? 'bg-forestGreen text-white' : activeTab === 'youth' ? 'bg-steelBlue text-white' : 'bg-brickRed text-white' : 'bg-white/20 text-white'}`} aria-label="Step 2">
                    {formStep > 2 ? <CheckCircle size={16} /> : 2}
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${formStep > 2 ? activeTab === 'mentor' ? 'bg-crossGold' : activeTab === 'fbo' ? 'bg-forestGreen' : activeTab === 'youth' ? 'bg-steelBlue' : 'bg-brickRed' : 'bg-white/20'}`} aria-hidden="true"></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 3 ? activeTab === 'mentor' ? 'bg-crossGold text-black' : activeTab === 'fbo' ? 'bg-forestGreen text-white' : activeTab === 'youth' ? 'bg-steelBlue text-white' : 'bg-brickRed text-white' : 'bg-white/20 text-white'}`} aria-label="Step 3">
                    {formStep > 3 ? <CheckCircle size={16} /> : 3}
                  </div>
                </div>
              </div>
            </div>
          </>}
        {/* Additional resources */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-charcoal/50 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <FileText size={20} className="text-crossGold mr-2" />
              Application FAQ
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Find answers to common questions about the application process,
              requirements, and expectations.
            </p>
            <a href="#faq-section" className="text-crossGold hover:text-crossGold/80 text-sm flex items-center">
              View FAQ
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
          <div className="bg-charcoal/50 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Users size={20} className="text-crossGold mr-2" />
              Success Stories
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Read stories from mentors, youth, FBOs, and partners who have made
              a difference with Send Me Builders.
            </p>
            <a href="#testimonials-section" className="text-crossGold hover:text-crossGold/80 text-sm flex items-center">
              Read Stories
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
          <div className="bg-charcoal/50 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Calendar size={20} className="text-crossGold mr-2" />
              Information Sessions
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Join an upcoming virtual information session to learn more about
              getting involved with Send Me Builders.
            </p>
            <a href="#contact" className="text-crossGold hover:text-crossGold/80 text-sm flex items-center">
              View Schedule
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>;
}