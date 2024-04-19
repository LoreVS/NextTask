"use client"
import { Input, Table } from "antd";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { columns } from "../tables/user-table/tableconfig";
import axios from "axios";
import { TypeUser } from "@/types/user";



const apiUrl = "https://jsonplaceholder.typicode.com/users"
export function HomePage() {
  const [userData, setUserData] = useState<TypeUser[]>([]);
  const [foundUsers, setFoundUsers] = useState<TypeUser[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl)
      setUserData(response.data)
      setFoundUsers(response.data)
      return
    } catch (error) {
      console.log("fetch error", error)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])
  const handleFinder = (event: BaseSyntheticEvent) => {
    const value = event.target.value
    if (value !== '') {
      setFoundUsers(userData.filter((user) => {
        return user.username.toLowerCase().startsWith(value.toLowerCase())
      }))
    } else {
      setFoundUsers(userData)
    }
  }

  return (
    <main className=" bg-slate-400 flex min-h-screen flex-col items-center p-24">
      <Input maxLength={30} size="small" placeholder="Type username" className="max-w-96 mb-2" onChange={handleFinder} />
      <div>
        <Table dataSource={foundUsers} columns={columns} />
      </div>
    </main >
  )
}
