import { Model, DataTypes, Sequelize } from "sequelize";

export const CUSTOMER_TABLE = 'customer';

export const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primeryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  created_at: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}
