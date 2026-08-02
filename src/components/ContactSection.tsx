import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Globe, Shield } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Feature Suggestion', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'Feature Suggestion', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Info & Support Channels */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-[#C084FC] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
                Direct Communication
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                Get in Touch with the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#8B5CF6]">Scorify Developer Team</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                Have feedback on target geometries, custom tournament rules, or feature ideas for our next APK release? We build Scorify with archers, for archers.
              </p>
            </div>

            {/* Support Info Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Primary Support Email</div>
                  <a href="mailto:conquer009ff@gmail.com" className="text-sm font-bold text-white hover:text-[#C084FC] transition-colors block">
                    conquer009ff@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Developer Support Email</div>
                  <a href="mailto:bhoomitdewangan828@gmail.com" className="text-sm font-bold text-white hover:text-[#C084FC] transition-colors block">
                    bhoomitdewangan828@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Privacy & Guarantees</div>
                  <div className="text-sm font-bold text-white">Built for Archers, Built by Archers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-heading font-black text-xl text-white tracking-tight">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="font-bold text-lg text-white">Message Delivered!</div>
                  <p className="text-xs text-emerald-200">
                    Thank you for reaching out to Scorify. Our engineering team will review your inquiry shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-xl text-xs hover:bg-emerald-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Robin Hood"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="archer@domain.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Topic / Inquiry</label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#111118] border border-white/10 text-white text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors"
                    >
                      <option value="Feature Suggestion">Feature Suggestion</option>
                      <option value="APK Installation Help">APK Installation Help</option>
                      <option value="Club / Academy Licensing">Club / Academy Licensing</option>
                      <option value="Bug Report">Bug Report</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Message Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you'd like to see in Scorify..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-[18px] bg-[#8B5CF6] hover:bg-[#A855F7] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
