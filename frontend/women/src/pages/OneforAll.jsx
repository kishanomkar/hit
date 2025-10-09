import React, { useState } from 'react';
import {
  FaExclamationTriangle, FaMapMarkerAlt, FaSms, FaShieldAlt, FaBook, FaHeartbeat, FaPhoneAlt, FaLock,
  FaCopy, FaClinicMedical, FaBuilding, FaHome, FaMap, FaPlusSquare, FaHandsHelping, FaUserPlus, FaUsers,
  FaBalanceScale, FaChevronDown, FaCheckCircle, FaCloudDownloadAlt,
  FaFirstAid
} from 'react-icons/fa';

import { useLocation } from '../components/Tracking';

//================================================================//
//  DATA FOR ALL VIEWS
//================================================================//

const nationalHelplines = [
  { name: "Women Helpline", description: "24x7 support for women in distress", number: "181", type: "Emergency" },
  { name: "Police Emergency", description: "Immediate police assistance", number: "100", type: "Emergency" },
  { name: "Ambulance", description: "Medical emergency services", number: "102", type: "Medical" },
  { name: "Women Protection Cell", description: "Quick response for women safety", number: "1091", type: "Emergency" },
  { name: "Domestic Violence Helpline", description: "Support for domestic abuse victims", number: "181", type: "Support" },
  { name: "Child Helpline", description: "Help for children in distress", number: "1098", type: "Support" },
  { name: "National Commission for Women", description: "Legal support and counseling", number: "7827-170-170", type: "Legal" },
  { name: "Senior Citizen Helpline", description: "Support for elderly citizens", number: "1291", type: "Support" },
];

const policeStations = [ { name: "City Police Station", address: "Main Road, Sector 12", number: "100" }, { name: "Central Police Station", address: "Downtown Square", number: "100" }, { name: "Women Police Station", address: "Gandhi Nagar", number: "1091" } ];
const hospitals = [ { name: "District Hospital", address: "Medical Complex", number: "102" }, { name: "Emergency Medical Center", address: "19 Highway Road", number: "108" }, { name: "Women's Health Clinic", address: "Park Street", number: "104" } ];
const shelters = [ { name: "Women's Shelter Home", address: "Gandhi Nagar, Block A", number: "181" }, { name: "Safe Haven Center", address: "Church Road", number: "1091" }, { name: "Crisis Support Center", address: "Ring Road, Sector 8", number: "181" } ];

const safePlaces = [ { type: 'police', name: 'City Police Station', address: 'Main Road, Sector 12', distance: '0.8 km', number: '100' }, { type: 'hospital', name: 'District Hospital', address: 'Medical Complex, Central Avenue', distance: '1.2 km', number: '102' }, { type: 'shelter', name: 'Women\'s Shelter Home', address: 'Gandhi Nagar, Block A', distance: '2.5 km', number: '181' }, { type: 'police', name: 'Community Police Post', address: 'Market Square, Zone 3', distance: '3.1 km', number: '100' }, { type: 'hospital', name: 'Emergency Medical Center', address: 'Highway Road, Crossing 45', distance: '4.8 km', number: '108' }, { type: 'shelter', name: 'Safe Haven Center', address: 'Park Street, Near Temple', distance: '5.5 km', number: '1091' }, ];

