-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: newschema
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `Dname` varchar(45) NOT NULL,
  `Dnum` int NOT NULL,
  `MGRSSN` int DEFAULT NULL,
  `MGRSatrtDate` date DEFAULT NULL,
  PRIMARY KEY (`Dnum`),
  UNIQUE KEY `Dnum_UNIQUE` (`Dnum`),
  KEY `MGRSSN_idx` (`MGRSSN`),
  CONSTRAINT `MGRSSN` FOREIGN KEY (`MGRSSN`) REFERENCES `employee` (`SSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES ('DP1',10,223344,'2005-01-01'),('DP2',20,968574,'2006-03-01'),('DP3',30,512463,'2006-06-01');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependent`
--

DROP TABLE IF EXISTS `dependent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dependent` (
  `ESSN` int NOT NULL,
  `Dependent_name` varchar(45) NOT NULL DEFAULT '',
  `Sex` varchar(45) DEFAULT NULL,
  `BDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ESSN`,`Dependent_name`),
  KEY `ESSN_idx` (`ESSN`),
  CONSTRAINT `ESSN` FOREIGN KEY (`ESSN`) REFERENCES `employee` (`SSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependent`
--

LOCK TABLES `dependent` WRITE;
/*!40000 ALTER TABLE `dependent` DISABLE KEYS */;
INSERT INTO `dependent` VALUES (112233,'Hala Saied Ali','F','1970-10-18 00:00:00'),(223344,'Ahmed Kamel Shawki','M','1998-03-27 00:00:00'),(223344,'Mona Adel Mohamed','F','1975-04-25 00:00:00'),(321654,'Omar Amr Omran','M','1993-03-30 00:00:00'),(321654,'Ramy Amr Omran','M','1990-01-26 00:00:00'),(321654,'Sanaa Gawish','F','1973-05-16 00:00:00'),(512463,'Nora Ghaly','F','1976-06-22 00:00:00'),(512463,'Sara Edward','F','2001-09-15 00:00:00');
/*!40000 ALTER TABLE `dependent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `SSN` int NOT NULL,
  `Fname` varchar(45) DEFAULT NULL,
  `Lname` varchar(45) DEFAULT NULL,
  `Bdate` date DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Gender` varchar(45) DEFAULT NULL,
  `Salary` int DEFAULT NULL,
  `SuperSSN` int DEFAULT NULL,
  `DNO` int DEFAULT NULL,
  PRIMARY KEY (`SSN`),
  UNIQUE KEY `SSN_UNIQUE` (`SSN`),
  KEY `DNO_idx` (`DNO`),
  KEY `SuperSSN_idx` (`SuperSSN`),
  CONSTRAINT `DNO` FOREIGN KEY (`DNO`) REFERENCES `departments` (`Dnum`),
  CONSTRAINT `SuperSSN` FOREIGN KEY (`SuperSSN`) REFERENCES `employee` (`SSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (112233,'Ahmed ','Ali','1965-01-01','15 Ali fahmy St.Giza','M',1300,223344,10),(123456,'Hanaa','Sobhy','1973-03-18','38 Abdel Khalik Tharwat St. Downtown.Cairo','F',800,223344,10),(223344,'Kamel','Mohamed','1970-10-15','38 Mohy el dien abo el Ezz  St.Cairo','M',1800,321654,10),(321654,'Amr','Omran','1963-09-14','44 Hilopolis.Cairo','M',2500,NULL,NULL),(512463,'Edward','Hanna','1972-08-19','18 Abaas El 3akaad St. Nasr City.Cairo','M',1500,321654,30),(521634,'Maged','Raoof','1980-06-04','18 Kholosi st.Shobra.Cairo','M',1000,968574,30),(669955,'Mariam','Adel','1982-12-06','269 El-Haram st. Giza','F',750,512463,20),(968574,'Noha','Mohamed','1975-01-02','55 Orabi St. El Mohandiseen .Cairo','F',1600,321654,20);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `Pname` varchar(45) NOT NULL,
  `Pnumber` int NOT NULL,
  `Plocation` varchar(45) DEFAULT NULL,
  `City` varchar(45) DEFAULT NULL,
  `Dnum` int DEFAULT NULL,
  PRIMARY KEY (`Pnumber`),
  UNIQUE KEY `Pnumber_UNIQUE` (`Pnumber`),
  KEY `Dnum_idx` (`Dnum`),
  CONSTRAINT `Dnum` FOREIGN KEY (`Dnum`) REFERENCES `departments` (`Dnum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES ('AL Solimaniah',100,'Cairo_Alex Road','Alex',10),('Al Rabwah',200,'6th of October City','Giza',10),('Al Rawdah',300,'Zaied City','Giza',10),('Al Rowad',400,'Cairo_Faiyom Road','Giza',20),('Al Rehab',500,'Nasr City','Cairo',30),('Pitcho american',600,'Maady','Cairo',30),('Ebad El Rahman',700,'Ring Road','Cairo',20);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `works_for`
--

DROP TABLE IF EXISTS `works_for`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `works_for` (
  `Essn` int NOT NULL,
  `Pno` int NOT NULL,
  `hours` int DEFAULT NULL,
  PRIMARY KEY (`Essn`,`Pno`),
  KEY `Pno_idx` (`Pno`),
  CONSTRAINT `works_for_ibfk_1` FOREIGN KEY (`Essn`) REFERENCES `employee` (`SSN`),
  CONSTRAINT `works_for_ibfk_2` FOREIGN KEY (`Pno`) REFERENCES `project` (`Pnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `works_for`
--

LOCK TABLES `works_for` WRITE;
/*!40000 ALTER TABLE `works_for` DISABLE KEYS */;
INSERT INTO `works_for` VALUES (112233,100,40),(223344,100,10),(223344,200,10),(223344,300,10),(223344,500,10),(512463,500,10),(512463,600,25),(521634,300,6),(521634,400,4),(521634,500,10),(521634,600,20),(669955,300,10),(669955,400,20),(669955,700,7),(968574,300,10),(968574,400,15),(968574,700,15);
/*!40000 ALTER TABLE `works_for` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-05 13:10:24
