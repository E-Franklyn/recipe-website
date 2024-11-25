const express = require('express'); // Import express
const mongoose = require('mongoose'); // Import mongoose for MongoDB
const cors = require('cors'); // Import cors for Cross-Origin Resource Sharing

const app = express(); // Create an Express application

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Example route definitions
app.post('/signup', (req, res) => {
    // Your signup logic here
    res.send('Signup endpoint');
});

app.post('/login', (req, res) => {
    // Your login logic here
    res.send('Login endpoint');
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 5000; // Set PORT from environment variable or default to 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server and log the port