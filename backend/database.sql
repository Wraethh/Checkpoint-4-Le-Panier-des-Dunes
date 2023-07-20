-- -----------------------------------------------------
-- Table `vegetable`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `vegetable` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vegetable` VARCHAR(80) NOT NULL,
  `variety` VARCHAR(80) NOT NULL,
  `price` DECIMAL(4,2) NOT NULL,
  `comments` VARCHAR(255) NULL,
  `picture` VARCHAR(255) NOT NULL,
  `isAvailable` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

INSERT INTO vegetable (vegetable, variety, price, comments, picture, isAvailable) VALUES 
("Carotte", "Des sables", 4.20, "Bien sucrées et iodées", "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", 1),
("Salade", "Laitue", 1.20, "Belle laitue croquante", "https://images.unsplash.com/photo-1556781366-336f8353ba7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80", 1),
("Tomate", "Coeur de Boeuf", 5.80, "Juteuse, parfaite pour la cuisson", "https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 1),
("Pomme de terre", "Bintj", 2.50, "Parfaite pour des bonnes frites", "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 1),
("Oignon", "de Roscoff", 2.50, "Variété locale entre l'oignon jaune et rose", "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 1),
("Melon", "Galia", 3.50, "À consommer sans modération", "https://plus.unsplash.com/premium_photo-1675040830254-1d5148d9d0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80", 1),
("Pastèque", "Caravan", 4.20, "Incoutournable pour un été réussi", "https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80", 1),
("Chou", "de Lorient", 3.80, "Variété locale très goûteuse", "https://images.unsplash.com/photo-1598030343246-eec71cb44231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 0),
("Tomate cerise", "Ambrosia", 4.00, "Pour un apéritif sans fausse note", "https://images.unsplash.com/photo-1561155707-3f9e6bb380b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", 1),
("Basilic", "Genovese", 1.50, "C'est l'heure de se mettre au pesto !", "https://images.unsplash.com/photo-1538596313828-41d729090199?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 1),
("Courgette", "Firenze", 3.00, "Belles courgettes vertes", "https://images.pexels.com/photos/3375263/pexels-photo-3375263.jpeg?auto=compress&cs=tinysrgb&w=600", 1);

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