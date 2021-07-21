const express = require("express");

// Import controller
const controller = require("../controllers/storage_method2");

// Make a router
const router = express.Router();

router.post("/login", controller.loginMethod2);
router.post("/register", controller.registerMethod2);

// Export router instance
module.exports = router;