const safetyTipsData = [ { icon: <FaShieldAlt className="text-blue-500" size={24} />, title: "Personal Safety", subtitle: "8 essential tips", tips: [
      { title: "Be Aware of Your Surroundings", content: "Always stay alert and aware of people and activities around you. Trust your instincts if something feels wrong." },
      { title: "Travel in Well-Lit Areas", content: "Stick to well-populated, well-lit streets. Avoid shortcuts through dark alleys or isolated areas, especially at night." },
      { title: "Share Your Location", content: "Let trusted friends or family know where you are going and when you expect to arrive. Use location sharing features." },
      { title: "Keep Emergency Numbers Handy", content: "Save emergency contacts on speed dial. Know the local emergency numbers and keep your phone charged." },
      { title: "Avoid Using Headphones", content: "When walking alone, avoid using headphones or earbuds as they reduce your awareness of surroundings." },
      { title: "Carry a Safety Whistle", content: "A loud whistle can attract attention and deter attackers. Keep it easily accessible on your keychain." },
      { title: "Trust Your Instincts", content: "If a situation or person makes you uncomfortable, leave immediately. Your safety is more important than being polite." },
      { title: "Transportation Safety", content: "Use registered taxis or ride-sharing apps. Share trip details with someone you trust. Sit in the back seat and verify the driver details before getting in." },
    ]},{ icon: <FaExclamationTriangle className="text-red-500" size={24} />, title: "Dealing with Harassment", subtitle: "8 essential tips", tips: [
      { title: "Recognize Different Forms", content: "Harassment includes verbal abuse, stalking, eve-teasing, unwanted touching, following, or threatening behavior." },
      { title: "Respond Firmly", content: "Use a loud, firm voice to say \"NO\" or \"STOP\" clearly. Draw attention to the situation by speaking loudly." },
      { title: "Document Everything", content: "Keep records of incidents including dates, times, locations, and descriptions. Take photos or videos if safe to do so." },
      { title: "Seek Help Immediately", content: "Move towards crowded areas. Ask others for help. Call emergency services or trusted contacts right away." },
      { title: "Online Harassment", content: "Block and report abusive accounts. Save screenshots as evidence. Never share personal information online." },
      { title: "Workplace Harassment", content: "Report to HR or management immediately. Know your company policies. File a formal complaint if needed." },
      { title: "Create Distance", content: "Move away from the harasser. Go to a safe, public place. Do not engage in conversation or argument." },
      { title: "File a Police Complaint", content: "Contact Women Helpline (181) or local police. File an FIR if necessary. You have the legal right to protection." },
    ] }, { icon: <FaFirstAid className="text-orange-500" size={24} />, title: "First Aid Basics", subtitle: "8 essential tips", tips: [
      { title: "Call for Help First", content: "In any emergency, call 102 (ambulance) or 108 immediately. Provide clear location and nature of emergency." },
      { title: "Check for Breathing", content: "Place your ear near the person's mouth and nose. Look for chest movement. If not breathing, begin CPR if trained." },
      { title: "Stop Bleeding", content: "Apply direct pressure with clean cloth. Elevate the injured area above heart level if possible. Do not remove embedded objects." },
      { title: "Treat for Shock", content: "Lay person down, elevate legs. Keep warm with blanket. Do not give food or water. Monitor breathing continuously." },
      { title: "Handle Burns Properly", content: "Cool burn under running water for 10 minutes. Do not apply ice directly. Cover with sterile dressing. Seek medical help." },
      { title: "Manage Fractures", content: "Do not move injured area. Immobilize with splint if available. Apply ice to reduce swelling. Get professional help immediately." },
      { title: "Choking Response", content: "Encourage coughing. If unable to breathe, perform Heimlich maneuver. Call emergency services immediately." },
      { title: "Keep a First Aid Kit", content: "Maintain a kit with bandages, antiseptic, pain relievers, gauze, scissors, and emergency contact numbers." },
    ] }, { icon: <FaBalanceScale className="text-purple-500" size={24} />, title: "Reporting & Legal Steps", subtitle: "10 essential tips", tips: [
      { title: "Know Your Rights", content: "You have the right to file a complaint. Police cannot refuse to register an FIR. You can request a female officer." },
      { title: "File an FIR", content: "First Information Report can be filed at any police station. Provide detailed account. Keep a copy for yourself." },
      { title: "Zero FIR", content: "You can file a Zero FIR at any police station regardless of jurisdiction. It will be transferred to the appropriate station." },
      { title: "Preserve Evidence", content: "Do not wash or change clothes. Keep all physical evidence. Save messages, emails, call logs. Take photographs." },
      { title: "Medical Examination", content: "Get medical examination done immediately. Medical report is crucial evidence. You have right to female doctor." },
      { title: "Legal Aid", content: "Free legal aid available from National/State Legal Services Authority. Contact nearest Legal Aid Center." },
      { title: "Protection Orders", content: "You can seek restraining orders or protection orders from court. Domestic Violence Act provides specific protections." },
      { title: "Important Laws", content: "IPC Section 354: Assault on woman. IPC 509: Insult to modesty. IT Act Section 67: Cyber harassment. Know your protections." },
      { title: "National Commission for Women", content: "NCW handles complaints of atrocities against women. Call 7827-170-170 or visit ncw.nic.in for support." },
      { title: "Time Limits", content: "No time limit for filing FIR in cognizable offenses. However, report as soon as possible for stronger case." },
    ] }, ];

