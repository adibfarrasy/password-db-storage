//Method 2
//Store password hash in the database
const { query } = require("../models/connection");
const crypto = require("crypto");

// Login
const loginMethod2 = async (req, res) => {
  const sql = `select username from storage_method2 where username = "${
    req.body.user
  }" and password = "${sha256(req.body.password)}"`;
  const result = await query(sql);

  // Handler
  if (!result.length) res.send({ error: "Incorrect username or password." });
  else res.send({ success: "Logged in successfully!" });
};

// Register
const registerMethod2 = async (req, res) => {
  // Check if user exist
  const sql = `select username from storage_method2 where username = "${req.body.user}"`;
  const result = await query(sql);

  // Create new user if user doesn't exist
  if (!result.length) {
    await query(
      `insert into storage_method2 (username, password) values ("${
        req.body.user
      }","${sha256(req.body.password)}")`
    );
    res.send({ success: "User created successfully." });
  } else res.send({ error: "User already exists." });
};

function sha256(txt) {
  const secret = "abcdefg";
  const hash = crypto.createHmac("sha256", secret).update(txt).digest("hex");
  return hash;
}

module.exports = {
  loginMethod2,
  registerMethod2,
};
