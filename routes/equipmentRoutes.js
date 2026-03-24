const express = require('express');
const router = express.Router();
const { getEquipments, createEquipment } = require('../controllers/equipmentController');

router.route('/')
  .get(getEquipments)
  .post(createEquipment);

module.exports = router;