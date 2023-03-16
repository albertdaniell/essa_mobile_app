import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { HOME_ROUTES } from "../routes/RouteLinks";

export const NAVLINKS = {
  top_left_links: [
    {
      name: "Home",
      link: `/${HOME_ROUTES.index}`,
    },

    {
      name: "FAQ",
      link: `/${HOME_ROUTES.faqs}`,
    },
  ],

  home_page_links: [
    {
      id:1,
      name: "Home",
      link: `${HOME_ROUTES.index}`,
    },
    {
      id:2,
      name: "Weather",
      link: `/${HOME_ROUTES.weather}`,
    },
    
  ],
  home_page_footer_links_left: [
    {
      id: 1,
      name: "Home",
      link: `/${HOME_ROUTES.home}`,
    },
  ],
  home_page_footer_links_right: [
    {
      id: uuidv4(),
      name: "About",
      link: `/${HOME_ROUTES.about}`,
    },
  ],
  rightLinks: [
    {
      id: uuidv4(),
      name: "About",
      link: `/${HOME_ROUTES.about}`,
    },

    {
      id: uuidv4(),
      name: "Feedback",
      link: `/${HOME_ROUTES.about}`,
    },
  ],
  social_media_links: [
    {
      id: uuidv4(),
      name: "Facebook",
      icon: <Facebook />,
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: <Twitter />,
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Instagram",
      icon: <Instagram />,
      link: "/",
    },
  ],
};
