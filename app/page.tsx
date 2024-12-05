import Link from 'next/link';

const Page = () => {
  const properties = [
    {
      city: "Mumbai",
      area: "South Mumbai",
      price: "₹2 Cr - ₹10 Cr",
      description: "Luxurious sea-facing apartments in South Mumbai.",
      image: "/images/mumbai.jpg",
      link: "/cities/mumbai" // Link to the Mumbai city page
    },
    {
      city: "Delhi",
      area: "West Delhi",
      price: "₹8 Cr - ₹25Cr",
      description: "Premium bungalows with lush green surroundings.",
      image: "/images/delhi.jpg",
      link: "/cities/delhi" // Link to the Delhi city page
    },
    {
      city: "Bangalore",
      area: "South Bangalore",
      price: "₹5 Cr - ₹20 Cr",
      description: "Upscale homes near IT hubs and nightlife.",
      image: "/images/bangalore.jpg",
      link: "/cities/bangalore" // Link to the Bangalore city page
    },
    {
      city: "Hyderabad",
      area: "Banjara Hills",
      price: "₹8 Cr - ₹12Cr",
      description: "Elegant villas in a prestigious neighborhood.",
      image: "/images/hyderabad.jpg",
      link: "/cities/hyderabad" // Link to the Hyderabad city page
    },
    {
      city: "Chennai",
      area: "Poes Garden",
      price: "₹2 Cr - ₹15 Cr",
      description: "Exclusive residences in the heart of the city.",
      image: "/images/chennai.jpg",
      link: "/cities/chennai" // Link to the Chennai city page
    },
    {
      city: "Kolkata",
      area: "Winston Garden Square",
      price: "₹3 Cr - ₹10 Cr",
      description: "Prestigious apartments in the cultural heart of Kolkata.",
      image: "/images/kolkata.jpg",
      link: "/cities/kolkata" // Link to the Kolkata city page
    }
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center my-8 text-gray-800">Popular real estates of India</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={property.image}
              alt={`${property.area}, ${property.city}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">{property.area}, {property.city}</h2>
              <p className="text-lg text-gray-600 mt-2">{property.price}</p>
              <p className="text-gray-700 mt-4">{property.description}</p>
              {/* Link with legacyBehavior */}
              <Link href={property.link} legacyBehavior>
                <a className="text-blue-500 mt-4 inline-block hover:underline">
                  Check it out
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;

