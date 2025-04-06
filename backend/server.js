// server.js
const express = require('express');
const nearestPropertiesRoute = require('./routes/nearestProperties');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/nearest-properties', nearestPropertiesRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
