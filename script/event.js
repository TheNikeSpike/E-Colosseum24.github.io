const main = document.getElementsByClassName("main")[0];

function addCard(name, eligibility, description, banner, participants, url) {
  const query = `
<div class="p-4 md:w-1/3">
<div
  class="card h-full border-2 border-white border-opacity-60 rounded-lg overflow-hidden"
  onclick="window.open('${url}', '_blank')"
>
  <img
    class="lg:h-48 md:h-36 w-full object-cover object-center"
    src="${banner}"
    alt="banner"
  />
  <div class="p-6">
    <h2
      class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
    >
      GRADES: ${eligibility.join(" - ")}
    </h2>
    <h1 class="title-font text-lg font-medium text-gray-300 mb-3">
      ${name}
    </h1>
    <p class="leading-relaxed mb-3 text-gray-400">
      ${description}
    </p>
    <div class="flex items-center flex-wrap">
      <a
        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
        >Register Now
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <span
        class="text-gray-400 inline-flex items-right lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 "
      >
      <i class="px-2 fa-regular fa-user"></i>${participants}
      </span>
    </div>
  </div>
</div>
</div>
`;

  main.innerHTML += query;
}

const events = [
  {
    name: "Tech Attire",
    eligibility: [2, 3],
    description:
      " Participants craft costumes inspired by e-waste, merging creativity with tech, judged on innovation and thematic relevance to electronic waste.",
    banner:
      "https://img.freepik.com/premium-photo/people-cyber-reality_622301-1398.jpg",
    participants: 1,
    url: "https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUOTVYTFQ0NTlDQVQyOVVZMTdYV1UyUE1BUy4u",
  },
  {
    name: "DOCUDRAMA",
    eligibility: [4, 5],
    description:
      "Unleash your creativity! Join our film making competition and let your story shine",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI9obEIzcjU0nDbg-r28asdztvKV5w95dSg&usqp=CAU",
    participants: 2,
    url: "https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRURFpGWDZHUlNaWksxTTA1OE42SkVEQlVBNS4u",
  },
  {
    name: "CodeCraftGaming",
    eligibility: [6,8],
    description:
      "Competitors develop arcade games envisioning sustainable cities, blending creativity with future-forward environmental solutions.",
    banner:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frockymountevents.com%2Fwp-content%2Fuploads%2F2019%2F11%2FPerson-playing-an-arcade-game.jpg&f=1&nofb=1&ipt=8b1500372364ff77de787dc2b43555a66c9ead59c5ec12b13cb07cff4eb15330&ipo=images",
    participants: 2,
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUMUJENThBMjJJRUNDVDRSMTZSNTJRUDg5VS4u",
  },
  {
    name: "ANIMATION-X",
    eligibility: [8, 9],
    description:
      "Get ready to animate the future of climate action! Participants create thrilling videos on climate change, exploring causes, impacts, and revolutionary solutions.",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI9obEIzcjU0nDbg-r28asdztvKV5w95dSg&usqp=CAU",
    participants: 2,
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUMUJENThBMjJJRUNDVDRSMTZSNTJRUDg5VS4u",
  },
  {
    name: "BOT-BRAWL",
    eligibility: [6, 8],
    description:
      "Seize the reins in electrifying robot showdowns, strategizing through each round to dominate and secure a thrilling path to the high-stakes final battles.",
    banner:
      "https://t3.ftcdn.net/jpg/01/80/97/92/360_F_180979216_dsMX0jqo0MrflzwSs86rQuIrxVHbbPW5.jpg",
    participants: "3",
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUN1E4QlhFNTZUQ1k1T05TUVYzUTA0TlVOSy4u",
  },
  {
    name: "BLENDRUSH",
    eligibility: [9, 10],
    description:
      "Students embark on an exhilarating hunt across Google and YouTube for captivating video clips, showcasing creativity and storytelling prowess in a thrilling competition.",
    banner:
      "https://www.shutterstock.com/image-vector/sustainable-energy-word-cloud-260nw-53764555.jpg",
    participants: 1,
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUNjQxS1pZWVdXSzJTRDJYQlZEM1FGQzI3QS4u",
  },
  {
    name: "3DesignDynamic",
    eligibility: [9, 10],
    description:
      "Pioneering the future of space fashion, participants create cutting-edge wearables blending style and functionality for life among the stars!",
    banner:
      "https://cdn.dribbble.com/users/4823084/screenshots/18863071/media/78f0367c4d388ee5e37524cee27cf1ee.png?compress=1&resize=400x300",
    participants: 2,
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUN0xDNUpJRTExTUNTTUVQQzZOTVRZR1lMNC4u",
  },
  {
    name: "DigitalDreamscapes",
    eligibility: [9, 12],
    description:
      "Get creative and showcase your skills in our thrilling Photoshop competition",
    banner: "https://i.ytimg.com/vi/l7r4EdSGrbk/maxresdefault.jpg",
    participants: 2,
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUODNROUkxWEZPQ0dRVjdOMUtTWEFYREdOTS4u",
  },
  {
    name: "App-A-Thon",
    eligibility: [11, 12],
    description:
      "Students will build an app to make every citizen in India adopt an environment conscious lifestyle.",
    banner: "https://i.imgur.com/nuXeEj9.jpg",
    participants: 2,
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUNU1FTTlQTUNDMkRRVjgwM0tGRjQ1VVNQMS4u",
  },  
  {
    name: "Perspective",
    eligibility: [9, 12],
    description:
      "Innovating solutions for any community problem using microcontroller and AI tool",
    banner: "https://www.electronicaembajadores.com/datos/fotos/articulos/grandes/lc/lca1/lca1k81.jpg",
    participants: 2,
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUNU1FTTlQTUNDMkRRVjgwM0tGRjQ1VVNQMS4u",
  },
  {
    name: "ELEV8PITCH",
    eligibility: [9, 12],
    description:
      "Students ignite innovation with tech-driven business pitches aligned to Sustainable Development Goals (SDGs), shaping a sustainable future with global impact.",
    banner:
      "https://i0.wp.com/ohmybot.net/wp-content/uploads/2020/03/chatbot-banner.png?ssl=1",
    participants: 4,
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUMEYwRkNGQlZIS09RU0k4R0w0VlAxWkhDMS4u",
  },
  {
    name: "Decode to Learn: Virtual Escape Room Challenge",
    eligibility: [9, 12],
    description:
      " Students engage their intellect in virtual escape rooms, solving puzzles and unraveling mysteries to break free within a challenging and immersive environment.",
    banner:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd36tnp772eyphs.cloudfront.net%2Fblogs%2F1%2F2018%2F08%2FEscape-room.jpg&f=1&nofb=1&ipt=c7750d7e9aa0efa5aa1e358aa6d50dd57e402b1a0db1a6a07fc7477e91f0b6c1&ipo=images",
    participants: 4,
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUN0dRTVIySkY2MkRCRFFBWU5CMlc5MVk3Ry4u",
  },
  {
    name: "TECHTRIVIA",
    eligibility: [9, 12],
    description:
      "Students test their knowledge and problem-solving skills with a series of intense technology-related questions, aiming to prove their mastery in a competitive setting.",
    banner:
      "https://miro.medium.com/v2/resize:fit:3720/1*_PtTP7XVXZxPStTVMmvKRg.jpeg",
    participants: 1,
    url: "https://forms.gle/HUWwtThzGS5XoxhB6",
  },
   {
    name: "Playoffs",
    eligibility: [6, 12],
    description:
      "Show off your flow of ideas via your moves and let the world recognise your talent",
    banner:
      "https://i.ytimg.com/vi/Zfsg3oiPXGc/maxresdefault.jpg",
    participants: "8-10",
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUMUk3T0VVSTVMN05FWkJGVFowM0dJR01VSS4u",
  },
  {
    name: "ByteBeat",
    eligibility: [8, 12],
    description:
      "Show off your flow of ideas via your moves and let the world recognise your talent",
    banner:
      "https://www.noblemotiondance.com/wp-content/uploads/2022/01/NobleMotion-Dance-MAN-OVERBOARD-Photographer-Lynn-Lane-WEB-4-600x400.jpg",
    participants: "8-10",
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUOTI3RUowWVRGVk44TllZS1pVU0MwR1FFMi4u",
  }
];

events.forEach((event) => {
  addCard(
    event.name,
    event.eligibility,
    event.description,
    event.banner,
    event.participants,
    event.url
  );
});
