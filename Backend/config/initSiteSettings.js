import SiteSettings from "../dbModels/SiteSettings.js";


const initSiteSettings = async () => {
  try {
    const exists = await SiteSettings.findOne();

    if (exists) {
      console.log("✅ Site settings already initialized");
      return;
    }

    await SiteSettings.create({
      siteName: "My Blog",
      tagline: "Sharing knowledge with the world",
      logo: "",

      facebook: "",
      instagram: "",
      youtube: "",
      twitter: "",
      email: "admin@example.com",

      seoTitle: "My Blog - Home",
      seoDescription: "Welcome to my blog website.",
      keywords: "blog, articles, tech",

      maintenanceMode: false,
      googleAnalyticsCode: "",
      searchConsoleMeta: "",

      heroTitle1: "Welcome to",
      heroTitle2: "My Awesome",
      heroTitle3: "Blog",
      heroDescription: "We publish high quality content regularly.",
      categories: "Tech, Coding, AI",

      footerCopyright: "© 2026 My Blog. All rights reserved.",
    });

    console.log("🚀 Default Site Settings Created");
  } catch (error) {
    console.error("❌ Site settings init error:", error);
  }
};

export default initSiteSettings;
