import { TypeUser } from "../../../types/user"
import { TableProps } from "antd/es/table";
import Link from "next/link";
export const columns: TableProps<TypeUser>['columns'] = [
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
        render: (record: TypeUser) => (
          <Link href={`/posts/${record.id}`}>See posts</Link>
        ),
      },
      {
        title: 'albums',
        key: 'address',
        render: (record: TypeUser) => (
          <Link href={`/albums/${record.id}`}>See albums</Link>
        ),
      }
  ];