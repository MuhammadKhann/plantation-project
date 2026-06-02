/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TreePine, Users, Globe, ArrowDown, MessageCircle, Sprout, Award, Heart, Calendar, MapPin, Quote, Menu, X, Instagram, Facebook, CheckCircle, Droplets, Shield, ClipboardList, Map, HandHeart } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Our Goals", href: "#impact" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Donate", href: "#donate" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Offset for the fixed navigation header (64px)
      const y = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-200 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-800 font-display font-bold text-xl">
            <TreePine className="h-6 w-6" />
            <span>Rooted Community</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScrollTo(e, link.href)}
                className="hover:text-emerald-700 transition"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              onClick={(e) => handleScrollTo(e, "#donate")}
              className="px-5 py-2.5 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition shadow-sm font-medium"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden p-2 text-stone-600 hover:text-emerald-700 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-stone-50 border-b border-stone-200 shadow-xl"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-center font-medium text-stone-600">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block p-2 hover:text-emerald-700 hover:bg-stone-100 rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#donate"
                onClick={(e) => handleScrollTo(e, "#donate")}
                className="block p-3 mt-4 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition shadow-sm font-medium"
              >
                Join Plantation Drive
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" 
            alt="Forest canopy from below" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 via-stone-50/80 to-stone-50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium tracking-wide mb-6">
              Civics & Community Management Project
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-stone-900 tracking-tight leading-tight mb-6">
              Plant Today. <span className="text-emerald-700">Protect Tomorrow.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rooted Community is a tree plantation project that connects students, volunteers, and communities to plant trees, track plantation activity, and spread environmental awareness.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#donate"
                onClick={(e) => handleScrollTo(e, "#donate")}
                className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 w-full sm:w-auto text-lg"
              >
                Join as Volunteer
                <HandHeart className="h-5 w-5" />
              </a>
              <a 
                href="#events"
                onClick={(e) => handleScrollTo(e, "#events")}
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 border-2 border-emerald-100 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 hover:border-emerald-200 transition-colors w-full sm:w-auto text-lg"
              >
                View Plantation Drives
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Progress Stats */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-stone-100">
            {[
              { icon: <Sprout className="h-6 w-6 text-emerald-600" />, count: "250+", label: "Trees Planted" },
              { icon: <Users className="h-6 w-6 text-emerald-600" />, count: "80+", label: "Volunteers" },
              { icon: <Calendar className="h-6 w-6 text-emerald-600" />, count: "12", label: "Plantation Drives" },
              { icon: <Map className="h-6 w-6 text-emerald-600" />, count: "Multan", label: "Areas Covered" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center px-4"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-emerald-50 rounded-full">{stat.icon}</div>
                </div>
                <div className="text-4xl font-display font-bold text-stone-900 mb-1">{stat.count}</div>
                <div className="text-sm text-stone-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-4">How It Works</h2>
            <p className="text-stone-600 text-lg">Getting involved is simple and impactful.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-0.5 bg-emerald-200/50 -z-10"></div>
            {[
              {
                step: "1",
                icon: <ClipboardList className="h-8 w-8 text-emerald-700" />,
                title: "Register as a volunteer",
                desc: "Sign up through our platform or WhatsApp to get notified about upcoming plantation campaigns."
              },
              {
                step: "2",
                icon: <Users className="h-8 w-8 text-emerald-700" />,
                title: "Join a plantation drive",
                desc: "Meet us at the designated location with your enthusiasm. We provide the tools and saplings!"
              },
              {
                step: "3",
                icon: <CheckCircle className="h-8 w-8 text-emerald-700" />,
                title: "Plant & upload progress",
                desc: "Plant a tree, document your contribution, and help us maintain local greenery."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center z-10"
              >
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  {item.icon}
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-emerald-600 text-white font-bold rounded-full flex items-center justify-center border-4 border-stone-50">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6">
                About The Initiative
              </h2>
              <div className="w-12 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                Rooted Community is a tree plantation initiative focused on increasing environmental awareness and encouraging community participation.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                The project helps organize plantation drives, involve volunteers, and promote long-term care of planted trees, ensuring our green spaces thrive for generations.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
            >
               <img 
                  src="https://images.unsplash.com/photo-1542601098367-f39b6920fde6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Community members planting saplings together" 
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-stone-900/5 hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Tree Plantation Matters Section */}
      <section id="impact" className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why It Matters</h2>
            <p className="text-stone-600 text-lg">Every sapling we plant has a ripple effect on our ecosystem.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="h-6 w-6 text-emerald-600" />, title: "Reduces Heat & Pollution", desc: "Trees act as natural air conditioners and absorb harmful pollutants." },
              { icon: <Sprout className="h-6 w-6 text-emerald-600" />, title: "Improves Air Quality", desc: "Generating fresh oxygen and making our cities more breathable." },
              { icon: <Globe className="h-6 w-6 text-emerald-600" />, title: "Supports Biodiversity", desc: "Providing shelter, food, and habitats for local wildlife and birds." },
              { icon: <Users className="h-6 w-6 text-emerald-600" />, title: "Community Participation", desc: "Uniting students, teachers, and locals under a shared mission." },
              { icon: <Award className="h-6 w-6 text-emerald-600" />, title: "Environmental Awareness", desc: "Fostering a culture of responsibility for the planet's future." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-stone-200 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="bg-emerald-50 p-3 rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-2 text-stone-900">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* After Plantation Care */}
      <section className="py-24 bg-emerald-900 text-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]"
            >
               <img 
                  src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1200&auto=format&fit=crop" 
                  alt="Watering a newly planted sapling" 
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                After Plantation Care
              </h2>
              <p className="text-emerald-100/90 text-lg mb-8 leading-relaxed">
                Most plantation projects fail because trees are planted but not maintained. We take our responsibility seriously by ensuring long-term survival.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: <Droplets className="h-6 w-6 text-amber-400" />, text: "Water regularly, especially during dry seasons" },
                  { icon: <Shield className="h-6 w-6 text-amber-400" />, text: "Protect young plants from harsh weather and grazers" },
                  { icon: <Sprout className="h-6 w-6 text-amber-400" />, text: "Monitor growth and prune safely when needed" },
                  { icon: <CheckCircle className="h-6 w-6 text-amber-400" />, text: "Assign volunteers for weekly follow-ups" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-emerald-800 p-2 rounded-full border border-emerald-700/50">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium text-emerald-50">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-4">Upcoming Drives</h2>
            <p className="text-stone-600 text-lg">Join us in our upcoming plantation events and make a difference.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Air University Plantation Drive",
                date: "June 25, 2026 • 9:00 AM",
                location: "Air University Multan Campus",
                mapQuery: "Air+University+Multan+Campus",
                desc: "Help us reach our goal of 50 trees on campus. Registration is open to all students and faculty."
              },
              {
                title: "Sapling Maintenance Day",
                date: "April 5, 2024 • 10:00 AM",
                location: "Riverside Trail",
                mapQuery: "Riverside+Park,+NY",
                desc: "We will be watering, weeding, and checking up on the trees we planted last season."
              }
            ].map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow flex flex-col"
              >
                <h3 className="text-xl font-display font-semibold text-stone-900 mb-4">{event.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-stone-600">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed text-sm flex-grow mb-6">{event.desc}</p>
                <div className="w-full h-40 rounded-xl overflow-hidden relative bg-stone-100 border border-stone-200 mt-auto">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={`https://maps.google.com/maps?q=${event.mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    title={event.location}
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-4">Project Highlights</h2>
            <p className="text-stone-600 text-lg">Visuals that represent our mission and hard work.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-lg h-64 md:h-full">
              <img src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=800&auto=format&fit=crop" alt="Holding a sapling" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-40 md:h-auto">
              <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop" alt="Forest scene" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-40 md:h-auto">
              <img src="https://images.unsplash.com/photo-1416879598555-33e4562c9d64?q=80&w=800&auto=format&fit=crop" alt="Close up of leaves" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg h-48">
              <img src="https://images.unsplash.com/photo-1532153259564-9b5daeb9bfff?q=80&w=1200&auto=format&fit=crop" alt="Team planting outdoors" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-emerald-900 text-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Community Voices</h2>
            <p className="text-emerald-100 text-lg">Hear from the students and teachers driving this initiative.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Being part of Rooted Community has shown me that small actions, like planting a single sapling, can inspire an entire school. It's the best part of our Civics class.",
                author: "Sarah Ahmed",
                role: "Student Volunteer"
              },
              {
                quote: "This project brings our curriculum to life. The students aren't just reading about community management; they are getting their hands dirty and leading by example.",
                author: "Mr. Johnson",
                role: "Civics Educator"
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-emerald-800/40 border border-emerald-700/50 p-8 rounded-2xl relative"
              >
                <Quote className="h-10 w-10 text-emerald-600/40 absolute top-6 right-6" />
                <p className="text-lg text-emerald-50 leading-relaxed mb-8 relative z-10 font-medium">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-xl font-display font-bold text-emerald-100">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-stone-100">{testimonial.author}</h4>
                    <p className="text-sm text-emerald-300">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-24 bg-emerald-900/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6">Support Our Cause</h2>
            <p className="text-stone-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Every contribution helps us plant more trees and nurture our community. Whether it's donating saplings, gardening tools, or financial support, we welcome your help!
            </p>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 flex flex-col items-center max-w-xl mx-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3 text-stone-800">Donate via WhatsApp</h3>
              <p className="text-stone-500 mb-8">Message us directly to coordinate your donation or get involved.</p>
              <a
                href="https://wa.me/0307777222?text=Hi!%20I%20would%20like%20to%20support%20the%20Rooted%20Community%20tree%20plantation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 text-lg w-full sm:w-auto justify-center"
              >
                <MessageCircle className="h-6 w-6" />
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <TreePine className="h-10 w-10 text-emerald-600 mb-6" />
          <h2 className="text-2xl font-display font-medium text-stone-200 mb-2">Rooted Community</h2>
          <p className="mb-8">A Civics and Community Management Initiative.</p>
          <div className="flex items-center gap-4 mb-8">
            <a href="#" className="p-3 bg-stone-800 text-stone-400 hover:bg-emerald-700 hover:text-white rounded-full transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="p-3 bg-stone-800 text-stone-400 hover:bg-emerald-700 hover:text-white rounded-full transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <div className="w-24 h-px bg-stone-700 mb-8"></div>
          <p className="text-sm">Made by the students, for the planet. &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
