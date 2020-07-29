const books = require('../models/book.model');

exports.search = (req, res) => {
  if (!req.params || !req.params.keyword)
		return res.status(400).json('No keyword specified.');
	let keyword = decodeURI(req.params.keyword); 
	return res.status(200).json( books.filter((obj) => { return obj.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1; }) );
};

exports.getById = (req, res) => {
  if (!req.params || !req.params.id)
		return res.status(400).json('No ID specified.');
	return res.status(200).json(books.filter((obj) => { return obj.id == req.params.id; })[0]);
};