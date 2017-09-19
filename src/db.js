import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env

// MODELS


const sequelize = new Sequelize(PG_DATABASE, PG_USERNAME, PG_PASSWORD, {
  host: PG_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
})

export const Project = sequelize.define('project', {
  // id: Sequelize.INTEGER,
  name: Sequelize.STRING,
},{
  timestamps: false,
})

export const Company = sequelize.define('company', {
  // id: Sequelize.INTEGER,
  name: Sequelize.STRING,
},{
  timestamps: false,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
