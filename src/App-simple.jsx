function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Beedo Official Webpage
      </h1>
      
      <div className="bg-gray-100 rounded-lg p-6 max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          测试页面
        </h2>
        <p className="text-gray-600 mb-6">
          如果您能看到这段文字，说明React应用正在正常运行。
        </p>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          测试按钮
        </button>
      </div>
    </div>
  )
}

export default App

