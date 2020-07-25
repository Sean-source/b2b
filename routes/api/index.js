const router = require("express").Router();

const usersRoute = require("./users");

router.use("/events", eventsRoute);
router.use("/users", usersRoute);

