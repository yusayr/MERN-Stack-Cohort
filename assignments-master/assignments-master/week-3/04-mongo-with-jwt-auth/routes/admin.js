const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken");


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin Created Successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const userExists = await Admin.findOne({
        username,
        password
    })

    if (userExists) {
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            msg: token
        })
    }
    else {
        res.status(411).json({
            message: "Incorrect Email or password"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: "Course created successfully",courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    allCourses = await Course.find({

    })
    res.json({
        Course: allCourses
    })

});

module.exports = router;