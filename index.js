const express = require('express');

const app = express();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Runing'));

// Define Routes
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/posts', require('./routes/api/posts'));
// app.use('/api/profiles', require('./routes/api/profiles'));
// app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
