const Sequelize = require('sequelize'),
  Url = require('url'),
  Utils = require('./../utils'),
  Connections = {
    MySql: Url.parse(process.env.CLEARDB_DATABASE_URL)
  },
  Orm = {
  Mysql: new Sequelize(
    Connections.MySql.pathname.substring(1),
    Connections.MySql.auth.split(':')[0],
    Connections.MySql.auth.split(':')[1],
    {
      host: Connections.MySql.hostname,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      logging: false
    }
  )
},
Models = {
  Mysql: {
    Product: Orm.Mysql.define('products', {
        id: {
          type: Sequelize.STRING,
          field: 'id',
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          field: 'name'
        },
        price: {
          type: Sequelize.STRING,
          field: 'price'
        },
        quantity: {
          type: Sequelize.STRING,
          field: 'quantity'
        },
        release: {
          type: Sequelize.INTEGER,
          field: 'release',
          defaultValue: 1
        },
        created_date: {
          type: Sequelize.STRING,
          field: 'created_date',
          defaultValue: Utils.CreateDate
        }
      },
      {
        timestamps: false,
        underscored: true
    }),
    Preorder: Orm.Mysql.define('preorders', {
        id: {
          type: Sequelize.STRING,
          field: 'id',
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING,
          field: 'email'
        },
        preorder: {
          type: Sequelize.STRING,
          field: 'preorder'
        },
        size: {
          type: Sequelize.STRING,
          field: 'size'
        },
        reason: {
          type: Sequelize.STRING,
          field: 'reason'
        },
        release: {
          type: Sequelize.INTEGER,
          field: 'release',
          defaultValue: 1
        },
        created_date: {
          type: Sequelize.STRING,
          field: 'created_date',
          defaultValue: Utils.CreateDate
        }
      },
      {
        timestamps: false,
        underscored: true
    }),
    Cart: Orm.Mysql.define('carts', {
        id: {
          type: Sequelize.STRING,
          field: 'id',
          primaryKey: true
        },
        product_id: {
          type: Sequelize.INTEGER,
          field: 'product_id'
        },
        email: {
          type: Sequelize.STRING,
          field: 'email'
        },
        gender: {
          type: Sequelize.STRING,
          field: 'gender'
        },
        size: {
          type: Sequelize.STRING,
          field: 'size'
        },
        quantity: {
          type: Sequelize.STRING,
          field: 'quantity'
        },
        release: {
          type: Sequelize.INTEGER,
          field: 'release',
          defaultValue: 1
        },
        created_date: {
          type: Sequelize.STRING,
          field: 'created_date',
          defaultValue: Utils.CreateDate
        }
      },
      {
        timestamps: false,
        underscored: true
    }),
    Order: Orm.Mysql.define('orders', {
        id: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true
        },
        product_id: {
          type: Sequelize.STRING,
          field: 'product_id',
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING,
          field: 'email'
        },
        gender: {
          type: Sequelize.STRING,
          field: 'gender'
        },
        size: {
          type: Sequelize.STRING,
          field: 'size'
        },
        quantity: {
          type: Sequelize.INTEGER,
          field: 'quantity'
        },
        release: {
          type: Sequelize.INTEGER,
          field: 'release',
          defaultValue: 1
        },
        created_date: {
          type: Sequelize.STRING,
          field: 'created_date',
          defaultValue: Utils.CreateDate
        }
      },
      {
        timestamps: false,
        underscored: true
    }),
    Address: Orm.Mysql.define('addresses', {
        id: {
          type: Sequelize.STRING,
          field: 'id',
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING,
          field: 'email'
        },
        phone: {
          type: Sequelize.STRING,
          field: 'phone'
        },
        address1: {
          type: Sequelize.STRING,
          field: 'address1'
        },
        address2: {
          type: Sequelize.STRING,
          field: 'address2'
        },
        city: {
          type: Sequelize.STRING,
          field: 'city'
        },
        state: {
          type: Sequelize.STRING,
          field: 'state'
        },
        zip: {
          type: Sequelize.STRING,
          field: 'zip'
        },
        is_billing: {
          type: Sequelize.INTEGER,
          field: 'is_billing'
        },
        is_shipping: {
          type: Sequelize.INTEGER,
          field: 'is_shipping'
        },
        created_date: {
          type: Sequelize.STRING,
          field: 'created_date',
          defaultValue: Utils.CreateDate
        },
        updated_date: {
          type: Sequelize.STRING,
          field: 'updated_date'
        }
      },
      {
        timestamps: false,
        underscored: true
    }),
    Contact: Orm.Mysql.define('contacts', {
        id: {
          type: Sequelize.STRING,
          field: 'id',
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING,
          field: 'email'
        },
        reason: {
          type: Sequelize.STRING,
          field: 'reason'
        },
        comments: {
          type: Sequelize.STRING,
          field: 'comments'
        },
        created_date: {
          type: Sequelize.STRING,
          field: 'created_date',
          defaultValue: Utils.CreateDate
        }
      },
      {
        timestamps: false,
        underscored: true
    })
  }
},
Rels = {
  ProductOrders: Models.Mysql.Order.belongsTo(Models.Mysql.Product),
  ProductCarts: Models.Mysql.Cart.belongsTo(Models.Mysql.Product, { foreignKey: 'product_id' })
}

module.exports = {
  Models: Models,
  Rels: Rels
}
