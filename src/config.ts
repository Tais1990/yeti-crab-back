

const defaultConfig = {
  port: 3201,
  database: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Dtyz2006',
    database: 'yeticrab',    
  },
  auth: {
    secret: "secret-key"
  }
}

let conf = {
  dev: {...defaultConfig, port: 5000},
  prod: defaultConfig
}

export default () => ({
  ...conf[process.env.NODE_ENV]
});
