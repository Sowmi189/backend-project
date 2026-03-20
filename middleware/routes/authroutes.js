const express = require("express");
const router = express.Router();

// ✅ ADD THIS ROUTE
router.post("/profile", (req, res) => {
  console.log(req.body);
 res.json({
    message: "Profile received successfully",
    data: req.body
  });
});

module.exports = router;