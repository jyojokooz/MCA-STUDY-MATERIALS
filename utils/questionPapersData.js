const questionPapersData = {
  // Map semester names to directory names
  semesterMap: {
    'Semester I': 'semester_i',
    'Semester II': 'semester_ii', 
    'Semester III': 'semester_iii',
    'Semester IV': 'semester_iv'
  },

  // Available years for question papers
  years: [2020, 2021, 2022, 2023, 2024, 2025],

  // Get question paper file path for a specific semester and year
  getQuestionPaperPath(semester, year) {
    const semesterDir = this.semesterMap[semester];
    if (!semesterDir) {
      console.error(`Invalid semester: ${semester}`);
      return null;
    }
    
    return `question_papers/${semesterDir}/${semesterDir}_${year}_question_paper.pdf`;
  },

  // Get all question papers for a semester
  getQuestionPapersForSemester(semester) {
    const semesterDir = this.semesterMap[semester];
    if (!semesterDir) {
      return [];
    }

    return this.years.map(year => ({
      year,
      semester,
      fileName: `${semesterDir}_${year}_question_paper.pdf`,
      filePath: this.getQuestionPaperPath(semester, year),
      academicYear: `${year}-${year + 1}`,
      description: `Complete question paper with solutions and marking scheme for ${semester} - Academic Year ${year}-${year + 1}`
    }));
  },

  // Check if a question paper file exists (for future implementation)
  questionPaperExists(semester, year) {
    // For now, return true for all combinations
    // In a real implementation, this would check if the file actually exists
    return true;
  },

  // Get question paper metadata
  getQuestionPaperMetadata(semester, year) {
    return {
      year,
      semester,
      fileName: `${this.semesterMap[semester]}_${year}_question_paper.pdf`,
      filePath: this.getQuestionPaperPath(semester, year),
      academicYear: `${year}-${year + 1}`,
      description: `Complete question paper with solutions and marking scheme for ${semester} - Academic Year ${year}-${year + 1}`,
      exists: this.questionPaperExists(semester, year)
    };
  }
}; 