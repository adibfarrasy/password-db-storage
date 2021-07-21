CREATE TABLE pass_storage;

USE pass_storage;

-- Table: storage_method1

-- DROP TABLE storage_method1;

CREATE TABLE storage_method1 (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Table: storage_method2

-- DROP TABLE storage_method2;

CREATE TABLE storage_method2 (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Table: storage_method3

-- DROP TABLE storage_method3;

CREATE TABLE storage_method3 (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL
);

-- Table: storage_method4

-- DROP TABLE storage_method4;

CREATE TABLE storage_method4 (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Table: storage_method5

-- DROP TABLE storage_method5;

CREATE TABLE storage_method5 (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    userdata VARCHAR(255) NOT NULL
);