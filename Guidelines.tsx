import React from 'react';
import SplitText from './SplitText';

const Guidelines: React.FC = () => {
  return (
    <section id="guidelines" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <SplitText 
              tag="h2" 
              text="Guidelines" 
              className="text-5xl font-bold text-slate-900" 
              splitType="words" 
            />
          </div>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="p-8 bg-slate-50 rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
            <h3 className="text-2xl font-bold text-green-500 mb-4">1. Team Formation</h3>
            <blockquote className="border-l-4 border-green-500/50 pl-4 text-slate-500 space-y-2">
              <p>Each team must consist of a minimum of 2 and a maximum of 3 student members.</p>
              <p>Participants from polytechnic Colleges are eligible.</p>
              <p>No change in team composition is allowed after final registration.</p>
              <p>Intercollege teams are also allowed to participate.</p>
            </blockquote>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
            <h3 className="text-2xl font-bold text-green-500 mb-4">2. Project Scope</h3>
            <blockquote className="border-l-4 border-green-500/50 pl-4 text-slate-500 space-y-2">
              <p>There is no specific theme for the hackathon, giving teams the freedom to think boldly and creatively.</p>
              <p>Participants are encouraged to develop projects that are innovative, socially relevant, and sustainable. Ideas that aim to solve real-world problems or improve the quality of life will be highly valued. Projects should reflect clear impact, practical scalability, and meaningful usability.</p>
            </blockquote>
          </div>
          
          <div className="p-8 bg-slate-50 rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
            <h3 className="text-2xl font-bold text-green-500 mb-4">3. What to Carry: Participant Essentials</h3>
            <blockquote className="border-l-4 border-green-500/50 pl-4 text-slate-500 space-y-2">
              <p>Participants are advised to carry all necessary personal and technical essentials for a smooth experience. This includes chargers, and adapters, laptops, mouse, and USB devices, and personal items such as water bottles and hygiene supplies. All participants must also carry their college ID card, which is mandatory for entry.</p>
            </blockquote>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
            <h3 className="text-2xl font-bold text-green-500 mb-4">4. Judging Criteria</h3>
            <blockquote className="border-l-4 border-green-500/50 pl-4 text-slate-500 space-y-2">
              <p>Projects will be evaluated based on five key criteria: Innovation and Creativity, Sustainability and Impact, Social Relevance, Functionality and Technical Execution, and Presentation and Communication. Each of these criteria will carry equal weight during the evaluation process to ensure a fair and well-rounded assessment.</p>
            </blockquote>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
            <h3 className="text-2xl font-bold text-green-500 mb-4">5. Disqualification</h3>
            <blockquote className="border-l-4 border-green-500/50 pl-4 text-slate-500 space-y-2">
              <p>A team may face disqualification if it violates any of the stated rules, submits plagiarized content, or displays inappropriate behaviour toward fellow participants or organizers.</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;