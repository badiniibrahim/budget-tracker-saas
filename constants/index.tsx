export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Dashboard",
  },
  {
    imgURL: "/icons/discover.svg",
    route: "/income",
    label: "New income",
  },
  {
    imgURL: "/icons/microphone.svg",
    route: "/redesign-room",
    label: "Redesign room",
  },
];

export const designType = [
  {
    imgURL: "/images/traditional.png",
    label: "Traditional",
  },
  {
    imgURL: "/images/rustic.png",
    label: "Rustic",
  },
  {
    imgURL: "/images/modern.png",
    label: "Modern",
  },
  {
    imgURL: "/images/minimalist.png",
    label: "Minimalist",
  },
  {
    imgURL: "/images/bohemian.png",
    label: "Bohemian",
  },
];

export const plans = [
  {
    _id: 1,
    name: "5 Credits",
    icon: "/icons/free-plan.svg",
    price: "$0,99",
    priceId: "price_1QFePLGB8tyiLObDikhka6TW",
  },
  {
    _id: 2,
    name: "10 Credits",
    icon: "/icons/free-plan.svg",
    price: "$1.99",
    priceId: "price_1QFeQCGB8tyiLObDX39gy3QD",
  },
  {
    _id: 3,
    name: "25 Credits",
    icon: "/icons/free-plan.svg",
    price: "$3.99",
    priceId: "price_1QFeQqGB8tyiLObDRaahBIWc",
  },

  {
    _id: 4,
    name: "50 Credits",
    icon: "/icons/free-plan.svg",
    price: "$6.99",
    priceId: "price_1QFeRRGB8tyiLObDogjCVrxP",
  },

  {
    _id: 5,
    name: "100 Credits",
    icon: "/icons/free-plan.svg",
    price: "$9.99",
    priceId: "price_1QFeRvGB8tyiLObDiXAM6WjZ",
  },
];

export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
];

export type Currency = (typeof Currencies)[0];
