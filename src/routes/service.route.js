const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware").verifyToken;
const { checkRole } = require("../middlewares/role.middleware");

const serviceController = require("../controllers/service.controller");

router.post(
  "/",
  auth,
  checkRole("system_admin", "sub_admin"),
  serviceController.createService
);

router.put(
  "/:id",
  auth,
  checkRole("system_admin", "sub_admin"),
  serviceController.updateService
);

router.get(
  "/",
  auth,
  checkRole("system_admin", "sub_admin", "volunteer"),
  serviceController.getServices
);

router.get(
  "/:id",
  auth,
  checkRole("system_admin", "sub_admin", "volunteer"),
  serviceController.getServiceById
);

module.exports = router;