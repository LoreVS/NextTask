import { UserAlbums } from "@/components/pages/user-albums"


export default function Albums({ params }:
    {
        params: {
            userId: string
        }
    }) {
    return (
        <UserAlbums userId={params.userId} />
    )
}