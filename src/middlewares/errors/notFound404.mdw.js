const notFound = (req, res) => {
    res.status(404).send("<h3>Path not found.</h3>");
}

module.exports = notFound;