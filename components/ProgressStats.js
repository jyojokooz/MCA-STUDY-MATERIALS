function ProgressStats({ courses, selectedSemester }) {
  const { isDarkMode } = useTheme();
  
  try {
    const filteredCourses = selectedSemester === 'All' 
      ? courses 
      : courses.filter(course => course.semester === selectedSemester);
    
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    const theoryCourses = filteredCourses.filter(course => course.type === 'Theory').length;
    const labCourses = filteredCourses.filter(course => course.type === 'Lab').length;
    const electiveCourses = filteredCourses.filter(course => course.type === 'Elective').length;
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6" data-name="progress-stats" data-file="components/ProgressStats.js">
        <div className={`p-4 rounded-xl border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] ${
          isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-black'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-8 h-8 bg-blue-500 rounded-lg border flex items-center justify-center ${
              isDarkMode ? 'border-gray-600' : 'border-black'
            }`}>
              <div className="icon-book text-white text-xs"></div>
            </div>
            <span className={`text-sm font-bold ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Total Courses</span>
          </div>
          <div className={`text-2xl font-black ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>{filteredCourses.length}</div>
        </div>
        
        <div className={`p-4 rounded-xl border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] ${
          isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-black'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-8 h-8 bg-green-500 rounded-lg border flex items-center justify-center ${
              isDarkMode ? 'border-gray-600' : 'border-black'
            }`}>
              <div className="icon-award text-white text-xs"></div>
            </div>
            <span className={`text-sm font-bold ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Total Credits</span>
          </div>
          <div className={`text-2xl font-black ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>{totalCredits}</div>
        </div>
        
        <div className={`p-4 rounded-xl border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] ${
          isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-black'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-8 h-8 bg-purple-500 rounded-lg border flex items-center justify-center ${
              isDarkMode ? 'border-gray-600' : 'border-black'
            }`}>
              <div className="icon-cpu text-white text-xs"></div>
            </div>
            <span className={`text-sm font-bold ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Theory</span>
          </div>
          <div className={`text-2xl font-black ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>{theoryCourses}</div>
        </div>
        
        <div className={`p-4 rounded-xl border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] ${
          isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-black'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-8 h-8 bg-yellow-500 rounded-lg border flex items-center justify-center ${
              isDarkMode ? 'border-gray-600' : 'border-black'
            }`}>
              <div className="icon-flask-conical text-white text-xs"></div>
            </div>
            <span className={`text-sm font-bold ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Labs</span>
          </div>
          <div className={`text-2xl font-black ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>{labCourses}</div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProgressStats component error:', error);
    return null;
  }
}