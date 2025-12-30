import Header from "./components/layout/Header"
import { LockKeyhole, ShieldCheck, Video } from "lucide-react"

function App() {

  const cardItems = [
    {
      icon: LockKeyhole,
      name: "Secure Escrow Service"
    },
    {
      icon: ShieldCheck,
      name: "Verified Acounts"
    },
    {
      icon: Video,
      name: "Live Video Verification"
    }
  ]

  return (
    <div>
      <Header />
      <div className="h-full">
        <div className="bg-indigo-600 text-white text-center py-20 px-4 md:px-8 lg:px-16">
          <h1 className="text-3xl font-bold">Trade Your Accounts Safely & Securely!</h1>
          <p className="text-lg">Safe & Verified Escrow Trading Platform</p>

          <button
            className="bg-orange-400 px-6 py-2 rounded-2xl mt-5 transition cursor-pointer shadow-lg font-semibold
                        hover:bg-orange-500"
          >
            Get Started Securely
          </button>
        </div>

        <div className="grid grid-cols-3 bg-white w-full h-full p-10 gap-6">
          {
            cardItems.map((items) => (
              <div className="flex flex-col justify-center items-center shadow-lg py-4 rounded-[10px] transition-transform cursor-pointer
                              hover:scale-105 hover:text-indigo-900">
                <items.icon className="w-20 h-20 text-indigo-900"/>
                <h1 className="text-xl font-bold ">{items.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App