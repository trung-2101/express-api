const express = require('express');
const Test2 = require('../models/Model');
const router = express.Router();

// Lấy tất cả bản ghi
router.get('/', async (req, res) => {
  const records = await Test2.find();
  res.json(records);
});

// Lấy một bản ghi theo ID
router.get('/:id', async (req, res) => {
  try {
    const record = await Test2.findById(req.params.id);
    if (!record) return res.status(404).json({ error: 'Không tìm thấy bản ghi' });
    res.json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add
router.post('/', async (req, res) => {
  try {
    const newRecord = new Test2(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Edit
router.put('/:id', async (req, res) => {
  try {
    const updated = await Test2.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Không tìm thấy bản ghi' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Test2.findByIdAndDelete(req.params.id);
    // if (!deleted) return res.status(404).json({ error: 'Không tìm thấy bản ghi' });
    if(!deleted) return res.status(404).json({error:'không tìm thấy bản ghi nào'})
    res.json({ message: 'Đã xóa thành công' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;