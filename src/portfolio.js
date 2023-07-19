import aboutpic from './components/Access/SAIRAM-01.jpeg'

const header = {
  homepage: 'https://github.com/sairam220',
  title: 'MERN',
}

const about = {
  photo: aboutpic,
  name: 'GUDIDA SAIRAM',
  role: 'Full stack developer',
  description:
    'At NxtWave’s CCBP 4.0 Academy, I’m currently learning full-stack development with a specialization in 4.0 technologies. In love with the coding challenges and hands-on projects. With Industry’s first ever IRC 4.0, getting ready to take on new challenges in the tech world',
  Resume:
    'https://drive.google.com/file/d/1uo_0Q3CKGgx9giK_iqP_6z1jhdKPni_A/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/sairam-gudida-673480221/',
    github: 'https://github.com/sairam220',
  },
}

const projects = [
  {
    name: 'Tasty Kitchens (Swiggy,Zomato Clone)',
    description: `Built a user-friendly Online Food Ordering System resembling Swiggy,Zomato,
allowing users to browse popular restaurants, view detailed restaurant
information, add or remove items from their cart, and complete payments.`,
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React JS',
      'Bootstrap',
      'React Slick',
    ],
    sourceCode: 'https://github.com/sairam220/tasty_Kitchen.git',
    livePreview: 'https://sairamkitchen.ccbp.tech/',
  },
  {
    name: 'Nxt Trendz ( ECommerce Clone - Amazon,Flipkart)',
    description: `Implemented Nxt Trendz application which is a clone for ECommerce applications
like Amazon, Flipkart where users can login and can see list of products with
search, filters, sort by, etc..`,
    stack: [
      'React JS',
      'Javascript',
      'CSS',
      'Bootstrap',
      'Routing',
      'REST API Calls',
    ],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },

  {
    name: 'Todos Application',
    description: `A task management solution, designed to make life easier. Streamlined task management through a combination of HTML, CSS, and
Bootstrap for an intuitive interface.`,
    stack: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    livePreview: 'https://saitodoweb.ccbp.tech/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'Node Js',
  'Express Js',
  'MySQL',
  'MongoDB',
  'React Js',
  'Git',
  'MERN',
]

const contact = {
  email: 'gudidasairam123@gmail.com',
}

export {header, about, projects, skills, contact}
