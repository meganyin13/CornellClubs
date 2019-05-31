const testData = [
  {
    clubName: '[club name]',
    shortName: 'shortname',
    logo: 'dtiteam_logo.png',
    coverPhoto: 'dtiteam_cover.jpg',
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
    clubName: 'Cornell Design & Tech Initiative',
    shortName: 'CornellDTI',
    logo: 'dtiteam_logo.png',
    coverPhoto: 'dtiteam_cover.jpg',
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
