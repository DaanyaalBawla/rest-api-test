const { Client } = require("pg");

const client = new Client("postgresql://temp:r-wpXLwtqR90LUzBm4Ka2g@vague-mayfly-9420.jxf.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT NOW()");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();
