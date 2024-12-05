import React from 'react';

const MumbaiPage = () => {
  // Data for luxury builders and their apartment prices
  const builders = [
    {
      name: 'Brigade',
      logo: '/api/placeholder/200/100', // Placeholder for builder logo
      properties: [
        {
          area: 'Lower Parel',
          price: '₹3 Cr - ₹8 Cr',
          description: 'Luxurious apartments with modern amenities.',
        },
        {
          area: 'Andheri West',
          price: '₹2.5 Cr - ₹6.5 Cr',
          description: 'High-end residential spaces with great views.',
        },
      ],
    },
    {
      name: 'Prestige',
      logo: '/api/placeholder/200/100', // Placeholder for builder logo
      properties: [
        {
          area: 'Bandra',
          price: '₹4 Cr - ₹10 Cr',
          description: 'Premium apartments with state-of-the-art facilities.',
        },
        {
          area: 'Juhu',
          price: '₹5 Cr - ₹12 Cr',
          description: 'Exclusive beachfront properties with luxury living.',
        },
      ],
    },
    {
      name: 'Godrej',
      logo: '/api/placeholder/200/100', // Placeholder for builder logo
      properties: [
        {
          area: 'Powai',
          price: '₹3.5 Cr - ₹9 Cr',
          description: 'Elegant apartments surrounded by greenery.',
        },
        {
          area: 'Kandivali',
          price: '₹2.8 Cr - ₹7 Cr',
          description: 'Modern living with excellent connectivity.',
        },
      ],
    },
    {
      name: 'Other Builders',
      logo: '/api/placeholder/200/100', // Placeholder for builder logo
      properties: [
        {
          area: 'Worli',
          price: '₹4.5 Cr - ₹11 Cr',
          description: 'Luxury towers offering panoramic sea views.',
        },
        {
          area: 'Thane',
          price: '₹1.8 Cr - ₹5.5 Cr',
          description: 'Spacious homes in a growing metropolitan area.',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f4f7f6] to-[#e6eaea] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#2c3e50] tracking-tight">
          Luxury Mumbai Residences
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {builders.map((builder, index) => (
            <div 
              key={index} 
              className="bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ease-in-out 
                         hover:shadow-3xl transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src={builder.logo} 
                    alt={`${builder.name} logo`} 
                    className="h-16 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <h2 className="text-2xl font-bold text-center text-[#34495e] mb-6 uppercase tracking-wider">
                  {builder.name}
                </h2>
                
                {builder.properties.map((property, i) => (
                  <div 
                    key={i} 
                    className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 
                               transition-colors duration-300 hover:border-[#3498db]/30"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-semibold text-[#2c3e50]">
                        {property.area}
                      </h3>
                      <span className="text-lg font-medium text-[#2ecc71]">
                        {property.price}
                      </span>
                    </div>
                    <p className="text-[#7f8c8d] leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MumbaiPage;