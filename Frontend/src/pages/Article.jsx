import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  MessageCircle,
  Share2,
  ThumbsUp,
  Send,
  User,
  User2,
} from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const { blogId } = useParams();

  const [comment, setComment] = useState("");
  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);
  const [nameUser, setNameUser] = useState();

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blog/blogbyid/${blogId}`);
      if (data.success) {
        setArticle(data.blog);
        console.log(data.blog);
        fetchComments();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/comment/onblog/${blogId}`);
      if (data.success) {
        setComments(data.comments);
        console.log(data.comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/comment/add`, {
        name: nameUser,
        blog: blogId,
        comment: comment,
      });
      if (data.success) {
        console.log(data);
      }
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [blogId]);

  const author = {
    name: "Alex Morgan",
    role: "Senior Tech Journalist",
    bio: "Alex covers the intersection of technology, work culture, and digital transformation. With over a decade of experience, he helps readers navigate the complexities of the modern workplace.",
    avatar:
      "https://public.youware.com/users-website-assets/prod/3c6a8bc8-7a6c-4931-b2f5-443a248c3c71/048affc1d18d4c03bd9392e2ef7f3423.jpg",
  };

  return (
    <div className="min-h-screen mt-35 py-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <article className="overflow-hidden">
              <img
                src={article.image || ""}
                alt="Article cover"
                className="w-full rounded-2xl h-64 sm:h-96 object-cover"
              />

              <div className="p-6 sm:p-10 space-y-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" /> {article.createAt}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />{" "}
                    {article.readTime || "200"}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  {article.title}
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  {
                    /*article.content.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))*/ article.description
                  }
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>Comment</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="flex w-full bg-white backdrop-blur-3xl border-gray-200 border-[1px] px-6 py-4 rounded-xl max-w-2xl md:flex-row items-start gap-3 justify-items-start text-gray-500 flex-col md:items-center">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <User2 size={25}/>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-800">
                  Sr. Software engineer
                </h3>
                <span>Google</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-[600px]">
              <div className="p-4 border-b border-gray-100 bg-gray-50 rounded-t-xl">
                <h3 className="font-bold text-gray-900 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comments ({comments.length})
                </h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                {comments.map((comment) => (
                          <div className="border border-violet-200 bg-blue-50/40 max-w-[95%] mx-auto rounded-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-violet-500 text-white flex items-center justify-center text-sm font-semibold">
            {comment.name.trim().slice(0,2).toUpperCase()}
          </div>
          <span className="text-sm font-medium text-violet-600">{comment.name}</span>
        </div>

        <span className="text-xs text-violet-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
      </div>

      <p className="mt-2 max-w-full break-words whitespace-pre-wrap text-sm text-gray-400">
        {comment.comment}
      </p>
    </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-100 bg-white rounded-b-xl">
                <div className="relative flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={nameUser}
                    onChange={(e) => setNameUser(e.target.value)}
                    className="w-full outline-none pl-3 pr-12 py-1 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm transition-all"
                  />
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full outline-none pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm transition-all"
                    rows={2}
                  />
                  <button
                    onClick={postComment}
                    className={`absolute right-2 bottom-2 p-2 rounded-full transition-colors ${
                      comment.trim()
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!comment.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
