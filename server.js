const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const equipmentRoutes = require('./routes/equipmentRoutes');

// Load biến môi trường
dotenv.config();

// Kết nối database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Cho phép parse JSON từ body của request

// Gắn Routes
app.use('/api/equipments', equipmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});