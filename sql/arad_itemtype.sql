-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: localhost    Database: arad
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.7-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `itemtype`
--

DROP TABLE IF EXISTS `itemtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `itemtype` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `name` varchar(45) NOT NULL,
  `class` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itemtype`
--

LOCK TABLES `itemtype` WRITE;
/*!40000 ALTER TABLE `itemtype` DISABLE KEYS */;
INSERT INTO `itemtype` VALUES (0,'ItemType.Weapons.Zanbato','大剣','zanbato'),(1,'ItemType.Weapons.Bludgeon','鈍器','bludgeon'),(2,'ItemType.Weapons.ShortSword','小剣','shortSword'),(3,'ItemType.Weapons.Katana','ブレード','katana'),(4,'ItemType.Weapons.Lightsabre','光剣','lightSabre'),(5,'ItemType.Weapons.BoxingGlove','拳闘グローブ','boxingGlove'),(6,'ItemType.Weapons.Claw','クロー','claw'),(7,'ItemType.Weapons.Knuckle','ナックル','knuckle'),(8,'ItemType.Weapons.Tonfa','トンファー','tonfa'),(9,'ItemType.Weapons.Gauntlets','ガントレット','gauntlets'),(10,'ItemType.Weapons.HandCannon','ハンドキャノン','handCannon'),(11,'ItemType.Weapons.Musket','マスケット','musket'),(12,'ItemType.Weapons.Revolver','リボルバー','revolver'),(13,'ItemType.Weapons.Bowgun','ボーガン','bowgun'),(14,'ItemType.Weapons.AutoGun','オートマチック','autoGun'),(15,'ItemType.Weapons.Spear','槍','spear'),(16,'ItemType.Weapons.Pole','棒','pole'),(17,'ItemType.Weapons.Staff','スタッフ','staff'),(18,'ItemType.Weapons.Rod','ロッド','rod'),(19,'ItemType.Weapons.Broom','ほうき','broom'),(20,'ItemType.Weapons.BattleAxe','バトルアックス','battleAxe'),(21,'ItemType.Weapons.Totem','トーテム','totem'),(22,'ItemType.Weapons.Cross','クロス','cross'),(23,'ItemType.Weapons.Scythe','鎌','scythe'),(24,'ItemType.Weapons.Rosary','数珠','rosary'),(25,'ItemType.Weapons.Dagger','短剣','dagger'),(26,'ItemType.Weapons.DualBlades','双剣','dualBlades'),(27,'ItemType.Weapons.Wand','ワンド','wand'),(28,'ItemType.Weapons.Chakra','チャクラウェポン','chakra'),(50,'ItemType.Armor.Cloth.Shoulder','クロース肩','cloth shoulder'),(51,'ItemType.Armor.Cloth.Top','クロース上着','cloth top'),(52,'ItemType.Armor.Cloth.Bottom','クロースパンツ','cloth bottom'),(53,'ItemType.Armor.Cloth.Belt','クロースベルト','cloth belt'),(54,'ItemType.Armor.Cloth.Shoes','クロース靴','cloth shoes'),(60,'ItemType.Armor.Leather.Shoulder','レザー肩','leather shoulder'),(61,'ItemType.Armor.Leather.Top','レザー上着','leather top'),(62,'ItemType.Armor.Leather.Bottom','レザーパンツ','leather bottom'),(63,'ItemType.Armor.Leather.Belt','レザーベルト','leather belt'),(64,'ItemType.Armor.Leather.Shoes','レザー靴','leather shoes'),(70,'ItemType.Armor.Light.Shoulder','軽甲肩','light shoulder'),(71,'ItemType.Armor.Light.Top','軽甲上着','light top'),(72,'ItemType.Armor.Light.Bottom','軽甲パンツ','light bottom'),(73,'ItemType.Armor.Light.Belt','軽甲ベルト','light belt'),(74,'ItemType.Armor.Light.Shoes','軽甲靴','light shoes'),(80,'ItemType.Armor.Heavy.Shoulder','重甲肩','heavy shoulder'),(81,'ItemType.Armor.Heavy.Top','重甲上着','heavy top'),(82,'ItemType.Armor.Heavy.Bottom','重甲パンツ','heavy bottom'),(83,'ItemType.Armor.Heavy.Belt','重甲ベルト','heavy belt'),(84,'ItemType.Armor.Heavy.Shoes','重甲靴','heavy shoes'),(90,'ItemType.Armor.Plate.Shoulder','板金肩','plate shoulder'),(91,'ItemType.Armor.Plate.Top','板金上着','plate top'),(92,'ItemType.Armor.Plate.Bottom','板金パンツ','plate bottom'),(93,'ItemType.Armor.Plate.Belt','板金ベルト','plate belt'),(94,'ItemType.Armor.Plate.Shoes','板金靴','plate shoes'),(130,'ItemType.Accessories.Bracelet','腕輪','bracelet'),(131,'ItemType.Accessories.Necklace','ネックレス','necklace'),(132,'ItemType.Accessories.Ring','指輪','ring'),(150,'ItemType.SpecialEquipment.SubEquipment','補助装備','subEquipment'),(151,'ItemType.SpecialEquipment.MagicStone','魔法石','magicStone');
/*!40000 ALTER TABLE `itemtype` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-12-12 19:03:57
