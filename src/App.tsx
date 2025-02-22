import React, { useState, useEffect } from 'react';
import { GraduationCap, ListTodo, School, Award, BookOpen, Heart, ArrowRight, Facebook, Instagram, Linkedin, Search, Menu, Users, FlaskConical, Trophy, BookOpenCheck, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import SelfFinancing from './pages/SelfFinancing';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSelfFinancing, setShowSelfFinancing] = useState(false);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000",
      title: "Shape Your Future at Óbuda University",
      description: "Join a community of innovators and leaders. Experience world-class education in the heart of Budapest.",
      buttonText: "Begin Your Journey"
    },
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000",
      title: "Excellence in Education",
      description: "Discover cutting-edge research opportunities and innovative learning experiences.",
      buttonText: "Explore Programs"
    },
    {
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=2000",
      title: "Your Journey Starts Here",
      description: "Access world-class facilities and expert faculty to achieve your academic goals.",
      buttonText: "Learn More"
    }
  ];

  const scholarships = [
    {
      name: "Tuition Fees Overview",
      description: "View our comprehensive information about program fees and payment options for all academic levels",
      url: "#fees"
    },
    {
      name: "Stipendium Hungaricum",
      description: "Full scholarship program for international students",
      url: "https://stipendiumhungaricum.hu/"
    },
    {
      name: "Hungarian Diaspora Scholarship",
      description: "Support for students with Hungarian heritage",
      url: "https://diasporascholarship.hu/"
    },
    {
      name: "Scholarship for Christian Young People",
      description: "Program supporting Christian students worldwide",
      url: "https://www.scholarship.hu/"
    },
    {
      name: "Erasmus+ Programs",
      description: "EU mobility and exchange opportunities",
      url: "https://erasmus-plus.ec.europa.eu/"
    }
  ];

  const programs = [
    {
      title: "Preparatory Undergraduate Program (PreBSc)",
      description: "Foundation year preparing international students for undergraduate studies",
      courses: [
        "Academic English",
        "Mathematics",
        "Physics",
        "Computer Science Basics"
      ]
    },
    {
      title: "Undergraduate Programmes",
      description: "Bachelor's degree programs spanning various disciplines",
      courses: [
        "Computer Science Engineering BSc",
        "Mechanical Engineering BSc",
        "Electrical Engineering BSc",
        "Business Administration BSc"
      ]
    },
    {
      title: "Preparatory Graduate Program (PreMSc)",
      description: "Bridging program for students transitioning to master's studies",
      courses: [
        "Advanced Mathematics",
        "Research Methodology",
        "Technical English",
        "Specialized Subject Preparation"
      ]
    },
    {
      title: "Graduate Programmes",
      description: "Master's degree programs for advanced specialization",
      courses: [
        "Applied Mathematics MSc",
        "Data Science MSc",
        "Artificial Intelligence MSc",
        "Engineering Management MSc"
      ]
    },
    {
      title: "Preparatory Doctoral Program",
      description: "Research preparation for prospective PhD candidates",
      courses: [
        "Research Ethics",
        "Academic Writing",
        "Statistical Analysis",
        "Research Project Planning"
      ]
    },
    {
      title: "Doctoral Programmes",
      description: "PhD programs for advanced research and academic excellence",
      courses: [
        "Applied Informatics PhD",
        "Materials Sciences PhD",
        "Safety Sciences PhD",
        "Enterprise Theory PhD"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (showSelfFinancing) {
    return <SelfFinancing />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-[#fcaf17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-8">
            <div className="flex space-x-4">
              <a href="#" className="text-sm">HU</a>
              <span>|</span>
              <a href="#" className="text-sm">EN</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm">NEPTUN</a>
              <a href="#" className="text-sm">E-LEARNING</a>
            </div>
          </div>
        </div>
      </div>

      {/* Header/Navigation */}
      <header className="bg-[#1d294d] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <School className="h-10 w-10 text-white" />
                <div className="ml-2 text-white">
                  <div className="text-lg font-bold">ÓBUDA UNIVERSITY</div>
                  <div className="text-xs">TRADITION AND INNOVATION</div>
                </div>
              </div>
              <div className="hidden lg:flex items-center space-x-1 text-white text-sm">
                <div className="px-2 py-1 bg-white text-[#1d294d] font-bold">ÓE</div>
                <div className="px-2 py-1 border border-white">15</div>
                <div className="px-2 py-1 border border-white">145</div>
                <div className="px-2 py-1 border border-white">630</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-white hover:text-[#fcaf17] transition">ABOUT</a>
              <a href="#academics" className="text-white hover:text-[#fcaf17] transition">ACADEMICS</a>
              <a href="#admission" className="text-white hover:text-[#fcaf17] transition">ADMISSION</a>
              <a href="#research" className="text-white hover:text-[#fcaf17] transition">RESEARCH</a>
              <a href="#contact" className="text-white hover:text-[#fcaf17] transition">CONTACT US</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-white cursor-pointer" />
              <Menu className="h-6 w-6 text-white md:hidden cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner with Slider */}
      <section className="relative h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              currentSlide === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-6xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl mb-12 text-gray-200">
                  {slide.description}
                </p>
                <div className="flex space-x-6">
                  <button 
                    onClick={() => setShowSelfFinancing(true)}
                    className="bg-[#fcaf17] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e59a1f] transition flex items-center shadow-lg group"
                  >
                    <GraduationCap className="w-6 h-6 mr-3 group-hover:scale-110 transition" />
                    How to Apply
                  </button>
                  <button className="bg-white text-[#1d294d] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center shadow-lg group">
                    <ListTodo className="w-6 h-6 mr-3 group-hover:scale-110 transition" />
                    To-Do List
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "16,000+", text: "Students" },
              { icon: FlaskConical, number: "150+", text: "Research Projects" },
              { icon: Trophy, number: "50+", text: "Scholarships" },
              { icon: BookOpenCheck, number: "80+", text: "Programs" },
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition border-t-4 border-[#fcaf17]">
                <fact.icon className="h-12 w-12 mx-auto mb-4 text-[#fcaf17]" />
                <p className="text-3xl font-bold text-[#1d294d] mb-2">{fact.number}</p>
                <p className="text-gray-600">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Programs */}
      <section id="programs" className="py-16 bg-[#152950]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Available Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition border-l-4 border-[#fcaf17]">
                <h3 className="text-2xl font-bold text-[#1d294d] mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-3">
                  {program.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center">
                      <BookOpen className="h-5 w-5 text-[#fcaf17] mr-3" />
                      <span className="text-gray-600">{course}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-[#1d294d] font-semibold flex items-center hover:text-[#fcaf17] transition">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="fees" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1d294d] mb-8">
            Tuition Fees & Scholarships
          </h2>
          <div className="space-y-6">
            {scholarships.map((scholarship, index) => (
              <a
                key={index}
                href={scholarship.url}
                target={scholarship.url.startsWith('#') ? '_self' : '_blank'}
                rel={scholarship.url.startsWith('#') ? '' : 'noopener noreferrer'}
                className="block group"
              >
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300 border-l-4 border-[#fcaf17]">
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-[#fcaf17] mr-4 flex-shrink-0 group-hover:scale-110 transition" />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-xl font-semibold text-[#1d294d] group-hover:text-[#fcaf17] transition">
                          {scholarship.name}
                        </h3>
                        <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition text-[#fcaf17]" />
                      </div>
                      <p className="text-gray-600 mt-2">{scholarship.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Entrance Exam Banner */}
      <section id="exam" className="relative py-24 bg-[#1d294d] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prepare for the Entrance Tests
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards your academic journey at Óbuda University. 
            Our comprehensive entrance tests are designed to identify promising talents.
          </p>
          <button className="bg-[#fcaf17] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e59a1f] transition shadow-lg inline-flex items-center group">
            <BookOpenCheck className="w-6 h-6 mr-3 group-hover:scale-110 transition" />
            Explore Test Information
          </button>
        </div>
      </section>

      {/* Refugee Support */}
      <section id="refugee" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1d294d] mb-4">
              Solidarity with Refugees
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to supporting refugee students in their pursuit of higher education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#fcaf17]">
              <h3 className="text-xl font-bold text-[#1d294d] mb-4">General Support</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-[#fcaf17] mr-2 flex-shrink-0" />
                  <span>Full Tuition Waiver for Eligible Refugees</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-6 w-6 text-[#fcaf17] mr-2 flex-shrink-0" />
                  <span>Language Support Programs</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-[#fcaf17] mr-2 flex-shrink-0" />
                  <span>Dedicated Mentorship Program</span>
                </li>
              </ul>
              <button className="mt-6 bg-[#1d294d] text-white px-6 py-2 rounded-lg hover:bg-[#2A4374] transition w-full">
                Contact Support Team
              </button>
            </div>

            {/* Students at Risk */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#fcaf17]">
              <h3 className="text-xl font-bold text-[#1d294d] mb-4">Students at Risk Programme</h3>
              <p className="text-gray-600 mb-4">
                Special support program for students from crisis regions, offering:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <School className="h-6 w-6 text-[#fcaf17] mr-2 flex-shrink-0" />
                  <span>Academic Counseling</span> </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-[#fcaf17] mr-2 flex-shrink-0" />
                  <span>Emergency Financial Aid</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-[#fcaf17] mr-2 flex-shrink-0" />
                  <span>Psychological Support</span>
                </li>
              </ul>
              <button className="mt-6 bg-[#1d294d] text-white px-6 py-2 rounded-lg hover:bg-[#2A4374] transition w-full">
                Learn More
              </button>
            </div>

            {/* Erasmus for Ukraine */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#fcaf17]">
              <h3 className="text-xl font-bold text-[#1d294d] mb-4">Erasmus+ for Ukraine</h3>
              <p className="text-gray-600 mb-4">
                Special mobility program supporting Ukrainian students and staff:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <GraduationCap className="h-6 w-6 text-[#fcaf17] mr-2 flex-shrink-0" />
                  <span>Study Mobility Grants</span>
                </li>
                <li className="flex items-start">
                  <BookOpenCheck className="h-6 w-6 text-[#fcaf17] mr-2 flex-shrink-0" />
                  <span>Academic Recognition</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-[#fcaf17] mr-2 flex-shrink-0" />
                  <span>Integration Support</span>
                </li>
              </ul>
              <button className="mt-6 bg-[#1d294d] text-white px-6 py-2 rounded-lg hover:bg-[#2A4374] transition w-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d294d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <School className="h-8 w-8 text-[#fcaf17]" />
                <span className="ml-2 text-xl font-bold">Óbuda University</span>
              </div>
              <p className="text-gray-400">
                Excellence in Education Since 1879
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: admissions@uni-obuda.hu</p>
              <p className="text-gray-400">Phone: +36 1 666 5000</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Address</h4>
              <p className="text-gray-400">
                Bécsi út 96/b<br />
                Budapest, Hungary<br />
                H-1034
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#fcaf17] transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#fcaf17] transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#fcaf17] transition">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Óbuda University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;