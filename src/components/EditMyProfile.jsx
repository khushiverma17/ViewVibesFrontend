import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditMyProfile() {
  // Hardcoded initial values
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [coverImage, setCoverImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const navigate = useNavigate()


  const userData = JSON.parse(sessionStorage.getItem("userData"))

  const [user, setUser] = useState()

  useEffect(() => {
    if (!userData) {
      console.log("User data is not there");
      navigate("/")
    }
    else {
      const currentUser = userData.data.user
      setUser(currentUser)
      console.log(currentUser);

      setAvatar(currentUser.avatar)
      setCoverImage(currentUser.coverImage)
      setFullName(currentUser.fullName)
      setEmail(currentUser.email)
    }
  }, [])

  const handleUpdateFullNameEmail = () => {
    try {
      console.log("fullname: ", fullName, "email", email);


      const config = {
        headers: {
          Authorisation: `Bearer ${userData.data.accessToken}`
        }
      }

      const details = {
        fullName: fullName,
        email: email
      }

      axios.patch(
        "http://localhost:8000/api/v1/users/update-account",
        details,
        config

      )
      console.log("Your fullname and email has been updated");

    } catch (error) {
      console.log("Error in updating fullname and email: ", error);

    }
  }

  const handleUpdateCoverImage = () => {
    // Handle the update for coverImage
    console.log('Updating cover image:', coverImage);

    const formData = new FormData()
    formData.append("coverImage", coverImage)

    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`,
        "Content-Type": "multipart/form-data"
      }
    }


    axios.patch(
      "http://localhost:8000/api/v1/users/update-coverimage",
      formData,
      config
    ).then((response) => {
      setCoverImage(response.data.data.coverImage)
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  };

  const handleUpdateAvatar = () => {
    // Handle the update for avatar
    console.log('Updating avatar:', avatar);

    const formData = new FormData()

    formData.append("avatar", avatar)

    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`,
        "Content-Type": "multipart/form-data"
      }
    }

    axios.patch(
      "http://localhost:8000/api/v1/users/update-avatar",
      formData,
      config
    ).then((response) => {
      setAvatar(response.data.data.avatar)
      console.log(response);
    }).catch((error) => {
      console.log(error);

    })

  };

  const handleUpdatePassword = () => {
    // Handle the update for password
    console.log('Updating password:', { oldPassword, newPassword });

    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      }
    }

    const details ={
      oldPassword:oldPassword,
      newPassword:newPassword
    }

    axios.patch(
      "http://localhost:8000/api/v1/users/change-password",
      
      details,
      config
    ).then((response) => {
      setOldPassword("")
      setNewPassword("")
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#200f0f] rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit My Profile</h2>

      <div className="mb-6">
        <label className="block text-white mb-2">Full Name</label>
        <div className="flex items-center">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Email</label>
        <div className="flex items-center">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

      </div>
      <Button
        onClick={handleUpdateFullNameEmail}
        className="px-4 py-2 text-white rounded-lg mt-4"
      >
        Update Fullname and Email
      </Button>

      <div className="mb-6">
        <label className="block text-white mb-2">Cover Image</label>
        <div className="flex items-center">
          <img src={coverImage} alt="Cover" className="w-20 h-16 object-cover rounded-md mr-4 text-white" />
          <input
            type="file"
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
            onChange={(e) => setCoverImage(e.target.files[0])}
          />
          <Button
            onClick={handleUpdateCoverImage}
            className="ml-4 px-4 py-2 text-white rounded-lg"
          >
            Update
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Avatar</label>
        <div className="flex items-center">
          <img src={avatar} alt="Avatar" className="w-20 h-20 object-cover rounded-full mr-4 text-white" />
          <input
            type="file"
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
          <Button
            onClick={handleUpdateAvatar}
            className="ml-4 px-4 py-2 text-white rounded-lg"
          >
            Update
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Old Password</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
          placeholder="Enter old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">New Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          onClick={handleUpdatePassword}
          className="px-4 py-2 text-white rounded-lg"
        >
          Update Password
        </Button>
      </div>
    </div>
  );
}

export default EditMyProfile;
