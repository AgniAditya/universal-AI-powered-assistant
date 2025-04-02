import React from 'react';
import { Bot, Download, Github, Twitter, MessageCircleQuestion, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Header/Nav */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-white" />
          <span className="text-xl font-bold">AIssist</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#features" className="hover:text-zinc-400 transition-colors">Features</a>
          <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
          <a href="#help" className="hover:text-zinc-400 transition-colors">Help</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text">
          Democratizing Software Usage with AI
        </h1>
        <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
          Your universal AI-powered assistant that makes complex software simple. 
          Experience the future of software interaction.
        </p>
        <button className="bg-white hover:bg-zinc-100 text-black px-8 py-4 rounded-full font-semibold flex items-center mx-auto space-x-2 transition-colors">
          <Download className="w-5 h-5" />
          <span>Download AIssist</span>
        </button>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
            <div className="bg-white/5 p-3 rounded-lg w-fit mb-4">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Universal Compatibility</h3>
            <p className="text-zinc-400">Works seamlessly with any software application, powered by advanced LLM technology.</p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
            <div className="bg-white/5 p-3 rounded-lg w-fit mb-4">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Automated Workflows</h3>
            <p className="text-zinc-400">Automate complex tasks with natural language commands and intuitive interactions.</p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
            <div className="bg-white/5 p-3 rounded-lg w-fit mb-4">
              <MessageCircleQuestion className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-zinc-400">Get instant help and guidance whenever you need it, right within your workflow.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="bg-[url('https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-2xl overflow-hidden">
          <div className="bg-black/90 backdrop-blur-sm p-12">
            <h2 className="text-3xl font-bold mb-6">About AIssist</h2>
            <p className="text-zinc-300 max-w-2xl">
              Born from a hackathon project, AIssist is revolutionizing how people interact with software. 
              Our mission is to make complex software accessible to everyone through the power of artificial intelligence.
              No more manual reading through documentation or getting stuck on technical details.
            </p>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-zinc-300">We're here to assist you with any questions or issues.</p>
        </div>
        <div className="max-w-xl mx-auto bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
          <a href="mailto:support@aissist.com" className="block text-center bg-white hover:bg-zinc-100 text-black px-6 py-3 rounded-lg mb-4 transition-colors">
            Contact Support
          </a>
          <a href="#documentation" className="block text-center bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors">
            View Documentation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-white" />
              <span className="font-semibold">AIssist</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://twitter.com" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-center text-zinc-500 mt-8">© 2024 AIssist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;