import { Router } from "express"
import { createGroup, deleteSingleGroup, getUserCreatedGroupes } from "../database/user_groupsQuery.js";
import { checkToken } from "../middleware/tokenChecker.js";

const groupRouter = Router()
groupRouter.use(checkToken)
groupRouter.post('/create', async (req, res) => {
    const { username } = req._data;
    const { groupname } = req.body;

    if (!username || !groupname) return res.status(422).json({ msg: "Invalid body!!!!" });

    const result = await createGroup({ groupname, username });
    if (result.success == false) return res.status(500).json({ msg: "DB ERROR!!", error: result.error });

    return res.json({ msg: "group created", groupid: result.data.id })
})
groupRouter.get("/created", async (req, res) => {
    const { username } = req._data;
    if (!username) return res.status(422).json({ msg: "Invalid body!!!!" });


    const result = await getUserCreatedGroupes({ username });
    if (result.success == false) return res.status(500).json({ msg: "DB ERROR!!", error: result.error });

    return res.json({
        msg: "All groupes you have created.",
        groups: result.data
    })
})

groupRouter.delete("/", async (req, res) => {
    const { username } = req._data
    const { groupId } = req.body

    if (!groupId) return res.status(422).json({ msg: "Invalid body!!!!" });

    const result = await deleteSingleGroup({ username, groupId })
    if (result.success == false) return res.status(500).json({ msg: "DB ERROR!!", error: result.error });

    res.json({
        msg: "Group deleted"
    })
})
export {
    groupRouter
}