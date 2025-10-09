import React, { useState, useRef } from 'react';

// ===================================================================================
//  SVG Icon Components
//  A collection of icons used throughout the application.
// ===================================================================================

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PoliceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const HospitalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

const ShelterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const UserPlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
);

// ===================================================================================
//  Main View Components
//  Each component represents a different screen/tab in the application.
// ===================================================================================

/**
 * Renders the "Safe Areas" view, displaying the user's location and nearby safe places.
 */
const SafeAreasView = () => {
    const safePlaces = [
        { name: "City Police Station", address: "Main Road, Sector 12", distance: "0.8 km", number: "100", icon: <PoliceIcon /> },
        { name: "District Hospital", address: "Medical Complex, Central Avenue", distance: "1.2 km", number: "102", icon: <HospitalIcon /> },
        { name: "Women's Shelter Home", address: "Gandhi Nagar, Block A", distance: "2.5 km", number: "181", icon: <ShelterIcon /> },
        { name: "Community Police Post", address: "Market Square, Zone 3", distance: "3.1 km", number: "100", icon: <PoliceIcon /> },
    ];

    return (
        <div className="p-4 md:p-6 lg:p-8 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Safe Areas Near You</h2>
                <button className="bg-white border border-gray-300 text-gray-700 text-sm font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-100">
                    Open Map
                </button>
            </div>

            {/* Current Location Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6 flex items-center space-x-4">
                <LocationIcon />
                <div>
                    <h3 className="font-semibold text-gray-700">Your Current Location</h3>
                    <p className="text-sm text-gray-500">Lat: 26.788016, Lng: 75.834924</p>
                    <p className="text-xs text-gray-400 mt-1">Last updated: 21:39:16</p>
                </div>
            </div>

            {/* Safe Places List */}
            <h3 className="font-semibold text-gray-700 mb-3">Safe Places Within 10 KM (10)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {safePlaces.map((place, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start space-x-4">
                        <div className="flex-shrink-0 pt-1">{place.icon}</div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-800">{place.name}</h4>
                                    <p className="text-sm text-gray-500">{place.address}</p>
                                </div>
                                <div className="text-right ml-2">
                                    <p className="font-semibold text-sm text-gray-800">{place.distance}</p>
                                    <p className="text-xs text-green-700 font-medium bg-green-100 px-2 py-0.5 rounded-full mt-1 inline-block">24x7</p>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center space-x-2">
                                <button className="flex-1 bg-rose-500 text-white text-sm font-semibold py-2 px-3 rounded-lg hover:bg-rose-600">Call {place.number}</button>
                                <button className="flex-1 bg-gray-200 text-gray-700 text-sm font-semibold py-2 px-3 rounded-lg hover:bg-gray-300">Navigate</button>
                                <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-3 rounded-lg hover:bg-gray-300">Save</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


/**
 * Renders the "Emergency Contacts" view, showing an empty state and instructions.
 */
const EmergencyContactsView = () => {
    return (
        <div className="p-4 md:p-6 lg:p-8 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Emergency Contacts</h2>
                <button className="bg-rose-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-rose-600">
                    + Add Contact
                </button>
            </div>
            <p className="text-gray-600 mb-6">Add trusted contacts who will be notified when you press the panic button.</p>

            {/* Empty State Card */}
            <div className="bg-white border-dashed border-2 border-gray-300 rounded-lg text-center py-12 px-6 mb-8">
                <div className="flex justify-center mb-4">
                    <UserPlusIcon />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">No Emergency Contacts Yet</h3>
                <p className="text-gray-500 mt-1 mb-4">Add trusted contacts who will be alerted when you use the panic button.</p>
                <button className="bg-rose-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-rose-600">
                    Add Your First Contact
                </button>
            </div>

            {/* How it Works Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-800 mb-3">How Emergency Contacts Work</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                    <li>When you press the panic button, an emergency SMS with your location is sent to all contacts.</li>
                    <li>If auto-call is enabled, your primary contact will be called automatically.</li>
                    <li>Your last known GPS location is shared even if you go offline.</li>
                    <li>We recommend adding at least 3 trusted contacts for maximum safety.</li>
                </ol>
            </div>
        </div>
    );
};

// Placeholder views for other tabs
const ResourcesView = () => <div className="p-8 text-center text-gray-500">Resources View Content</div>;
const SafetyTipsView = () => <div className="p-8 text-center text-gray-500">Safety Tips View Content</div>;
const PrivacyView = () => <div className="p-8 text-center text-gray-500">Privacy View Content</div>;


// ===================================================================================
//  Core Application Structure Components
// ===================================================================================

/**
 * The main header containing the branding and the interactive SOS banner.
 */
const AppHeader = () => {
    const [isHolding, setIsHolding] = useState(false);
    const holdTimer = useRef(null);

    const handlePressStart = () => {
        setIsHolding(true);
        holdTimer.current = setTimeout(() => {
            alert("SOS Activated! Notifying emergency contacts.");
            // Reset state after activation
            setIsHolding(false);
        }, 2000); // 2-second hold to activate
    };

    const handlePressEnd = () => {
        setIsHolding(false);
        clearTimeout(holdTimer.current);
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold text-rose-600">SafeGuard</h1>
                    <p className="text-sm text-gray-500">Welcome, User</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-6 relative overflow-hidden flex items-center">
                    <div className="w-2/3">
                        <h2 className="text-white font-bold text-2xl flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Emergency SOS
                        </h2>
                        <p className="text-white text-opacity-90 mt-2 text-sm">Press and hold the panic button to alert your emergency contacts with your location.</p>
                        <div className="mt-4 flex items-center space-x-3">
                            <span className="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">GPS Location</span>
                            <span className="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">Auto SMS</span>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-center items-center">
                        <button
                            onMouseDown={handlePressStart}
                            onMouseUp={handlePressEnd}
                            onMouseLeave={handlePressEnd}
                            onTouchStart={handlePressStart}
                            onTouchEnd={handlePressEnd}
                            className="relative w-28 h-28 rounded-full bg-white text-rose-500 flex flex-col items-center justify-center shadow-lg transform transition-transform duration-200 focus:outline-none"
                            style={{ transform: isHolding ? 'scale(1.1)' : 'scale(1)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 100-2 1 1 0 000 2zm-1.75-5.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xl font-bold mt-1">SOS</span>
                            <span className="text-xs font-semibold text-gray-500">Hold to activate</span>
                            {isHolding && <div className="absolute inset-0 rounded-full border-4 border-rose-500 animate-ping"></div>}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


/**
 * The main navigation bar for switching between different views.
 */
const AppNavigationBar = ({ activeView, setActiveView }) => {
    const navItems = [
        { id: 'safe-areas', label: 'Safe Areas' },
        { id: 'resources', label: 'Resources' },
        { id: 'safety-tips', label: 'Safety Tips' },
        { id: 'emergency-contacts', label: 'Emergency Contacts' },
        { id: 'privacy', label: 'Privacy' },
    ];

    return (
        <nav className="bg-white border-b border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-6">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveView(item.id)}
                            className={`py-3 px-1 text-sm font-semibold transition-colors duration-200 ${
                                activeView === item.id 
                                ? 'border-b-2 border-rose-500 text-rose-500' 
                                : 'text-gray-500 hover:text-rose-500'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

// ===================================================================================
//  Main App Component
//  This is the root component that ties everything together.
// ===================================================================================

export default function SafeGuardApp() {
    const [activeView, setActiveView] = useState('safe-areas');

    const renderView = () => {
        switch (activeView) {
            case 'safe-areas': return <SafeAreasView />;
            case 'emergency-contacts': return <EmergencyContactsView />;
            case 'resources': return <ResourcesView />;
            case 'safety-tips': return <SafetyTipsView />;
            case 'privacy': return <PrivacyView />;
            default: return <SafeAreasView />;
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 font-sans">
            <AppHeader />
            <AppNavigationBar activeView={activeView} setActiveView={setActiveView} />
            <main className="max-w-7xl mx-auto w-full">
                {renderView()}
            </main>
        </div>
    );
}