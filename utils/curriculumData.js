const curriculumData = {
  semesters: [
    {
      name: 'Semester I',
      number: 'I',
      courses: [
        {
          code: '20MCA101',
          name: 'Mathematical Foundations for Computing',
          type: 'Theory',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'A',
          semester: 'Semester I'
        },
        {
          code: '20MCA103',
          name: 'Digital Fundamentals & Computer Architecture',
          type: 'Theory',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'B',
          semester: 'Semester I'
        },
        {
          code: '20MCA105',
          name: 'Advanced Data Structures',
          type: 'Theory',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'C',
          semester: 'Semester I'
        },
        {
          code: '20MCA107',
          name: 'Advanced Software Engineering',
          type: 'Theory',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'D',
          semester: 'Semester I'
        },
        {
          code: '20MCA131',
          name: 'Programming Lab',
          type: 'Lab',
          credits: 2,
          hours: { lecture: 0, tutorial: 1, practical: 3 },
          marks: { ia: 50, ese: 50 },
          examSlot: 'R',
          semester: 'Semester I'
        },
        {
          code: '20MCA133',
          name: 'Web Programming Lab',
          type: 'Lab',
          credits: 2,
          hours: { lecture: 0, tutorial: 1, practical: 3 },
          marks: { ia: 50, ese: 50 },
          examSlot: 'S',
          semester: 'Semester I'
        },
        {
          code: '20MCA135',
          name: 'Data Structures Lab',
          type: 'Lab',
          credits: 2,
          hours: { lecture: 0, tutorial: 1, practical: 3 },
          marks: { ia: 50, ese: 50 },
          examSlot: 'T',
          semester: 'Semester I'
        },
      ]
    },
    {
      name: 'Semester II',
      number: 'II',
      courses: [
        {
          code: '20MCA102',
          name: 'Advanced Database Management Systems',
          type: 'Theory',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'A',
          semester: 'Semester II'
        },
        {
          code: '20MCA104',
          name: 'Advanced Computer Networks',
          type: 'Theory',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'B',
          semester: 'Semester II'
        },
        {
          code: '20MCA1E1',
          name: 'Elective 1',
          type: 'Elective',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'C',
          semester: 'Semester II'
        },
        {
          code: '20MCA1E2',
          name: 'Elective 2',
          type: 'Elective',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'D',
          semester: 'Semester II'
        },
        {
          code: '20MCA132',
          name: 'Object Oriented Programming Lab',
          type: 'Lab',
          credits: 2,
          hours: { lecture: 0, tutorial: 1, practical: 3 },
          marks: { ia: 50, ese: 50 },
          examSlot: 'R',
          semester: 'Semester II'
        },
        {
          code: '20MCA134',
          name: 'Advanced DBMS Lab',
          type: 'Lab',
          credits: 2,
          hours: { lecture: 0, tutorial: 1, practical: 3 },
          marks: { ia: 50, ese: 50 },
          examSlot: 'S',
          semester: 'Semester II'
        },
        {
          code: '20MCA136',
          name: 'Networking & System Administration Lab',
          type: 'Lab',
          credits: 2,
          hours: { lecture: 0, tutorial: 1, practical: 3 },
          marks: { ia: 50, ese: 50 },
          examSlot: 'T',
          semester: 'Semester II'
        },
        { code: '20MCA162', name: 'Applied Statistics', type: 'Elective I', active: true, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E1', semester: 'Semester II' },
        { code: '20MCA164', name: 'Organizational Behaviour', type: 'Elective I', active: true, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E1', semester: 'Semester II' },
        { code: '20MCA166', name: 'Functional Programming', type: 'Elective I', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E1', semester: 'Semester II' },
        { code: '20MCA168', name: 'Virtualisation and Containers', type: 'Elective I', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E1', semester: 'Semester II' },
        { code: '20MCA172', name: 'Advanced Operating Systems', type: 'Elective I', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E1', semester: 'Semester II' },
        { code: '20MCA182', name: 'Business Management', type: 'Elective II', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E2', semester: 'Semester II' },
        { code: '20MCA184', name: 'Embedded Systems', type: 'Elective II', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E2', semester: 'Semester II' },
        { code: '20MCA186', name: 'Computer Graphics', type: 'Elective II', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E2', semester: 'Semester II' },
        { code: '20MCA188', name: 'Artificial Intelligence', type: 'Elective II', active: true, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E2', semester: 'Semester II' },
        { code: '20MCA192', name: 'IPR and Cyber Laws', type: 'Elective II', active: true, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E2', semester: 'Semester II' },
      ]
    },
    {
      name: 'Semester III',
      number: 'III',
      courses: [
        {
          code: '20MCA201',
          name: 'Data Science & Machine Learning',
          type: 'Theory',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'A',
          semester: 'Semester III'
        },
        {
          code: '20MCA203',
          name: 'Design & Analysis of Algorithms',
          type: 'Theory',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'B',
          semester: 'Semester III'
        },
        {
          code: '20MCA2E3',
          name: 'Elective 3',
          type: 'Elective',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'C',
          semester: 'Semester III'
        },
        {
          code: '20MCA2E4',
          name: 'Elective 4',
          type: 'Elective',
          credits: 4,
          hours: { lecture: 3, tutorial: 1, practical: 0 },
          marks: { ia: 40, ese: 60 },
          examSlot: 'D',
          semester: 'Semester III'
        },
        {
          code: '20MCA241',
          name: 'Data Science Lab',
          type: 'Lab',
          credits: 2,
          hours: { lecture: 0, tutorial: 1, practical: 3 },
          marks: { ia: 50, ese: 50 },
          examSlot: 'R',
          semester: 'Semester III'
        },
        {
          code: '20MCA243',
          name: 'Mobile Application Development Lab',
          type: 'Lab',
          credits: 2,
          hours: { lecture: 0, tutorial: 1, practical: 3 },
          marks: { ia: 50, ese: 50 },
          examSlot: 'S',
          semester: 'Semester III'
        },
        {
          code: '20MCA245',
          name: 'Mini Project',
          type: 'Project',
          credits: 2,
          hours: { lecture: 0, tutorial: 0, practical: 4 },
          marks: { ia: 100, ese: 0 },
          examSlot: 'T',
          semester: 'Semester III'
        },
        { code: '20MCA261', name: 'Operations Research', type: 'Elective III', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E3', semester: 'Semester III' },
        { code: '20MCA263', name: 'Cyber Security & Cryptography', type: 'Elective III', active: true, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E3', semester: 'Semester III' },
        { code: '20MCA265', name: 'Cloud Computing', type: 'Elective III', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E3', semester: 'Semester III' },
        { code: '20MCA267', name: 'Cyber Forensics', type: 'Elective III', active: true, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E3', semester: 'Semester III' },
        { code: '20MCA269', name: 'Compiler Design', type: 'Elective III', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E3', semester: 'Semester III' },
        { code: '20MCA281', name: 'Internet of Things', type: 'Elective IV', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E4', semester: 'Semester III' },
        { code: '20MCA283', name: 'Deep Learning', type: 'Elective IV', active: true, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E4', semester: 'Semester III' },
        { code: '20MCA285', name: 'Digital Image Processing', type: 'Elective IV', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E4', semester: 'Semester III' },
        { code: '20MCA287', name: 'Bioinformatics', type: 'Elective IV', active: true, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E4', semester: 'Semester III' },
        { code: '20MCA289', name: 'Social Network Analysis', type: 'Elective IV', active: false, credits: 4, hours: { lecture: 3, tutorial: 1, practical: 0 }, marks: { ia: 40, ese: 60 }, examSlot: 'E4', semester: 'Semester III' },
      ]
    },
    {
      name: 'Semester IV',
      number: 'IV',
      courses: [
        {
          code: '20MCA242',
          name: 'Comprehensive Viva',
          type: 'Theory',
          credits: 6,
          hours: { lecture: 0, tutorial: 0, practical: 0 },
          marks: { ia: 0, ese: 100 },
          examSlot: 'A',
          semester: 'Semester IV'
        },
        {
          code: '20MCA244',
          name: 'Seminar',
          type: 'Theory',
          credits: 2,
          hours: { lecture: 0, tutorial: 0, practical: 2 },
          marks: { ia: 50, ese: 0 },
          examSlot: 'B',
          semester: 'Semester IV'
        },
        {
          code: '20MCA246',
          name: 'Main Project',
          type: 'Project',
          credits: 12,
          hours: { lecture: 0, tutorial: 0, practical: 27 },
          marks: { ia: 70, ese: 30 },
          examSlot: 'C',
          semester: 'Semester IV'
        }
      ]
    }
  ],

  electives: {
    'Elective I': [
      { code: '20MCA162', name: 'Applied Statistics' },
      { code: '20MCA164', name: 'Organizational Behaviour' },
      { code: '20MCA166', name: 'Functional Programming' },
      { code: '20MCA168', name: 'Virtualisation and Containers' },
      { code: '20MCA172', name: 'Advanced Operating Systems' }
    ],
    'Elective II': [
      { code: '20MCA182', name: 'Business Management' },
      { code: '20MCA184', name: 'Embedded Systems' },
      { code: '20MCA186', name: 'Computer Graphics' },
      { code: '20MCA188', name: 'Artificial Intelligence' },
      { code: '20MCA192', name: 'IPR and Cyber Laws' }
    ]
  },

  getAllCourses() {
    return this.semesters.flatMap(semester => semester.courses);
  },

  getCoursesBySemester(semesterName) {
    const semester = this.semesters.find(s => s.name === semesterName);
    return semester ? semester.courses : [];
  },

  getTotalCredits() {
    return this.getAllCourses().reduce((sum, course) => sum + course.credits, 0);
  }
};