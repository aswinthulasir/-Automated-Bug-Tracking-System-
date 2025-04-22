const Bug = require('../models/Bug');

exports.createBug = async (req, res) => {
  const bug = new Bug(req.body);
  await bug.save();
  res.json({ message: 'Bug reported successfully' });
};

exports.getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

exports.updateBug = async (req, res) => {
  await Bug.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Bug updated successfully' });
};

exports.deleteBug = async (req, res) => {
  await Bug.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bug deleted' });
};