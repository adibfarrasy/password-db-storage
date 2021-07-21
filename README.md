# Password Storing Methods in Database

Have you ever wondered how websites store your password securely in their database? what will happen if the database got breached and the database entries are leaked? This repo shows the different methods we can store password securely in a database.

### Storage Methods:

1. _Vanilla:_ Password is stored directly in the database.
   This is the most vulnerable approach of storing passwords, as database breach can reveal all the users' passwords readily.
2. _Encrypted password:_ Password is encrypted with an expensively-reversible algorithm (i.e. SHA256) and the result is stored in the database. This method presents two challenges:
   a. Users who have the same passwords will have the same stored encrypted password, in which password lookup tables can be used to decipher the encryption faster.
   b. A sufficiently powerful super-computer can decipher the encryption.
3. _Encrypted password + salt:_ The password is concatenated with a salt which is generated randomly upon creation of new entry(s) in the database. The resulting password+salt string is then encrypted. It must be noted that for the server to do authentication, the salt must also be stored in the database. This method solves _(Problem 2a)_, but presents another problem, that is the additional space required to store the salt, which can be expensive.
4. _Bcrypted password:_ Bcrypt, or Blowfish cipher-based encryption, uses the same fundamental approach as method 3 (albeit different algorithm is used, perhaps), but it encrypts the password+salt over and over again (i.e. 2<sup>10</sup> times, or 1024 times!). The cost constant used in this example, 2<sup>10</sup> encryption cycles, is arbitrary, and as computers get faster and faster, the cost constant can be increased to render brute force decryption impossible.

Adib Farrasy 2021
