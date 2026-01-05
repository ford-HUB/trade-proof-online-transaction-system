import { LogIn, Mail, Lock, Eye, EyeOff, ArrowRight, KeyRound } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import assets from "../../../assets/asset";

export default function ForgotPasswordAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    newPassword: "",
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

  const handleRequestOtp = (e: any) => {
    e.preventDefault();

    if (formData.email == "" || formData.email === null) {
      toast.error("Invalid email");
      return;
    }

    toast.success(`Request Otp sent to ${formData.email}`);
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
            <img src={assets.LogoImage} alt="logo-image" className="w-15 h-16"/>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Reset Your Password
          </h1>
          <p className="text-gray-600">
            Enter a new password to secure your TradeRoof account.
          </p>
        </div>

        {/* Login Card */}
        <form 
          onSubmit={handleSubmit} 
          className="rounded-2xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm bg-white/95"
        >

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* OTP Field */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter OTP
              </label>

              <button
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
                onClick={handleRequestOtp}
              >
                Request OTP
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <KeyRound className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="otp"
                name="otp"
                inputMode="numeric"
                required
                value={formData.otp}
                onChange={handleChange}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200"
                placeholder="Enter your one time password"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200"
                placeholder="Enter your new password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="new-password"
                name="newPassword"
                type={showPassword ? "text" : "password"}
                required
                value={formData.newPassword}
                onChange={handleChange}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200"
                placeholder="Confirm your new password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            Reset Password
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