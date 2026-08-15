import { useEffect, useState } from "react";
import { getUserCreatedGroups } from "../../api/group_api";
import { GroupCard } from "./groupcard";

export const CreatedGroups = ({ refresh }) => {
    const [groups, setGroups] = useState([])
    useEffect(() => {
        getUserCreatedGroups({ setGroups })
    }, [refresh])
    return <div className="h-full w-full px-3">
        <h2>Groups</h2>
        <section className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 transition-all">
            {groups.map((grp) => <GroupCard key={grp.id} groupname={grp.groupname} />)}
        </section>
    </div>

};