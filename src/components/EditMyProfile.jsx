import React, { useEffect, useState } from 'react';

function EditMyProfile() {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const navigate = useNavigate()
  useEffect(() => {
    if (!userData) {
      console.log("User data is not there")
      navigate("/")
    }
  }, [userData, navigate])

  const [avatar, setAvatar] = useState('current-avatar-url'); // Replace with actual avatar URL
  const [coverImage, setCoverImage] = useState('current-cover-image-url'); // Replace with actual cover image URL
  const [fullName, setFullName] = useState('John Doe'); // Replace with actual full name
  const [email, setEmail] = useState('johndoe@example.com'); // Replace with actual email
  const username = 'currentUsername'; // Assume this is passed from props or fetched from API

  const handleAvatarChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const handleCoverImageChange = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit My Profile</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 relative">
          <img src={coverImage} alt="Cover" className="w-full h-40 object-cover rounded" />
          <label className="absolute top-2 right-2 bg-white text-gray-700 px-4 py-1 rounded cursor-pointer shadow-md">
            Edit Cover Image
            <input type="file" onChange={handleCoverImageChange} className="hidden" />
          </label>
        </div>

        <div className="mb-6 relative">
          <div className="flex items-center">
            <img src={avatar} alt="Avatar" className="w-20 h-20 rounded-full" />
            <label className="ml-4 bg-white text-gray-700 px-4 py-1 rounded cursor-pointer shadow-md">
              Edit Avatar
              <input type="file" onChange={handleAvatarChange} className="hidden" />
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            disabled
            className="mt-2 p-2 border border-gray-300 rounded w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

        <button type="submit" className="bg-[#d96f2e] text-white p-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditMyProfile;
