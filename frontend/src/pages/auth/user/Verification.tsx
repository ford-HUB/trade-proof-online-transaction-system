import { LogIn, ArrowRight, KeyRound } from "lucide-react";
import { useState } from "react";
import LogoImage from "../../../../public/logo.png"

export default function VerificationUser() {
  const [formData, setFormData] = useState({
    otp: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // Add your login logic here
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleResendOtp = () => {
    alert("Resend OTP clicked");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-violet-50 p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header with logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-2xl bg-transparent border-4 border-[#1F1E57] mb-4 shadow-lg p-1">
            <img src={LogoImage} alt="logo-image" className="w-15 h-16"/>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Verify Your Account
          </h1>
          <p className="text-gray-600">
            Sign up to your TradeRoof account
          </p>
        </div>

        {/* Login Card */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm bg-white/95"
        >

          {/* Email Field */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Otp
              </label>

              <button 
                className="block text-sm font-medium text-indigo-700 mb-2 cursor-pointer hover:text-indigo-800"
                onClick={handleResendOtp}
              >
                Resend Otp
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <KeyRound className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="otp"
                name="otp"
                type="text"
                inputMode="numeric"
                maxLength={8}
                required
                value={formData.otp}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 text-center border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200"
                placeholder="00000000"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            Submit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

        </form>
      </div>

      {/* Add animation keyframes for blobs */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}