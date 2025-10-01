import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Brain, PencilLine, Send, CheckSquare, Plus } from "lucide-react"

function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 px-10 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="bg-zinc-700 rounded-lg p-2 w-9 h-9 flex items-center justify-center">
            <div className="w-4 h-6 bg-white rounded-sm"></div>
          </div>
          
          {/* Nav Items + CTA */}
          <div className="flex items-center gap-[100px]">
            <div className="flex items-center gap-10 text-zinc-500 font-medium">
              <span>Features</span>
              <span>FAQ</span>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white h-9 px-4">
              Get Beedo Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-[1500px] mx-auto px-[200px] py-[100px]">
        <div className="flex flex-col items-center gap-20">
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-10 w-full">
            <div className="flex flex-col items-center gap-4 text-center text-zinc-700">
              <h1 className="font-semibold text-[48px] tracking-[-1.2px] leading-none">
                Beedo finds jobs for you — because job-hunting shouldn't be your job.
              </h1>
              <p className="font-medium text-base leading-6">
                We search, score, tailor, and apply, so you don't have to.
              </p>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white h-11 px-4">
              Try the Beta for Free
            </Button>
          </div>

          {/* Hero Image */}
          <div className="bg-teal-50 rounded-[12px] w-full aspect-[1040/639] flex items-center justify-center overflow-hidden pt-20 px-20">
            <div className="bg-white rounded-t-[12px] border border-teal-600 shadow-lg w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">产品截图区域</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-[1500px] mx-auto px-20 py-[100px]">
        <div className="flex flex-col gap-20">
          {/* Section Header */}
          <div className="flex flex-col gap-4 text-center text-zinc-700">
            <h2 className="font-semibold text-[48px] tracking-[-1.2px] leading-none">
              Beedo frees you up, and gets you better results.
            </h2>
            <p className="font-medium text-base leading-6">
              Beedo matches you with the best-fit jobs, tailors your resume, and applies on your behalf.
            </p>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col gap-5">
            {/* Main Feature Card */}
            <Card className="bg-neutral-50 h-[480px] rounded-2xl border-2 border-zinc-200 overflow-hidden">
              <div className="flex h-full">
                <div className="p-10 flex flex-col gap-[136px]">
                  <div className="flex flex-col gap-[13px]">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <Home className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Job List</span>
                    </div>
                    <h3 className="font-semibold text-[30px] tracking-[-0.75px] leading-none text-zinc-700 w-[361px]">
                      Find best-fit jobs instantly
                    </h3>
                    <div className="w-[180px] h-[180px] bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">功能图片</span>
                    </div>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white h-11 px-4 w-fit">
                      Try Beta for free
                    </Button>
                  </div>
                </div>
                <div className="flex-1 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500">产品界面截图</span>
                </div>
              </div>
            </Card>

            {/* Two Column Cards */}
            <div className="flex gap-5">
              <Card className="bg-neutral-50 flex-1 aspect-[620/660] rounded-2xl border-2 border-zinc-200 overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="p-10 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <Brain className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Database</span>
                      <span className="font-semibold text-zinc-400">coming soon</span>
                    </div>
                    <h3 className="font-semibold text-[30px] tracking-[-0.75px] leading-none text-zinc-700">
                      Build your resume database
                    </h3>
                    <div className="w-[180px] h-[180px] bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">功能图片</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">界面截图</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-neutral-50 flex-1 aspect-[620/660] rounded-2xl border-2 border-zinc-200 overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="p-10 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <PencilLine className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Resume Builder</span>
                      <span className="font-semibold text-zinc-400">coming soon</span>
                    </div>
                    <h3 className="font-semibold text-[30px] tracking-[-0.75px] leading-none text-zinc-700">
                      Tailor your resume with AI
                    </h3>
                    <div className="w-[180px] h-[180px] bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">功能图片</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">界面截图</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bottom Two Column Cards */}
            <div className="flex gap-5">
              <Card className="bg-neutral-50 flex-1 aspect-[620/660] rounded-2xl border-2 border-zinc-200 overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="p-10 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <Send className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Beedo Apply</span>
                      <span className="font-semibold text-zinc-400">coming soon</span>
                    </div>
                    <h3 className="font-semibold text-[30px] tracking-[-0.75px] leading-none text-zinc-700">
                      Auto-apply, free your hands
                    </h3>
                    <div className="w-[180px] h-[180px] bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">功能图片</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">界面截图</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-neutral-50 flex-1 aspect-[620/660] rounded-2xl border-2 border-zinc-200 overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="p-10 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-lg p-1 w-8 h-8 flex items-center justify-center">
                        <CheckSquare className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-zinc-700">Tracking Sheet</span>
                      <span className="font-semibold text-zinc-400">coming soon</span>
                    </div>
                    <h3 className="font-semibold text-[30px] tracking-[-0.75px] leading-none text-zinc-700">
                      Smarter application tracker
                    </h3>
                    <div className="w-[180px] h-[180px] bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">功能图片</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">界面截图</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1500px] mx-auto px-20 py-[100px]">
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-4 items-center text-center text-zinc-700">
            <h2 className="font-semibold text-[48px] tracking-[-1.2px] leading-none">
              Your questions, answered
            </h2>
            <p className="font-medium text-base leading-6">
              Clear answers to the most common questions.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {[
              "What is Beedo?",
              "How does Beedo match me with jobs?",
              "Can Beedo help optimize my resume?",
              "Will Beedo apply to jobs for me?",
              "Is Beedo safe to use?",
              "How much does Beedo cost?"
            ].map((question, index) => (
              <div key={index} className="bg-neutral-50 rounded-[10px] p-[26px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-zinc-700 font-normal">{question}</span>
                  </div>
                  <div className="w-4 h-4 relative">
                    <div className="absolute bg-teal-600 h-0.5 w-4 top-[7px] rounded-[10px]"></div>
                    <div className="absolute bg-teal-600 w-0.5 h-4 left-[7px] rounded-[10px]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f7f6f3] w-full">
        <div className="max-w-[1500px] mx-auto p-20">
          <div className="flex items-start justify-between">
            <div className="text-zinc-700 w-[445.89px]">
              <h3 className="font-semibold text-2xl tracking-[-0.6px] leading-[30px] mb-4">
                Exclusive Beta Coming Q3 2025
              </h3>
              <p className="font-normal text-sm leading-5">
                Be among the first to try Beedo and help shape the future of job searching.
              </p>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white h-11 px-4">
              Get Beedo for Free
            </Button>
          </div>
        </div>

        <div className="border-t border-dashed border-white/10 max-w-[1500px] mx-auto px-20 py-8">
          <div className="flex items-center justify-between">
            <p className="text-zinc-700 text-xs leading-[18px]">
              © 2025 Beedo. All rights reserved.
            </p>
            <div className="bg-zinc-700 rounded-lg p-2 w-9 h-9 flex items-center justify-center">
              <div className="w-4 h-6 bg-white rounded-sm"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App