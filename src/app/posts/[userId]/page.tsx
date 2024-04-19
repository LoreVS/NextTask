import { UserPosts } from "@/components/pages/user-posts";


export default function Posts({ params }:
    {
        params: {
            userId: string
        }
    }) {
    return (
        <UserPosts userId={params.userId} />
    )

}