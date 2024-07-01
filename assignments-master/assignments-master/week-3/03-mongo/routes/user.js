const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })

    res.json({
        msg: "User Created Successfully"
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    allCourses = await Course.find({});

    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({username: username},{
        $push: { 
            "purchasedCourses": courseId
        }
    })

    res.json({
        message: "Course purchased successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    
    console.log(user.purchasedCourses);

    const courses = await Course.findOne({ 
        //we find the courses which are present IN the user who is logged in above by searching inside the Course table
        _id: {
            "$in": user.purchasedCourses 
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router