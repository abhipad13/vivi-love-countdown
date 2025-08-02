import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SpinWheel from "@/components/SpinWheel";
import FloatingHearts from "@/components/FloatingHearts";

const SpinWheelPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Back button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-romantic-pink hover:bg-romantic-soft/20 transition-all duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 text-romantic-deep group-hover:scale-110 transition-transform" />
        <span className="font-elegant text-romantic-deep">Back to Main Page ❤️</span>
      </Link>

      {/* Main content */}
      <SpinWheel />
    </div>
  );
};

export default SpinWheelPage;