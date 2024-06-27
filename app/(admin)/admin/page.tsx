import dynamic from "next/dynamic"
import { redirect } from "next/navigation"
import { isAdmin } from "@/app/_libs/admin"

const App = dynamic(() => import("./app"), { ssr: false })

const AdminPage = async () => {

    if (!isAdmin) {
        redirect("/")
    }

    return (
        <App />
    )
}

export default AdminPage