"use client"

import { Table } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/albums"

export default function userPosts({ params }:
    {
        params: {
            userId: string
        }
    }) {
    const [userAlbums, setUserAlbums] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setUserAlbums(data)
            } catch (error) {
                console.error('Error getting data', error);
                throw error;
            }
        }
        fetchData()
    }, [])
    const filteredAlbums = userAlbums.filter((album) => {
        return album.userId === parseInt(params.userId)
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
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items   -center justify-between p-24">
        <div>Posts of user {params.userId}</div>
            <div>
                <Table dataSource={filteredAlbums} columns={columns} />;
            </div>
        </main>
    );
}