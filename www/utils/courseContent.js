function getModulesForCourse(courseCode) {
  const courseModules = {
    '20MCA101': [
      {
        title: 'Sets and Relations',
        topics: ['Set Operations', 'Relations and Functions', 'Equivalence Relations', 'Partial Ordering'],
        hours: '9',
        fileName: 'module1_sets_and_relations.pdf'
      },
      {
        title: 'Number Theory and Recurrence Relations',
        topics: ['Division Algorithm', 'GCD and Primes', 'Linear Recurrence Relations', 'Solving Recurrences'],
        hours: '9',
        fileName: 'module2_number_theory.pdf'
      },
      {
        title: 'Graph Theory',
        topics: ['Graph Models', 'Graph Terminology', 'Euler and Hamilton Paths', 'Planar Graphs'],
        hours: '8',
        fileName: 'module3_graph_theory.html'
      },
      {
        title: 'Linear Algebra',
        topics: ['Linear Systems', 'Matrix Operations', 'Eigen Values and Vectors', 'Diagonalization'],
        hours: '11',
        fileName: 'module4_linear_algebra.txt'
      },
      {
        title: 'Statistics and Probability',
        topics: ['Bivariate Data', 'Correlation and Regression', 'Curve Fitting', 'Statistical Analysis'],
        hours: '8',
        fileName: 'module5_statistics.pdf'
      }
    ],
    '20MCA103': [
      {
        title: 'Digital Logic and Number Systems',
        topics: ['Boolean Algebra', 'Logic Gates', 'Number Systems', 'Binary Arithmetic'],
        hours: '11',
        fileName: 'module1_digital_logic.pdf'
      },
      {
        title: 'Sequential Circuits',
        topics: ['Flip Flops', 'Counters', 'Registers', 'State Machines'],
        hours: '10',
        fileName: 'module2_sequential_circuits.pdf'
      },
      {
        title: 'Computer Architecture',
        topics: ['CPU Components', 'Instruction Set Architecture', 'Memory Hierarchy', 'I/O Systems'],
        hours: '10',
        fileName: 'module3_computer_architecture.pdf'
      },
      {
        title: 'Memory and Storage',
        topics: ['RAM and ROM', 'Cache Memory', 'Virtual Memory', 'Storage Devices'],
        hours: '8',
        fileName: 'module4_memory_storage.pdf'
      },
      {
        title: 'Advanced Topics',
        topics: ['Pipelining', 'Multiprocessors', 'Performance Metrics', 'Emerging Technologies'],
        hours: '10',
        fileName: 'module5_advanced_topics.pdf'
      }
    ],
    '20MCA201': [
      {
        title: 'Introduction to Data Science',
        topics: ['Data Science Lifecycle', 'Data Types and Sources', 'Data Cleaning and Preprocessing', 'Exploratory Data Analysis'],
        hours: '10',
        fileName: 'module1_introduction_to_data_science.pdf'
      },
      {
        title: 'Statistical Foundations',
        topics: ['Descriptive Statistics', 'Probability Distributions', 'Hypothesis Testing', 'Confidence Intervals'],
        hours: '12',
        fileName: 'module2_statistical_foundations.pdf'
      },
      {
        title: 'Machine Learning Basics',
        topics: ['Supervised vs Unsupervised Learning', 'Model Evaluation', 'Cross-Validation', 'Bias-Variance Tradeoff'],
        hours: '11',
        fileName: 'module3_machine_learning_basics.pdf'
      },
      {
        title: 'Supervised Learning Algorithms',
        topics: ['Linear Regression', 'Logistic Regression', 'Decision Trees', 'Random Forests'],
        hours: '12',
        fileName: 'module4_supervised_learning.pdf'
      },
      {
        title: 'Unsupervised Learning and Advanced Topics',
        topics: ['Clustering Algorithms', 'Dimensionality Reduction', 'Neural Networks', 'Deep Learning Basics'],
        hours: '10',
        fileName: 'module5_unsupervised_learning.pdf'
      }
    ],
    '20MCA203': [
      {
        title: 'Algorithm Analysis',
        topics: ['Time Complexity', 'Space Complexity', 'Big O Notation', 'Algorithm Efficiency'],
        hours: '10',
        fileName: 'module1_algorithm_analysis.pdf'
      },
      {
        title: 'Divide and Conquer',
        topics: ['Merge Sort', 'Quick Sort', 'Binary Search', 'Strassen\'s Matrix Multiplication'],
        hours: '11',
        fileName: 'module2_divide_and_conquer.pdf'
      },
      {
        title: 'Dynamic Programming',
        topics: ['Optimal Substructure', 'Memoization', 'Longest Common Subsequence', 'Knapsack Problem'],
        hours: '12',
        fileName: 'module3_dynamic_programming.pdf'
      },
      {
        title: 'Greedy Algorithms',
        topics: ['Greedy Choice Property', 'Huffman Coding', 'Dijkstra\'s Algorithm', 'Minimum Spanning Trees'],
        hours: '10',
        fileName: 'module4_greedy_algorithms.pdf'
      },
      {
        title: 'Graph Algorithms',
        topics: ['BFS and DFS', 'Shortest Path Algorithms', 'Network Flow', 'NP-Complete Problems'],
        hours: '11',
        fileName: 'module5_graph_algorithms.pdf'
      }
    ],
    '20MCA242': [
      {
        title: 'Comprehensive Viva Preparation',
        topics: ['Core Subjects Review', 'Project Discussion', 'Technical Questions', 'Research Methodology'],
        hours: '15',
        fileName: 'module1_viva_preparation.pdf'
      },
      {
        title: 'Project Presentation',
        topics: ['Presentation Skills', 'Technical Documentation', 'Demo Preparation', 'Q&A Handling'],
        hours: '10',
        fileName: 'module2_presentation_skills.pdf'
      }
    ],
    '20MCA244': [
      {
        title: 'Seminar Preparation',
        topics: ['Topic Selection', 'Literature Review', 'Research Methodology', 'Presentation Structure'],
        hours: '8',
        fileName: 'module1_seminar_preparation.pdf'
      },
      {
        title: 'Technical Writing',
        topics: ['Academic Writing', 'Citation Styles', 'Research Paper Format', 'Abstract and Keywords'],
        hours: '6',
        fileName: 'module2_technical_writing.pdf'
      }
    ],
    '20MCA246': [
      {
        title: 'Project Planning and Design',
        topics: ['Problem Definition', 'Requirements Analysis', 'System Design', 'Project Timeline'],
        hours: '15',
        fileName: 'module1_project_planning.pdf'
      },
      {
        title: 'Implementation and Development',
        topics: ['Coding Standards', 'Version Control', 'Testing Strategies', 'Documentation'],
        hours: '20',
        fileName: 'module2_implementation.pdf'
      },
      {
        title: 'Testing and Deployment',
        topics: ['Unit Testing', 'Integration Testing', 'User Acceptance Testing', 'Deployment Strategies'],
        hours: '12',
        fileName: 'module3_testing_deployment.pdf'
      },
      {
        title: 'Project Documentation and Submission',
        topics: ['Technical Documentation', 'User Manual', 'Project Report', 'Final Presentation'],
        hours: '10',
        fileName: 'module4_documentation.pdf'
      }
    ]
  };
  
  return courseModules[courseCode] || [
    {
      title: 'Module 1: Introduction',
      topics: ['Basic concepts', 'Fundamental principles', 'Overview of the subject'],
      hours: '8',
      fileName: 'module1_introduction.pdf'
    },
    {
      title: 'Module 2: Core Concepts',
      topics: ['Advanced topics', 'Practical applications', 'Case studies'],
      hours: '10',
      fileName: 'module2_core_concepts.pdf'
    },
    {
      title: 'Module 3: Implementation',
      topics: ['Hands-on practice', 'Project work', 'Real-world examples'],
      hours: '9',
      fileName: 'module3_implementation.pdf'
    },
    {
      title: 'Module 4: Advanced Topics',
      topics: ['Latest developments', 'Research areas', 'Future trends'],
      hours: '10',
      fileName: 'module4_advanced_topics.pdf'
    },
    {
      title: 'Module 5: Applications',
      topics: ['Industry applications', 'Best practices', 'Professional skills'],
      hours: '8',
      fileName: 'module5_applications.pdf'
    }
  ];
}

