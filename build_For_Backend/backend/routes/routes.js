function logger(postfix) {
    return function (req, res, next) {
        console.log(req.url + postfix);
        res.render("./index1", { Login_Person: req.url + postfix });
        next(); // pass control to the next handler
    };
}
exports.logger = logger;
