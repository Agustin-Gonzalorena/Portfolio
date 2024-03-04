import shortUrl from "../assets/imgs/cp-shorturl2.png";
import mario from "../assets/imgs/cp-mario2.png";
import shopmelon from "../assets/imgs/cp-shopmelon2.png";
import efemerides from "../assets/imgs/cp-efemerides.png";

export const myProjects = [
  {
    id: 1,
    title: "Url Shortener",
    description: "A url shortener made with Next.js, Tailwind CSS, and MySql.",
    img: shortUrl,
    githubUrl: "https://github.com/Agustin-Gonzalorena/shorturl",
    deployUrl: "https://www.shorturl.ar/",
  },
  {
    id: 2,
    title: "E-commerce Shop Melon",
    description:
      "A e-commerce made with React.js and using the Mercado Libre API.",
    img: shopmelon,
    githubUrl: "https://github.com/Agustin-Gonzalorena/shop_melon_react_js",
    deployUrl: "https://shop-melon-react-js.vercel.app/",
  },
  {
    id: 3,
    title: "Mario Racing Game ",
    description:
      "A Mario Kart game made with React.js and practice animations.",
    img: mario,
    githubUrl: "https://github.com/Agustin-Gonzalorena/MarioKart",
    deployUrl: "https://mario-kart-six.vercel.app/",
  },
  {
    id: 4,
    title: "Efermérides",
    description:
      "Historical data for today according to OpenAI. API deployed on local server.",
    img: efemerides,
    githubUrl: "https://github.com/Agustin-Gonzalorena/efemerides-front",
    deployUrl: "https://efemeridedehoy.vercel.app/",
  },
];
