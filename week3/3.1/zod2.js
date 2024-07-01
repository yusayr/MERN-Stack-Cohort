const zod = require("zod");

const validateInput = (obj) => {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(5)
    })

    const response = schema.safeParse(obj);
    console.log(response)
}

validateInput({
    email: "abcd@gmail.com",
    password: "12345"
})

