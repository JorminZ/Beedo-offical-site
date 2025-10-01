import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Brain, PencilLine, Send, CheckSquare, Plus, HelpCircle, Target, Database, Globe, FileText, Bot, Shield, Mail, Linkedin } from "lucide-react"

// Beedo Logo 图片路径
const BeedoLogo = "/logo.png"

function App() {
  // FAQ 展开状态管理
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  // 平滑滚动到指定部分
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-zinc-200 w-full bg-white">
        <div className="w-full flex items-center justify-between px-10 sm:px-10 py-3">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="bg-zinc-700 hover:bg-zinc-600 rounded-lg p-2 w-9 h-9 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <div className="h-[26px] w-[26px]">
              <img 
                src={BeedoLogo}
                alt="Beedo Logo"
                className="w-full h-full object-contain"
              />
          </div>
          </button>
          
          {/* Nav Items + CTA */}
          <div className="flex items-center gap-10 sm:gap-[100px]">
            <div className="flex items-center gap-6 sm:gap-10 text-zinc-500 font-medium">
              <button
                onClick={() => scrollToSection('features')}
                className="hover:text-teal-600 transition-colors duration-200 cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="hover:text-teal-600 transition-colors duration-200 cursor-pointer"
              >
                FAQ
              </button>
            </div>
            <Button className="hidden sm:block bg-teal-600 hover:bg-zinc-700 text-white h-9 px-4">
              Get Beedo Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-[1000px] xl:max-w-[1500px] mx-auto px-5 sm:px-[80px] xl:px-[200px] py-10 sm:py-[100px] pt-[180px] relative">
        {/* 左侧装饰图片 - 按照 Figma 精确位置 */}
        <div className="hidden sm:block absolute aspect-[319.056/855.908] bottom-[36.96px] xl:bottom-[-13.04px] left-[4.34%] right-[73.51%] pointer-events-none z-50">
          <img 
            src="/hero1.svg"
            alt="左侧装饰图"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* 右侧装饰图片 - 按照 Figma 精确位置 */}
        <div className="hidden sm:block absolute aspect-[311.171/816.643] bottom-[42.72px] xl:bottom-[-7.28px] left-[74.1%] max-h-[1123.25px] right-[4.29%] pointer-events-none z-50">
          <img 
            src="/hero2.svg"
            alt="右侧装饰图"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-10 sm:gap-20 relative z-10">
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-10 w-full">
            <div className="flex flex-col items-center gap-4 text-center text-zinc-700">
              <h1 className="font-semibold text-[36px] sm:text-[48px] tracking-[-1.2px] leading-none">
                Beedo finds jobs for you — because job-hunting shouldn't be your job.
              </h1>
              <p className="font-medium text-base leading-6">
                We search, score, tailor, and apply, so you don't have to.
              </p>
            </div>
            <Button className="bg-teal-600 hover:bg-zinc-700 text-white h-11 px-4">
              Try the Beta for Free
            </Button>
          </div>

          {/* Hero Image */}
          <div className="bg-teal-50 rounded-[12px] w-full aspect-[1040/639] flex items-center justify-center overflow-hidden pt-2.5 px-2.5 sm:pt-10 sm:px-10 lg:pt-20 lg:px-20">
            <div className="bg-white rounded-t-[12px] border-t border-l border-r border-teal-600/20 shadow-lg w-full h-full overflow-hidden">
              <img 
                src="/hero img.png"
                alt="Beedo产品界面展示"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-[1000px] xl:max-w-[1500px] mx-auto px-5 sm:px-20 py-10 sm:py-[100px] scroll-mt-20">
        <div className="flex flex-col gap-20">
          {/* Section Header */}
          <div className="flex flex-col gap-4 text-center text-zinc-700">
            <h2 className="font-semibold text-[36px] sm:text-[48px] tracking-[-1.2px] leading-none">
              Beedo frees you up, and gets you better results.
            </h2>
            <p className="font-medium text-base leading-6">
              Beedo matches you with the best-fit jobs, tailors your resume, and applies on your behalf.
            </p>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col gap-5">
            {/* Main Feature Card - Job List */}
            <Card className="bg-neutral-50 rounded-2xl border-2 border-zinc-200 hover:border-teal-600/50 overflow-hidden group transition-colors">
              {/* Desktop Layout (xl and above) */}
              <div className="hidden xl:flex flex-row h-[480px] relative">
                {/* Left Content */}
                <div className="p-5 sm:p-10 flex flex-col gap-[136px] flex-shrink-0">
                  <div className="flex flex-col gap-[13px]">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <Home className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Job List</span>
                    </div>
                    <h3 className="font-semibold text-base sm:text-[24px] xl:text-[30px] leading-6 sm:leading-none text-zinc-700 sm:tracking-[-0.75px] max-w-[361px]">
                      Find best-fit jobs instantly
                    </h3>
                    <div className="hidden sm:block w-[180px] h-[180px] rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src="/feature1.svg"
                        alt="Job List装饰插画"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <Button className="bg-teal-600 hover:bg-zinc-700 text-white h-11 px-4 w-fit">
                      Try Beta for free
                    </Button>
                  </div>
                </div>
                
                {/* Right Screenshot - 455px width, maintain aspect ratio, moved 200px left */}
                <div className="flex-1 flex justify-end items-center pr-[200px]">
                  <div className="w-[455px] h-full flex items-center justify-center overflow-hidden rounded-r-[14px] shadow-[0px_4px_6px_-4px_rgba(16,24,40,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                    <img 
                      src="/feature img 1.png"
                      alt="Job List功能界面"
                      className="w-full h-full object-cover object-left block"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Layout (below xl) - Same as other cards */}
              <div className="xl:hidden flex flex-col h-full aspect-[620/660]">
                <div className="p-5 sm:p-10 pb-5 sm:pb-0 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                      <Home className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-zinc-700">Job List</span>
                  </div>
                  <h3 className="font-semibold text-base sm:text-[24px] xl:text-[30px] leading-6 sm:leading-none text-zinc-700 sm:tracking-[-0.75px]">
                    Find best-fit jobs instantly
                  </h3>
                  <div className="hidden sm:block w-[180px] h-[180px] bg-center bg-cover bg-no-repeat">
                    <img 
                      src="/feature1.svg"
                      alt="Job List装饰插画"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 pl-6 sm:pl-10 xl:pl-[100px] pr-0">
                  <div className="w-full h-full rounded-tl-[12px] overflow-hidden shadow-[0px_4px_6px_-4px_rgba(16,24,40,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] border border-zinc-200 bg-white">
                    <img 
                      src="/feature img 1.png"
                      alt="Job List功能界面"
                      className="w-full h-full object-cover object-left block rounded-tl-[12px]"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Two Column Cards */}
            <div className="flex flex-col xl:flex-row gap-5">
              <Card className="bg-neutral-50 flex-1 aspect-[620/660] rounded-2xl border-2 border-zinc-200 hover:border-teal-600/50 overflow-hidden group transition-colors">
                <div className="flex flex-col h-full">
                  <div className="p-5 sm:p-10 pb-5 sm:pb-0 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <Brain className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Database</span>
                      <span className="font-normal text-sm sm:font-semibold sm:text-base text-zinc-400 group-hover:text-teal-600 transition-colors">coming soon</span>
                    </div>
                    <h3 className="font-semibold text-base sm:text-[24px] xl:text-[30px] leading-6 sm:leading-none text-zinc-700 sm:tracking-[-0.75px]">
                      Build your resume database
                    </h3>
                    <div className="hidden sm:block w-[180px] h-[180px] bg-center bg-cover bg-no-repeat">
                      <img 
                        src="/feature2.svg"
                        alt="Database装饰插画"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 pl-6 sm:pl-10 xl:pl-[100px] pr-0">
                    <div className="w-full h-full rounded-tl-[12px] overflow-hidden shadow-[0px_4px_6px_-4px_rgba(16,24,40,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] border border-zinc-200 bg-white">
                      <img 
                        src="/feature img 2.png"
                        alt="Database功能界面"
                        className="w-full h-full object-cover object-left block rounded-tl-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-neutral-50 flex-1 aspect-[620/660] rounded-2xl border-2 border-zinc-200 hover:border-teal-600/50 overflow-hidden group transition-colors">
                <div className="flex flex-col h-full">
                  <div className="p-5 sm:p-10 pb-5 sm:pb-0 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <PencilLine className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Resume Builder</span>
                      <span className="font-normal text-sm sm:font-semibold sm:text-base text-zinc-400 group-hover:text-teal-600 transition-colors">coming soon</span>
                    </div>
                    <h3 className="font-semibold text-base sm:text-[24px] xl:text-[30px] leading-6 sm:leading-none text-zinc-700 sm:tracking-[-0.75px]">
                      Tailor your resume with AI
                    </h3>
                    <div className="hidden sm:block w-[180px] h-[180px] bg-center bg-cover bg-no-repeat">
                      <img 
                        src="/feature3.svg"
                        alt="Resume Builder装饰插画"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 pl-6 sm:pl-10 xl:pl-[100px] pr-0">
                    <div className="w-full h-full rounded-tl-[12px] overflow-hidden shadow-[0px_4px_6px_-4px_rgba(16,24,40,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] border border-zinc-200 bg-white">
                      <img 
                        src="/feature img 3.png"
                        alt="Resume Builder功能界面"
                        className="w-full h-full object-cover object-left block rounded-tl-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bottom Two Column Cards */}
            <div className="flex flex-col xl:flex-row gap-5">
              <Card className="bg-neutral-50 flex-1 aspect-[620/660] rounded-2xl border-2 border-zinc-200 hover:border-teal-600/50 overflow-hidden group transition-colors">
                <div className="flex flex-col h-full">
                  <div className="p-5 sm:p-10 pb-5 sm:pb-0 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <Send className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Beedo Apply</span>
                      <span className="font-normal text-sm sm:font-semibold sm:text-base text-zinc-400 group-hover:text-teal-600 transition-colors">coming soon</span>
                    </div>
                    <h3 className="font-semibold text-base sm:text-[24px] xl:text-[30px] leading-6 sm:leading-none text-zinc-700 sm:tracking-[-0.75px]">
                      Auto-apply, free your hands
                    </h3>
                    <div className="hidden sm:block w-[180px] h-[180px] bg-center bg-cover bg-no-repeat">
                      <img 
                        src="/feature4.svg"
                        alt="Beedo Apply装饰插画"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 pl-6 sm:pl-10 xl:pl-[100px] pr-0">
                    <div className="w-full h-full rounded-tl-[12px] overflow-hidden shadow-[0px_4px_6px_-4px_rgba(16,24,40,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] border border-zinc-200 bg-white">
                      <img 
                        src="/feature img 4.png"
                        alt="Beedo Apply功能界面"
                        className="w-full h-full object-cover object-left block rounded-tl-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-neutral-50 flex-1 aspect-[620/660] rounded-2xl border-2 border-zinc-200 hover:border-teal-600/50 overflow-hidden group transition-colors">
                <div className="flex flex-col h-full">
                  <div className="p-5 sm:p-10 pb-5 sm:pb-0 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <CheckSquare className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Tracking Sheet</span>
                      <span className="font-normal text-sm sm:font-semibold sm:text-base text-zinc-400 group-hover:text-teal-600 transition-colors">coming soon</span>
                    </div>
                    <h3 className="font-semibold text-base sm:text-[24px] xl:text-[30px] leading-6 sm:leading-none text-zinc-700 sm:tracking-[-0.75px]">
                      Smarter application tracker
                    </h3>
                    <div className="hidden sm:block w-[180px] h-[180px] bg-center bg-cover bg-no-repeat">
                      <img 
                        src="/feature5.svg"
                        alt="Tracking Sheet装饰插画"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 pl-6 sm:pl-10 xl:pl-[100px] pr-0">
                    <div className="w-full h-full rounded-tl-[12px] overflow-hidden shadow-[0px_4px_6px_-4px_rgba(16,24,40,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] border border-zinc-200 bg-white">
                      <img 
                        src="/feature img 5.png"
                        alt="Tracking Sheet功能界面"
                        className="w-full h-full object-cover object-left block rounded-tl-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-[1000px] xl:max-w-[1500px] mx-auto px-5 sm:px-20 py-10 sm:py-[100px] scroll-mt-20">
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-4 items-center text-center text-zinc-700">
            <h2 className="font-semibold text-[36px] sm:text-[48px] tracking-[-1.2px] leading-none">
              Your questions, answered
            </h2>
            <p className="font-medium text-base leading-6">
              Clear answers to the most common questions.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {[
              {
                question: "What is Beedo?",
                answer: "Beedo is your AI job search assistant. It finds the right jobs for you, tailors your resume, and can even apply on your behalf—all in one place.",
                icon: HelpCircle
              },
              {
                question: "How does Beedo match me with jobs?",
                answer: (
                  <div>
                    <p className="mb-3">Beedo scores in two directions:</p>
                    <ul className="space-y-2 mb-3">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          <span className="mr-1">Are you a fit for the job?</span>
                          We check your skills, experience, and background against the job requirements.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          <span className="mr-1">Is the job a fit for you?</span>
                          We look at things like company quality, location, salary range, and sponsorship options.
                        </span>
                      </li>
                    </ul>
                    <p>This way, you only see roles that are both relevant and worth your time.</p>
                  </div>
                ),
                icon: Target
              },
              {
                question: "What job sources does Beedo use?",
                answer: "Beedo pulls jobs from employer career sites and major job platforms.",
                icon: Database
              },
              {
                question: "Does Beedo support visa sponsorship checks?",
                answer: "Yes. Beedo gives you a sponsorship \"likelihood\" score. We look at job descriptions and past visa filing data to estimate if a company is likely to sponsor. It's not a guarantee, but it helps you focus on the right opportunity.",
                icon: Globe
              },
              {
                question: "Can Beedo Tailor resume for me?",
                answer: "Yes. Beedo rewrites your resume for each job, making sure it matches the job description and ATS keywords. You can download a ready-to-send PDF in seconds.",
                icon: FileText
              },
              {
                question: "Will Beedo apply jobs for me?",
                answer: "Yes. Beedo combines an AI agent with human assistants to complete applications for you. This way, every qualified role gets submitted on time and with the right materials.",
                icon: Bot
              },
              {
                question: "Is Beedo safe to use?",
                answer: "Absolutely. Your data stays private: we don't share it with third parties, we don't need your email password, and everything is stored with encryption. You're always in control and can export or delete your data whenever you want.",
                icon: Shield
              }
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-50 rounded-[10px] overflow-hidden">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-[26px] text-left hover:bg-neutral-100 transition-colors rounded-[10px]"
                >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                      <faq.icon className="w-6 h-6 text-teal-600" />
                      <span className="text-zinc-700 font-normal">{faq.question}</span>
                    </div>
                    <div className="w-4 h-4 relative">
                      <div 
                        className={`absolute bg-teal-600 h-0.5 w-4 top-[7px] rounded-[10px] transition-transform duration-300`}
                      ></div>
                      <div 
                        className={`absolute bg-teal-600 w-0.5 h-4 left-[7px] rounded-[10px] transition-transform duration-300 ${
                          expandedFAQ === index ? 'rotate-90' : ''
                        }`}
                      ></div>
                    </div>
                  </div>
                </button>
                
                {/* 下拉内容 */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-[26px] pb-[26px] pt-[26px]">
                    <div className="pl-[48px]">
                      <div className="text-zinc-600 text-sm leading-relaxed">
                        {typeof faq.answer === 'string' ? (
                          <p>{faq.answer}</p>
                        ) : (
                          faq.answer
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f7f6f3] w-full">
        <div className="max-w-[1500px] mx-auto p-10 sm:p-20">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-0">
            <div className="text-zinc-700 w-full sm:w-[445.89px]">
              <h3 className="font-semibold text-2xl tracking-[-0.6px] leading-[30px] mb-4">
                Exclusive Beta Coming Q3 2025
              </h3>
              <p className="font-normal text-sm leading-5">
                Be among the first to try Beedo and help shape the future of job searching.
              </p>
            </div>
            <Button className="bg-teal-600 hover:bg-zinc-700 text-white h-11 px-4">
              Get Beedo for Free
            </Button>
          </div>
        </div>

        <div className="border-t border-dashed border-white/10 max-w-[1500px] mx-auto px-10 sm:px-20 py-8">
          <div className="flex items-center justify-between">
            <p className="text-zinc-700 text-xs leading-[18px]">
              © 2025 Beedo. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="hidden sm:flex bg-zinc-700 hover:bg-zinc-600 rounded-lg p-2 w-9 h-9 items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <div className="h-[26px] w-[26px]">
                <img 
                  src={BeedoLogo}
                  alt="Beedo Logo"
                  className="w-full h-full object-contain"
                />
            </div>
            </button>
            <div className="flex items-center gap-4">
              <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
                <Mail className="w-6 h-6 text-zinc-700" />
              </button>
              <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
                <Linkedin className="w-6 h-6 text-zinc-700" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App