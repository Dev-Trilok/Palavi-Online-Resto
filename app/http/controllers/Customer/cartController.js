function cartController(){
    return{
        index (req, res){
           res.render('customers/cart')
        },
        update (req, res){
            let cart={
                items: {
                    pizzaId:{item:pizzaObject, qty:0}
                },
                totalQty:0,
                totalPrice:0
            }
            if(!req.session.cart){
                req.session.car={
                    items:{},
                    totalQty:0,
                    totalPrice:0
                }
                let cart= req.session.cart
                
               
            }
            console.log(req.body);
             //checl
             if(!cart.items[req.body._id]){
                cart.items[req.body._id]= {
                    item:req.body,
                    Qty:1
                    }
                    cart.totalQty=cart.totalQty+1;
                    cart.totalPrice=cart.totalPrice+req.body.price; 
            }
            else{
                cart.items[req.body._id].Qty=  cart.items[req.body._id].Qty+1;
                cart.totalQty=cart.totalQty+1;
                cart.totalPrice=cart.totalPrice+req.body.price; 

            }
            res.json({totalQty:req.session.cart.totalQty})
         }
    }   
   }
   module.exports= cartController