// Function to get the file path for a module
function getModuleFilePath(courseCode, fileName) {
  const semesterMap = {
    // Semester I
    '20MCA101': 'semester_i',
    '20MCA103': 'semester_i',
    '20MCA105': 'semester_i',
    '20MCA107': 'semester_i',
    '20MCA131': 'semester_i',
    '20MCA133': 'semester_i',
    '20MCA135': 'semester_i',
    
    // Semester II
    '20MCA102': 'semester_ii',
    '20MCA104': 'semester_ii',
    '20MCA1E1': 'semester_ii',
    '20MCA1E2': 'semester_ii',
    '20MCA132': 'semester_ii',
    '20MCA134': 'semester_ii',
    '20MCA136': 'semester_ii',
    
    // Semester III
    '20MCA201': 'semester_iii',
    '20MCA203': 'semester_iii',
    '20MCA2E3': 'semester_iii',
    '20MCA2E4': 'semester_iii',
    '20MCA241': 'semester_iii',
    '20MCA243': 'semester_iii',
    '20MCA245': 'semester_iii',
    
    // Semester IV
    '20MCA242': 'semester_iv',
    '20MCA244': 'semester_iv',
    '20MCA246': 'semester_iv'
  };
  
  const semester = semesterMap[courseCode] || 'semester_i';
  return `notes/${semester}/${courseCode}/${fileName}`;
}

// Function to download a module file
function downloadModuleFile(courseCode, fileName, moduleTitle) {
  const filePath = getModuleFilePath(courseCode, fileName);
  
  // Check if file exists by making a HEAD request
  fetch(filePath, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        // File exists, proceed with download
        const link = document.createElement('a');
        link.href = filePath;
        link.download = `${courseCode}_${fileName}`;
        link.style.display = 'none';
        
        // Add to DOM, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        showDownloadMessage(`✅ Downloading ${moduleTitle}...`);
      } else {
        // File doesn't exist
        showDownloadMessage(`❌ File not found for ${moduleTitle}`, 'error');
      }
    })
    .catch(error => {
      console.error('Download error:', error);
      showDownloadMessage(`❌ Error downloading ${moduleTitle}`, 'error');
    });
}

// Function to show download message
function showDownloadMessage(message, type = 'success') {
  // Create a temporary notification
  const notification = document.createElement('div');
  notification.textContent = message;
  
  const bgColor = type === 'error' ? '#ef4444' : '#4CAF50';
  const borderColor = type === 'error' ? '#dc2626' : '#22c55e';
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${bgColor};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    z-index: 1000;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    border: 2px solid ${borderColor};
    max-width: 300px;
    word-wrap: break-word;
    animation: slideIn 0.3s ease-out;
  `;
  
  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  // Remove after 4 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOut 0.3s ease-in';
      notification.style.transform = 'translateX(100%)';
      notification.style.opacity = '0';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }
  }, 4000);
}