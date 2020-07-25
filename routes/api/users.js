const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/").get(usersController.findAll).post(usersController.create);

router
  .route("/:id")
  .get(usersController.findOne)
  .delete(usersController.delete)
  .put(usersController.update);



module.exports = router;
