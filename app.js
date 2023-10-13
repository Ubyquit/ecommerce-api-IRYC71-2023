const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriaRoutes = require('./routes/categoriaRoutes');
const estadoRoutes = require('./routes/estadoRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/categorias', categoriaRoutes);
app.use('/estados', estadoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
