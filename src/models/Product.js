
import sequelize from '../services/sequelize';
import Sequelize from 'sequelize';

const Product = sequelize.getInstance().define('product', {
  name: {
    type: Sequelize.STRING
  }
});

export default Product;