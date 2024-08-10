import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function CreatePlaylist() {
    const [playlistName, setPlaylistName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Playlist Name:', playlistName);
        console.log('Description:', description);
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <div className={`mx-auto w-full max-w-lg bg-[#200f0f] rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-white">
                    Create Playlist
                </h2>
                <form>
                    <div className="space-y-5 text-white">
                        <Input
                            // onChange={changeHandler}
                            name="playlistName"
                            label="Playlist Name"
                            placeholder="Enter playlist name"
                            type="text"
                        />
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-white mb-2"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                                name="description"
                                value={description}
                                placeholder="Enter playlist description"
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <Button
                            type="submit"
                        // onClick={loginHandler}
                        >Create Playlist</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePlaylist;
