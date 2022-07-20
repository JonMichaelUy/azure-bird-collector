//Dependencies
const dotenv = require("dotenv");
dotenv.config();
// require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const birdsController = require('./controllers/birds.js');
const app = express();
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000

const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");
// const { objectValues } = require("@azure/ms-rest-js/es/lib/util/utils.js");

async function main() {

  const credential = new DefaultAzureCredential();
  const url = "https://mikekeyvault-1.vault.azure.net";
  const client = new SecretClient(url, credential);
  const secret = await client.getSecret("secretdburi");
  console.log("secret: ", secret);

  mongoose.connect(secret.value, {
    useUnifiedTopology: true,
  });
  

}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
// mongoose.connect(secret, {
//Database Connection
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
//Controllers
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use('/', birdsController)













// app.get('/', (req, res) => {
//   res.render('index.ejs')
// });


app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})