const router = require("express").Router();
const eventsController = require("../../controllers/eventController");

router
  .route("/")
  .get(eventsController.findAll)
  .put(eventsController.update)
  .post(eventsController.create);




module.exports = router;
