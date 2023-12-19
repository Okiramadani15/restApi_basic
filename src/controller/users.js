
// read - GET
const getAllUsers = (req, res ) => {
   const data = {
    id : "1",
    name: "okoy",
    email: "okoy@gmail.com",
    address: "tebing tinggi"
   }
   res.json({
    message: "berhasil",
    data: data
   })
}

// Create - POST
const createNewUsers = (req, res) => {
    console.log(req.body)
    res.json({
        message: "create new users succes",
        data: req.body
    })
}

// Update - PATCH
const updateUsers = (req, res) => {
    const {id} = req.params
    console.log("idUsers", id)
    res.json({
        message: "update user succes",
        data :req.body,
    })
}

//delete - DELETE
const deleteUsers = (req, res) => {
    const {id} = req.params
    res.json({
        message: "delete users succes",
        data : {
            id : id ,
            name: "om bambang",
            email : "Ombams@gmail.com",
            address: "tebing tinggi"

        }
    })
}




module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers, 
    deleteUsers
}