const howItWorksSteps = [ "When you press the panic button, an emergency SMS with your location is sent to all contacts", "If auto-call is enabled, your primary contact will be called automatically", "Your last known GPS location is shared even if you go offline", "We recommend adding at least 3 trusted contacts for maximum safety" ];

//================================================================//
//  REUSABLE SUB-COMPONENTS
//================================================================//

const Tag = ({ text, type }) => {
  const baseStyle = "text-xs font-semibold px-2.5 py-1 rounded-full";
  const typeStyles = { Emergency: "bg-red-100 text-red-800", Medical: "bg-blue-100 text-blue-800", Support: "bg-green-100 text-green-800", Legal: "bg-gray-100 text-gray-800" };
  return <span className={`${baseStyle} ${typeStyles[type]}`}>{text}</span>;
};

const HelplineCard = ({ name, description, number, type }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex flex-col justify-between">
    <div>
      <h3 className="font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <div className="my-3"><Tag text={type} type={type} /></div>
    </div>
    <div className="flex justify-between items-center mt-2">
      <p className="text-3xl font-bold text-gray-900">{number}</p>
      <div className="flex items-center space-x-3">
        <FaCopy className="text-gray-400 cursor-pointer hover:text-gray-600" />
        <button className="bg-pink-600 text-white rounded-full px-5 py-2.5 text-sm font-semibold flex items-center gap-2 hover:bg-pink-700 transition-colors"><FaPhoneAlt size={12} />Call</button>
      </div>
    </div>
  </div>
);

const ResourceListItem = ({ icon, name, address, number }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
        <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">{icon}</div>
            <div><p className="font-semibold text-gray-800">{name}</p><p className="text-sm text-gray-500">{address}</p></div>
        </div>
        <div className="flex items-center gap-4">
            <p className="font-bold text-pink-600">{number}</p>
            <button className="bg-pink-100 text-pink-700 p-3 rounded-full hover:bg-pink-200 transition-colors"><FaPhoneAlt size={14}/></button>
        </div>
    </div>
);

const SafePlaceCard = ({ type, name, address, distance, number }) => {
  const icons = { police: <FaBuilding className="text-blue-500" size={24} />, hospital: <FaPlusSquare className="text-red-500" size={24} />, shelter: <FaHome className="text-green-500" size={24} />, };
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <div className="flex gap-4">
          <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-lg">{icons[type]}</div>
          <div><h3 className="font-bold text-gray-800">{name}</h3><p className="text-sm text-gray-500">{address}</p></div>
        </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-3"><span className="text-sm font-semibold text-gray-700">{distance}</span><span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-md">24x7</span></div>
        <button className="font-bold text-blue-600 hover:underline text-lg">Call {number}</button>
      </div>
      <div className="border-t border-gray-200 mt-4 pt-3 flex justify-end items-center gap-6">
        <button className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">Navigate</button>
        <button className="font-semibold text-pink-600 hover:text-pink-800 transition-colors">Save</button>
      </div>
    </div>
  );
};

const AccordionItem = ({ item, isOpen, onClick }) => (
    <div className="border border-gray-200 rounded-lg mb-4 bg-white shadow-sm">
      <button onClick={onClick} className="w-full flex justify-between items-center p-5 text-left">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-lg">{item.icon}</div>
          <div><h3 className="font-bold text-gray-800">{item.title}</h3><p className="text-sm text-gray-500">{item.subtitle}</p></div>
        </div>
        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-5 border-t border-gray-200">
          {item.tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-4 mb-5 last:mb-0">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div><h4 className="font-semibold text-gray-800">{index + 1}. {tip.title}</h4><p className="text-gray-600 text-sm mt-1">{tip.content}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
);

const PolicySection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
    <div className="space-y-2 text-sm text-gray-600">{children}</div>
  </div>
);


//================================================================//
//  VIEW COMPONENTS
//================================================================//

