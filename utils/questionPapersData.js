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

  // Get question paper file path for a specific semester, subject code, and year
  getQuestionPaperPath(semester, subjectCode, year) {
    const semesterDir = this.semesterMap[semester];
    if (!semesterDir || !subjectCode) {
      console.error(`Invalid semester or subject: ${semester}, ${subjectCode}`);
      return null;
    }
    return `question_papers/${semesterDir}/${subjectCode}/${year}.pdf`;
  },

  // Get all question papers for a subject in a semester
  getQuestionPapersForSubject(semester, subjectCode) {
    const semesterDir = this.semesterMap[semester];
    if (!semesterDir || !subjectCode) {
      return [];
    }
    return this.years.map(year => ({
      year,
      semester,
      subjectCode,
      fileName: `${year}.pdf`,
      filePath: this.getQuestionPaperPath(semester, subjectCode, year),
      academicYear: `${year}-${year + 1}`,
      description: `Question paper for ${subjectCode} - Academic Year ${year}-${year + 1}`
    }));
  },

  // Check if a question paper file exists (for future implementation)
  questionPaperExists(semester, subjectCode, year) {
    // For now, return true for all combinations
    // In a real implementation, this would check if the file actually exists
    return true;
  },

  // Get question paper metadata
  getQuestionPaperMetadata(semester, subjectCode, year) {
    return {
      year,
      semester,
      subjectCode,
      fileName: `${year}.pdf`,
      filePath: this.getQuestionPaperPath(semester, subjectCode, year),
      academicYear: `${year}-${year + 1}`,
      description: `Question paper for ${subjectCode} - Academic Year ${year}-${year + 1}`,
      exists: this.questionPaperExists(semester, subjectCode, year)
    };
  }
}; 