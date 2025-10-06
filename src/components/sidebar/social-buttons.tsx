import React from "react";
import { FaFacebookF, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";

export const SocialButtons: React.FC = () => {
  return (
    <div className="bg-pink-100 rounded-lg p-4 flex justify-center gap-3 flex-wrap">
      <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
        <FaFacebookF className="w-5 h-5" />
      </button>
      <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
        <FaXTwitter className="w-5 h-5" />
      </button>
      <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
        <FaWhatsapp className="w-6 h-6" />
      </button>
      <button className="px-4 py-2 bg-white rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-100 transition-colors">
        <MdContentCopy className="w-4 h-4" />
        Copy Link
      </button>
    </div>
  );
};
