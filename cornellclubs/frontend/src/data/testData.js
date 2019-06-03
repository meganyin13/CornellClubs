const testData = [
  {
    clubName: 'Cornell 3 Day Startup',
    shortName: 'Cornell3DS',
    logo: 'Cornell3DS_logo.png',
    coverPhoto: 'Cornell3DS_cover.png',
    blurb: 'The mission of 3 Day Startup is to build entrepreneurial capabilities and cultures on university campuses. We do this by helping teams at universities around the globe organize 3DS events that help turn students into entrepreneurs, and connect those students with a powerful network of mentors, investors and talent.',
    openApps: false,
    appLink: null,
    website: 'https://cornell.3daystartup.org/',
    email: 'mailto:cornell.3daystartup@gmail.com',
    facebook: 'https://www.facebook.com/3-Day-Startup-at-Cornell-University-714836482035756/',
    tags: ['startup', 'entrepreneurship', 'software', 'ideas', 'technology', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'Cornell Accounting Association',
    shortName: 'CAA',
    logo: 'CAA_logo.jpg',
    coverPhoto: 'CAA_cover.jpg',
    blurb: 'The Cornell Accounting Association (CAA) is a student-run organization dedicated to providing Cornell students with valuable resource and training for a career in accounting. The club’s success is measured by the number of CAA members that achieve jobs and internships as a result of combined student and CAA efforts. CAA regularly hosts a variety of accounting related events. We welcome any organization that wishes to work with us to accomplish all or a portion of these goals.',
    openApps: false,
    appLink: null,
    website: 'https://www.cornellaccounting.org/',
    email: 'mailto:cornellaccounting@cornell.edu',
    facebook: 'https://www.facebook.com/cornellaccounting/',
    tags: ['accounting', 'finance', 'business', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'Cornell Actuarial Society',
    shortName: 'CAS',
    logo: 'CAS_logo.png',
    coverPhoto: 'CAS_cover.jpg',
    blurb: 'The Cornell Actuarial Society (CAS) is the only undergraduate professional organization that focuses on actuarial science at Cornell. We aim to empower talented and intelligent future actuaries through networking events, speaker series, and skill-building workshops. Our goal is to provide our members with skills to succeed professionally and personally.',
    openApps: false,
    appLink: null,
    website: 'http://www.cornellactuarialsociety.com/',
    email: 'mailto:cornellactuarialsociety@gmail.com',
    facebook: 'https://www.facebook.com/cornellactuarialsociety/',
    tags: ['finance', 'business', 'actuary', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'Air and Sea Hospitality, Cornell',
    shortName: 'A&SHCornell',
    logo: 'A&SHCornell_logo.jpg',
    coverPhoto: 'A&SHCornell_cover.jpg',
    blurb: 'We are an organization that explores a very unique side of the hospitality industry not completely understood by many. A side that has seen so much progress in the last few decades and which continues to change each day. The aviation and cruise industry involves more than just purchasing a plane/cruise fare, boarding, and arriving at your destination. Every aspect of that simple process comes with variables that dictate everything ranging from the price you pay to the quality of service you receive onboard!',
    openApps: false,
    appLink: null,
    website: 'http://orgsync.rso.cornell.edu/org/hotelwingssocietycornell68189/home',
    email: 'mailto:airandseahosp@gmail.com',
    facebook: 'https://www.facebook.com/airandsea/',
    tags: ['hospitality', 'hotel', 'business', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'Cornell Alpha Fund',
    shortName: 'AlphaCornell',
    logo: 'AlphaCornell_logo.jpg',
    coverPhoto: 'AlphaCornell_cover.jpg',
    blurb: 'The Alpha Fund of Cornell is one of the longest running student-led investment funds on campus. Since our founding in 2007, we have educated and engaged students in the world of finance and investing. We are a long/short tactical fund with a growth at a reason price (GARP) strategy. We manage over thirty thousand dollars of our members\' money and have posted consistent returns since our inception.',
    openApps: false,
    appLink: null,
    website: 'http://www.cornellalphafund.com/',
    email: 'mailto:alphacornell@gmail.com',
    facebook: 'https://www.facebook.com/CornellAlphaFund/',
    tags: ['finance', 'investing', 'business', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'American Academy of Environmental Engineers',
    shortName: 'AAEE',
    logo: 'AAEE_logo.jpg',
    coverPhoto: 'AAEE_cover.jpg',
    blurb: 'Our program Educational Objectives (PEOs) are to: Produce graduates who demonstrate in their professional practice strong technical abilities and advance in careers in Environmental Engineering and related disciplines. Produce graduates who will complete advanced degrees in engineering and related professional fields; Produce graduates who assume leadership positions, and contribute to understanding environmental problems and the design, construction, and operation of solutions of societal problems involving environmental systems.',
    openApps: false,
    appLink: null,
    website: 'https://enve.cornell.edu/american-academy-environmental-engineers/',
    email: 'mailto:aaee.cornell@gmail.com',
    facebook: 'https://www.facebook.com/Cornell-American-Academy-of-Environmental-Engineers-146119678786133/',
    tags: ['environmental', 'sustainability', 'engineering', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'American Indian Science and Engineering Society',
    shortName: 'AISES',
    logo: 'AISES_logo.jpg',
    coverPhoto: 'AISES_cover.jpg',
    blurb: 'American Indian Science & Engineering Society (AISES) is a student organization that meets to discuss various areas of interest within the STEM fields (science, technology, engineering, and mathematics). Our vision for Cornell’s AISES chapter is to be the new generation of educated Native leaders who will study and contribute to the building of communities among Native Americans. Our ultimate goal is to be a catalyst for the advancement of American Indian scholars in the field of science and technology.',
    openApps: false,
    appLink: null,
    website: 'https://aiisp.cornell.edu/student-life/native-american-student-organizations/aises/',
    email: 'mailto:',
    facebook: '',
    tags: ['STEM', 'engineering', 'ethnic', 'native', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'Cornell University American Institute of Aeronautics and Astronautics',
    shortName: 'CornellAIAA',
    logo: 'CornellAIAA_logo.png',
    coverPhoto: 'CornellAIAA_cover.jpg',
    blurb: 'Cornell AIAA is the Cornell student branch of the American Institute of Aeronautics and Astronautics, a professional society for anyone interested in aerospace engineering. We connect students to opportunities in research and industry and host lectures, internship/research panels, museum trips, and other events.',
    openApps: false,
    appLink: null,
    website: 'http://cornellaiaa.webflow.io/',
    email: 'mailto:ark83@cornell.edu',
    facebook: 'https://www.facebook.com/cornellaiaa/',
    tags: ['aeronautics', 'astronomy', 'aerospace', 'engineering', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'American Institute of Chemical Engineers',
    shortName: 'AIChE',
    logo: 'AIChE_logo.png',
    coverPhoto: 'AIChE_cover.png',
    blurb: 'The purpose of AIChE is to strengthen and enrich the Cornell ChemE community experience with professional, social and philanthropic programming.',
    openApps: false,
    appLink: null,
    website: 'https://cornellaiche.org/',
    email: '',
    facebook: 'https://www.facebook.com/cornellaiche/',
    tags: ['chemistry', 'engineering', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'American Mock World Health Organization',
    shortName: 'AMWHO',
    logo: 'AMWHO_logo.jpg',
    coverPhoto: 'AMWHO_cover.jpg',
    blurb: 'AMWHO stands as the national model-WHO organization for leading annual simulations in different universities. The organization strives to create chapters across the nation, where students can debate and form local conferences, and gather delegations from their school to attend AMWHO’s national conferences. The organization’s entire purpose is centered around interactive student learning on pertinent global health events like the World Health Assembly. Moreover, AMWHO seeks to have chapters in all universities for furthering the standard of global health policy education in the nation. Given our rotating national conference from different chapter to chapter, students involved in AMWHO can receive a chance to host this now distinguished event at their own university.',
    openApps: false,
    appLink: null,
    website: 'https://www.amwho.org/',
    email: 'mailto:',
    facebook: 'https://www.facebook.com/AMWHOrganization/',
    tags: ['health', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'American Society of Civil Engineers',
    shortName: 'ASCE',
    logo: 'ASCE_logo.jpg',
    coverPhoto: 'ASCE_cover.jpg',
    blurb: 'The American Society of Civil Engineers chapter at Cornell is a student group who invites members from among Civil Engineering majors to participate in community service events, engineering competitions and other activities. The group participates in the annual concrete canoe and steel bridge competitions, taking teams who work on each project to regional and national competitions around the country. ',
    openApps: false,
    appLink: null,
    website: null,
    email: 'mailto:asce@cornell.edu',
    facebook: null,
    tags: ['civilengineering', 'engineering', 'professional'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'Cornell Design & Tech Initiative',
    shortName: 'CornellDTI',
    logo: 'dtiteam_logo.png',
    coverPhoto: 'dtiteam_cover.jpg',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Id interdum velit laoreet id. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Lobortis feugiat vivamus at augue eget. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Et tortor consequat id porta nibh venenatis cras sed. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Neque laoreet suspendisse interdum consectetur. Lacinia at quis risus sed. Rhoncus dolor purus non enim. Diam phasellus vestibulum lorem sed risus. Mauris nunc congue nisi vitae suscipit tellus. Aenean sed adipiscing diam donec adipiscing tristique risus nec.\n',
    openApps: true,
    appLink: '#',
    website: 'https://www.cornelldti.org',
    email: 'mailto:hello@cornelldti.org',
    facebook: 'https://www.facebook.com/cornelldti/',
    tags: ['webdev', 'appdev', 'design', 'productmanagement', 'engineering'],
    officers: [
      {
        name: 'John Smith',
        picture: 'dummyOfficer.png',
      },
      {
        name: 'Tim Apple',
        picture: 'dummyOfficer.png',
      },
    ],
  },
  {
    clubName: 'BigRed//Hacks',
    shortName: 'BRH',
    logo: 'logo.jpg',
    coverPhoto: 'cover.jpg',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
    openApps: true,
    appLink: '#',
    website: 'google.com',
    email: 'no@gmail.com',
    facebook: 'facebook.com',
    tags: ['a', 'b', 'c'],
    officers: [
      {
        name: 'John Smith',
        picture: 'john.jpg',
      },
      {
        name: 'Tim Apple',
        picture: 'apple.jpg',
      },
    ],
  },
  {
    clubName: 'Cornell Data Science',
    shortName: 'CDS',
    logo: 'logo.jpg',
    coverPhoto: 'cover.jpg',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
    openApps: true,
    appLink: '#',
    website: 'google.com',
    email: 'no@gmail.com',
    facebook: 'facebook.com',
    tags: ['a', 'b', 'c'],
    officers: [
      {
        name: 'John Smith',
        picture: 'john.jpg',
      },
      {
        name: 'Tim Apple',
        picture: 'apple.jpg',
      },
    ],
  },
  {
    clubName: 'Society of Women Engineers',
    shortName: 'SWE',
    logo: 'logo.jpg',
    coverPhoto: 'cover.jpg',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
    openApps: true,
    appLink: '#',
    website: 'google.com',
    email: 'no@gmail.com',
    facebook: 'facebook.com',
    tags: ['a', 'b', 'c'],
    officers: [
      {
        name: 'John Smith',
        picture: 'john.jpg',
      },
      {
        name: 'Tim Apple',
        picture: 'apple.jpg',
      },
    ],
  },
  {
    clubName: 'Women In Computing Cornell',
    shortName: 'WICC',
    logo: 'logo.jpg',
    coverPhoto: 'cover.jpg',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
    openApps: true,
    appLink: '#',
    website: 'google.com',
    email: 'no@gmail.com',
    facebook: 'facebook.com',
    tags: ['a', 'b', 'c'],
    officers: [
      {
        name: 'John Smith',
        picture: 'john.jpg',
      },
      {
        name: 'Tim Apple',
        picture: 'apple.jpg',
      },
    ],
  },
  {
    clubName: 'Cornell Finance Club',
    shortName: 'CFC',
    logo: 'logo.jpg',
    coverPhoto: 'cover.jpg',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
    openApps: true,
    appLink: '#',
    website: 'google.com',
    email: 'no@gmail.com',
    facebook: 'facebook.com',
    tags: ['a', 'b', 'c'],
    officers: [
      {
        name: 'John Smith',
        picture: 'john.jpg',
      },
      {
        name: 'Tim Apple',
        picture: 'apple.jpg',
      },
    ],
  },
];

export default testData;