const ResourcesView = () => (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">National Helplines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {nationalHelplines.map((helpline) => <HelplineCard key={helpline.name} {...helpline} />)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Police Stations</h3>
            {policeStations.map(station => <ResourceListItem key={station.name} icon={<FaBuilding className="text-blue-500"/>} {...station}/>)}
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Hospitals</h3>
            {hospitals.map(hospital => <ResourceListItem key={hospital.name} icon={<FaClinicMedical className="text-green-500"/>} {...hospital}/>)}
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Shelters</h3>
            {shelters.map(shelter => <ResourceListItem key={shelter.name} icon={<FaHome className="text-yellow-500"/>} {...shelter}/>)}
        </div>
      </div>
    </div>
);

const SafeAreasView = () => {
    // ✅ Call the useLocation hook here to get the location data
    const location = useLocation();

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Safe Areas Near You</h2>
                <button className="bg-pink-600 text-white font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm hover:bg-pink-700 transition-colors"><FaMap />Open Map</button>
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 flex items-center gap-4 mb-6">
                <FaMapMarkerAlt className="text-sky-500" size={20} />
                <div>
                    <h3 className="font-semibold text-sky-800">Your Current Location</h3>
                    {/* ✅ Display the latitude and longitude from the hook */}
                    <p className="text-xs text-sky-700">
                        {location.latitude ? `Lat: ${location.latitude}, Lng: ${location.longitude}` : "Fetching location..."}
                    </p>
                    <p className="text-xs text-sky-600">Last updated: Just now</p>
                </div>
            </div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Safe Places Within 10 KM ({safePlaces.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safePlaces.map((place, index) => <SafePlaceCard key={index} {...place} />)}
            </div>
            <p className="text-center text-xs text-gray-500 mt-8"><strong>Offline Support:</strong> Your saved safe areas and last known location are stored locally.</p>
        </div>
    );
};


const SafetyTipsView = () => {
    const [openAccordion, setOpenAccordion] = useState(0);
    const handleAccordionClick = (index) => setOpenAccordion(openAccordion === index ? null : index);
    return(
        <div>
          <h2 className="text-xl font-bold text-gray-800">Safety Tips Library</h2>
          <p className="text-gray-500 mb-6">Essential information to keep you safe and informed</p>
          <div>{safetyTipsData.map((item, index) => <AccordionItem key={index} item={item} isOpen={openAccordion === index} onClick={() => handleAccordionClick(index)} />)}</div>
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5 mt-6 flex items-start gap-4">
            <FaCloudDownloadAlt className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
            <div><h3 className="font-bold text-yellow-800">Offline Access</h3><p className="text-sm text-yellow-700 mt-1">All safety tips are stored locally and accessible even without internet connection.</p></div>
          </div>
        </div>
    );
};

const EmergencyContactsView = () => (
    <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-200 pb-4 mb-6">
                <div><h2 className="text-xl font-bold text-gray-800">Emergency Contacts</h2><p className="text-sm text-gray-500 mt-1">Add trusted contacts who will be notified when you press the panic button</p></div>
                <button className="bg-pink-100 text-pink-700 font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm hover:bg-pink-200 transition-colors mt-4 sm:mt-0"><FaUserPlus />Add Contact</button>
            </div>
            <div className="text-center py-12">
                <FaUsers className="mx-auto text-gray-300" size={60} /><h3 className="mt-4 text-lg font-semibold text-gray-800">No Emergency Contacts Yet</h3><p className="mt-1 text-sm text-gray-500">Add trusted contacts who will be alerted when you use the panic button</p>
                <button className="mt-6 bg-pink-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-pink-700 transition-colors shadow">Add Your First Contact</button>
            </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">How Emergency Contacts Work</h3>
            <div className="space-y-3">
                {howItWorksSteps.map((step, index) => (<div key={index} className="flex items-start gap-3"><span className="flex-shrink-0 bg-blue-100 text-blue-700 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full mt-0.5">{index + 1}</span><p className="text-sm text-gray-600">{step}</p></div>))}
            </div>
        </div>
    </div>
);

