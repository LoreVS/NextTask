'use client'
import { TypePost } from "@/types/post";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "antd";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const Cards =({ userId }: {
    userId: string
}) => {
    const [userPosts, setUserPosts] = useState([]);
    const [gridcols, setGridCols] = useState('grid-cols-4');

    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            setUserPosts(response.data.filter((post: TypePost) => {
                return post.userId === parseInt(userId);
            }));
        } catch (error) {
            console.error('Error getting data', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchData();

        const handleResize = () => {
            if (window.innerWidth < 600) {
                setGridCols('grid-cols-1');
            } else if (window.innerWidth < 900) {
                setGridCols('grid-cols-2');
            } else if (window.innerWidth < 1300) {
                setGridCols('grid-cols-3');
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className="bg-slate-400 flex min-h-screen flex-col items-center p-24">
            <div>Posts of user {userId}</div>
            <div className={`grid ${gridcols} justify-items-stretch gap-5`}>
                {userPosts.map(function(el:TypePost) {
                    return <Card key={el.id} title={el.title}>{el.body}</Card>;
                })}
            </div>
        </main>
    );
}
