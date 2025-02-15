'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { 
  SiMiro, 
  SiGoogle, 
  SiAmazon, 
  SiImdb, 
  SiIntel, 
  SiSamsung, 
  SiCisco, 
  SiOrange 
} from '@icons-pack/react-simple-icons';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-md h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500">
                TechCon 2024
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['About', 'Speakers', 'Schedule', 'Pricing', 'Venue', 'FAQ'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['About', 'Speakers', 'Schedule', 'Pricing', 'Venue', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <Image
            src="https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg"
            alt="Conference"
            fill
            className="object-cover object-center scale-110"
            priority
            unoptimized
          />
          {/* Glass Effect Layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-purple-900/30" />
          <div className="absolute inset-0 backdrop-blur-sm backdrop-brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
          <div className="absolute inset-0 backdrop-filter backdrop-saturate-150" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center space-y-6 px-4"
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-200 to-purple-300 drop-shadow-xl">
              TechCon 2024
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 drop-shadow-lg"
          >
            Join the future of technology at the most innovative conference of the year
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-lg font-semibold shadow-lg"
          >
            Register Now
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 py-20 px-4 bg-gradient-to-b from-black to-purple-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">About The Event</h2>
              <p className="text-lg text-gray-300 mb-6">
                TechCon 2024 brings together the world&apos;s leading technology innovators, 
                entrepreneurs, and thought leaders for three days of inspiration, 
                education, and connection.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "50+", text: "Speakers" },
                  { number: "1000+", text: "Attendees" },
                  { number: "30+", text: "Workshops" },
                  { number: "20+", text: "Countries" },
                ].map((stat) => (
                  <motion.div
                    key={stat.text}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-gray-400">{stat.text}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2017/10/04/14/12/auditorium-2816353_960_720.jpg"
                alt="Conference atmosphere"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="scroll-mt-16 py-20 px-4 bg-gradient-to-b from-black to-purple-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-12"
            >
              Featured Speakers
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.name}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors"
                >
                  <div className="w-32 h-32 relative mx-auto mb-4">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="rounded-full object-cover"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">{speaker.name}</h3>
                  <p className="text-gray-400 text-center">{speaker.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="scroll-mt-16 py-20 px-4 bg-gradient-to-b from-purple-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Event Schedule</h2>
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-400">{item.speaker}</p>
                  </div>
                  <span className="text-purple-400">{item.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-16 py-20 px-4 bg-gradient-to-b from-black to-purple-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Choose Your Pass</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Early Bird",
                  price: "$299",
                  features: ["All Talks", "Workshop Access", "Digital Resources", "Coffee Breaks"],
                  recommended: false
                },
                {
                  name: "Premium",
                  price: "$499",
                  features: ["All Early Bird Features", "VIP Networking", "Recorded Sessions", "Exclusive Dinner"],
                  recommended: true
                },
                {
                  name: "Enterprise",
                  price: "$999",
                  features: ["All Premium Features", "Private Meeting Room", "Speaker Introduction", "Team Photos"],
                  recommended: false
                }
              ].map((tier) => (
                <motion.div
                  key={tier.name}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`relative p-8 rounded-2xl ${
                    tier.recommended
                      ? "bg-gradient-to-b from-purple-600 to-blue-600"
                      : "bg-white/10"
                  }`}
                >
                  {tier.recommended && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white text-purple-600 rounded-full text-sm font-bold">
                      Recommended
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <p className="text-4xl font-bold mb-6">{tier.price}</p>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                    Select Pass
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="scroll-mt-16 py-20 px-4 bg-gradient-to-b from-purple-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Venue</h2>
              <h3 className="text-2xl font-semibold mb-4">Tech Convention Center</h3>
              <p className="text-gray-300 mb-6">
                123 Innovation Street<br />
                San Francisco, CA 94105
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Central location with easy access</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>Parking available</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2017/08/10/18/26/business-2626052_960_720.jpg"
                alt="Conference venue"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: SiMiro, name: 'Microsoft' },
                { icon: SiGoogle, name: 'Google' },
                { icon: SiAmazon, name: 'Amazon' },
                { icon: SiImdb, name: 'IBM' },
                { icon: SiIntel, name: 'Intel' },
                { icon: SiSamsung, name: 'Samsung' },
                { icon: SiCisco, name: 'Cisco' },
                { icon: SiOrange, name: 'Oracle' },
              ].map((sponsor) => (
                <motion.div
                  key={sponsor.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/10 p-6 rounded-xl flex items-center justify-center group hover:bg-white/20 transition-all duration-300"
                >
                  <sponsor.icon 
                    size={48}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-16 py-20 px-4 bg-gradient-to-b from-purple-900 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechCon 2024</h3>
            <p className="text-gray-400">The future of technology starts here.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#speakers" className="hover:text-white">Speakers</a></li>
              <li><a href="#schedule" className="hover:text-white">Schedule</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-500 px-4 rounded-r-lg hover:bg-purple-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const speakers = [
  {
    name: "Michael Chang",
    role: "AI Research Director",
    image: "https://cdn.pixabay.com/photo/2024/05/24/05/13/man-8784286_1280.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Tech Innovator",
    image: "https://cdn.pixabay.com/photo/2016/08/15/18/53/speaker-1596210_1280.jpg"
  },
  {
    name: "Elena Rodriguez",
    role: "Blockchain Expert",
    image: "https://cdn.pixabay.com/photo/2016/05/20/18/52/man-1405712_1280.jpg"
  },
  {
    name: "David Wilson",
    role: "Cloud Architecture Lead",
    image: "https://cdn.pixabay.com/photo/2015/07/31/15/01/man-869215_1280.jpg"
  },
  {
    name: "James Anderson",
    role: "Cybersecurity Specialist",
    image: "https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766_1280.jpg"
  },
  {
    name: "Robert Hughes",
    role: "Digital Innovation Director",
    image: "https://cdn.pixabay.com/photo/2021/09/08/08/50/robert-harbeck-6606335_1280.jpg"
  }
];

const schedule = [
  {
    time: "9:00 AM",
    title: "Opening Keynote",
    speaker: "Sarah Johnson"
  },
  {
    time: "10:30 AM",
    title: "Future of AI",
    speaker: "Michael Chang"
  },
  {
    time: "1:00 PM",
    title: "Web3 Revolution",
    speaker: "Elena Rodriguez"
  },
  {
    time: "3:30 PM",
    title: "Panel Discussion",
    speaker: "All Speakers"
  }
];

const faqs = [
  {
    question: "What's included in the ticket price?",
    answer: "Your ticket includes access to all keynote speeches, workshops, networking events, and meals during the conference."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, full refunds are available up to  days before the event. After that, tickets can be transferred to another person."
  },
  {
    question: "Are there accommodation options nearby?",
    answer: "We have partnered with several hotels near the venue with special conference rates. Details will be sent after registration."
  },
  {
    question: "Will presentations be recorded?",
    answer: "Yes, all sessions will be recorded and made available to Premium and Enterprise ticket holders."
  }
];
