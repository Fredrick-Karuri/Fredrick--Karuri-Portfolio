let info = {
  name: 'Fredrick Karuri',
  logo_name: 'Fredrick',
  flat_picture: require('/assets/freddy.png'),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    'I am Fredrick Karuri, a Software Engineer based in Nairobi, Kenya. With expertise in programming languages like Python and JavaScript, I am passionate about creating intuitive and engaging digital experiences. My proficiency extends to front-end development technologies such as HTML, CSS, Vue, and React. With familiarity in version control systems like Git, I strive to deliver high-quality solutions that improve user experiences. ',
  links: {
    linkedin: 'https://www.linkedin.com/in/fredrick-karuri-37a5681a7/',
    github: 'https://github.com/Fredrick-Karuri',

    resume:
      'https://drive.google.com/drive/u/0/folders/13B6M5LOTkvR6zG5fj_5e650lbMrDvFu9'
  },
  education: [
    {
      name: 'Daystar University',
      course: 'Applied computer Science',
      place: 'Mavoko/Athi River',
      date: 'Aug, 2019 - Oct, 2023',
      degree: 'Bachelors in Applied computer Science',
      // gpa: '3.2/4.0',
      description: '',
      skills: [
        'Skills gained:',
        'JavaScript',
        'OOP',
        'Software Engineering',
        ' Human-Centered Design'
      ]
    },
    {
      name: 'Kagumo High School',
      place: 'Nyeri',
      date: 'Jan, 2015 - Nov, 2018',
      degree: 'Kenya Certificate of Secondary Education',
      gpa: '',

      skills: [
        'Skills gained:',
        // "Design, conduct and interpret research and statistical analysis. ",
        'LeaderShip.'
        // "Communicate findings using models, charts and graphs.",
        // "Communicate research findings using clear, accurate, concise writing.",
      ]
    }
  ],

certifications:[
  {
    name: 'Google User Experience '
  }
],
  experience: [
    {
      name: 'ShopOkoa',
      place: 'Nairobi, Kenya',
      date: 'Feb, 2023 - Present',
      position: 'Software Engineer & User Experience Designer',
      description:
        "Collaborated with developers to implement UI components and user flows, improving the e-commerce platform's user experience. Conducted user research and usability testing to inform design decisions. Created wireframes and prototypes using Figma to visualize design concepts and iterate on solutions.",
      skills: [
        'User Experience Design',
        'User Research',
        'Figma',
        'Prototyping',
        'React.js'
      ]
    },
    {
      name: 'Student Intern',
      place: 'Nairobi, Kenya',
      date: 'Jan, 2020 - Feb, 2023',
      position: 'Computer Lab Assistant',
      description:
        'Assisted in computer hardware and software maintenance, ensuring optimal functionality of computer labs. Managed and maintained resources, effectively troubleshooting and resolving technical issues. Decreased lab downtime by 25% and improved student satisfaction by 15%.',
      skills: [
        'Computer Hardware Maintenance',
        'Troubleshooting',
        'Software Management'
      ]
    },

    {
      name: 'Design',
      place: 'Nairobi, Kenya',
      date: 'Oct, 2021 - Present',
      position: 'Designer',
      description:
        'Designing Stickers which I sell. Designing posters. Designing website and application wireframes in figma',
      skills: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Figma',
        'CorelDraw',
        'CorelPhotos'
      ]
    }
  ],
  skills: [
    {
      title: 'languages',
      info: ['Javascript', 'Python', 'Vue.js', 'React.js'],
      icon: 'fa fa-code'
    },
    {
      title: 'AI&ML',
      info: ['Python', 'Data Analysis', 'Feature Engineering'],
      icon: 'fa fa-cubes'
    },
    {
      title: 'Software Development',
      info: [
        'Software Development Life Cycle',
        'JIRA',
        'Agile Methodologies',
        'Git'
      ],
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'databases',
      info: ['firebase', 'OracleSQL'],
      icon: 'fa fa-database'
    },
    {
      title: 'operating systems & tools',
      info: ['Windows', 'Android', 'Heroku', 'Firebase'],
      icon: 'fas fa-tools'
    },
    {
      title: 'design',
      info: [
        'Human-Centered Design',
        'Figma',
        'Photoshop',
        'Prototyping',
        'User Journeys'
      ],
      icon: 'fa fa-pencil-square-o'
    }
  ],
  portfolio: [
    {
      name: 'ArtOhm',
      pictures: [
        {
          img: require('./src/assets/portfolio/ArtOhm/artohm1.jpg')
        },
        {
          img: require('./src/assets/portfolio/ArtOhm/artohm2.jpg')
        },
        {
          img: require('./src/assets/portfolio/ArtOhm/artohm3.jpg')
        },
        {
          img: require('./src/assets/portfolio/ArtOhm/artohm4.jpg')
        }
      ],
      technologies: ['CommerceJs', 'React.js', 'Netlify'],
      category: 'E-commerce Site',
      github: 'https://github.com/Fredrick-Karuri/e_commerce',
      visit: 'https://artohm.netlify.app/',
      description:
        'A website for selling artworks. It is built using CommerceJS, React.js and Netlify.    '
    },

    {
      name: 'Lavington Designers',
      pictures: [
        {
          img: require('./src/assets/portfolio/Lavington/lavi1.jpg')
        },
        {
          img: require('./src/assets/portfolio/Lavington/lavi1.jpg')
        }
      ],
      technologies: ['CSS', 'JavaScript', 'Vue.js', 'HTML5'],
      category: 'Web App',
      github: 'https://github.com/Fredrick-Karuri/vue-lavington',
      date: 'May 2022-',
      visit: '',
      description:
        ' It is a design site, where one can see the various designs done and reach out for a design  '
    },
    // 2D Paint Program: Developed as part of a coursework project, a 2D Paint Program using C++ and OpenGL, with features similar to MS Paint.
    {
      name: '2D Paint Program',
      pictures: [
        {
          img: require('./src/assets/portfolio/2DPaint/paint.png')
        }
      ],
      technologies: ['C++', 'OpenGL'],
      category: '2D Paint Program',
      github: 'https://github.com/Fredrick-Karuri/OpenGLPaintProgram',
      date: 'Aug 2022',
      description:
        'This is a basic paint program in 2D written in C++ and OpenGL. It has been tested on Windows and Linux. It equates to MS paint.'
    },
    {
      name: 'InfoYou',
      pictures: [
        {
          img: require('./src/assets/portfolio/InfoYou/Infoyou.png')
        },
        {
          img: require('./src/assets/portfolio/InfoYou/infoyou3.png')
        },
        {
          img: require('./src/assets/portfolio/InfoYou/infoyou2.png')
        }
      ],
      technologies: ['Python', 'Django', 'Html', 'Herokuapp'],
      category: 'Web App',
      github: 'https://github.com/Fredrick-Karuri/InfoYou',
      date: 'Apr, 2020 - June, 2020',
      visit: '',
      description:
        'A Blog site. A crafted site to incorporate artists with original content and readers with an affinity for great content!'
    }
  ],
  design: [],
  recommendations: [
    {
      title:
        'In his internship, Fredrick has demonstrated excellent learning ability, and with a dedicated, task oriented approach. ',
      author: 'Duncan ',
      position: 'CTO ',
      company: 'ShopOkoa',
      location: 'Nairobi, Kenya'
    },
    
    {
      title:
        'I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.',
      author: 'Boaz',
      position: 'Designer',
      company: 'Lavington Builders & Des.',
      location: "Ngong' Road, Nairobi"
    }
  ]
}

export default info
