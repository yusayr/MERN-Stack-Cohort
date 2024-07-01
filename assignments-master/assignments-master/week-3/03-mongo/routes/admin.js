const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = express.Router();

// Admin Routes //Actually admin/signup(Defined in main file)
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const success = await Admin.create({
        username: username,
        password: password
    })
    if (success) {
        res.json({
            message: "Admin Created Successfully"
        })
    }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;