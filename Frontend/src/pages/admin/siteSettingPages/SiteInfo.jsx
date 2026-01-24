import { useState } from "react";
import { Facebook, Instagram, Youtube, Twitter, Mail, Image as ImageIcon, Save } from "lucide-react";

export default function SiteInfo() {
  const [form, setForm] = useState({
    siteName: "",
    tagline: "",
    logo: null,
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) setForm({ ...form, logo: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Site Info:", form);
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-violet-300">
        <h2 className="text-2xl font-semibold text-violet-600 mb-6">Site Information</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Site Name</label>
              <input
                type="text"
                name="siteName"
                value={form.siteName}
                onChange={handleChange}
                className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tagline</label>
              <input
                type="text"
                name="tagline"
                value={form.tagline}
                onChange={handleChange}
                className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Site Logo</label>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2 px-4 py-2 border border-violet-300 rounded-xl cursor-pointer hover:bg-violet-50 text-sm">
                <ImageIcon className="w-4 h-4 text-violet-600" /> Upload Logo
                <input type="file" accept="image/*" hidden onChange={handleLogoChange} />
              </label>
              {form.logo && (
                <img src={form.logo} alt="Logo Preview" className="h-14 w-14 object-contain rounded-lg border border-violet-300 p-1" />
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "facebook", Icon: Facebook, placeholder: "Facebook URL" },
              { name: "instagram", Icon: Instagram, placeholder: "Instagram URL" },
              { name: "youtube", Icon: Youtube, placeholder: "YouTube Channel URL" },
              { name: "twitter", Icon: Twitter, placeholder: "Twitter URL" },
            ].map(({ name, Icon, placeholder }) => (
              <div key={name} className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Icon className="w-4 h-4 text-violet-600" /> {name}
                </label>
                <input
                  type="url"
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
                />
              </div>
            ))}

            <div className="space-y-2 md:col-span-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Mail className="w-4 h-4 text-violet-600" /> Contact Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-violet-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-600 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-xl transition"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
