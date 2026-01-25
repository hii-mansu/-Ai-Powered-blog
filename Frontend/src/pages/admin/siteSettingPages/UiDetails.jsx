import { useEffect, useState } from "react";
import { Image as ImageIcon, Save } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { siteinfoForAdmin } from "../../../tanstackQuery/siteInfoForAdmin.js";

export default function UiDetails() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["siteinfoForAdmin"],
    queryFn: siteinfoForAdmin,
  });

  if (error) return console.log(error);
  console.log(data);

  const [form, setForm] = useState({
    heroTitle1: "",
    heroTitle2: "",
    heroTitle3: "",
    heroDescription: "",
    categories: [],

    midTitle: "",
    midSubtitle: "",
    point1Title: "",
    point1Sub: "",
    point2Title: "",
    point2Sub: "",
    point3Title: "",
    point3Sub: "",

    cardTitle: "",
    cardImage: "",
    cardDescription: "",

    footerCopyright: "",
  });

  useEffect(() => {
    if (data?.SiAdminInfo) {
      setForm({
        heroTitle1: data.SiAdminInfo[0].heroTitle1 || "",
        heroTitle2: data.SiAdminInfo[0].heroTitle2 || "",
        heroTitle3: data.SiAdminInfo[0].heroTitle3 || "",
        heroDescription: data.SiAdminInfo[0].heroDescription || "",
        categories: data.SiAdminInfo[0].categories || "",
        midTitle: data.SiAdminInfo[0].midTitle || "",
        midSubtitle: data.SiAdminInfo[0].midSubtitle || "",
        point1Title: data.SiAdminInfo[0].point1Title || "",
        point1Sub: data.SiAdminInfo[0].point1Sub || "",
        point2Sub: data.SiAdminInfo[0].point2Sub || "",
        point2Title: data.SiAdminInfo[0].point2Title || "",
        point3Title: data.SiAdminInfo[0].point3Title || "",
        point3Sub: data.SiAdminInfo[0].point3Sub || "",
        cardTitle: data.SiAdminInfo[0].cardTitle || "",
        cardDescription: data.SiAdminInfo[0].cardDescription || "",
        cardImage: data.SiAdminInfo[0].cardImage || "",
        footerCopyright: data.SiAdminInfo[0].footerCopyright || "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Homepage Settings:", form);
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-violet-600">
        Homepage UI Settings
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* HERO SECTION */}
        <section className="bg-white p-6 rounded-2xl shadow border border-violet-300">
          <h2 className="text-xl font-semibold mb-6">Home Hero Section</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Hero Title / 1"
              name="heroTitle1"
              value={form.heroTitle1}
              onChange={handleChange}
            />
            <InputField
              label="Hero Title / 2"
              name="heroTitle2"
              value={form.heroTitle2}
              onChange={handleChange}
            />
            <InputField
              label="Hero Title / 3"
              name="heroTitle3"
              value={form.heroTitle3}
              onChange={handleChange}
            />
            <InputField
              label="Categories (comma separated)"
              name="categories"
              value={form.categories}
              onChange={handleChange}
            />
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium">Hero Paragraph</label>
            <textarea
              name="heroDescription"
              value={form.heroDescription}
              onChange={handleChange}
              rows={3}
              className="w-full border border-violet-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-violet-600 outline-none"
            />
          </div>
        </section>

        {/* MID BANNER */}
        <section className="bg-white p-6 rounded-2xl shadow border border-violet-300 space-y-6">
          <h2 className="text-xl font-semibold">Mid Banner Section</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Banner Title"
              name="midTitle"
              value={form.midTitle}
              onChange={handleChange}
            />
            <InputField
              label="Banner Subtitle"
              name="midSubtitle"
              value={form.midSubtitle}
              onChange={handleChange}
            />
          </div>

          {[1, 2, 3].map((i) => (
            <div key={i} className="grid md:grid-cols-2 gap-6">
              <InputField
                label={`Point ${i} Title`}
                name={`point${i}Title`}
                value={form[`point${i}Title`]}
                onChange={handleChange}
              />
              <InputField
                label={`Point ${i} Subtitle`}
                name={`point${i}Sub`}
                value={form[`point${i}Sub`]}
                onChange={handleChange}
              />
            </div>
          ))}
        </section>

        {/* CARD SECTION */}
        <section className="bg-white p-6 rounded-2xl shadow border border-violet-300 space-y-6">
          <h2 className="text-xl font-semibold">Card Section</h2>

          <InputField
            label="Card Title"
            name="cardTitle"
            value={form.cardTitle}
            onChange={handleChange}
          />

          <div>
            <label className="text-sm font-medium">Card Image Link</label>
            <div className="flex items-center gap-2 mt-2">
              <ImageIcon className="w-4 h-4 text-violet-600" />
              <input
                type="url"
                name="cardImage"
                value={form.cardImage}
                onChange={handleChange}
                placeholder="https://image-link.com"
                className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Card Description</label>
            <textarea
              name="cardDescription"
              value={form.cardDescription}
              onChange={handleChange}
              rows={3}
              className="w-full border border-violet-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-violet-600 outline-none"
            />
          </div>
        </section>

        {/* FOOTER */}
        <section className="bg-white p-6 rounded-2xl shadow border border-violet-300">
          <h2 className="text-xl font-semibold mb-4">Footer</h2>
          <InputField
            label="Footer Copyright Text"
            name="footerCopyright"
            value={form.footerCopyright}
            onChange={handleChange}
          />
        </section>

        <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-xl transition">
          <Save className="w-4 h-4" /> Save All Settings
        </button>
      </form>
    </div>
  );
}

function InputField({ label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
      />
    </div>
  );
}
