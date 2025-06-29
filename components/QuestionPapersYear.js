function QuestionPapersYear({ selectedSemester, onBack }) {
  try {
    const years = [2020, 2021, 2022, 2023, 2024, 2025];
    
    const handleDownload = (year) => {
      // Create a dummy PDF content for demonstration
      const content = `Previous Year Question Paper - ${selectedSemester} - ${year}\n\nThis is a sample question paper for ${selectedSemester} from the year ${year}.\n\nNote: This is a placeholder file for demonstration purposes.`;
      
      // Create blob and download
      const blob = new Blob([content], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedSemester.replace(' ', '_')}_${year}_question_paper.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    };

    return (
      <div className="min-h-screen bg-[#f0f0f0]" data-name="question-papers-year" data-file="components/QuestionPapersYear.js">
        <div className="max-w-6xl mx-auto p-6">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-sm rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] transition-all mb-4"
            >
              <div className="icon-arrow-left text-sm"></div>
              Back to Semesters
            </button>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-file-text text-2xl text-white"></div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-black">{selectedSemester} Question Papers</h1>
                <p className="text-base text-gray-600 mt-1">Select a year to download the question paper</p>
              </div>
            </div>
          </div>

          {/* Years Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {years.map((year) => (
              <div
                key={year}
                className="bg-white rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => handleDownload(year)}
              >
                <div className="p-4 text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-3">
                    <div className="icon-file-pdf text-white text-sm"></div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="text-lg font-black text-black">{year}</div>
                    <div className="text-xs text-gray-500">Question Paper</div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-blue-600">
                    <div className="icon-download text-xs"></div>
                    <span>Download</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Info */}
          <div className="mt-8 bg-white rounded-xl p-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-info text-white text-sm"></div>
              </div>
              <div>
                <h3 className="text-sm font-black text-black">Quick Download</h3>
                <p className="text-xs text-gray-600">Click any year to download the question paper instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('QuestionPapersYear component error:', error);
    return null;
  }
}

export default QuestionPapersYear; 