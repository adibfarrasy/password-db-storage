//Method 3
//Store salted password hash in the database
const { query } = require("../models/connection");
const crypto = require("crypto");

// Login
const loginMethod3 = async (req, res) => {
  const sql = `select * from storage_method3 where username = "${req.body.user}"`;
  const result = await query(sql);
  console.log(result);

  // Handler
  if (!result.length) res.send({ error: "Incorrect username or password" });
  else {
    // Compare salted password
    const saltedPassword = result[0].password;
    const saltedUserPassword = sha256(req.body.password + result[0].salt);
    if (saltedPassword === saltedUserPassword)
      res.send({ success: "Logged in successfully!" });
    else res.send({ error: "Incorrect username or password." });
  }
};

// Register
const registerMethod3 = async (req, res) => {
  // Check if user exist
  const sql = `select username from storage_method3 where username = "${req.body.user}"`;
  const result = await query(sql);

  // Create new user if user doesn't exist
  if (!result.length) {
    const salt = await randomSalt();
    await query(
      `insert into storage_method3 (username, password, salt) values ("${
        req.body.user
      }","${sha256(req.body.password + salt)}", "${salt}")`
    );
    res.send({ success: "User created successfully." });
  } else res.send({ error: "User already exists." });
};

async function randomSalt() {
  return crypto.randomBytes(64).toString("hex");
}
function sha256(txt) {
  const secret = "abcdefg";
  const hash = crypto.createHmac("sha256", secret).update(txt).digest("hex");
  return hash;
}

module.exports = {
  loginMethod3,
  registerMethod3,
};
