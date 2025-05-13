import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// category import
import cake from "../Assets/cake1.jpg";
import pastry from "../Assets/pastry.jpg";
import packaged from "../Assets/pakaged-caked.jpeg";
import bakesware from "../Assets/cookies.jpg";
import donuts from "../Assets/Donuts.jpeg";
import chocolates from "../Assets/chocolate.jpeg";
import saviours from "../Assets/savouires.jpg";

// cakes images
import cake1 from "../Assets/s1.jpg";
import cake2 from "../Assets/s3.jpg";
import cake3 from "../Assets/s4.jpg";
import cake4 from "../Assets/s5.jpg";
// valentine image

import v1 from "../Assets/v1.jpg";
import v2 from "../Assets/v2.jpg";
import v3 from "../Assets/v3.jpg";
import v4 from "../Assets/v4.jpg";

// Header Banners
import Banner1 from "../Assets/banner1.png";
import Banner2 from "../Assets/banner2.jpg";
import Banner3 from "../Assets/banner11.jpg";
import Banner5 from "../Assets/banner4.png";
import banner4 from "../Assets/valentines-day_mumbai_surat.jpeg";
import { ShoppingCart } from "@mui/icons-material";
export const headerBanner = [
  {
    id: 1,
    img: Banner1,
  },
  {
    id: 2,
    img: Banner2,
  },
  {
    id: 3,
    img: Banner3,
  },
  {
    id: 4,
    img: banner4,
  },
  {
    id: 5,
    img: Banner5,
  },
];

// navigation links

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  { name: "About", path: "/about" },
  { name: "Our Product", path: "/product" },
];

export const navRight = {
  management: [
    {
      id: 1,
      icon: CakeIcon,
      link: "/wedding",
    },
    {
      id: 2,
      icon: LocationOnIcon,
      link: "/location",
    },
    
  ],
};

// catagories data

export const categories = [
  { name: "Cakes", img: cake, size: "big" },
  { name: "Pastries", img: pastry, size: "small" },
  { name: "Packaged Cakes", img: packaged, size: "small" },
  { name: "Bakesware", img: bakesware, size: "small" },
  { name: "Chocolates", img: donuts, size: "small" },
  { name: "Donuts", img: chocolates, size: "small" },
  { name: "Savoiures", img: saviours, size: "small" },
];

// cakes data

export const cakes = {
  cakeimg: [
    {
      id: 1,
      img: cake1,
      name: "TALL AND FANCY",
    },
    {
      id: 2,
      img: cake2,
      name: "EXOTIC CAKES",
    },
    {
      id: 3,
      img: cake3,
      name: "PREMIUM CAKES",
    },
    {
      id: 4,
      img: cake4,
      name: "DESIGNER CAKES",
    },
  ],
};

export const valentine = {
  valentineimg: [
    {
      id: 1,
      img: v1,
      name: "Rose of Love",
    },
    { id: 2, img: v2, name: "Heart's desire Love" },
    { id: 3, img: v3, name: "Birds Love" },
    { id: 4, img: v4, name: "Sweet Love" },
  ],
};

// footer part
export const FootersLinksData = {
  Aboutus: [
    { linkname: "Vision", link: "*" },
    { linkname: "Articles", link: "*" } /* Add the rest here... */,
  ],
  Discover: [{ linkname: "Home", link: "/" } /* Add the rest here... */],
  Myaccount: [{ linkname: "Sign In", link: "/signin" } /* Add the rest here... */],
  Help: [{ linkname: "Help center", link: "*" } /* Add the rest here... */],
  socials: [
    { icon: InstagramIcon, link: "https://www.facebook.com" },
    { icon: FacebookIcon, link: "https://www.instagram.com" },
    // Add the rest here...
  ],
};