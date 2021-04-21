// Import model Product
import Shopping from "../models/Shopping.js";
 
// Get semua product
export const getShopping = async (req, res) => {
    try {
        const shopping = await Shopping.findAll();
        res.send(shopping);
    } catch (err) {
        console.log(err);
    }
}
 
// Get Shopping berdasarkan id
export const getShoppingById = async (req, res) => {

    // res.send(req.params.id);

    try {
        const shopping = await Shopping.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(shopping);
    } catch (err) {
        console.log(err);
    }
}
 
// Create Shopping baru
export const createShopping = async (req, res) => {

    // res.json({
    //         "shopping": req.body.shopping
    //     });
    
    try {
        await Shopping.create(req.body.shopping);
        res.json({
            "data": req.body.shopping
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update Shopping berdasarkan id
export const updateShopping = async (req, res) => {
    try {
        await Shopping.update(req.body.shopping, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "data": req.body.shopping
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete Shopping berdasarkan id
export const deleteShopping = async (req, res) => {

    
    
    try {
        await Shopping.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Shopping Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}