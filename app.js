require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const test2Routes = require('./routes/a');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch((err) => console.error('Lỗi kết nối:', err));

app.use('/api/test2', test2Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});