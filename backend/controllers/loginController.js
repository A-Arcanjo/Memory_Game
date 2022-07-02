import createError from "http-errors";
import Player from "../models/players.js";

export const loginPost = async (req, res, next) => {
    const {username, password} = req.body;

    // search for player username ans password
    let findPlayer;

    try {
        findPlayer = await Player.findOne({
            username: username,
            password: password
        }) 
    } catch {
        return next(createError(500, "Could not query database. Please try again"))
    }

    if(findPlayer) {
        res.json({id: findPlayer._id})
    } else {
        return next(createError(401, `Player could not be logged in. Please try again!`))
    }
}