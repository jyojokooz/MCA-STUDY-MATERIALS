function LabQuestions({ course }) {
  // Special design for Laboratory courses with programming language themes
  const labCourses = {
    '20MCA131': {
      name: 'Programming Lab',
      language: 'Python',
      icon: '🐍',
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      description: 'Master Python programming with hands-on projects and real-world applications',
      githubRepo: 'https://github.com/mca-website/python-lab-exercises',
      gitlabRepo: 'https://gitlab.com/mca-website/python-lab-exercises'
    },
    '20MCA133': {
      name: 'Web Programming Lab',
      language: 'HTML/CSS/JS',
      icon: '🌐',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      description: 'Build stunning websites with modern web technologies and frameworks',
      githubRepo: 'https://github.com/mca-website/web-programming-lab',
      gitlabRepo: 'https://gitlab.com/mca-website/web-programming-lab'
    },
    '20MCA135': {
      name: 'Data Structures Lab',
      language: 'C++',
      icon: '⚡',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      description: 'Implement advanced data structures and algorithms in C++',
      githubRepo: 'https://github.com/mca-website/data-structures-lab',
      gitlabRepo: 'https://gitlab.com/mca-website/data-structures-lab'
    },
    '20MCA132': {
      name: 'Object Oriented Programming Lab',
      language: 'Java',
      icon: '☕',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      description: 'Learn OOP concepts with Java programming and design patterns',
      githubRepo: 'https://github.com/mca-website/oop-java-lab',
      gitlabRepo: 'https://gitlab.com/mca-website/oop-java-lab'
    },
    '20MCA134': {
      name: 'Advanced DBMS Lab',
      language: 'SQL',
      icon: '🗄️',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-300',
      description: 'Master database management with SQL queries and optimization',
      githubRepo: 'https://github.com/mca-website/dbms-lab-exercises',
      gitlabRepo: 'https://gitlab.com/mca-website/dbms-lab-exercises'
    },
    '20MCA136': {
      name: 'Networking & System Administration Lab',
      language: 'Linux/Bash',
      icon: '🐧',
      color: 'from-gray-400 to-black',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
      description: 'Configure networks and manage systems with Linux commands',
      githubRepo: 'https://github.com/mca-website/networking-lab',
      gitlabRepo: 'https://gitlab.com/mca-website/networking-lab'
    }
  };

  // Check if it's a lab course
  if (labCourses[course.code]) {
    const lab = labCourses[course.code];
    return (
      <div className={`min-h-screen ${lab.bgColor} py-16`}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className={`w-32 h-32 bg-gradient-to-r ${lab.color} rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center animate-pulse`}>
                <span className="text-6xl">{lab.icon}</span>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full border-3 border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center animate-bounce">
                <span className="icon-code text-white text-lg"></span>
              </div>
            </div>
            
            <h1 className="text-4xl font-black text-gray-800 mb-4">
              🚀 {lab.name} Coming Soon!
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              {lab.description}
            </p>
            
            {/* Language Badge */}
            <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${lab.color} text-white font-bold rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]`}>
              <span className="text-2xl">{lab.icon}</span>
              <span className="text-lg">{lab.language}</span>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-white rounded-xl p-8 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] mb-8">
            <h2 className="text-2xl font-black text-gray-800 mb-6 text-center">Development Progress</h2>
            
            <div className="space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                  <span>Lab Setup</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
                  <div className={`bg-gradient-to-r ${lab.color} h-full rounded-full animate-pulse`} style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                  <span>Project Development</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
                  <div className={`bg-gradient-to-r ${lab.color} h-full rounded-full animate-pulse`} style={{width: '60%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                  <span>Documentation</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
                  <div className={`bg-gradient-to-r ${lab.color} h-full rounded-full animate-pulse`} style={{width: '40%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Repository Links Section */}
          <div className="bg-white rounded-xl p-8 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] mb-8">
            <h2 className="text-2xl font-black text-gray-800 mb-6 text-center">📚 Repository Links</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-black text-gray-800 mb-4">GitHub Repository</h3>
                <a 
                  href={lab.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all`}
                >
                  <span className="icon-github text-xl"></span>
                  View on GitHub
                </a>
                <p className="text-sm text-gray-600 mt-2">Find all lab exercises, solutions, and code examples</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-black text-gray-800 mb-4">GitLab Repository</h3>
                <a 
                  href={lab.gitlabRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all`}
                >
                  <span className="icon-gitlab text-xl"></span>
                  View on GitLab
                </a>
                <p className="text-sm text-gray-600 mt-2">Alternative repository with CI/CD pipelines</p>
              </div>
            </div>
          </div>

          {/* Contribution Section */}
          <div className="bg-white rounded-xl p-8 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] mb-8">
            <h2 className="text-2xl font-black text-gray-800 mb-6 text-center">🤝 Help Us Build This Lab!</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${lab.color} rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                    <span className="icon-code text-white text-lg"></span>
                  </div>
                  <h3 className="text-lg font-black text-gray-800">Share Your Code</h3>
                </div>
                <p className="text-gray-600 mb-4">Contribute your lab solutions, projects, and code examples to help fellow students learn.</p>
                <button 
                  className={`w-full px-4 py-2 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition-all`}
                  onClick={() => window.open(lab.githubRepo + '/issues/new', '_blank')}
                >
                  Submit Code
                </button>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${lab.color} rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                    <span className="icon-book text-white text-lg"></span>
                  </div>
                  <h3 className="text-lg font-black text-gray-800">Share Notes</h3>
                </div>
                <p className="text-gray-600 mb-4">Upload your lab notes, explanations, and study materials to help others understand the concepts better.</p>
                <button 
                  className={`w-full px-4 py-2 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition-all`}
                  onClick={() => window.open('mailto:notes@mca-website.com?subject=Lab Notes for ' + course.code, '_blank')}
                >
                  Upload Notes
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                <strong>💡 Pro Tip:</strong> Your contributions will be credited and help build a comprehensive learning resource for all MCA students!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button 
                  className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] transition-all flex items-center gap-2"
                  onClick={() => window.open('https://github.com/mca-website/contribution-guidelines', '_blank')}
                >
                  <span className="icon-file-text text-lg"></span>
                  Contribution Guidelines
                </button>
                
                <button 
                  className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] transition-all flex items-center gap-2"
                  onClick={() => window.open('https://discord.gg/mca-students', '_blank')}
                >
                  <span className="icon-message-circle text-lg"></span>
                  Join Community
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${lab.color} rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                  <span className="icon-play text-white text-lg"></span>
                </div>
                <h3 className="text-lg font-black text-gray-800">Hands-on Projects</h3>
              </div>
              <p className="text-gray-600">Real-world projects that will build your portfolio and practical skills</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${lab.color} rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                  <span className="icon-users text-white text-lg"></span>
                </div>
                <h3 className="text-lg font-black text-gray-800">Expert Guidance</h3>
              </div>
              <p className="text-gray-600">Step-by-step tutorials and expert tips to master the concepts</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                className={`px-8 py-4 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all flex items-center gap-2`}
                onClick={() => window.open(lab.githubRepo, '_blank')}
              >
                <span className="icon-github text-xl"></span>
                Contribute Code
              </button>
              
              <button 
                className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all flex items-center gap-2"
                onClick={() => window.open('mailto:contact@mca-website.com?subject=Lab Request for ' + course.code, '_blank')}
              >
                <span className="icon-mail text-xl"></span>
                Request Lab
              </button>
            </div>
            
            <p className="text-sm text-gray-500">
              Be the first to know when this lab is ready! 🎯
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default case for non-lab courses or courses without specific lab data
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Animated Coming Soon Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-yellow-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center animate-pulse">
          <span className="icon-hourglass text-4xl text-white animate-spin"></span>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <span className="icon-clock text-sm text-white"></span>
        </div>
      </div>
      
      {/* Main Heading */}
      <h2 className="text-3xl font-black text-yellow-700 mb-4 text-center">
        🚀 Lab Questions Coming Soon!
      </h2>
      
      {/* Subtitle */}
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
        We're working hard to bring you comprehensive lab questions for <span className="font-bold text-black">{course.code}</span>. 
        Stay tuned for amazing content!
      </p>
      
      {/* Progress Bar */}
      <div className="w-64 bg-gray-200 rounded-full h-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] mb-6">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full animate-pulse" style={{width: '75%'}}></div>
      </div>
      
      {/* Status Badge */}
      <div className="px-4 py-2 bg-yellow-100 border-2 border-yellow-500 rounded-lg text-yellow-700 font-bold mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
        <span className="icon-trending-up text-sm mr-2"></span>
        In Development - 75% Complete
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button 
          className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] hover:bg-yellow-600 transition-all flex items-center gap-2"
          onClick={() => window.open('https://github.com/mca-website/contribute', '_blank')}
        >
          <span className="icon-github text-lg"></span>
          Contribute Questions
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] hover:bg-blue-600 transition-all flex items-center gap-2"
          onClick={() => window.open('mailto:contact@mca-website.com?subject=Lab Questions Request for ' + course.code, '_blank')}
        >
          <span className="icon-mail text-lg"></span>
          Request Questions
        </button>
      </div>
      
      {/* Fun Facts */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border-2 border-gray-300 max-w-md">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="icon-lightbulb text-yellow-500"></span>
          Did You Know?
        </h4>
        <p className="text-sm text-gray-600">
          Our lab questions are created by students, for students! Each question is carefully crafted to make learning easier and more engaging.
        </p>
      </div>
    </div>
  );
}

export default LabQuestions;