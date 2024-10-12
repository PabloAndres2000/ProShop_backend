const dotenv = require('dotenv');
dotenv.config();
const config = {
  mongodb: {
    url: process.env.MONGODB_URI,
    databaseName: 'ProShop',
    options: {
      // Las siguientes líneas se pueden eliminar
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    },
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
  useFileHash: false,
  moduleSystem: 'commonjs',
};

module.exports = config;
