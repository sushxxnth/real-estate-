import React from 'react';

const ChennaiPage = () => {
  const builders = [
    {
      name: 'Casa Grande',
      logo: '/images/logos/casa-grande.png', // Replace with the actual logo image
      properties: [
        {
          area: 'OMR',
          price: '₹1.2 Cr - ₹3 Cr',
          description: 'Modern homes in the IT corridor of Chennai with excellent connectivity.',
        },
        {
          area: 'ECR',
          price: '₹2 Cr - ₹5 Cr',
          description: 'Premium villas with sea-facing views and luxury amenities.',
        },
        {
          area: 'Tambaram',
          price: '₹1 Cr - ₹2.5 Cr',
          description: 'Spacious apartments in a fast-developing residential hub.',
        },
      ],
    },
    {
      name: 'Radiance Realty',
      logo: '/images/logos/radiance-realty.png', // Replace with the actual logo image
      properties: [
        {
          area: 'Anna Nagar',
          price: '₹3 Cr - ₹7 Cr',
          description: 'Luxurious homes in one of Chennai’s upscale residential neighborhoods.',
        },
        {
          area: 'Adyar',
          price: '₹4 Cr - ₹8 Cr',
          description: 'Premium residences in a vibrant and historic location.',
        },
        {
          area: 'Sholinganallur',
          price: '₹1.5 Cr - ₹3.5 Cr',
          description: 'Contemporary apartments in the heart of the IT hub.',
        },
      ],
    },
    {
      name: 'Prestige',
      logo: '/images/logos/prestige.png', // Replace with the actual logo image
      properties: [
        {
          area: 'T. Nagar',
          price: '₹4 Cr - ₹10 Cr',
          description: 'Exclusive residences in a high-profile commercial and residential area.',
        },
        {
          area: 'Velachery',
          price: '₹2.5 Cr - ₹6 Cr',
          description: 'Modern apartments with proximity to shopping malls and IT parks.',
        },
        {
          area: 'Mylapore',
          price: '₹5 Cr - ₹12 Cr',
          description: 'Elegant homes in a culturally rich and well-connected locality.',
        },
      ],
    },
    {
      name: 'Sobha Developers',
      logo: '/images/logos/sobha-developers.png', // Replace with the actual logo image
      properties: [
        {
          area: 'Porur',
          price: '₹1.8 Cr - ₹4 Cr',
          description: 'Residences in a fast-growing residential area with top-notch amenities.',
        },
        {
          area: 'Medavakkam',
          price: '₹1.5 Cr - ₹3 Cr',
          description: 'Affordable luxury apartments in a rapidly developing area.',
        },
        {
          area: 'Nungambakkam',
          price: '₹6 Cr - ₹15 Cr',
          description: 'Ultra-premium residences in the heart of Chennai.',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f4f7f6] to-[#e6eaea] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#2c3e50] tracking-tight">
          Luxury Chennai Residences
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

export default ChennaiPage;
