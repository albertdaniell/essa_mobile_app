import {
  Chat,
  CloudQueue,
  LibraryBooks,
  StorefrontOutlined,
  Water,
  Yard,
} from "@mui/icons-material";

export const GLOBAL_DATA = {
  landing_carousel: [
    {
      image:
        "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Weather",
      message: "Test",
      buttonLink: "weather",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      title: "Climate Smart Agropastoral Management Practices",
      message: "Test",
      buttonLink: "gaps",
    },

    {
      image:
        "https://images.unsplash.com/photo-1627060710997-18505c0c89b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      title: "NRM",
      message: "Test",
      buttonLink: "nrm",
    },

    {
      image:
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Market Information",
      message: "Test",
      buttonLink: "market",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614332625575-6bef549fcc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80",
      title: "Fact Sheets/ Manuals",
      message: "Test",
      buttonLink: "market",
    },
   
  ],

  themes: [
    {
      title: "Weather",
      desc: "",
      image: <CloudQueue fontSize="large" />,
      color: "secondary",
      link: "weather",
    },
    {
      title: "Climate Smart Agropastoral Management Practices",
      desc: "",
      image: <Yard fontSize="large" />,
      color: "primary",
      link: "gaps",
    },

    {
      title: "NRM",
      desc: "",
      image: <Water fontSize="large" />,
      color: "secondary",
      link: "nrm",
    },
    {
      title: "Market Information",
      image: <StorefrontOutlined fontSize="large" />,
      desc: "",

      color: "primary",
      link: "market",
    },

    {
      title: "Fact Sheets/ Manuals",
      image: <StorefrontOutlined fontSize="large" />,
      desc: "",

      color: "secondary",
      link: "fact_sheets",
    },
    {
      title: "Feedback",
      image: <Chat fontSize="large" />,
      desc: "",
      fontSize: "large",
      color: "primary",
      link: "feedback",
    },
  ],
};
