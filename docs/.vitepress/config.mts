import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Angel Whipple",
  description: "SWE Portfolio",
  base: "/portfolio/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects" },
      { text: "Experience", link: "/experience" },
      { text: "About", link: "/about" },
    ],

    sidebar: [
      {
        text: "Projects",
        link: "/projects",
      },
      {
        text: "Experience",
        link: "/experience",
      },
      {
        text: "About Me",
        link: "/about",
      }
    ],

    socialLinks: [
        { icon: "github", link: "https://github.com/angelwhipple" },
        { icon: "linkedin", link: "https://www.linkedin.com/in/angelwhipple/" },
        { icon: "facebook", link: "https://www.facebook.com/whvpple" },
    ],
  },
});
