import { ArrowLeftIcon, Brain, File } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddBlog = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tags: "",
    seoTitle: "",
    seoDescription: "",
    category: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="m-7">
      <div className="w-full flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center">
        <div className="flex flex-row gap-2 items-center pl-4">
          <ArrowLeftIcon className="h-5 w-5 text-violet-600 hover:text-gray-700 cursor-pointer" />
          <span className="text-violet-600 text-xl font-semibold">New Post</span>
        </div>
        <button
          className="px-4 py-2 flex gap-2 items-center rounded bg-green-600 hover:bg-green-400 text-white"
        >
            <Brain className="h-6 w-6 text-white"/>
          Write Content By Ai
        </button>
      </div>
      <div className="mt-10">
        <div className="overflow-x-auto bg-white rounded-xl border border-violet-300">
          <div className="bg-violet-50 p-4">
            <h5 className="flex flex-row gap-2 items-center text-red-500">
                <Brain className="h-6 w-6 text-red-500"/>
              Use button "Write by Ai" to generate blog content bt Ai
            </h5>
          </div>

          <form className="p-4 md:p-8">



            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-7 mx-auto">
              <div>
                <label className="block text-sm text-violet-500 mb-1">
                  Title
                </label>
                <textarea
                  rows="2"
                  className="w-full resize-none border border-violet-200 rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-violet-500 mb-1">
                  SEO Title
                </label>
                <textarea
                  rows="2"
                  className="w-full resize-none border border-violet-200 rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-7 mx-auto">
              <div>
                <label className="block text-sm text-violet-500 mb-1">
                  Description
                </label>
                <textarea
                  rows="5"
                  className="w-full resize-none border border-violet-200 rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-violet-500 mb-1">
                  SEO Description
                </label>
                <textarea
                  rows="5"
                  className="w-full resize-none border border-violet-200 rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-7 mx-auto">
              <div>
                <label className="block text-sm text-violet-500 mb-1">
                  Tags/SEO tags
                </label>
                <textarea
                  rows="5"
                  className="w-full resize-none border border-violet-200 rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>
              <label
                htmlFor="fileInput"
                className="border mt-4 bg-white rounded-md text-sm border-violet-200 w-full p-4.5 flex flex-row justify-around items-center gap-4  cursor-pointer transition"
              >
                <File className="h-20 w-20 text-indigo-500" />
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p className="text-gray-500">Drag & drop your files here</p>
                  <p className="text-gray-400">
                    Or <span className="text-indigo-500 underline">click</span>{" "}
                    to upload
                  </p>
                  <input id="fileInput" type="file" className="hidden" />
                </div>
              </label>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-7 mx-auto">
              <div>
                <label
                  htmlFor=""
                  className="block text-sm text-violet-500 mb-1"
                >
                  Category
                </label>
                <select className="w-full border border-violet-200 h-12 rounded-lg px-3 py-2 text-sm outline-none">
                  <option
                    value=""
                    className="text-gray-500 text-sm bg-violet-500 rounded-lg"
                  >
                    None
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1 w-full items-center">
                <span className="text-sm self-start text-violet-500">Select visibility status</span>
                <div className="grid grid-cols-2 gap-8 space-x-2 w-full bg-white p-1.5 border border-gray-500/50 rounded-md text-sm">
                <div className="flex items-center w-full">
                  <input
                    type="radio"
                    name="options"
                    id="html"
                    className="hidden peer w-full"
                    checked
                  />
                  <label
                    htmlFor="html"
                    className="cursor-pointer w-full text-center rounded py-2 px-8 text-gray-500 transition-colors duration-200 peer-checked:bg-green-600 peer-checked:text-white"
                  >
                    Public
                  </label>
                </div>
                <div className="flex items-center w-full">
                  <input
                    type="radio"
                    name="options"
                    id="html"
                    className="hidden peer w-full"
                    checked={true}
                  />
                  <label
                    htmlFor="html"
                    className="cursor-pointer w-full text-center rounded py-2 px-8 text-gray-500 transition-colors duration-200 peer-checked:bg-yellow-600 peer-checked:text-white"
                  >
                    Private
                  </label>
                </div>
              </div>
              </div>
            </div>




            <div className="flex flex-col gap-4 mt-6">
                <span className="text-2xl text-violet-400">Blog Content Section.</span>
                <textarea
                  rows="10"
                  placeholder="Your blog content, use AI to generate contents."
                  className="w-full border border-violet-200 rounded-lg px-3 py-2 text-sm outline-none"
                />
            </div>




          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
