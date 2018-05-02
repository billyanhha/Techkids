const authorize = (req , res , next) => {            //chua log in thi ko doc lm gi cak cak
    if( !req.session || !req.session.userInfo){
        res.status(401).send("Unauthorzied");
    } else next();


}


module.exports = {authorize}