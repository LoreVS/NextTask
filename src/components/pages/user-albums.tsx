"use client"

import { albumColumns } from "@/components/tables/album-table/tableconfig";
import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { TypeAlbum } from "@/types/album";

const apiUrl = "https://jsonplaceholder.typicode.com/albums"

export function UserAlbums({ userId }:{
    userId:string
}) {
    const [userAlbums, setUserAlbums] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            setUserAlbums(response.data.filter((album:TypeAlbum) => {
                return album.userId === parseInt(userId)
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
            <div>Albums of user {userId}</div>
            <div>
                <Table dataSource={userAlbums} columns={albumColumns} />
            </div>
        </main>
    );
}