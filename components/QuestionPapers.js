function QuestionPapers({ onBack }) {
  try {
    const semesters = [
      { name: 'Semester I', number: 'I', icon: 'book-open' },
      { name: 'Semester II', number: 'II', icon: 'layers' },
      { name: 'Semester III', number: 'III', icon: 'flask-conical' },
      { name: 'Semester IV', number: 'IV', icon: 'folder-open' }
    ];

    return (
      <div className="min-h-screen bg-[#f0f0f0]" data-name="question-papers" data-file="components/QuestionPapers.js">
        <div className="max-w-6xl mx-auto p-6">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-sm rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] transition-all mb-4"
            >
              <div className="icon-arrow-left text-sm"></div>
              Back to Courses
            </button>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-file-text text-2xl text-white"></div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-black">Previous Year Question Papers</h1>
                <p className="text-base text-gray-600 mt-1">Select a semester to view question papers</p>
              </div>
            </div>
          </div>

          {/* Semesters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {semesters.map((semester, index) => (
              <div
                key={semester.name}
                className="bg-white rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => window.showQuestionPapersForSemester(semester.name)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                      <div className={`icon-${semester.icon} text-white text-lg`}></div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-gray-500">SEM</div>
                      <div className="text-lg font-black text-black">{semester.number}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-black text-black mb-2">
                      {semester.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      View question papers from 2020-2025
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="icon-calendar text-xs"></div>
                      <span>6 years available</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
                      <div className="icon-arrow-right text-xs"></div>
                      <span>View</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-xl p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-info text-white text-lg"></div>
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-2">About Question Papers</h3>
                <p className="text-gray-600 mb-3">
                  Access previous year question papers from APJ Abdul Kalam Technological University. 
                  Each semester contains question papers from 2020 to 2025.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Complete Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Marking Scheme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Topic Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('QuestionPapers component error:', error);
    return null;
  }
} 