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
      'https://drive.google.com/file/d/12iNeAnlp3dCQTA2Rr9bM1a-AOh8ziZFY/view?usp=sharing'
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

  certifications: [
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
      name: 'Forage',
      place: 'Online',
      date: 'Feb 2023',
      position: 'Designer',
      description:
        'Developed software solutions using Java, data structures, optimization techniques, UML modeling, and SQL database management. Achieved a 20% reduction in production time and 15% improvement in system performance. Created use cases and UML diagrams (activity, sequence, class) to facilitate communication between teams, stakeholders, and end-users.',
      skills: ['Java', 'UML', 'Modeling', 'SQL', 'Software Development']
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
      name: 'shopokoa',
      pictures: [
        {
          img: require('./src/assets/portfolio/shopokoa/shopokoa.png')
        }
      ],
      technologies: ['React.js', 'JavaScript', 'Tailwind'],
      category: 'Web App',
      visit: 'https://www.shopokoa.com/',
      // add multiple paragraphs below
      description:
        "As an integral member of the team, I played a key role in the design and development of the ShopOkoa website. ShopOkoa is an innovative credit platform that allows users to shop and pay at their convenience. For the development of the website, we utilized React, a popular JavaScript library, to create a dynamic and interactive user interface. This enabled us to build a responsive website that seamlessly adapts to different screen sizes and devices. To enhance the visual appeal and user experience, we employed Tailwind CSS, a utility-first CSS framework. This allowed us to efficiently style the website and ensure consistency across all pages.The ShopOkoa website project holds great significance in my portfolio as it showcases my proficiency in both design and development, as well as my capacity to collaborate effectively. It demonstrates my ability to create user-centric experiences while utilizing modern technologies such as React and Tailwind CSS."
    },

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
        'A website that allows users to buy art. The site features a shopping cart, a checkout process, and payment gateway integration'
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
        ' A platform for artists and readers to share their work and connect with others. The site features a user-friendly interface and a variety of tools for artists,   '
    },
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
        'A paint program with features similar to MS Paint. The program allows users to create and edit images, use a variety of drawing tools, and save their work in different formats. It has been tested on Windows and Linux.'
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
        "I was impressed by Fredrick's collaborative approach and attention to detail. He consistently delivered high-quality designs that exceeded expectations. ",
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
