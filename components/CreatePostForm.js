"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/services/post';
import { useSession } from 'next-auth/react';

const RegistrationForm = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const handleTitleChange = e => setTitle(e.target.value);
    const handleContentChange = e => setContent(e.target.value);
    const clearInputs = () => {
        setTitle("");
        setContent("");
        setError("");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        createPost(session?.user.accessToken, {
            title: title,
            content: content
        })
        .then(res => {
            if (res.status === 201) {
                clearInputs();
                router.push('/posts');
            }
            else {
                setError(res.message);
            }
        })
        .catch(e => {
            console.error(e);
        })
    }
    
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-12 w-full px-32"
        >
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter a Title"
                className="border-b border-b-gray-200 hover:border-b-gray-500"
            />
            <input
                type="text"
                value={content}
                onChange={handleContentChange}
                placeholder="Enter your password"
                className="border-b border-b-gray-200 hover:border-b-gray-500"
            />
            <button
                type="submit"
                className="border rounded-lg px-6 py-2 bg-gray-100 hover:bg-gray-200 duration-300 uppercase text-sm"
            >
                Create Post
            </button>
            {error &&
                <p className="text-red-500 font-bold text-center">
                    {error}
                </p>
            }
        </form>
    )
}

export default RegistrationForm;