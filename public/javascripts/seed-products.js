const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("../../models/product-model");


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/scatch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", async () => {
  console.log("MongoDB connected");

  const imageDir = path.join(__dirname, "../images");
  const files = fs.readdirSync(imageDir);

  for (const file of files) {
    const filePath = path.join(imageDir, file);
    const imageBuffer = fs.readFileSync(filePath);

    const newProduct = new Product({
      image: imageBuffer,
      name: path.parse(file).name, // product name from file name
      price: "999", // you can randomize or fix this
      discount: 0,
      bgcolor: "#f5f5f5",
      panelcolor: "#ffffff",
      textcolor: "#000000"
    });

    await newProduct.save();
    console.log(`✅ Added product: ${file}`);
  }

  console.log("🌱 Done seeding.");
  mongoose.disconnect();
});
