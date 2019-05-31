const testData = [
  {
    clubName: '[club name]',
    shortName: 'shortname',
    logo: 'dtiteam_logo.png',
    coverPhoto: 'dtiteam_cover.jpg',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Id interdum velit laoreet id. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Lobortis feugiat vivamus at augue eget. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Et tortor consequat id porta nibh venenatis cras sed. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Neque laoreet suspendisse interdum consectetur. Lacinia at quis risus sed. Rhoncus dolor purus non enim. Diam phasellus vestibulum lorem sed risus. Mauris nunc congue nisi vitae suscipit tellus. Aenean sed adipiscing diam donec adipiscing tristique risus nec.\nUltricies mi quis hendrerit dolor magna eget est lorem. Volutpat ac tincidunt vitae semper quis lectus. Libero volutpat sed cras ornare arcu. Sit amet cursus sit amet dictum. Dui sapien eget mi proin sed libero enim. In pellentesque massa placerat duis ultricies lacus sed turpis. Integer vitae justo eget magna fermentum iaculis eu non diam. Eu consequat ac felis donec et odio pellentesque. Vivamus at augue eget arcu dictum varius duis at. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices dui sapien eget mi proin. Nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean sed adipiscing diam donec adipiscing tristique. Netus et malesuada fames ac turpis. Sit amet est placerat in egestas erat imperdiet.\n',
    openApps: true,
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
    clubName: 'Cornell Design & Tech Initiative',
    shortName: 'CornellDTI',
    logo: 'dtiteam_logo.png',
    coverPhoto: 'dtiteam_cover.jpg',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Id interdum velit laoreet id. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Lobortis feugiat vivamus at augue eget. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Et tortor consequat id porta nibh venenatis cras sed. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Neque laoreet suspendisse interdum consectetur. Lacinia at quis risus sed. Rhoncus dolor purus non enim. Diam phasellus vestibulum lorem sed risus. Mauris nunc congue nisi vitae suscipit tellus. Aenean sed adipiscing diam donec adipiscing tristique risus nec.\n',
    openApps: true,
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
    clubName: 'BigRed//Hacks',
    shortName: 'BRH',
    logo: 'logo.jpg',
    coverPhoto: 'cover.jpg',
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
    openApps: true,
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
