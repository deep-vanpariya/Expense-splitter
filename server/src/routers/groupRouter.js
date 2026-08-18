import { Router } from "express"
import { createGroup, deleteSingleGroup, getAllGroupsUserIn, getUserCreatedGroupes } from "../database/user_groupsQuery.js";
import { checkToken } from "../middleware/tokenChecker.js";

const groupRouter = Router()
groupRouter.use(checkToken)
groupRouter.post('/create', async (req, res) => {
    const { userid } = req._data;
    const { groupname } = req.body;

    if (!userid || !groupname) return res.status(422).json({ msg: "Invalid body!!!!" });

    const result = await createGroup({ groupname, userid });
    if (result.success == false) return res.status(500).json({ msg: "DB ERROR!!", error: result.error });

    return res.json({ msg: "group created", groupid: result.data.id })
})
groupRouter.get("/created", async (req, res) => {
    const { userid } = req._data;
    if (!userid) return res.status(422).json({ msg: "Invalid body!!!!" });


    const result = await getUserCreatedGroupes({ userid });
    if (result.success == false) return res.status(500).json({ msg: "DB ERROR!!", error: result.error });

    return res.json({
        msg: "All groupes you have created.",
        groups: result.data
    })
})

groupRouter.get("/in", async (req, res) => {
    const { userid } = req._data;
    if (!userid) return res.status(422).json({ msg: "Invalid body!!!!" });

    const result = await getAllGroupsUserIn({ userid });
    if (result.success == false) return res.status(500).json({ msg: "DB ERROR!!", error: result.error });

    return res.json({
        msg: "All groupes you are in",
        groups: result.data
    })
})


groupRouter.delete("/", async (req, res) => {
    const { userid } = req._data
    const { groupid } = req.body

    if (!groupid) return res.status(422).json({ msg: "Invalid body!!!!" });

    const result = await deleteSingleGroup({ userid, groupid })
    if (result.success == false) return res.status(500).json({ msg: "DB ERROR!!", error: result.error });

    res.json({
        msg: "Group deleted"
    })
})
export {
    groupRouter
}