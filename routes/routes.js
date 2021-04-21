// Import express
import express from "express";

import { 
getShopping,
getShoppingById,
createShopping,
updateShopping,
deleteShopping
} from "../controllers/Shopping.js";
 
//  // Init express router
const router = express.Router();


// Route get semua product
router.get('/api/shopping', getShopping);

// Route get product by id
router.get('/api/shopping/:id', getShoppingById);

// Route create product baru
router.post('/api/shopping', createShopping);


router.put('/api/shopping/:id', updateShopping);

// // Route delete product by id
router.delete('/api/shopping/:id', deleteShopping);



 
// export router
export default router;