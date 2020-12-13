const jwt = require("../../node_modules/jsonwebtoken");

const auth = (req, res, next) => {
    try {
        const token = req.header("wdc-auth-token");
        if (!token) return res.status(401).json({ msg: "no authentication token found" });

        const verified = jwt.verify(token, "jwt_webdevsite");
        if (!verified) return res.status(401).json({ msg: "token verification failed" });

        req.user = verified.id;
        res.json(req.user);
    } catch (err) {
        res.status(500).json(err);
    }

};

module.exports = auth;