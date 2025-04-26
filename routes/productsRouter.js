const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create", upload.single("image"), async (req, res) => {
  // console.log("POST /products/create hit");

  // Log the incoming file data for debugging
  // console.log(req.file); // This should contain details about the uploaded file

  try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    // Check if the image buffer exists
    if (!req.file) {
      // console.log("No file uploaded.");
      return res.status(400).send("No file uploaded.");
    }

    let product = await productModel.create({
      image: req.file.buffer, // Save the image buffer
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor
    });

    req.flash("success", "Product created successfully");
    res.redirect("/owners/admin");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

module.exports = router;
