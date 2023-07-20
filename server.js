const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api/user-routes');
const thoughtRoutes = require('./routes/api/thought-routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));