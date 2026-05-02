import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, MapPin, CheckCircle2, Linkedin, Github, Globe } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2311ea3f-1343-b6f8-9476-676ed69850f2",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 px-4 w-full max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-20 text-center"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400 mb-6 uppercase tracking-widest">
          Connect
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-space tracking-tight">
          Let's Build Something Great
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed font-archivo">
          Whether you have a specific project in mind or just want to explore possibilities, 
          I'm always ready for a conversation about the <span className="text-white">future of technology</span>.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="bg-neutral-900/40 border border-neutral-800/50 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Mail className="w-32 h-32 rotate-12" />
            </div>
            
            <h3 className="text-2xl font-bold mb-10 text-white font-space">Contact Details</h3>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "rajanachaitanya29@gmail.com", href: "mailto:rajanachaitanya29@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "rajana-chaitanya", href: "https://linkedin.com/in/rajana-chaitanya" },
                { icon: MapPin, label: "Location", value: "Andhra Pradesh, India" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover/item:border-neutral-600 group-hover/item:bg-neutral-900 transition-all shadow-xl">
                    <item.icon className="w-6 h-6 text-neutral-500 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-neutral-500 font-bold mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-neutral-200 hover:text-white transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-neutral-200 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-neutral-800/50 flex gap-5">
              {[
                { icon: Github, href: "https://github.com/Cheezu-hub" },
                { icon: Globe, href: "https://universal-webhooks.vercel.app" }
              ].map((social, i) => (
                <Magnetic key={i}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 hover:border-neutral-600 transition-all text-neutral-400 hover:text-white shadow-lg">
                    <social.icon className="w-5 h-5" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800/50 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="h-[450px] flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 font-space tracking-tight">Message Received</h3>
                  <p className="text-neutral-400 max-w-sm mx-auto">Thanks for reaching out! I've received your message and will respond within 24 hours.</p>
                </div>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 transition-all text-sm font-medium border border-neutral-700"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 group/input">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1 group-focus-within/input:text-white transition-colors">Your Name</label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-5 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-3 group/input">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1 group-focus-within/input:text-white transition-colors">Email Address</label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="name@company.com"
                      className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-5 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div className="space-y-3 group/input">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1 group-focus-within/input:text-white transition-colors">How can I help?</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe your project or inquiry..."
                    className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-5 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 backdrop-blur-sm resize-none"
                  />
                </div>
                <button 
                  disabled={status === "sending"}
                  className="w-full bg-white text-black font-bold py-5 rounded-[1.5rem] hover:bg-neutral-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  {status === "sending" ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                    />
                  ) : (
                    <>
                      <span className="text-lg">Initiate Connection</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center font-medium"
                  >
                    Failed to send. Please verify your connection and try again.
                  </motion.p>
                )}
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
