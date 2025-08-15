function AdvancedSearchFilters({ filters, onFiltersChange, isVisible, onToggle }) {
  const { isDarkMode } = useTheme();
  
  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      type: '',
      credits: '',
      hasNotes: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  if (!isVisible) return null;

  return (
    <div className="mb-4">
      <div className={`p-6 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] mb-6 ${
        isDarkMode 
          ? 'bg-gray-800 text-white border-gray-600' 
          : 'bg-white text-black border-black'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-black flex items-center gap-2">
            <div className="icon-filter text-xl"></div>
            Advanced Filters
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className={`px-3 py-1 text-sm font-bold rounded border-2 transition-all ${
                isDarkMode
                  ? 'bg-red-600 hover:bg-red-700 text-white border-red-500'
                  : 'bg-red-500 hover:bg-red-600 text-white border-red-700'
              } shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]`}
            >
              Clear All
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Course Type Filter */}
          <div>
            <label className={`block text-sm font-bold mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Course Type
            </label>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] font-bold text-sm transition-all focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-400'
                  : 'bg-white text-black border-black focus:border-blue-500'
              }`}
            >
              <option value="">All Types</option>
              <option value="Theory">Theory</option>
              <option value="Lab">Lab</option>
              <option value="Project">Project</option>
              <option value="Elective I">Elective I</option>
              <option value="Elective II">Elective II</option>
              <option value="Elective III">Elective III</option>
              <option value="Elective IV">Elective IV</option>
            </select>
          </div>

          {/* Credits Filter */}
          <div>
            <label className={`block text-sm font-bold mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Credits
            </label>
            <select
              value={filters.credits}
              onChange={(e) => handleFilterChange('credits', e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] font-bold text-sm transition-all focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-400'
                  : 'bg-white text-black border-black focus:border-blue-500'
              }`}
            >
              <option value="">All Credits</option>
              <option value="2">2 Credits</option>
              <option value="4">4 Credits</option>
              <option value="6">6 Credits</option>
              <option value="12">12 Credits</option>
            </select>
          </div>

          {/* Notes Availability Filter */}
          <div>
            <label className={`block text-sm font-bold mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Notes Status
            </label>
            <select
              value={filters.hasNotes}
              onChange={(e) => handleFilterChange('hasNotes', e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] font-bold text-sm transition-all focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-400'
                  : 'bg-white text-black border-black focus:border-blue-500'
              }`}
            >
              <option value="">All Courses</option>
              <option value="yes">Notes Available</option>
              <option value="no">Coming Soon</option>
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className={`mt-4 pt-4 border-t ${
            isDarkMode ? 'border-gray-600' : 'border-gray-300'
          }`}>
            <div className="flex flex-wrap gap-2">
              <span className={`text-sm font-bold ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Active filters:
              </span>
              {Object.entries(filters).map(([key, value]) => {
                if (!value) return null;
                return (
                  <span
                    key={key}
                    className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-bold rounded border-2 ${
                      isDarkMode
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-blue-500 text-white border-blue-700'
                    } shadow-[1px_1px_0px_0px_rgba(0,0,0,0.5)]`}
                  >
                    {key}: {value}
                    <button
                      onClick={() => handleFilterChange(key, '')}
                      className="ml-1 hover:text-red-200"
                    >
                      ×
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
