import { LogIn, Mail, Lock, Eye, EyeOff, ArrowRight, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../../../assets/asset";

export default function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  return (
    <div className="h-screen w-full flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-violet-50 p-2 overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-[150px] z-10">
        {/* Header with logo */}
        <div className="text-center mb-0.5">
          <div className="inline-flex items-center justify-center rounded bg-transparent border border-[#1F1E57] mb-0.5 shadow-sm p-0.5">
            <img src={assets.LogoImage} alt="logo-image" className="w-3.5 h-3.5"/>
          </div>
          <h1 className="text-[9px] font-bold text-gray-900 mb-0.5">
            Admin Login
          </h1>
          <p className="text-[6px] text-gray-600 leading-tight">
            Sign in to TradeRoof
          </p>
        </div>

        {/* Login Card */}
        <form 
          onSubmit={handleSubmit} 
          className="rounded shadow-sm p-0.5 border border-gray-100 backdrop-blur-sm bg-white/95"
        >

          {/* Email Field */}
          <div className="mb-0.5">
            <label htmlFor="email" className="block text-[7px] font-medium text-gray-700 mb-0.5">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-0.5 flex items-center pointer-events-none">
                <Mail className="h-1.5 w-1.5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-3.5 pr-0.5 py-0.5 border border-gray-300 rounded bg-gray-50 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200 text-[8px]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-0.5">
            <div className="flex items-center justify-between mb-0.5">
              <label htmlFor="password" className="block text-[7px] font-medium text-gray-700">
                Password
              </label>
              <Link 
                to="/admin/forgot-password" 
                className="text-[6px] font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-0.5 flex items-center pointer-events-none">
                <Lock className="h-1.5 w-1.5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-3.5 pr-3.5 py-0.5 border border-gray-300 rounded bg-gray-50 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200 text-[8px]"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-0.5 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-1.5 w-1.5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-1.5 w-1.5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-0.5 px-1 rounded font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-0.5 text-[8px]"
          >
            <LogIn className="w-1.5 h-1.5" />
            Sign In
            <ArrowRight className="w-1.5 h-1.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Security Note */}
        <div className="mt-0.5 text-center">
          <div className="inline-flex items-center gap-0.5 text-[6px] text-gray-500">
            <Shield className="w-1.5 h-1.5" />
            <span>Secured with SSL</span>
          </div>
        </div>
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