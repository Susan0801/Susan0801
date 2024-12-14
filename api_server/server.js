// Import the express module 
const express = require('express');
// Import the function to connect to the database
const connectDB = require('./db/connection'); 

// Create an instance of express
const app = express();

// Connect to the database
connectDB();
app.use(express.json());

// Define the port for the server to listen on (default to 8000 if not specified)
const PORT = process.env.PORT || 8000;


// Import the cors middleware for handling Cross-Origin Resource Sharing
const cors = require('cors'); 

// Enable CORS with default options (you can configure it further if needed)
//app.use(cors({origin:' http://localhost:5173',methods: ['GET', 'POST']}));
app.use(cors());


//const bodyParser = require('body-parser');
//app.use(bodyParser.json()); // Parse JSON bodies

// Middleware to parse incoming form data with x-www-form-urlencoded format
app.use(express.urlencoded({ extended: false }));

// Import and configure routes for handling contact form submissions
const contactRoutes = require('./router/contact');
// Set up the route to handle form submissions at /api/submission
app.use('/api', contactRoutes);

// Start the server and listen on the specified port
app.listen(PORT, function () {
    console.log(`API server is running at http://127.0.0.1:${PORT}`);
});
