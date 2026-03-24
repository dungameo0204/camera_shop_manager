const Equipment = require('../models/Equipment');

// @desc    Lấy tất cả thiết bị trong kho
// @route   GET /api/equipments
const getEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find({});
    res.json(equipments);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy dữ liệu' });
  }
};

// @desc    Thêm một thiết bị mới vào kho
// @route   POST /api/equipments
const createEquipment = async (req, res) => {
  try {
    const { name, category, capitalCost } = req.body;

    const equipment = new Equipment({
      name,
      category,
      capitalCost
    });

    const createdEquipment = await equipment.save();
    res.status(201).json(createdEquipment);
  } catch (error) {
    res.status(400).json({ message: 'Dữ liệu đầu vào không hợp lệ' });
  }
};

module.exports = { getEquipments, createEquipment };