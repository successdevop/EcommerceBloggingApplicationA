import { nanoid } from "nanoid";
import { ABOUT, BLOG, CONTACT, HOME } from "../constants/routePaths";
import {
  authorA,
  authorB,
  authorC,
  authorD,
  authorE,
  authorF,
  authorG,
  authorH,
  userA,
  userB,
  userC,
  userD,
  userE,
} from "../../utility/images";

export const navLinks = [
  { id: nanoid(), text: "Home", href: HOME },
  { id: nanoid(), text: "Blog", href: BLOG },
  { id: nanoid(), text: "About Us", href: ABOUT },
  { id: nanoid(), text: "Contact Us", href: CONTACT },
];

export const authorsList1 = [
  {
    id: nanoid(),
    img: authorA,
    name: "Floyd Miles",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorB,
    name: "Dianne Russell",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorC,
    name: "Jenny Wilson",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorD,
    name: "Leslie Alexander",
    job: "Content Writer @Company",
  },
];

export const authorsList2 = [
  {
    id: nanoid(),
    img: authorA,
    name: "Floyd Miles",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorB,
    name: "Dianne Russell",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorC,
    name: "Jenny Wilson",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorD,
    name: "Leslie Alexander",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorE,
    name: "Guy Hawkins",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorF,
    name: "Eleanor Pena",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorG,
    name: "Robert Fox",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorH,
    name: "Jacob Jones",
    job: "Content Writer @Company",
  },
];

export const testimonialData = [
  {
    id: nanoid(),
    img: userA,
    name: "Angelina Gomez",
    title: "developer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: nanoid(),
    img: userB,
    name: "Mbappe Leo",
    title: "engineer",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: nanoid(),
    img: userC,
    name: "Clifford Bernard",
    title: "software tester",
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  },
  {
    id: nanoid(),
    img: userD,
    name: "Roberto Trump",
    title: "sales Analst",
    quote:
      "when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
  },
  {
    id: nanoid(),
    img: userE,
    name: "Freedom Desmond",
    title: "designer",
    quote:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  },
];
