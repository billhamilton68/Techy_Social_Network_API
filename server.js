const express = require('express');
const db = require('./config/connection');
const userRoutes = require('./routes/api/user-routes');
const thoughtRoutes = require('./routes/api/thought-routes');

// This instantiates the server so that it can begin listening for requests from the client.
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// This tells the server that any time a client navigates to <ourhost>/api, the app will use the router we set up in api\index.js. If /api/pre-fix is not present, then the router will not be used and the client will receive a 404 error.
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));

// This connects to the database before the server starts.
db.once('open', () => {
    console.log('Database connected');
    }
);



