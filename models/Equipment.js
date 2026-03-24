const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Máy ảnh', 'Ống kính', 'Hộp chống ẩm', 'Phụ kiện'],
    required: true
  },
  capitalCost: { type: Number, required: true }, // Vốn bỏ ra
  status: { 
    type: String, 
    enum: ['Sẵn sàng', 'Đang cho thuê', 'Hỏng', 'Mất'], 
    default: 'Sẵn sàng' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Equipment', equipmentSchema);