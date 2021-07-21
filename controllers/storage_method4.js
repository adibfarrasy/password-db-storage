//Method 4
//Store salted password with bcrypt
const { query } = require("../models/connection");
const bcrypt = require("bcrypt");

// Login
const loginMethod4 = async (req, res) => {
  try {
    const sql = `select * from storage_method4 where username = "${req.body.user}"`;
    const result = await query(sql);

    // Handler
    if (!result.length) res.send({ error: "Incorrect username or password" });
    else {
      // Compare salted password
      const saltedPassword = result[0].password;

      const successResult = await bcrypt.compare(
        req.body.password,
        saltedPassword
      );

      if (successResult === true)
        res.send({ success: "Logged in successfully!" });
      else res.send({ error: "Incorrect username or password" });
    }
  } catch (ex) {
    console.error(ex);
  }
};

// Register
const registerMethod4 = async (req, res) => {
  // Check if user exist
  const sql = `select username from storage_method4 where username = "${req.body.user}"`;
  const result = await query(sql);

  // Create new user if user doesn't exist
  if (!result.length) {
    // Hash password with bcrypt 10 times
    const hash = await bcrypt.hash(req.body.password, 10);

    await query(
      `insert into storage_method4 (username, password) values ("${req.body.user}","${hash}")`
    );
    res.send({ success: "User created successfully" });
  } else res.send({ error: "User already exists." });
};

module.exports = {
  loginMethod4,
  registerMethod4,
};
