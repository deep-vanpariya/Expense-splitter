import { Trash2 as D } from "lucide-react"
export const GroupCard = ({ groupname, groupId }) => {

    return <article key={groupId} className="flex justify-between bg-[#CFEBFF] px-5 py-2 rounded-3xl hover:scale-102" >
        <h3 className="font-bold capitalize">{groupname}</h3>
        <D className="hover:cursor-pointer"/>
    </article>
}