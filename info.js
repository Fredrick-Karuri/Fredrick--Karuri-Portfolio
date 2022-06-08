let info = {
  name: 'Fredrick Karuri',
  logo_name: 'Fredrick Karuri',
  flat_picture: require('/assets/freddy.jpg'),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm a Web Developer with a passion for building projects that are used routinely. I Build applications in JavaScript. I Currently are a Computer Science student. I have a high affinity for a good user experience. ",
  links: {
    linkedin: 'https://www.linkedin.com/in/fredrick-karuri-37a5681a7/',
    github: 'https://github.com/Fredrick-Karuri',

    resume:
      'https://github.com/Natain/Resume/blob/main/Resume-Natain-Bogdan.pdf'
  },
  education: [
    {
      name: 'Chartaby Academy',
      place: 'Nyahururu',
      date: 'Apr, 2010 - Nov, 2014',
      degree: 'Kenya Certificate of Primary Education',
      gpa: '',

      skills: [
        // "Skills gained:",
        // "Design, conduct and interpret research and statistical analysis. ",
        // "Apply an evidence-based approach to problems.",
        // "Communicate findings using models, charts and graphs.",
        // "Communicate research findings using clear, accurate, concise writing.",
      ]
    },
    {
      name: 'Kagumo High School',
      place: 'Nyeri',
      date: 'Jan, 2015 - Nov, 2018',
      degree: 'Economics Science',
      gpa: '3.7/4.0',

      skills: [
        'Skills gained:',
        // "Design, conduct and interpret research and statistical analysis. ",
        'LeaderShip.'
        // "Communicate findings using models, charts and graphs.",
        // "Communicate research findings using clear, accurate, concise writing.",
      ]
    },
    {
      name: 'Daystar University',
      course: 'Applied computer Science',
      place: 'Mavoko/Athi River',
      date: 'May, 2021 - Oct, 2021',
      degree: 'Bachelors in Applied computer Science',
      gpa: '3.2/4.0',
      description: '',
      skills: ['Skills gained:', 'HTML5', 'CSS3', 'JavaScript', 'OOP']
    }
  ],
  experience: [
    {
      name: 'Freelancer',
      place: 'Nairobi, Kenya',
      date: 'Apr, 2022 - Present',
      position: 'Full Stack Web Developer',
      description: 'Developing Front-end website architecture. Designing user interactions on web pages. Ensuring responsiveness of applications. Doing web design.Seeing through a project from conception to finished product. Staying abreast of developments in web applications and programming languages. Proficiency with fundamental Front-end languages such as HTML, CSS, and JavaScript.Familiarity with JavaScript frameworks such as  React.js, and Vue.js.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
        'React.js',
        'Vue.js',
        'Python',
        'Django'
      ]
    },

    {
      name: 'Design',
      place: 'Nairobi, Kenya',
      date: 'Oct, 2021 - Present',
      position: 'Designer',
      description:
      'Designing Stickers which I sell. Designing posters. Designing website and application wireframes in figma',
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'CorelDraw', 'CorelPhotos', ]
    }
  ],
  skills: [
    {
      title: 'languages',
      info: ['Javascript', 'CSS', 'HTML5'],
      icon: 'fa fa-code'
    },
    {
      title: 'data Science',
      info: ['Python'],
      icon: 'fa fa-cubes'
    },
    {
      title: 'web technologies',
      info: ['Vue.js', 'React.js', 'Node.js', 'HTML', 'CSS'],
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'databases',
      info: ['firebase',  'OracleSQL'],
      icon: 'fa fa-database'
    },
    {
      title: 'operating systems & tools',
      info: [
        'Windows',
        'Android',
        'Heroku',
        'Firebase',
      ],
      icon: 'fas fa-tools'
    },
    {
      title: 'design',
      info: ['Illustrator', 'Figma', 'Photoshop', 'CorelDraw'],
      icon: 'fa fa-pencil-square-o'
    }
  ],
  portfolio: [
    {
      name: 'ArtOhm',
      pictures: [
        {
          img: require('./src/assets/portfolio/todo-application/one.png')
        },
        {
          img: require('./src/assets/portfolio/todo-application/two.png')
        }
      ],
      technologies: ['CommerceJs', 'React.js', 'Netlify'],
      category: 'E-commerce Site',
      github: 'https://github.com/Natain/todo-application',
      visit: 'https://natainbogdan.netlify.app/',
      description:
      'I made this site for my stickers business. Check it and even order stickers today!  ',
    },

    {
      name: 'Lavington Designers',
      pictures: [
        // {
        //   img: require("./src/assets/portfolio/clumpr/logo.png")
        // },
        {
          img: require('./src/assets/portfolio/grocery/one.png')
        },
        {
          img: require('./src/assets/portfolio/grocery/two.png')
        }
      ],
      technologies: ['CSS', 'JavaScript', 'Vue.js', 'HTML5'],
      category: 'Web App',
      github: 'https://github.com/Natain/grocery-listing-react',
      date: '',
      visit: 'https://grocery-listing-react.netlify.app/',
      description:
      ' It is a design site, where one can see the various designs done and reach out for a design  ',
    },
    {
      name: 'Gitscores',
      pictures: [
        {
          img: require('./src/assets/portfolio/Gitscores/one.png')
        },
        {
          img: require('./src/assets/portfolio/Gitscores/two.png')
        },
        {
          img: require('./src/assets/portfolio/Gitscores/three.png')
        }
      ],
      technologies: ['JavaScript', 'CSS', 'EJS', 'Herokuapp'],
      category: 'Scoring app for Github',
      github: 'https://github.com/Natain/gitscores',
      date: 'Aug, 2021 - Sep, 2021',
      visit: 'https://gitscores.herokuapp.com/',
      description:
        'Gitscores v1.0.2 was updated from the orginal with more tools that let you personalize the app on your desingn.'
    }
  ],
  recommendations: [
    {
      title:
        'In his internship, Bogdan Natain has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.',
      author: 'Timothy Gray',
      position: '',
      company: '',
      location: ' '
    },
       {
      title:
        'I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.',
      author: 'Boaz',
      position: 'Designer',
      company: 'Lavington Builders & Des.',
      location:  "Ngong' Road, Nairobi"
    }
  ]
}

export default info