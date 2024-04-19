import { Cards } from "@/components/pages/cards"
export default function Card({ params }:
    {
        params: {
            userId: string
        }
    }) {
    return(
    <Cards userId={params.userId}/>
    )
}