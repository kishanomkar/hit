import React from 'react';
// Note: To enable navigation, you'll need to install react-router-dom
// and wrap this component in a <BrowserRouter> in your main App file.
import { useNavigate, Link } from 'react-router-dom';

// --- SVG Icon Components ---
// These are included directly to keep the component self-contained.

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2">
     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const CardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
);


// The main SignUpPage component
export default function SignUpPage() {
    // The useNavigate hook is for programmatic navigation.
    const navigate = useNavigate();

    const handleSignInClick = (e) => {
        e.preventDefault(); // Prevent the link from refreshing the page
        navigate('/login'); // This will navigate to the /login route in your app
    };
    
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center font-sans p-4">
            <div className="w-full max-w-sm">
                {/* The main card container */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    
                    {/* Header with gradient and logo - Reduced padding and icon size */}
                    <div className="p-6 text-center text-white" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #db2777 100%)' }}>
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-25 mx-auto flex items-center justify-center mb-4 shadow-inner">
                            <ShieldIcon />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight">SafeGuard</h1>
                        <p className="text-white/90 mt-1">Your Safety, Our Priority</p>
                    </div>

                    {/* Form section - Reduced padding and margins */}
                    <div className="p-6">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="text-sm font-semibold text-gray-700 mb-2 flex items-center"><UserIcon />Full Name</label>
                                <input id="fullName" type="text" placeholder="Enter your full name" className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 flex items-center"><MailIcon />Email Address</label>
                                <input id="email" type="email" placeholder="your.email@gmail.com" className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-2 flex items-center"><LockIcon />Password</label>
                                <input id="password" type="password" placeholder="Enter your password" className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 flex items-center"><PhoneIcon />Phone Number</label>
                                <input id="phone" type="tel" placeholder="10-digit mobile number" className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="aadhaar" className="text-sm font-semibold text-gray-700 mb-2 flex items-center"><CardIcon />Aadhaar Number</label>
                                <input id="aadhaar" type="text" placeholder="12-digit Aadhaar number" className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition" />
                            </div>
                            
                            <button type="submit" className="w-full text-white font-bold py-3 px-4 rounded-lg transition-all" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #db2777 100%)' }}>Create Account</button>
                        </form>
                        
                        <p className="text-center text-sm text-gray-600 mt-5">
                            Already have an account?{' '}
                            {/* Use the Link component for standard navigation */}
                            <Link to="/login" className="font-semibold text-red-500 hover:underline">Sign In</Link>
                        </p>
                    </div>
                </div>
                {/* Footer text - Reduced margin */}
                <p className="text-center text-xs text-gray-500 mt-6">
                    Your data is encrypted and secure. Read our{' '}
                    <a href="#" className="font-semibold text-red-500 hover:underline">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}

