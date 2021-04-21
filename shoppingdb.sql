/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 10.4.14-MariaDB : Database - shoppingdb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`shoppingdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `shoppingdb`;

/*Table structure for table `shopping` */

DROP TABLE IF EXISTS `shopping`;

CREATE TABLE `shopping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `createddate` date DEFAULT NULL,
  `createdAt` time DEFAULT NULL,
  `updatedAt` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `shopping` */

insert  into `shopping`(`id`,`name`,`createddate`,`createdAt`,`updatedAt`) values (1,'Test Nama Shopping','2021-04-21',NULL,NULL),(2,'Andi','2021-04-21',NULL,NULL),(3,'Rahmat 2','2021-04-21','08:52:16','08:55:37'),(5,'Emir',NULL,'09:03:41','09:03:41'),(6,'Emir xz','2019-03-18','09:06:29','09:06:29');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `postcode` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `user` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
