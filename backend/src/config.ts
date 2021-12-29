import path from 'path';

const envPath = path.join(__dirname, `../.env.local`);
require('dotenv').config({ debug: process.env.DEBUG, path: envPath });
console.log('>>> process.env.NODE_ENV = ', process.env.NODE_ENV);

const config = {
  JWT_SECRET: process.env.JWT_SECRET || 'supersecret',
  MAIN_DB: {
    type: 'postgres',
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5433,
    username: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASS || 123456,
    database: process.env.PG_DB || 'firebrakers_db',
    synchronize: true,
    logging: false,
    entities: process.env.NODE_ENV === 'production' ? ['build/entities/**/*.js'] : ['src/entities/**/*.ts'],
    migrations: process.env.NODE_ENV === 'production' ? ['build/migrations/**/*.js'] : ['src/migrations/**/*.ts'],
    subscribers: process.env.NODE_ENV === 'production' ? ['build/subscribers/**/*.js'] : ['src/subscribers/**/*.ts'],
    ssl: process.env.NODE_ENV === 'production' ? true : false,
    extra: process.env.NODE_ENV === 'production' ? {
      ssl: {
        rejectUnauthorized: false
      }
    } : {},
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  },
  EMAIL: {
    SMTP_HOST: process.env.SMTP_HOST || 'smtp.yandex.ru',
    SMTP_PORT: process.env.SMTP_PORT || 465,
    SMTP_TLS: process.env.SMTP_TLS || true,
    SMTP_FROM: process.env.SMTP_FROM || 'smtp@mail.ru',
    SMTP_USER: process.env.SMTP_USER || 'smtp@mail.ru',
    SMTP_PASS: process.env.SMTP_PASS || 'pass',
  },
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  PATH_TO_UPLOADS: process.env.PATH_TO_UPLOADS || '../public/uploads',
  STRIPE: {
    ACCOUNT_TOKEN: 'acct_1JY4I5GD8IcoL9Yf',
    PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY || 'sk_test_51JY4I5GD8IcoL9YfTynn4KiMsYIvoFGRPad5vPPbPtSuhp2KXfq7VG7MAMssMpNwuPeKqXhZjgTY8LGMOJGjGC7N00qFFxUwiU',
  }
};

export default config;
