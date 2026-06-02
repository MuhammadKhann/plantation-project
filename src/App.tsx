/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TreePine, Users, Globe, ArrowDown, MessageCircle, Sprout, Award, Heart, Calendar, MapPin, Quote } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-200 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-800 font-display font-bold text-xl">
            <TreePine className="h-6 w-6" />
            <span>Rooted Community</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-emerald-700 transition">About</a>
            <a href="#impact" className="hover:text-emerald-700 transition">Our Goals</a>
            <a href="#events" className="hover:text-emerald-700 transition">Events</a>
            <a href="#gallery" className="hover:text-emerald-700 transition">Gallery</a>
            <a href="#donate" className="hover:text-emerald-700 transition">Donate</a>
          </div>
        </div>
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
              Planting Today for a <br/>
              <span className="text-emerald-700">Greener Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our initiative to restore local ecosystems, promote civic responsibility, and build a sustainable community through tree plantation.
            </p>
            <a 
              href="#about"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20"
            >
              Discover Our Project
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Progress Stats */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-stone-100">
            {[
              { icon: <Sprout className="h-6 w-6 text-emerald-600" />, count: "156", label: "Trees Planted" },
              { icon: <Users className="h-6 w-6 text-emerald-600" />, count: "42", label: "Volunteers" },
              { icon: <Award className="h-6 w-6 text-emerald-600" />, count: "12", label: "Native Species" },
              { icon: <Heart className="h-6 w-6 text-emerald-600" />, count: "8", label: "Events Hosted" }
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

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6">
                Why We Started This Journey
              </h2>
              <div className="w-12 h-1 bg-amber-700 mb-6"></div>
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                As part of our Civics and Community Management curriculum, we realized that true civic engagement extends beyond the classroom. It's about taking actionable steps to improve the environment we all share.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Trees are the lungs of our community. By organizing this plantation drive, we aim to reduce our local carbon footprint, enhance soil stability, and foster a sense of shared responsibility among students and teachers alike.
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
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop" 
                  alt="Sapling being planted in soil" 
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-stone-900/10 hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals / Impact Section */}
      <section id="impact" className="py-24 bg-emerald-900 text-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Objectives</h2>
            <p className="text-emerald-100 text-lg">What we hope to achieve by the end of our civic campaign.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TreePine className="h-8 w-8 text-amber-400" />,
                title: "Plant 100+ Trees",
                desc: "Focusing on native species that thrive in our local climate and support local wildlife."
              },
              {
                icon: <Users className="h-8 w-8 text-amber-400" />,
                title: "Community Unity",
                desc: "Bringing classmates, teachers, and local staff together for a common, purposeful cause."
              },
              {
                icon: <Globe className="h-8 w-8 text-amber-400" />,
                title: "Environmental Education",
                desc: "Raising awareness about deforestation and the vital role of urban greenery."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-emerald-800/50 border border-emerald-700/50 p-8 rounded-2xl text-center hover:bg-emerald-800 transition-colors"
              >
                <div className="mx-auto bg-emerald-900 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                <p className="text-emerald-100/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
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
                title: "Spring Plantation Drive",
                date: "March 15, 2024 • 9:00 AM",
                location: "Community Central Park",
                desc: "Help us plant 50 native saplings in the main park. Tools and refreshments will be provided."
              },
              {
                title: "Sapling Maintenance Day",
                date: "April 5, 2024 • 10:00 AM",
                location: "Riverside Trail",
                desc: "We will be watering, weeding, and checking up on the trees we planted last season."
              }
            ].map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow"
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
                <p className="text-stone-600 leading-relaxed text-sm">{event.desc}</p>
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
                href="https://wa.me/0307777222"
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
          <div className="w-24 h-px bg-stone-700 mb-8"></div>
          <p className="text-sm">Made by the students, for the planet.</p>
        </div>
      </footer>
    </div>
  );
}
