import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {
  LockKeyhole,
  ShieldCheck,
  Video,
  LifeBuoy,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Zap,
  MessageSquare,
} from "lucide-react";

function App() {
  const cardItems = [
    {
      icon: LockKeyhole,
      name: "Trade Protection System",
      desc: "We guide and monitor each trade with clear steps, confirmations, and evidence tracking to reduce fraud.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: ShieldCheck,
      name: "Verified Accounts",
      desc: "All accounts go through verification to reduce scams.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Video,
      name: "Live Video Verification",
      desc: "Extra security using real-time verification when needed.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "List or Choose",
      desc: "Sellers list accounts with full details. Buyers browse verified listings.",
      icon: Globe,
    },
    {
      number: "02",
      title: "Pay & Provide Proof",
      desc: "Buyers send payment via agreed methods and upload proof for the trade.",
      icon: LockKeyhole,
    },
    {
      number: "03",
      title: "Confirm & Complete",
      desc: "Account details are delivered and both parties confirm the trade.",
      icon: CheckCircle,
    },
  ];

  const securityFeatures = [
    {
      title: "Account Verification",
      desc: "Sellers provide proof of ownership to reduce fraud.",
      icon: ShieldCheck,
    },
    {
      title: "Protected Transactions",
      desc: "Escrow protection ensures fair trades and prevents chargebacks.",
      icon: LockKeyhole,
    },
    {
      title: "Dispute Resolution",
      desc: "Our team reviews disputes for fair outcomes.",
      icon: MessageSquare,
    },
    {
      title: "24/7 Monitoring",
      desc: "Continuous system monitoring for suspicious activities.",
      icon: Zap,
    },
    {
      title: "Identity Verification",
      desc: "Multi-factor authentication for all users.",
      icon: Users,
    },
    {
      title: "Global Protection",
      desc: "Secure transactions across all regions.",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Header
        homeId="home"
        howItWorksId="how-it-works"
        safetySecurityId="safety-and-security"
        supportId="support"
        loginPath="/user/login"
        registerPath="/user/register"
      />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-linear-to-br from-indigo-900 via-indigo-800 to-violet-900 text-white py-24 px-4"
      >
        <div className="absolute inset-0 bg-grid-white/10 bg-size-[size:20px_20px]" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">
              Trusted by 10,000+ traders
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Trade Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-orange-400">
              Accounts
            </span>
            <br />
            Safely & Securely
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-10">
            TradeRoof is a secure platform for buying and selling PC game
            accounts with verification, transparency, and trade support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
              Get Started Securely
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
              Why Choose TradeRoof
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Secure Trading Experience
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We've built every feature with security and trust in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${item.gradient} rounded-t-2xl`}
                />
                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${item.gradient} mb-6`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <button className="text-indigo-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-linear-to-b from-white to-gray-50 py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trading on TradeRoof is simple, transparent, and secure
            </p>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-indigo-200 via-violet-200 to-blue-200 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-indigo-200 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-indigo-500 to-violet-600 text-white font-bold text-xl">
                        {step.number}
                      </div>
                      <step.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY & SECURITY */}
      <section id="safety-and-security" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Security First
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety & Security
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We take security seriously to protect both buyers and sellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-lg bg-indigo-50 text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 p-8 bg-linear-to-r from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Trusted by thousands worldwide
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {["99.8%", "10K+", "24/7", "50+"].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-indigo-700 mb-2">
                      {stat}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {index === 0 && "Success Rate"}
                      {index === 1 && "Happy Traders"}
                      {index === 2 && "Support"}
                      {index === 3 && "Countries"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section
        id="support"
        className="bg-linear-to-br from-gray-900 to-indigo-950 text-white py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 mb-6">
            <LifeBuoy className="w-12 h-12" />
          </div>
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            24/7 Support
          </span>
          <h2 className="text-4xl font-bold mb-6">We're Here to Help</h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Whether you have questions about trades, account verification, or
            technical issues, TradeRoof support is here to guide you every step
            of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Chat with Support
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Visit Help Center
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-linear-to-r from-indigo-600 to-violet-600 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Trade Securely?
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of traders who trust TradeRoof for safe account
            trading
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 hover:scale-105">
              Create Free Account
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
