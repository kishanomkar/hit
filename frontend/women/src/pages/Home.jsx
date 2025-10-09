import React from 'react';

// --- SVG Icon Components ---
// Self-contained icons for the "Features" section to avoid external dependencies.

const WifiIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" x2="12.01" y1="20" y2="20" />
    </svg>
);

const ShieldCheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const BookOpenIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const UsersIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);


// --- Page Section Components ---
// Dividing the page into logical sections for better readability.

const Navbar = () => (
  <header className="bg-white/90 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-rose-600">SafeGuard</div>
      <nav className="hidden md:flex items-center space-x-8 text-gray-700">
        <a href="#home" className="hover:text-rose-600 transition-colors">Home</a>
        <a href="#about" className="hover:text-rose-600 transition-colors">About Us</a>
        <a href="#features" className="hover:text-rose-600 transition-colors">Features</a>
        <a href="#blogs" className="hover:text-rose-600 transition-colors">Blogs</a>
        <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="hidden sm:block text-gray-700 font-medium hover:text-rose-600 transition-colors">Sign in</button>
        <button className="bg-rose-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-rose-600 transition-all shadow-md hover:shadow-lg">Sign up</button>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section id="home" className="pt-32 pb-20 bg-rose-50">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Emergency SOS
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
          Esse irure proident cillum anim id sunt aliqua cillum dolore minim cillum anim veniam excepteur.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow w-full px-5 py-3 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-400 transition" 
          />
          <button className="bg-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl flex-shrink-0">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center p-4">
        {/* Placeholder for the hero image. Replace the div with your <img> tag. */}
        <div className="w-full max-w-md h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-3xl flex items-center justify-center shadow-2xl">
            <p className="text-rose-600 font-medium"></p>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => {
    const features = [
        { icon: <WifiIcon className="w-8 h-8 text-rose-500"/>, title: "Safe areas" },
        { icon: <ShieldCheckIcon className="w-8 h-8 text-rose-500"/>, title: "Safety Tips" },
        { icon: <BookOpenIcon className="w-8 h-8 text-rose-500"/>, title: "Resources" },
        { icon: <UsersIcon className="w-8 h-8 text-rose-500"/>, title: "Emergency Contacts" }
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800">Features</h2>
                <p className="mt-4 max-w-3xl mx-auto text-gray-600">
                    After Signing up Press and hold the panic button to alert your emergency contacts with your location.
                </p>
            </div>
            <div className="container mx-auto px-6 mt-16 grid md:grid-cols-2 gap-16 items-center">
                {/* Placeholder for padlock image */}
                <div className="w-full h-96 bg-slate-100 rounded-3xl flex items-center justify-center shadow-xl">
                    <p className="text-slate-500 font-medium">
                        <img src="/women2.png" alt="" />
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map(feature => (
                        <div key={feature.title} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-left hover:shadow-xl transition-shadow">
                            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                        </div>
                    ))}
                     <div className="sm:col-span-2 text-center mt-6">
                         <button className="bg-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl">
                            Getting Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutUsSection = () => {
    const values = [
        { title: "Innovation", description: "We are pioneers in our field, constantly exploring new ideas and pushing boundaries." },
        { title: "Customer-Centric", description: "Our clients are at the heart of everything we do. We are committed to delivering value." },
        { title: "Expertise", description: "Our team consists of industry experts who bring a wealth of knowledge to each project." },
        { title: "Integrity", description: "We operate with the highest level of integrity, ensuring transparency and honesty." }
    ];
    return (
        <section id="about" className="py-24 bg-rose-50">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-gray-800">About us</h2>
                    <p className="mt-4 text-gray-600">
                        Aliqua consectetur laborum anim anim quis elit sit cupidatat ipsum cupidatat nostrud adipisicing.
                    </p>
                    <div className="mt-8 grid sm:grid-cols-2 gap-8">
                        {values.map(value => (
                            <div key={value.title}>
                                <h3 className="text-xl font-bold text-rose-600">{value.title}</h3>
                                <p className="mt-2 text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="w-full h-96 bg-slate-200 rounded-3xl flex items-center justify-center shadow-xl">
                    <p className="text-slate-500 font-medium">[Abstract brand image]</p>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} SafeGuard. All Rights Reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Your Safety, Our Priority.</p>
        </div>
    </footer>
);


// --- Main Home Page Component ---
// This is the main component that you should export and use in your application.
export default function Home() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
}
