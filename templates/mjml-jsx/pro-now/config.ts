// default config with sane defaults
// this config could be expanded further with general values
// you can also extend it for each folder / file with specific values

import en_US from "./_i18n/en_US.json";
import it_IT from "./_i18n/it_IT.json";
export default {
  backgroundColor: "#ffffff",
  color: "#000000",
  text: {
    fontSize: "16px",
    fontWeight: "400",
    padding: "0",
  },
  section: {
    padding: "0",
  },
  wrapper: {
    padding: "0",
  },
  divider: {
    padding: "10px 20px",
    borderWidth: "2px",
  },
  brandLink: "{{brand_link}}",
  brandImage: "",
  contact: {
    btn: {
      text: "Contact Us",
      href: "{{contact_us_link}}",
    },
  },
  stage: {
    background: "rgb(242, 239, 239)",
    btn: {
      background: "rgb(225, 0, 15)",
      color: "#ffffff",
    },
  },
  headings: {
    h1: {
      size: "40px",
    },
    h2: {
      size: "32px",
    },
    h3: {
      size: "24px",
    },
  },
  i18n: true,
  locales: {
    en_US,
    it_IT,
  },
};
