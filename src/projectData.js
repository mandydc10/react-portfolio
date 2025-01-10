export const allProjects = [
    {
        id: 1,
        title: "Dad Joke Generator",
        description: "A site that will randomly generate dad jokes, so you can always have one in the back pocket!",
        href: "https://mandydc10.github.io/dad-joke-generator/",
        skills: ['html', 'css', 'javascript'],
        image: "/assets/images/projects/dad-joke-generator.png",
        image_alt: "visual of dad-joke-generator",
        date_created: "2023",
    },
    {
        id: 2,
        title: "Weather App",
        description: "A weather app displaying today's weather and a five day forecast for any location",
        href: "https://mandydc10.github.io/Weather-app/",
        skills: ['html', 'css', 'javascript'],
        image: "/assets/images/projects/weather-app.png",
        image_alt: "visual of weather app",
        date_created: "2022",
    },
    {
        id: 3,
        title: "Communitarian",
        description: "A mockup for a crowdfunding website using the concept of local communities raising support for community-based projects",
        href: "https://glittery-hamster-3a6d4f.netlify.app/",
        skills: ['html', 'css', 'react', 'django'],
        image: "/assets/images/projects/communitarian.png",
        image_alt: "visual of the Communitarian website logo",
        date_created: "2023",
    },
    {
        id: 4,
        title: "Glowmance",
        description: "A demo game made using Unity for the LevelHerUp Game Jam 2024",
        href: "https://mandydc10.itch.io/glowmance",
        skills: ['csharp', 'unity'],
        image: "/assets/images/projects/glowmance.png",
        image_alt: "visual of the Glowmance game",
        date_created: "2024",
    },
    // {
    //     id: 5,
    //     title: "Project Five",
    //     description: "The fifth project.",
    //     href: "",
    //     skills: ['html', 'css',],
    //     image: "/assets/images/projects/",
    //     image_alt: "visual of ",
    //     date_created: "",
    // },
    // {
    //     id: 6,
    //     title: "Project Six",
    //     description: "The sixth project.",
    //     href: "",
    //     skills: ['html', 'css',],
    //     image: "/assets/images/projects/",
    //     image_alt: "visual of ",
    //     date_created: "",
    // },
    // {
    //     id: 7,
    //     title: "Project Seven",
    //     description: "The seventh project.",
    //     href: "",
    //     skills: ['html', 'css',],
    //     image: "/assets/images/projects/",
    //     image_alt: "visual of ",
    //     date_created: "",
    // },
];

export const oneProject = {
    id: 1,
    title: "Project One",
    description: "The first project.",
    goal: 150,
    image: "https://via.placeholder.com/300.jpg",
    is_open: false,
    date_created: "2020-03-20T14:22:23.382748Z",
    owner: 1,
    pledges: [
        {
            id: 1,
            amount: 100,
            comment: "A comment for the pledge",
            anonymous: false,
            supporter: 3,
            project_id: 1,
        },
    ],
};

export const pagesText = {
    title: 'About Me',
    body: `Hi there! I’m Mandy, a passionate and driven developer with a unique journey into technology. My background in health sciences instilled in me a strong foundation in problem-solving, empathy, and collaboration, which I’ve carried with me as I transitioned into the world of coding and software development.

    In 2021, I began exploring programming as a creative outlet and a way to solve problems in innovative ways.Since then, I’ve made it my mission to build technical skills while contributing to impactful projects.My latest role was as a Specialist in Low Code Platforms at BHP, where I collaborated with global teams on enterprise- level projects.Whether it’s streamlining workflows with Power Platform automations, designing Power BI dashboards, or mapping technical processes for better clarity, I thrive in finding solutions that make a difference.

    Beyond my professional work, I’ve honed my coding skills through personal projects and educational programs.My foundations lie in HTML, CSS, Python, and JavaScript, but I love diving into new frameworks and technologies.Currently, I am focussing on building skills with Django and React and even more recently I have forayed into C# scripting for game development with Unity.I am also lucky enough to be able to contribute to the developer community by mentoring SheCodes participants both at the one - day workshops and for various modules in their six - month Plus program.

    What drives me most is the opportunity to solve meaningful challenges through technology while continuously learning and growing.I’m a strong believer in fostering collaboration and maintaining a respectful, inclusive environment, whether working in a team or engaging with users.

    When I’m not coding, you might find me mentoring others in the developer community, exploring creative hobbies, or brainstorming ways to make life easier through automation.My portfolio is a reflection of my journey so far and the skills I’m excited to keep building upon.

    Feel free to explore my projects, and don’t hesitate to reach out—I’d love to connect!`,
}
