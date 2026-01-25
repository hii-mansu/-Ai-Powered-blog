import { useState } from "react";
import { Save, Wrench, BarChart3, ShieldCheck, Power } from "lucide-react";

export default function IntegrationsAndTools() {
  const [form, setForm] = useState({
    maintenanceMode: false,
    googleAnalyticsCode: "",
    searchConsoleMeta: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Integration Settings:", form);
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-violet-300">
        <h2 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center gap-2">
          <Wrench className="w-5 h-5" /> Integrations & Tools
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* MAINTENANCE MODE */}
          <div className="flex items-center justify-between border border-violet-300 rounded-xl p-4">
            <div>
              <p className="font-medium flex items-center gap-2">
                <Power className="w-4 h-4 text-violet-600" /> Maintenance Mode
              </p>
              <p className="text-sm text-gray-500">
                Turn on to temporarily disable public access to the website.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={form.maintenanceMode}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-600 rounded-full peer peer-checked:bg-violet-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
            </label>
          </div>

          {/* GOOGLE ANALYTICS SCRIPT */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-violet-600" /> Google Analytics Code
            </label>
            <textarea
              name="googleAnalyticsCode"
              value={form.googleAnalyticsCode}
              onChange={handleChange}
              rows={4}
              placeholder="<script>...</script>"
              className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none font-mono text-sm"
            />
          </div>

          {/* SEARCH CONSOLE VERIFICATION */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-violet-600" /> Search Console Verification Text
            </label>
            <input
              type="text"
              name="searchConsoleMeta"
              value={form.searchConsoleMeta}
              onChange={handleChange}
              placeholder="google-site-verification=XXXX"
              className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-xl transition"
          >
            <Save className="w-4 h-4" /> Save Integration Settings
          </button>
        </form>
      </div>
    </div>
  );
}
