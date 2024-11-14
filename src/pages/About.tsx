import React from 'react';
import { Users, Target, Globe, Shield } from 'lucide-react';

export const About: React.FC = () => {
  const team = [
    {
      name: 'Monish.R',
      role: 'BE in CSE-Artificial Intelligence',
      image: 'https://github.com/MonishRaman/Stardust_innovations/blob/main/assets/images/MONISH%20BACKGROUND.jpg?raw=true',
    },
    {
      name: 'Shaswat Mishra',
      role: 'BE in CSE-Artificial Intelligence',
      image: 'https://github.com/MonishRaman/Stardust_innovations/blob/main/assets/images/Shaswat%20MISHA%20NASA.jpg?raw=true',
    },
    {
      name: 'Junaid',
      role: 'BE in CSE-Artificial Intelligence',
      image: 'https://github.com/MonishRaman/Stardust_innovations/blob/main/assets/images/junaid.jpg?raw=true',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">The Story Of This Website</h1>
            <p className="text-xl max-w-2xl mx-auto">
              It's the website made on a 5-hour hackathon program at Dayananda Sagar College on the date 14/11/2024.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mt-6 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
