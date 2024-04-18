"use client"
import { Input, Table } from "antd";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ColumnsType, TableProps } from "antd/es/table";

const apiUrl = "https://jsonplaceholder.typicode.com/users"
type TypeUser =   {
  id: number,
  name: string,
  username: string,
  email: string,
  
  address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
          lat: string,
          lng: string
      }
  },
  phone: string,
  website: string,
  company: {
      name: string,
      catchPhrase: string,
      bs: string
  }
}
export default function Home() {
  const [userData, setUserData] = useState<TypeUser[]>([]);
  const [nameFilter, setNameFilter] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setUserData(data)
      } catch (error) {
        console.error('Error getting data', error);
        throw error;
      }
    }
    fetchData()
  }, [])
  let filteredUsers = userData
  if (nameFilter !== '') {
    filteredUsers = userData.filter((user) => {
      return user.username.toLowerCase().startsWith(nameFilter.toLowerCase())
    })
  }
  console.log(userData)
  const columns: TableProps<TypeUser>['columns'] = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'posts',
      key: 'address',
      render: (record:TypeUser) => (
        <Link href={`/posts/${record.id}`}>See posts</Link>
      ),
    },
    {
      title: 'albums',
      key: 'address',
      render: (record:TypeUser) => (
        <Link href={`/albums/${record.id}`}>See albums</Link>
      ),
    }
  ];
  return (
    <main className=" bg-slate-400 flex min-h-screen flex-col items-center justify-between p-24">
      <Input maxLength={30} size="small" placeholder="Type username" className="max-w-96 mb-2" onChange={(el) => { setNameFilter(el.target.value);}}></Input>
      <div>{nameFilter}</div>
      <div>
        <Table dataSource={filteredUsers} columns={columns} />
      </div>
    </main>
  )
}
