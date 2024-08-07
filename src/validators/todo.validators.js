function createTodoValidator(req, res, next){
    if (!req.body.todoText) {
        return res.json({msg:'Invalid Request'})
    }
    // if u r sending everthing required
    next();
}

module.exports={
    createTodoValidator
}