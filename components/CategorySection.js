function CategorySection({ title, courses, icon, color }) {
  try {
    if (courses.length === 0) return null;

    // Sort: active electives first
    const sortedCourses = [...courses].sort((a, b) => (b.active === true) - (a.active === true));
    
    return (
      <div className="mb-8" data-name="category-section" data-file="components/CategorySection.js">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 ${color} rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
            <div className={`icon-${icon} text-white text-lg`}></div>
          </div>
          <div>
            <h3 className="text-xl font-black text-black">{title}</h3>
            <p className="text-sm text-gray-600">{courses.length} course{courses.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedCourses.map(course => (
            course.active !== false ? (
            <CourseCard key={course.code} course={course} onViewDetails={window.handleCourseDetails} />
            ) : (
              <div
                key={course.code}
                className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-6 flex flex-col items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.09)] opacity-80 select-none"
                style={{ minHeight: 180 }}
              >
                <div className="w-10 h-10 bg-yellow-300 border-2 border-yellow-500 rounded-full flex items-center justify-center mb-2">
                  <span className="icon-hourglass text-xl text-yellow-700"></span>
                </div>
                <div className="text-lg font-black text-yellow-700 mb-1">{course.name}</div>
                <div className="text-xs font-bold text-gray-500 mb-2">{course.code}</div>
                <div className="text-yellow-700 font-semibold mb-2">Coming Soon</div>
                <a
                  href="https://github.com/your-repo/contribute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 bg-yellow-500 text-white font-bold rounded border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)] hover:bg-yellow-600 transition-all"
                >
                  Want to help students? <span className="underline">Share your notes!</span>
                </a>
              </div>
            )
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('CategorySection component error:', error);
    return null;
  }
}