import { HeroContent, HeroSlide } from "../types";

export const HERO_CONTENT: HeroContent = {
  title: "Turn Booth Visits into Real Sales",
  description:
    "Gopher is a trade fair application designed to help organizers run smoother physical events, enables exhibitors to sell more, and attendees discover products and exhibitors, book one-on-one meetings, chat live with exhibitors, and makes the purchase process before, during and after the fair easy.",
  ctaText: "Book a Demo",
  ctaLink: "/book-demo",
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "organizer-slide",
    image: "/organizer-slide.webp",
    alt: "Organizers Dashboard",
    title: "Organizers",
  },
  {
    id: "exhibitor-slide",
    image: "/exhibitor-slide.webp",
    alt: "Exhibitors Dashboard",
    title: "Exhibitors",
  },
  {
    id: "attendee-slide",
    image: "/attendee-slide.webp",
    alt: "Attendees Dashboard",
    title: "Attendees",
  },
];
