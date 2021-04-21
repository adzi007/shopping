// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const User = db.define('user', {
  // Define attributes
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  postcode: {
    type: DataTypes.STRING
  },
  names: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default User;
