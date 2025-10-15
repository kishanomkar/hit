import React from 'react';
import { FaPhone, FaEnvelope, FaIdCard, FaShieldHeart, FaArrowRightFromBracket } from 'react-icons/fa6';

// A reusable component for the menu items to keep the code clean
const MenuItem = ({ icon, text, href = "#" }) => (
  <a
    href={href}
    className="flex items-center p-4 mb-2.5 bg-gray-200/50 rounded-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-300/70 hover:translate-x-1"
  >
    <span className="w-10 text-center text-xl mr-4 text-pink-600">
      {icon}
    </span>
    <span className="font-medium">{text}</span>
  </a>
);

// The main component for the profile card
const ProfileCard = () => {
  // Data for menu items
  const menuItemsData = [
    { icon: <FaPhone />, text: 'Contact' },
    { icon: <FaEnvelope />, text: 'Mail-ID' },
    { icon: <FaIdCard />, text: 'Aadhar Number' },
    { icon: <FaShieldHeart />, text: 'Women Safety ID' },
  ];

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200 text-gray-800 overflow-hidden">
      {/* --- Angled Header Section --- */}
      <div 
        className="p-6 pt-10 pb-16 text-center bg-gradient-to-br from-pink-600 to-pink-500 text-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)' }}
      >
        <img 
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
          alt="Profile Picture" 
          className="w-24 h-24 rounded-full border-4 border-white object-cover mx-auto mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
          style={{ boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)' }} // Adjusted shadow for light background
        />
        <h2 
          className="font-semibold text-2xl"
          style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.2)' }}
        >
          Priya Sharma
        </h2>
      </div>

      {/* --- Menu Items Section --- */}
      <div className="px-5 pb-5 -mt-5">
        {menuItemsData.map((item, index) => (
          <MenuItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
      
      {/* --- Footer & Sign Out Button --- */}
      <div className="p-5">
        <a href='/'><button className="flex items-center justify-center gap-2.5 w-full p-4 bg-pink-600 text-white rounded-lg text-lg font-medium transition-all duration-300 ease-in-out shadow-lg shadow-pink-600/50 hover:bg-pink-500 hover:shadow-xl hover:shadow-pink-500/60">
          <FaArrowRightFromBracket />
          Sign Out
        </button></a>
      </div>
    </div>
  );
};

// Main App component to render the background and the card
const Profile = () => {
  return (
    <div className="font-sans bg-gray-100 flex justify-center items-center min-h-screen p-5">
      {/* The animated blobs and dark background have been removed */}
      <div className="relative z-10">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Profile;


