"use client"

import { Table } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/posts"

export default function userPosts({ params }:
    {
        params: {
            userId: string
        }
    }) {
    const [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setUserPosts(data)
            } catch (error) {
                console.error('Error getting data', error);
                throw error;
            }
        }
        fetchData()
    }, [])
    const filteredPosts = userPosts.filter((post) => {
        return post.userId === parseInt(params.userId)
    })
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'body',
            dataIndex: 'body',
            key: 'body'
        }
    ];
    return (
        <main className="flex min-h-screen flex-col items   -center justify-between p-24">
        <div>Posts of user {params.userId}</div>
            <div>
                <Table dataSource={filteredPosts} columns={columns} />;
            </div>
        </main>
    );
}