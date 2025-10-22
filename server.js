const { Client } = require("pg");

const client = new Client("postgresql://temp:FNukzJzpun9cZ4t734m_qA@vague-mayfly-9420.jxf.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"
);

(async () => {
  await client.connect();
  try {
    //const results = await client.query("SELECT NOW()");
   // console.log(results);
    const results = await client.query(`CREATE TABLE cities (
      name    varchar(80)),
      location `);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();
