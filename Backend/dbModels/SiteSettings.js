import mongoose from "mongoose";



const siteSettingsSchema = new mongoose.Schema(
  {
    /* ================= GENERAL ================= */
    siteName: { type: String, default: "" },
    tagline: { type: String, default: "" },
    logo: { type: String, default: "" },

    facebook: { type: String, default: "" },
    instagram: { type: String, default: "" },
    youtube: { type: String, default: "" },
    twitter: { type: String, default: "" },
    email: { type: String, default: "" },

    /* ================= SEO ================= */
    seoTitle: { type: String, default: "" },
    seoDescription: { type: String, default: "" },
    keywords: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    subDescription: { type: String, default: "" },

    /* ================= INTEGRATIONS ================= */
    maintenanceMode: { type: Boolean, default: false },
    googleAnalyticsCode: { type: String, default: "" },
    searchConsoleMeta: { type: String, default: "" },


    /* ================= HOMEPAGE HERO ================= */
    heroTitle1: { type: String, default: "" },
    heroTitle2: { type: String, default: "" },
    heroTitle3: { type: String, default: "" },
    heroDescription: { type: String, default: "" },
    categories: { type: String, default: "" },

    /* ================= MID BANNER ================= */
    midTitle: { type: String, default: "" },
    midSubtitle: { type: String, default: "" },

    point1Title: { type: String, default: "" },
    point1Sub: { type: String, default: "" },
    point2Title: { type: String, default: "" },
    point2Sub: { type: String, default: "" },
    point3Title: { type: String, default: "" },
    point3Sub: { type: String, default: "" },

    /* ================= CARD SECTION ================= */
    cardTitle: { type: String, default: "" },
    cardImage: { type: String, default: "" },
    cardDescription: { type: String, default: "" },

    /* ================= FOOTER ================= */
    footerCopyright: { type: String, default: "" },
  },
  { timestamps: true }
);

const SITESETTINGS = mongoose.model("SITESETTINGS", siteSettingsSchema);

export default SITESETTINGS;
