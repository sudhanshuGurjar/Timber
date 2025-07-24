import './index.css';
import safeda from './assets/safeda.jpg';
import popular from './assets/popular.jpg';
import mango from './assets/mango.jpg';
import simal from './assets/simal.jpg';
import ImageSlider from './components/ImageSlider.jsx';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdf6ec] font-sans">
      {/* Navbar */}
      <nav className="bg-green-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">घोड़ोपिपली टिम्बर</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#products" className="hover:text-yellow-400">Products</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">संपर्क करें</a></li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="flex flex-col gap-3 p-4 md:hidden bg-green-800 rounded mt-2">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#products" className="hover:text-yellow-400">Products</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">संपर्क करें</a></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-green-800 to-lime-700 text-white py-20 px-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581093448793-820fe61acb8f)' }}>
        <div className="bg-black/60 p-6 rounded max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">घोड़ोपिपली टिम्बर पर आपका स्वागत करते हैं। </h2>
          <p className="text-lg">
            हम उच्च गुणवत्ता वाली लकड़ी – सफेदा, पॉपलर, आम और सिमल – सबसे अच्छी कीमतों पर बेचते हैं।</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="p-8 bg-gradient-to-r from-green-50 to-white text-center">
        <h3 className="text-2xl font-bold mb-6">Wood Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'सफेदा', img: safeda },
            { name: 'पॉपलर', img: popular },
            { name: 'आम की लकड़ी', img: mango },
            { name: 'सिमल', img: simal }
          ].map(({ name, img }) => (
            <div key={name} className="rounded overflow-hidden shadow hover:shadow-xl">
              <img src={img} alt={name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-1">{name}</h4>
                <p className="text-sm text-gray-700">हम किसानों से सीधे जुड़कर आपको बेहतरीन गुणवत्ता वाले उत्पाद सबसे अच्छे दामों पर प्रदान करते हैं।</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-gradient-to-br from-yellow-50 to-green-100 text-center">
        <h3 className="text-2xl font-bold mb-4">About Us</h3>
        <p className="max-w-2xl mx-auto text-gray-700">
          हम यमुनानगर स्थित एक विश्वसनीय लकड़ी व्यापारी और कमीशन एजेंट हैं। वर्षों के अनुभव के साथ, हम उच्च गुणवत्ता वाली लकड़ी जैसे कि सफेदा, पॉपलर, आम और सिमल की आपूर्ति में विशेषज्ञता रखते हैं।
        </p>
         <p className="max-w-2xl mx-auto text-gray-700">
          We are a trusted timber merchant and commission agent based in Yamuna Nagar. With years of experience,
          we specialize in supplying high-quality wood including Safeda, Poplar, Mango, and Simal.
        </p>
        <p className="max-w-2xl mx-auto text-green-800 font-semibold">
          We offer the best prices on high-quality timber, ensuring great value for Safeda, Poplar, Mango Wood, and Simabhal.
        </p>
      </section>

      {/* Products */}
      <section id="products" className="p-8 bg-white text-center">
        <h3 className="text-2xl font-bold mb-6">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Safeda', 'Poplar', 'Mango Wood', 'Simal'].map((wood) => (
            <div key={wood} className="border p-4 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">{wood}</h4>
              <p>We work directly with farmers to offer you the best rates</p>
            </div>
          ))}
        </div>
      </section>

      {/* // Image Slider Component */}
      <div>
        <h1 className="text-2xl text-center mt-4">Images</h1>
        <ImageSlider />
      </div>


      {/* Contact Section */}
      <section id="contact" className="p-8 bg-green-100 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <p><b>📞 Praveen Gurjar: +91 9759771118</b></p>
        <a href="https://www.instagram.com/parveen.gujjar11/#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 border-b-2 border-green-900 inline-flex items-center gap-2">
          <i className="fab fa-instagram"></i> Follow us on
          Instagram
        </a>

        <p className="mt-2">📍 Near Mahalaxmi Kanta, Saharanpur Road, Yamuna Nagar.</p>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center p-4 mt-4">
        © 2025 Ghodopipli Timber. All rights reserved.
      </footer>
    </div>
  );
}
