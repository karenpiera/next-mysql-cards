CREATE TABLE product (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    model VARCHAR(200) NOT NULL,
    year INT,
    type VARCHAR(50),
    capacity INT,
    transmission VARCHAR(50),
    description VARCHAR(200),
    price VARCHAR(50),
    image TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userID INT UNSIGNED,
    productID INT UNSIGNED NOT NULL,
    description TEXT NOT NULL,
    rating INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_posts FOREIGN KEY (userID) REFERENCES user (id),
    CONSTRAINT fk_product_posts FOREIGN KEY (productID) REFERENCES product (id)
);


