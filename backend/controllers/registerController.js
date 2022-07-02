import createError from "http-errors";
import Player from "../models/players.js";

export const registerPost = async (req, res, next) => {
  const {
    username,
    password,
    firstName,
    lastName,
    emailAddress,
    profileImage,
  } = req.body;

  //* check if the username has been taken
  let findUsername;

  try {
    findUsername = await Player.findOne({
      username: username,
    });
  } catch {
    return next(createError(500, "Coul not query database.Please try again!"));
  }

  //* if the user exists create an error message
  if (findUsername) {
    return next(
      createError(
        409,
        `:( Player ${username} already exists. Please choose a different one!`
      )
    );
  }

  //* check if the email address has been taken
  let findEmail;

  try {
    findEmail = await Player.findOne({
      emailAddress: emailAddress,
    });
  } catch {
    return next(createError(500, "Coul not query database.Please try again!"));
  }

  //* if the email exists create an error message
  if (findEmail) {
    return next(
      createError(
        409,
        `:( The ${emailAddress} Email Address already exists. Please choose a different one!`
      )
    );
  }

  //* create a new Player
  const newPlayer = new Player({
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    profileImage: profileImage,
    score: 0, 
    comments: []
  });

  try {
      await newPlayer.save()
  } catch {
      return next(createError(500, `${username} could not be created. Please try again!`))
  }

  res.status(201).json({id: newPlayer._id})
};
