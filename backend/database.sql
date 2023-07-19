-- -----------------------------------------------------
-- Table `vegetable`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `vegetable` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vegetable` VARCHAR(80) NOT NULL,
  `variety` VARCHAR(80) NOT NULL,
  `price` DECIMAL(4,2) NOT NULL,
  `comments` VARCHAR(255) NULL,
  `picture` VARCHAR(255) NULL,
  `isAvailable` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

INSERT INTO vegetable (vegetable, variety, price, comments, picture, isAvailable) VALUES 
("Carotte", "Des sables", 4.20, "Bien sucrées et iodées", "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", 1);

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(45) NOT NULL,
  `hashed_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

INSERT INTO user (pseudo, hashed_password) VALUES
("admin", "$argon2id$v=19$m=16,t=2,p=1$MWZlbWt0MzA4ZHkwMDAwMA$Qho2/NH/FR7C2GaceUor+Q")