const express = require('express')
const router = express.Router()
const isLoggedIn = require("../middlewares/isLoggedIn")
const productModel = require("../models/product-model")
const userModel = require("../models/user-model")

router.get("/",(req,res)=>{
    let error = req.flash('error') ;
    res.render("index", { error,loggedin:false })
})

router.get("/shop",isLoggedIn, async function(req,res){
    try {
        let products = await productModel.find();
    
        products.forEach(product => {
          if (product.image && product.image instanceof Buffer) {
            // Ensure the image is properly converted to base64
            product.image = product.image.toString('base64');
            // console.log("Base64 Image: ", product.image); // Debug the base64 string
          } else {
            console.log("No image found for product:", product.name);
          }
        });
        
        let success=  req.flash("success")

        res.render('shop', { products,success });
      } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).send("Error fetching products");
      }
})

router.get("/cart",isLoggedIn, async function(req,res){
  let user = await userModel
    .findOne({email:req.user.email})
    .populate("cart")

     // Log the cart products to check the image data
    



    res.render("cart",{user})

})


router.get("/addtocart/:productid",isLoggedIn, async function(req,res){
    let user = await userModel.findOne({email:req.user.email})
  
    
   
    user.cart.push(req.params.productid)
    await user.save()
    req.flash("success","Added to Cart")
    res.redirect("/shop")
  })


module.exports = router;