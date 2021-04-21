// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";

import bcrypt from "bcryptjs";

import Shopping from "./models/User.js";
 
// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
 
// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use(Router);


app.post('/api/signup', (req, res) => {

	// var bcrypt = require('bcrypt');
	var salt = bcrypt.genSaltSync(10);

	// hash password dengan salt 
	var hashPass = bcrypt.hashSync(req.body.user.encrypted_password, salt);

	var data = {
		username: req.body.user.username ,
        password: hashPass,
        email: req.body.user.email ,
        phone: req.body.user.phone ,
        country: req.body.user.country ,
        city: req.body.user.city ,
        postcode: req.body.user.postcode ,
        name: req.body.user.name ,
        address: req.body.user.address
	}

	res.json({
            "data": data
     });


    // // Read username and password from request body
    // const { username, password } = req.body;

    // // Filter user from the users array by username and password
    // const user = users.find(u => { return u.username === username && u.password === password });

    // if (user) {
    //     // Generate an access token
    //     const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

    //     res.json({
    //         accessToken
    //     });
    // } else {
    //     res.send('Username or password incorrect');
    // }
});
 
// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));