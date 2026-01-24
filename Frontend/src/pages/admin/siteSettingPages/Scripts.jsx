import { useState } from "react";
import { Save, Code2, Trash2, Plus } from "lucide-react";

export default function CustomScriptsSettings() {
  const [headerScript, setHeaderScript] = useState("");
  const [footerScript, setFooterScript] = useState("");

  const [scripts, setScripts] = useState({
    header: [],
    footer: [],
  });

  const addScript = (type) => {
    if (type === "header" && headerScript.trim()) {
      setScripts({ ...scripts, header: [...scripts.header, headerScript] });
      setHeaderScript("");
    }
    if (type === "footer" && footerScript.trim()) {
      setScripts({ ...scripts, footer: [...scripts.footer, footerScript] });
      setFooterScript("");
    }
  };

  const removeScript = (type, index) => {
    const updated = scripts[type].filter((_, i) => i !== index);
    setScripts({ ...scripts, [type]: updated });
  };

  const allScripts = [
    ...scripts.header.map((s) => ({ type: "Header", code: s })),
    ...scripts.footer.map((s) => ({ type: "Footer", code: s })),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Scripts:", scripts);
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-violet-300">
        <h2 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center gap-2">
          <Code2 className="w-5 h-5" /> Custom Header & Footer Scripts
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* HEADER */}
          <section className="space-y-4">
            <h3 className="font-semibold">Header Script</h3>
            <textarea
              value={headerScript}
              onChange={(e) => setHeaderScript(e.target.value)}
              rows={4}
              className="w-full border border-violet-300 rounded-xl px-4 py-2 font-mono text-sm"
            />
            <button
              type="button"
              onClick={() => addScript("header")}
              className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-xl"
            >
              <Plus className="w-4 h-4" /> Add Header Script
            </button>
          </section>

          {/* FOOTER */}
          <section className="space-y-4">
            <h3 className="font-semibold">Footer Script</h3>
            <textarea
              value={footerScript}
              onChange={(e) => setFooterScript(e.target.value)}
              rows={4}
              className="w-full border border-violet-300 rounded-xl px-4 py-2 font-mono text-sm"
            />
            <button
              type="button"
              onClick={() => addScript("footer")}
              className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-xl"
            >
              <Plus className="w-4 h-4" /> Add Footer Script
            </button>
          </section>

          {/* ALL SCRIPTS LIST */}
          <section className="space-y-4 border-t border-violet-300 pt-6">
            <h3 className="font-semibold text-lg">Added Scripts</h3>

            {allScripts.length === 0 ? (
              <p className="text-gray-500 text-sm">No scripts added</p>
            ) : (
              allScripts.map((item, i) => (
                <div
                  key={i}
                  className="border border-violet-300 rounded-xl p-3 flex justify-between gap-4"
                >
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-violet-600 mb-1">
                      {item.type} Script
                    </p>
                    <pre className="text-xs whitespace-pre-wrap">{item.code}</pre>
                  </div>
                  <Trash2
                    onClick={() =>
                      removeScript(
                        item.type === "Header" ? "header" : "footer",
                        item.type === "Header"
                          ? scripts.header.indexOf(item.code)
                          : scripts.footer.indexOf(item.code)
                      )
                    }
                    className="w-4 h-4 text-red-500 cursor-pointer"
                  />
                </div>
              ))
            )}
          </section>

          <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-xl">
            <Save className="w-4 h-4" /> Save Scripts
          </button>
        </form>
      </div>
    </div>
  );
}
