// import { useState } from "react";
// import { FiHeart, FiMessageCircle, FiUsers, FiThumbsUp } from "react-icons/fi";

// const HealthCommunity = () => {
//   const [posts, setPosts] = useState([
//     { id: 1, author: "Alice", content: "Started a 10k steps challenge today! 🏃‍♀️", likes: 12 },
//     { id: 2, author: "Bob", content: "Made a healthy smoothie with spinach and banana 🍌🥬", likes: 8 },
//     { id: 3, author: "Clara", content: "Meditation session in the morning keeps me energized 🌞🧘‍♀️", likes: 15 },
//   ]);

//   const [newPost, setNewPost] = useState("");

//   const addPost = () => {
//     if (newPost.trim() === "") return;
//     setPosts([{ id: Date.now(), author: "You", content: newPost, likes: 0 }, ...posts]);
//     setNewPost("");
//   };

//   const likePost = (id) => {
//     setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-50 via-green-100 to-green-200 flex flex-col items-center p-6">
//       {/* Header */}
//       <h1 className="text-4xl font-extrabold text-green-700 mb-6 drop-shadow-lg">
//         🌿 Health-Conscious Community
//       </h1>
//       <p className="text-center max-w-2xl text-gray-700 mb-8">
//         A health-conscious community is a group of individuals who prioritize physical, mental, and nutritional well-being.
//         Members engage in balanced diets, exercise, mindfulness, preventive healthcare, and share knowledge about healthy lifestyles.
//         Join, share, and get motivated to adopt sustainable healthy habits!
//       </p>

//       {/* New Post Section */}
//       <div className="w-full max-w-2xl mb-8">
//         <textarea
//           className="w-full p-4 rounded-2xl shadow-md border border-green-300 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
//           rows={3}
//           placeholder="Share your health tip or progress..."
//           value={newPost}
//           onChange={(e) => setNewPost(e.target.value)}
//         />
//         <button
//           onClick={addPost}
//           className="px-6 py-3 bg-green-600 text-white font-bold rounded-2xl shadow-md hover:bg-green-700 transition"
//         >
//           Post
//         </button>
//       </div>

//       {/* Posts Section */}
//       <div className="w-full max-w-2xl flex flex-col gap-6">
//         {posts.map((post) => (
//           <div key={post.id} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col gap-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <FiUsers className="text-green-500 text-2xl" />
//                 <span className="font-bold text-green-700">{post.author}</span>
//               </div>
//             </div>
//             <p className="text-gray-700">{post.content}</p>
//             <div className="flex items-center justify-between">
//               <button
//                 onClick={() => likePost(post.id)}
//                 className="flex items-center gap-1 text-green-600 font-bold hover:text-green-700 transition"
//               >
//                 <FiThumbsUp /> {post.likes}
//               </button>
//               <span className="text-gray-500 text-sm">💬 Comment feature coming soon</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Floating Motivational Badge */}
//       <div className="fixed bottom-8 right-8 w-28 h-16 bg-green-600/90 rounded-t-3xl rounded-bl-3xl rounded-br-xl shadow-2xl flex items-center justify-center text-white font-bold text-lg animate-bounce">
//         Stay Healthy!
//       </div>
//     </div>
//   );
// };

// export default HealthCommunity;

import { useState } from "react";
import { FiUsers, FiThumbsUp } from "react-icons/fi";

const HealthCommunity = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "Alice", content: "Started a 10k steps challenge today! 🏃‍♀️", likes: 12 },
    { id: 2, author: "Bob", content: "Made a healthy smoothie with spinach and banana 🍌🥬", likes: 8 },
    { id: 3, author: "Clara", content: "Meditation session in the morning keeps me energized 🌞🧘‍♀️", likes: 15 },
  ]);

  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (!newPost.trim()) return;
    setPosts([{ id: Date.now(), author: "You", content: newPost, likes: 0 }, ...posts]);
    setNewPost("");
  };

  const likePost = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-extrabold text-green-700">
            Health Community
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 text-lg">
            Connect with like-minded people, share healthy habits, inspire others,
            and grow together on your wellness journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Create Post */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Share an update
            </h2>
            <textarea
              rows={4}
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-green-400 resize-none"
              placeholder="What healthy habit are you working on?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <button
              onClick={addPost}
              className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Post to Community
            </button>
          </div>
        </div>

        {/* Feed */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <FiUsers className="text-green-600" />
                </div>
                <span className="font-semibold text-gray-800">
                  {post.author}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {post.content}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={() => likePost(post.id)}
                  className="flex items-center gap-1 text-green-600 font-medium hover:text-green-700"
                >
                  <FiThumbsUp /> {post.likes}
                </button>
                <span className="text-sm text-gray-400">
                  Comments coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Badge */}
      <div className="text-center py-6 text-gray-500 text-sm">
        🌱 Building healthy habits together — NutriAI Community
      </div>
    </div>
  );
};

export default HealthCommunity;
