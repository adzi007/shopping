// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Shopping = db.define('shopping', {
  // Define attributes
  name: {
    type: DataTypes.STRING,
  },
  createddate: {
  	type: DataTypes.DATE,
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default Shopping;