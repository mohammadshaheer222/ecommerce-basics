const notFound = (req, res, next) => {
  res.status(404).json({ msg: "Requested route is not Found" });
};

module.exports = notFound;