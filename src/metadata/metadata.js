module.exports = {
  name: 'Thomas Stufano',
  title: 'Software Engineer',
  facts: {
    home: {
        icon: '<i class="fa fa-home fact-icon"></i>',
        name: 'Residence',
        value: '<a href="https://maps.app.goo.gl/qhev2K3mbxbPA5qx8">Mira, Venice, Italy</a>'
    },
    email: {
        icon: '<i class="fa fa-envelope fact-icon"></i>',
        name: 'Email',
        value: '<a href="mailto:thomas.stufano@gmail.com">thomas.stufano@gmail.com</a>'
    },
    github: {
        icon: '<i class="fa-brands fa-github fact-icon"></i>',
        name: 'GitHub',
        value: '<a href="https://github.com/Twenyone">Twenyone</a>'
    },
    linkedin: {
        icon: '<i class="fa-brands fa-linkedin fact-icon"></i>',
        name: 'Linkedin',
        value: '<a href="https://www.linkedin.com/in/thomas-stufano-499a68211/">Thomas Stufano</a>'
    },
  },
  positions: [
    {
      title: 'Software Developer',
      company: 'Bizeta Retail Solutions srl | a Custom company / Custom S.p.A',
      location: 'Mestre and Mira, Italy',
      mode: 'Hybrid',  // or 'Remote', 'Hybrid'
      period: 'since October 2020',
      skills: ['.NET Core', 'AzureSQL', 'SQLServer', 'MySQLite', 'Angular', 'AngularJS', 'ReactNative', 'Azure DevOps', 'CI/CD', 'Git'],
      contents: `
  My first experience in Bizeta was working for the GShop Suite making small integrations and by creating 
  an ETL connector (.NET Core) for GShop Suite and [IdStore](https://www.custom.biz/en_GB/product/software/id-store) 
  to replace older handhandled Windows CE devices with newer Android ones (Xamarin Android).
  Two years ago i was moved into the development team for [OneStore](https://www.custom.biz/en_GB/product/software/onestore), 
  which is part of the Software Business Unit of Custom S.p.a. OneStore is a point of sale solution for the retail fashion and luxury sector.
  The Backend is developed in its entirety with .NET and recently I started developing more and more on the frontend side in ReactNative and bundled with [Expo](https://expo.dev).
  
  Other technologies used: SQL Server, Azure SQL Server, MySQLite, Azure Dev
  For version control and branch workflow: Git with Azure DevOps, GitKraken (Git GUI), using release branch workflow with pull request policies`
  }
  ],
  educations: [
    {
      title: 'High School Diploma in IT',
      institution: 'ITIS C. Zuccante',
      location: 'Mestre (Venice), Italy',
      mode: 'In-person',  // or 'Remote', 'Hybrid'
      period: 'september 2014 - july 2020 · 5 years',
      skills: ['computer sciences', 'mathematics', 'electronics'],
      contents: `Specialized subjects studied: mathematics, computer science, statistics, electronics.`
    }
  ]
};