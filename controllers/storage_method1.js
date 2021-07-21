//Method 1
//Store password in the database as plain text
const { query } = require("../models/connection");

// Login
const loginMethod1 = async (req, res) => {
  const sql = `select username from storage_method1 where username = "${req.body.user}" and password = "${req.body.password}"`;
  const result = await query(sql);

  // Handler
  if (!result.length) res.send({ error: "Incorrect username or password." });
  else res.send({ success: "Logged in successfully!" });
};

// Register
const registerMethod1 = async (req, res) => {
  // Check if user exist
  const sql = `select username from storage_method1 where username = "${req.body.user}"`;
  const result = await query(sql);

  // Create new user if user doesn't exist
  if (!result.length) {
    await query(
      `insert into storage_method1 (username, password) values ("${req.body.user}","${req.body.password}")`
    );
    res.send({ success: "User created successfully." });
  } else res.send({ error: "User already exists." });
};

module.exports = {
  loginMethod1,
  registerMethod1,
};
