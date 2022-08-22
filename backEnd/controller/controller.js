let home = (req, res) => {
  res.render("index", { name: "prashant" });
};

module.exports = { home };
