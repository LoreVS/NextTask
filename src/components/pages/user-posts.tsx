"use client"
import { postsColumns } from "@/components/tables/posts-table/tableconfig";
import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { TypePost } from "@/types/post";
import Link from "next/link";


const apiUrl = "https://jsonplaceholder.typicode.com/posts"

export function UserPosts({ userId }: {
    userId: string
}) {
    const [userPosts, setUserPosts] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            setUserPosts(response.data.filter((post: TypePost) => {
                return post.userId === parseInt(userId)
            }))
            return
        } catch (error) {
            console.error('Error getting data', error);
            throw error;
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>Posts of user {userId}</div>
            <Link href={`/posts/${userId}/cards`}><button className="border border-zinc-800 p-2 rounded hover:bg-slate-500">Card Style</button></Link>
            <div>
                <Table dataSource={userPosts} columns={postsColumns} />
            </div>
        </main>
    );
}