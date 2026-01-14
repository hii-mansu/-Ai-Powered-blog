import React, { useState } from 'react'
import { Calendar, Clock, MessageCircle, Share2, ThumbsUp, Send, User } from 'lucide-react';

const Article = () => {


    const [comment, setComment] = useState('');

  const article = {
    title: "The Future of Remote Work: Balancing Productivity and Well-being",
    date: "Oct 24, 2025",
    readTime: "8 min read",
    image: "https://public.youware.com/users-website-assets/prod/3c6a8bc8-7a6c-4931-b2f5-443a248c3c71/701cbf57f84f40208c4875798cf78131.jpg",
    content: [
      "In the rapidly evolving landscape of modern business, remote work has transitioned from a temporary necessity to a permanent fixture. As organizations navigate this shift, the focus has moved beyond mere connectivity to sustainable productivity and employee well-being.",
      "The initial challenges of setting up home offices and mastering video conferencing tools have given way to more nuanced discussions about work-life boundaries, digital fatigue, and the preservation of company culture in a virtual environment.",
      "One of the most significant findings in recent studies is that flexibility remains the top priority for employees. However, this flexibility must be paired with clear expectations and robust support systems. Companies that thrive are those that trust their employees to manage their time while providing the necessary tools to succeed.",
      "Mental health has also taken center stage. The blurring of lines between professional and personal life can lead to burnout if not managed carefully. Forward-thinking organizations are implementing 'unplugged' hours, wellness stipends, and regular check-ins that go beyond project status updates.",
      "As we look to the future, the hybrid model seems to be the preferred approach. It offers the best of both worlds: the focused time of remote work and the collaborative energy of in-person meetings. The key lies in intentionality—knowing when to come together and when to work apart."
    ]
  };

  const author = {
    name: "Alex Morgan",
    role: "Senior Tech Journalist",
    bio: "Alex covers the intersection of technology, work culture, and digital transformation. With over a decade of experience, he helps readers navigate the complexities of the modern workplace.",
    avatar: "https://public.youware.com/users-website-assets/prod/3c6a8bc8-7a6c-4931-b2f5-443a248c3c71/048affc1d18d4c03bd9392e2ef7f3423.jpg"
  };

  const comments = [
    {
      id: 1,
      name: "Sarah Chen",
      time: "2 hours ago",
      text: "This really resonates with me. The hybrid model has been a game changer for our team's productivity.",
      avatar: "https://public.youware.com/users-website-assets/prod/3c6a8bc8-7a6c-4931-b2f5-443a248c3c71/31bb53541160406abb44134ba91d975e.jpg"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      time: "4 hours ago",
      text: "Great points about mental health. It's crucial that leaders model good behavior by disconnecting after hours.",
      avatar: "https://public.youware.com/users-website-assets/prod/3c6a8bc8-7a6c-4931-b2f5-443a248c3c71/16da6166d0a9412a8dccb99efe18d963.jpg"
    },
    {
      id: 3,
      name: "Emily Davis",
      time: "5 hours ago",
      text: "I'd love to see more data on how this impacts junior employees who rely on mentorship.",
      avatar: "https://public.youware.com/users-website-assets/prod/3c6a8bc8-7a6c-4931-b2f5-443a248c3c71/5aa8d2b1fc5e434b90c12df77538f56d.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      time: "1 day ago",
      text: "The technology aspect is solved, but the cultural aspect is still a work in progress for many companies.",
      avatar: "https://public.youware.com/users-website-assets/prod/3c6a8bc8-7a6c-4931-b2f5-443a248c3c71/c845288788cc486daa964fb17e0aa0f7.jpg"
    },
    {
      id: 5,
      name: "Jessica Taylor",
      time: "1 day ago",
      text: "Spot on! Flexibility is definitely the future of work.",
      avatar: "https://public.youware.com/users-website-assets/prod/3c6a8bc8-7a6c-4931-b2f5-443a248c3c71/4ae2c41d301f457099efe29b0fe8be38.jpg"
    }
  ];

  return (
    <div className="min-h-screen mt-35 py-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Article Content */}
          <div className="lg:col-span-8 space-y-8">
            <article className="overflow-hidden">
              <img 
                src={article.image} 
                alt="Article cover" 
                className="w-full rounded-2xl h-64 sm:h-96 object-cover"
              />
              
              <div className="p-6 sm:p-10 space-y-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {article.date}</span>
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {article.readTime}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  {article.title}
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  {article.content.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
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

          {/* Right Column - Author & Comments */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Author Card */}

                <div className="flex w-full bg-white backdrop-blur-3xl border-gray-200 border-[1px] px-6 py-4 rounded-xl max-w-2xl md:flex-row items-start gap-3 justify-items-start text-gray-500 flex-col md:items-center">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.222 12.632c0-1.016-.082-1.758-.26-2.527H12.358v4.586h6.81c-.137 1.14-.878 2.856-2.526 4.01l-.023.153 3.668 2.842.255.025c2.334-2.155 3.68-5.327 3.68-9.09" fill="#4285f4"/><path d="M12.36 24.714c3.336 0 6.137-1.098 8.183-2.993l-3.9-3.02c-1.043.727-2.444 1.235-4.284 1.235-3.267 0-6.04-2.156-7.03-5.135l-.144.012-3.815 2.952-.05.139c2.032 4.036 6.206 6.81 11.04 6.81" fill="#34a853"/><path d="M5.327 14.801a7.6 7.6 0 0 1-.412-2.444c0-.851.151-1.675.399-2.444l-.007-.164L1.444 6.75l-.126.06A12.4 12.4 0 0 0 0 12.357c0 1.991.48 3.872 1.318 5.547z" fill="#fbbc05"/><path d="M12.36 4.778c2.32 0 3.885 1.002 4.778 1.84l3.487-3.405C18.483 1.222 15.695 0 12.359 0 7.526 0 3.352 2.773 1.32 6.81l3.996 3.103c1.002-2.98 3.776-5.135 7.043-5.135" fill="#eb4335"/></svg>
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-gray-800">
                            Sr. Software engineer
                        </h3>
                        <span>Google</span>
                    </div>
                </div>

            {/* Comments Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-[600px]">
              <div className="p-4 border-b border-gray-100 bg-gray-50 rounded-t-xl">
                <h3 className="font-bold text-gray-900 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comments ({comments.length})
                </h3>
              </div>

              {/* Comments List - Scrollable */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <img 
                      src={comment.avatar} 
                      alt={comment.name} 
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 bg-gray-50 p-3 rounded-lg rounded-tl-none">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-900">{comment.name}</span>
                        <span className="text-xs text-gray-500">{comment.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Input - Fixed at bottom */}
              <div className="p-4 border-t border-gray-100 bg-white rounded-b-xl">
                <div className="relative">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm transition-all"
                    rows={2}
                  />
                  <button 
                    className={`absolute right-2 bottom-2 p-2 rounded-full transition-colors ${
                      comment.trim() 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
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
}

export default Article