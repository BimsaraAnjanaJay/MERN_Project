const { userModel } = require('../models/userModel')

const adminAuthentication = (req, res, next) => {
    req.userModel.userRole != "admin"
        .then(res.status(401).json({ err: "Access Denied" }))
    next()
}
 
const studentAuthentication = (req, res, next) => {
    req.userModel.userRole != "student"
        .then(res.status(401).json({ err: "Access Denied" }))
    next()
}

const lecturerAuthentication = (req, res, next) => {
    req.userModel.userRole != "lecturer"
        .then(res.status(401).json({ err: "Access Denied" }))
    next()
}

module.exports = { adminAuthentication, studentAuthentication, lecturerAuthentication };

// const jwt = require('jsonwebtoken')
// const asyncHandler = require('express-async-handler')
// const User = require('../models/userModel')

// const protect = asyncHandler(async (req, res, next) => {
//   let token

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(' ')[1]

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET)

//       // Get user from the token
//       req.user = await User.findById(decoded.id).select('-password')

//       next()
//     } catch (error) {
//       console.log(error)
//       res.status(401)
//       throw new Error('Not authorized')
//     }
//   }

//   if (!token) {
//     res.status(401)
//     throw new Error('Not authorized, no token')
//   }
// })

// module.exports = { protect }




// ///////////////////////////////////////////////////////////////////////

// // Creating middleware for role-based authorization involves verifying the JWT token in the user's request and checking if the user role matches the required role(s) for accessing a specific route. You can create different middlewares for different roles (admin, teacher, and student) or a single middleware that accepts an array of roles.

// // Additionally, to create controllers that use sessions, you would use the express-session middleware to manage session data.
// // Step 1: Setting up Middleware for Role-based Authorization

// // You'll first need to create middleware to check the user's role from the JWT token:

// //////////////////////////

// const jwt = require('jsonwebtoken');

// const authorizeRoles = (roles) => {
//   return (req, res, next) => {
//     const token = req.header('x-auth-token');
//     if (!token) {
//       return res.status(401).json({ error: 'Access denied. No token provided.' });
//     }
    
//     try {
//       const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
//       if (!roles.includes(decoded.userInfo.userRole)) {
//         return res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
//       }
//       req.user = decoded.userInfo;  // storing user info in request object for further use
//       next();
//     } catch (ex) {
//       res.status(400).json({ error: 'Invalid token.' });
//     }
//   };
// };

// module.exports = { authorizeRoles };

// ///////////////////////////

// // Step 2: Setting up Controllers Using Sessions

// // Firstly, install the express-session package:

// ////////////////////////////////////////

// // npm install express-session

// //////////////////////////////////

// const session = require('express-session');

// app.use(session({
//   secret: 'your_secret_key',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));

// //////////////////////////////////

// // Create controllers that use sessions to manage user data:

// /////////////////////////////////

// const setSessionData = (req, res) => {
//   req.session.user = req.user;
//   res.send('Session data set');
// };

// const getSessionData = (req, res) => {
//   if (!req.session.user) {
//     return res.status(401).send('Unauthorized');
//   }

//   res.send(req.session.user);
// };

// module.exports = { setSessionData, getSessionData };

// //////////////////////////////////////

// const express = require('express');
// const { setSessionData, getSessionData } = require('./controllers/sessionController');
// const authorizeRoles = require('./middleware/authorizeRoles');
// const app = express();

// app.use('/admin', authorizeRoles(['admin']), setSessionData);
// app.use('/teacher', authorizeRoles(['teacher']), setSessionData);
// app.use('/student', authorizeRoles(['student']), setSessionData);

// app.get('/session-data', getSessionData);

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// //////////////////////////////

// // Step 3: Using Middleware and Controllers in Routes

// // Explanation:

// //     In authorizeRoles, the middleware checks the JWT token and user's role to authorize the access to the routes.
// //     Session controllers (setSessionData and getSessionData) use session data to store and retrieve user information.
// //     Different routes (/admin, /teacher, /student) use the authorizeRoles middleware with different roles to restrict access based on the user role.
// //     The getSessionData controller is used to get session data for the logged-in user.

// // Remember to handle errors properly and secure the session by setting appropriate options in the session middleware (like using a store for production environments, setting cookie options, etc.).