const PrivacyView = () => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8">
        <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2><p className="text-sm text-gray-500 mt-1">Your privacy and safety are our top priorities</p><p className="text-xs text-gray-400 mt-2">Last Updated: October 2025</p>
        </div>
        <div className="flex items-start gap-4 bg-green-50 text-green-800 p-4 rounded-lg mb-6">
            <FaCheckCircle className="flex-shrink-0 mt-1" size={20} />
            <div><h3 className="font-bold">Your Data Stays Local</h3><p className="text-sm mt-1 text-green-700">SafeGuard is designed with privacy-first principles. All your personal information, emergency contacts, and saved locations are stored locally on your device.</p></div>
        </div>
        <PolicySection title="Data Collection">
            <p>We collect only the information necessary for the app to function:</p>
            <ul className="list-disc list-inside mt-2 space-y-1"><li><b>Account Information:</b> Name, email, phone number.</li><li><b>Emergency Contacts:</b> Names and phone numbers of your trusted contacts.</li></ul>
        </PolicySection>
        <PolicySection title="Data Storage & Security">
            <ul className="list-disc list-inside mt-2 space-y-1"><li>All data is stored using browser's secure local storage.</li><li>You can clear all data at any time by logging out.</li></ul>
        </PolicySection>
        <p className="text-center text-xs text-gray-500 mt-8">By using SafeGuard, you acknowledge that you have read and understood this Privacy Policy.</p>
    </div>
);

//================================================================//
//  SHARED UI COMPONENTS (BANNER & NAV)
//================================================================//

const EmergencySOSBanner = () => (
    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="mb-4 sm:mb-0">
        <h2 className="text-xl font-bold flex items-center gap-2"><FaExclamationTriangle/> Emergency SOS</h2>
        <p className="text-sm mt-1 text-pink-100">Press and hold the panic button to alert your emergency contacts with your location</p>
        <div className="flex gap-3 mt-4"><span className="bg-white/30 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5"><FaMapMarkerAlt size={12} /> GPS Location</span><span className="bg-white/30 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5"><FaSms size={12} /> Auto SMS</span></div>
        </div>
        <div className="flex flex-col items-center">
            <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-red-300 shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-center"><div className="text-red-500 w-10 h-10 flex items-center justify-center mx-auto"><FaExclamationTriangle size={30}/></div><p className="text-red-600 font-bold text-sm">SOS</p></div>
            </button>
            <p className="text-xs text-pink-100 mt-2">Hold to activate</p>
        </div>
    </div>
);

const NavTabs = ({ activeView, setActiveView }) => {
    const tabs = [
        { id: 'safe-areas', name: 'Safe Areas', icon: <FaShieldAlt/> },
        { id: 'resources', name: 'Resources', icon: <FaBook/> },
        { id: 'safety-tips', name: 'Safety Tips', icon: <FaHeartbeat/> },
        { id: 'emergency-contacts', name: 'Emergency Contacts', icon: <FaPhoneAlt/> },
        { id: 'privacy', name: 'Privacy', icon: <FaLock/> }
    ];

    return(
        <div className="bg-white rounded-lg shadow-sm p-2 mb-6">
            <nav className="flex flex-wrap justify-center sm:justify-start space-x-2">
            {tabs.map(tab => (
                <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    activeView === tab.id 
                    ? 'bg-pink-600 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                >
                {tab.icon}
                {tab.name}
                </button>
            ))}
            </nav>
        </div>
    );
};

//================================================================//
//  MAIN APP COMPONENT
//================================================================//

const SafeGuardApp = () => {
    const [activeView, setActiveView] = useState('safe-areas');

    const renderView = () => {
        switch (activeView) {
            case 'safe-areas': return <SafeAreasView />;
            case 'resources': return <ResourcesView />;
            case 'safety-tips': return <SafetyTipsView />;
            case 'emergency-contacts': return <EmergencyContactsView />;
            case 'privacy': return <PrivacyView />;
            default: return <SafeAreasView />;
        }
    };


    return(
        <div className="bg-gray-50 min-h-screen font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-6"><h1 className="text-2xl font-bold text-gray-800">Welcome, User</h1></header>
                
                <EmergencySOSBanner />
                <NavTabs activeView={activeView} setActiveView={setActiveView} />
                
                <main>
                    {renderView()}
                </main>
            </div>
        </div>
    );
};

export default SafeGuardApp;