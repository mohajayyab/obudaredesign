import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Coins, 
  GraduationCap, 
  CalendarClock, 
  ClipboardList,
  CheckCircle2,
  School,
  BookOpen,
  Award,
  ScrollText,
  FileCheck,
  Calculator,
  Search,
  Menu,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

interface Step {
  title: string;
  content: string | React.ReactNode;
}

const SelfFinancing = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const applicationSteps: Step[] = [
    {
      title: "Register and fill in the online Application form",
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <ExternalLink className="h-5 w-5 text-[#fcaf17]" />
            <a 
              href="#" 
              className="text-[#1d294d] hover:text-[#fcaf17] font-medium underline transition"
            >
              Register and fill in the online Application form here to the February 2024/2025 intake
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <ExternalLink className="h-5 w-5 text-[#fcaf17]" />
            <a 
              href="#" 
              className="text-[#1d294d] hover:text-[#fcaf17] font-medium underline transition"
            >
              Register and fill in the online Application form here to the September 2025/2026 intake
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Pay the 150 EUR non-refundable application fee",
      content: (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600">
            If you transfer the fee remember to write the next: Pro-form number and student's and the program name you applied for in the box "Information for beneficiary" when transferring the registration fee and the tuition fee, otherwise payments may not be identified.
          </p>
        </div>
      )
    },
    {
      title: "Submit all supporting documents listed below",
      content: (
        <div className="space-y-8">
          <div>
            <p className="font-semibold text-lg text-[#1d294d] mb-4">Required documents:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Completed application form (personal data should correlate with passport data)</li>
              <li>Secondary High School report card, with reference to Mathematics, Physics and English language (notarized English translation necessary)</li>
              <li>General certificate of education – G.C.E. or any equivalent secondary high school diploma (notarized English translation necessary)</li>
              <li>Official transcripts of completed degrees/diplomas of any higher education institution (notarized English translation necessary)</li>
              <li>Copy of passport</li>
              <li>1 recent passport sized photos (51 x 51 mm) (2"x2")</li>
              <li>Motivation letter</li>
              <li>Two letters of recommendation (for MSc and PhD applications)</li>
              <li>Study plan (for PhD applications ONLY)</li>
              <li>Certification of English Language Proficiency</li>
              <li>Medical certificate</li>
              <li>Portfolio (for the program of MSc in Architecture and Industrial Design Engineering BSc)</li>
              <li>Bank receipt certifying the transfer of the application fee of 150 EUR (non-refundable) except the applicants for Preparatory Doctoral Program</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg text-[#1d294d] mb-4">Required English Language Test Scores:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#1d294d] text-white">
                    <th className="px-4 py-3 text-left">Test Type</th>
                    <th className="px-4 py-3 text-center border-l border-gray-500">BSc</th>
                    <th className="px-4 py-3 text-center border-l border-gray-500">MSc</th>
                    <th className="px-4 py-3 text-center border-l border-gray-500">PhD</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { test: "TOEFL IBT", bsc: "65", msc: "70", phd: "79" },
                    { test: "TOEFL CBT", bsc: "183", msc: "200", phd: "213" },
                    { test: "TOEFL PBT", bsc: "513", msc: "520", phd: "550" },
                    { test: "IELTS", bsc: "5.0", msc: "5.5", phd: "6.5" },
                    { test: "Cambridge", bsc: "FCE", msc: "FCE", phd: "CAE, CPE" },
                    { test: "ECL", bsc: "B2", msc: "B2", phd: "C1" },
                    { test: "Euroexam", bsc: "B2", msc: "B2", phd: "C1" },
                    { test: "Oxford", bsc: "110", msc: "120", phd: "140" },
                    { test: "PTE General", bsc: "B2", msc: "B2", phd: "C1" },
                    { test: "telc", bsc: "B2", msc: "B2", phd: "C1" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 border-t border-gray-200 font-medium">{row.test}</td>
                      <td className="px-4 py-3 border-t border-l border-gray-200 text-center">{row.bsc}</td>
                      <td className="px-4 py-3 border-t border-l border-gray-200 text-center">{row.msc}</td>
                      <td className="px-4 py-3 border-t border-l border-gray-200 text-center">{row.phd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                The English language proficiency requirement can be waived in case of previous studies completed fully in English with qualification documents (i.e. high school diploma or undergraduate degree in case of applications to graduate programs) issued originally in English.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-medium text-[#1d294d] mb-2">NOTE:</p>
                <p>
                  Notarization is necessary for every school leaving document even if the original is in English. Notification of your acceptance / rejection will be sent to you after your complete application has been reviewed within a 60 day period. All necessary further information will be attached to the Letter of Acceptance.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Evaluation and invitation to take an entrance exam",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-gray-600 mb-8">
              After you have submitted your application, your documents are going to be evaluated and you may be invited to take an entrance exam
            </p>
            <p className="font-semibold text-lg text-[#1d294d] mb-4">Placement tests:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#1d294d] text-white">
                    <th className="px-4 py-3 text-left">Programmes</th>
                    <th className="px-4 py-3 text-center border-l border-gray-500">Mathematics</th>
                    <th className="px-4 py-3 text-center border-l border-gray-500">Physics</th>
                    <th className="px-4 py-3 text-center border-l border-gray-500">Other</th>
                    <th className="px-4 py-3 text-center border-l border-gray-500">Portfolio</th>
                    <th className="px-4 py-3 text-center border-l border-gray-500">Oral exam</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-semibold bg-gray-100">
                    <td className="px-4 py-3 border-t border-gray-200" colSpan="6">BSc level</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 border-t border-gray-200">Business Administration and Management</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-t border-gray-200">Commerce and Marketing</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 border-t border-gray-200">Computer Science Engineering</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">or Informatics</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-t border-gray-200">Electrical Engineering</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">online (if the applicant stay in HU it is a personal interview)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 border-t border-gray-200">Engineering Management</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-t border-gray-200">Environmental Engineering</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">or Chemistry, or Biology or Informatics</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 border-t border-gray-200">Industrial Design Engineering</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">or Chemistry, or Biology or Informatics</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-t border-gray-200">Mechatronical Engineering</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                  </tr>
                  <tr className="font-semibold bg-gray-100">
                    <td className="px-4 py-3 border-t border-gray-200" colSpan="6">MSc/PhD level</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 border-t border-gray-200"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center"></td>
                    <td className="px-4 py-3 border-t border-l border-gray-200 text-center">x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
  ];

  const programs = [
    {
      title: "Preparatory Undergraduate program (PreBSc)",
      icon: School
    },
    {
      title: "Undergraduate programmes",
      icon: BookOpen
    },
    {
      title: "Preparatory Graduate program (PreMSc)",
      icon: ScrollText
    },
    {
      title: "Graduate programmes",
      icon: Award
    },
    {
      title: "Preparatory Doctoral Program",
      icon: FileCheck
    },
    {
      title: "Doctoral programmes",
      icon: GraduationCap
    }
  ];

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

      {/* Hero Section */}
      <section className="relative py-20 bg-[#1d294d] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Self-financing Programs
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our aim is to make our applicants' process as simple as possible. If you want to study at Óbuda University, you should follow the guidelines below and submit the required documents to the Mobility Office.
          </p>
          <button className="bg-[#fcaf17] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e59a1f] transition shadow-lg inline-flex items-center group">
            <Coins className="w-6 h-6 mr-3 group-hover:scale-110 transition" />
            Tuition Fees
          </button>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1d294d] mb-4">
              Application Deadlines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#fcaf17]">
                <CalendarClock className="h-12 w-12 text-[#fcaf17] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Spring Semester</h3>
                <p className="text-gray-600">Application deadline: 8th November, 2024</p>
                <p className="text-sm text-gray-500 mt-2">For Spring 2024/2025 intake</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#fcaf17]">
                <CalendarClock className="h-12 w-12 text-[#fcaf17] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fall Semester</h3>
                <p className="text-gray-600">Application deadline: 31st of May, 2025</p>
                <p className="text-sm text-gray-500 mt-2">For Fall 2025/2026 intake</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#fcaf17]">
                <Calculator className="h-12 w-12 text-[#fcaf17] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Application Fee</h3>
                <p className="text-gray-600">150 EUR (non-refundable)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1d294d] mb-4">
              The Application Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Prospective students applying for a scholarship should follow the application process of the scholarship program.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
              <ClipboardList className="h-12 w-12 text-[#fcaf17] mx-auto mb-4" />
              <p className="text-lg text-gray-700">
                The most important part of your application is to identify the program that is right for you before you start the application process.
              </p>
            </div>
          </div>

          {/* Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                <program.icon className="h-10 w-10 text-[#fcaf17] mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-semibold text-[#1d294d] group-hover:text-[#fcaf17] transition">
                  {program.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Application Steps */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-[#1d294d] mb-8">Application Steps</h3>
            <div className="space-y-4">
              {applicationSteps.map((step, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => setOpenStep(openStep === index ? null : index)}
                  >
                    <div className="flex items-center">
                      <CheckCircle2 className="h-6 w-6 text-[#fcaf17] mr-3" />
                      <span className="font-semibold">{step.title}</span>
                    </div>
                    {openStep === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openStep === index && (
                    <div className="px-6 py-4 border-t bg-gray-50">
                      {step.content}
                    </div>
                  )}
                </div>
              ))}
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
};

export default SelfFinancing;