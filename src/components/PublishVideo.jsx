import React, { useState } from 'react';

function PublishVideo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, description, thumbnail, video });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#200f0f] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6">Publish Video</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-white text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 border border-gray-200"
            placeholder="Enter video title"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-white text-lg mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 border border-gray-200"
            placeholder="Enter video description"
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="thumbnail" className="block text-white text-lg mb-2">
            Thumbnail
          </label>
          <input
            type="file"
            id="thumbnail"
            onChange={(e) => setThumbnail(e.target.files[0])}
            className="w-full text-black bg-[#200f0f] file:py-2 file:px-4 file:border"
            accept="image/*"
            required
          />
        </div>

        <div>
          <label htmlFor="video" className="block text-white text-lg mb-2">
            Video File
          </label>
          <input
            type="file"
            id="video"
            onChange={(e) => setVideo(e.target.files[0])}
            className="w-full text-black bg-[#200f0f] file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg "
            accept="video/*"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-[#d96f2e] text-white rounded-lg hover:bg-[#bf5c1d] transition duration-200"
          >
            Publish Video
          </button>
        </div>
      </form>
    </div>
  );
}

export default PublishVideo;
