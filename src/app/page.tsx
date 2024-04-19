import { HomePage } from "@/components/pages/home-page"
import { Suspense } from "react"
import Loading from "./loading"

export default function Posts() {
    return (
        <Suspense fallback={<Loading/>}>
            <HomePage/>
        </Suspense>
        
    )

}