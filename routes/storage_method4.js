const express = require("express");

// Import controller
const controller = require("../controllers/storage_method4");

// Make a router
const router = express.Router();

router.post("/login", controller.loginMethod4);
router.post("/register", controller.registerMethod4);

// Export router instance
module.exports = router;
