function homePingController(req, res) {
    //Collect the request
    //send it to service layer
    //and then prepare and send the response
    console.log("aasa");
    return res.json({msg: 'Welcome home'})
}

module.exports = homePingController;