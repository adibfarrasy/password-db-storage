const express = require("express");

// Import controller
const controller = require("../controllers/storage_method1");

// Make a router
const router = express.Router();

router.post("/login", controller.loginMethod1);
router.post("/register", controller.registerMethod1);

// Export router instance
module.exports = router;
