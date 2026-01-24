import { useState } from "react";
import { Save, Search, BarChart3, ShieldCheck } from "lucide-react";

export default function SiteMeta() {
  const [form, setForm] = useState({
    seoTitle: "",
    seoDescription: "",
    keywords: "",
    subTitle: "",
    subDescription: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEO Settings:", form);
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-violet-300">
        <h2 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center gap-2">
          <Search className="w-5 h-5" /> Site Meta & SEO
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* SEO TITLE */}
          <div className="space-y-2">
            <label className="text-sm font-medium">SEO Title</label>
            <input
              type="text"
              name="seoTitle"
              value={form.seoTitle}
              onChange={handleChange}
              className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
            />
          </div>

          {/* SEO DESCRIPTION */}
          <div className="space-y-2">
            <label className="text-sm font-medium">SEO Description</label>
            <textarea
              name="seoDescription"
              value={form.seoDescription}
              onChange={handleChange}
              rows={3}
              className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
            />
          </div>

          {/* KEYWORDS */}
          <div className="space-y-2">
            <label className="text-sm font-medium">SEO Keywords (comma separated)</label>
            <input
              type="text"
              name="keywords"
              value={form.keywords}
              onChange={handleChange}
              className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
            />
          </div>

          {/* SUB TITLE */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Subtitle</label>
            <input
              type="text"
              name="subTitle"
              value={form.subTitle}
              onChange={handleChange}
              className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
            />
          </div>

          {/* SUB DESCRIPTION */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Sub Description</label>
            <textarea
              name="subDescription"
              value={form.subDescription}
              onChange={handleChange}
              rows={2}
              className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
            />
          </div>

          


          <button
            type="submit"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-xl transition"
          >
            <Save className="w-4 h-4" /> Save SEO Settings
          </button>
        </form>
      </div>
    </div>
  );
}
