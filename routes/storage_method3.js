const express = require("express");

// Import controller
const controller = require("../controllers/storage_method3");

// Make a router
const router = express.Router();

router.post("/login", controller.loginMethod3);
router.post("/register", controller.registerMethod3);

// Export router instance
module.exports = router;
