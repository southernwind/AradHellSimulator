var ItemRank = {
	Uncommon:"アンコモン", //0
	Rare:"レア", //1
	Legacy:"レガシー",//2
	Epic:"エピック", //3
	EpicBit:"エピックのかけら" //4
};
var ItemType = {
	Weapons:{
		Zanbato:"大剣", //0
		Bludgeon:"鈍器", //1
		ShortSword:"小剣", //2
		Katana:"ブレード", //3
		LightsabreGauntlets:"光剣", //4
		BoxingGlove:"拳闘グローブ", //5
		Claw:"クロー", //6
		Knuckle:"ナックル", //7
		Tonfa:"トンファー", //8
		Gauntlets:"ガントレット",//9
		HandCannon:"ハンドキャノン", //10
		Musket:"マスケット", //11
		Revolver:"リボルバー", //12
		Bowgun:"ボーガン", //13
		AutoGun:"オートマチック", //14
		Spear:"槍", //15
		Pole:"棒", //16
		Staff:"スタッフ", //17
		Rod:"ロッド", //18
		Broom:"ほうき", //19
		BattleAxe:"バトルアックス", //20
		Totem:"トーテム", //21
		Cross:"クロス", //22
		Scythe:"鎌", //23
		Rosary:"数珠", //24
		Dagger:"短剣", //25
		DualBlades:"双剣", //26
		Wand:"ワンド", //27
		Chakra:"チャクラウェポン", //28
	},
	Armor:{
		Cloth:{
			Shoulder:"クロース肩", //50
			Top:"クロース上着", //51
			Bottom:"クロースパンツ", //52
			Belt:"クロースベルト", //53
			Shoes:"クロース靴" //54
		},
		Leather:{
			Shoulder:"レザー肩", //60
			Top:"レザー上着", //61
			Bottom:"レザーパンツ", //62
			Belt:"レザーベルト", //63
			Shoes:"レザー靴" //64
		},
		Light:{
			Shoulder:"軽甲肩", //70
			Top:"軽甲上着", //71
			Bottom:"軽甲パンツ", //72
			Belt:"軽甲ベルト", //73
			Shoes:"軽甲靴" //74
		},
		Heavy:{
			Shoulder:"重甲肩", //80
			Top:"重甲上着", //81
			Bottom:"重甲パンツ", //82
			Belt:"重甲ベルト", //83
			Shoes:"重甲靴" //84
		},
		Plate:{
			Shoulder:"板金肩", //90
			Top:"板金上着", //91
			Bottom:"板金パンツ", //92
			Belt:"板金ベルト", //93
			Shoes:"板金靴" //94
		},
		
	},
	Accessories:{
		Bracelet:"腕輪", //130
		Necklace:"ネックレス", //131
		Ring:"指輪" //132
	},
	SpecialEquipment:{
		SubEquipment:"補助装備", //150
		MagicStone:"魔法石" //151
	}
};

var ItemList = {
<?php
	require("../private/dbdata.php");
		//rare
		$stmt = $dbh->prepare("
		SELECT 
			i.id,
			i.lv,
			ir.code as rank,
			it.code as type,
			CONCAT(\"魔法で封印された\",i.name) as name,
			CONCAT(ir.class,\" \",it.class) as class
		FROM 
			item as i
		LEFT OUTER JOIN
			itemrank as ir
			ON 1=ir.id
		LEFT OUTER JOIN
			itemtype as it
			ON i.type=it.id
		WHERE
			i.rank=0
		ORDER BY
			i.type,
			i.lv;
	");
	$stmt->execute();
?>
	Rare:[
<?php
	while($col = $stmt->fetch(PDO::FETCH_ASSOC)){
?>
		{
			Id:<?=$col['id']?>,
			Rank:<?=$col['rank']?>,
			Lv:<?=$col['lv']?>,
			Name:"<?=$col['name']?>",
			Type:<?=$col['type']?>,
			Class:"<?=$col['class']?>"
		},
<?php
	}
?>
	],
<?php
		//80epic
		$stmt = $dbh->prepare("
		SELECT 
			i.id,
			i.lv,
			ir.code as rank,
			it.code as type,
			i.name,
			CONCAT(ir.class,\" \",it.class) as class
		FROM 
			item as i
		LEFT OUTER JOIN
			itemrank as ir
			ON i.rank=ir.id
		LEFT OUTER JOIN
			itemtype as it
			ON i.type=it.id
		WHERE
			i.rank=3 AND 
			i.lv=80 AND
			i.characteristic=0 AND
			i.type < 150
		ORDER BY
			i.type,
			i.lv;
	");
	$stmt->execute();
?>
	Epic80:[
<?php
	while($col = $stmt->fetch(PDO::FETCH_ASSOC)){
?>
		{
			Id:<?=$col['id']?>,
			Rank:<?=$col['rank']?>,
			Lv:<?=$col['lv']?>,
			Name:"<?=$col['name']?>",
			Type:<?=$col['type']?>,
			Class:"<?=$col['class']?>",
			Count:0,
			Bit:0
		},
<?php
	}
?>
	],


<?php
		//80epic sp
		$stmt = $dbh->prepare("
		SELECT 
			i.id,
			i.lv,
			ir.code as rank,
			it.code as type,
			i.name,
			CONCAT(ir.class,\" \",it.class) as class
		FROM 
			item as i
		LEFT OUTER JOIN
			itemrank as ir
			ON i.rank=ir.id
		LEFT OUTER JOIN
			itemtype as it
			ON i.type=it.id
		WHERE
			i.rank=3 AND 
			i.lv=80 AND
			i.characteristic=0 AND
			i.type >= 150
		ORDER BY
			i.type,
			i.lv;
	");
	$stmt->execute();
?>
	Epic80Sp:[
<?php
	while($col = $stmt->fetch(PDO::FETCH_ASSOC)){
?>
		{
			Id:<?=$col['id']?>,
			Rank:<?=$col['rank']?>,
			Lv:<?=$col['lv']?>,
			Name:"<?=$col['name']?>",
			Type:<?=$col['type']?>,
			Class:"<?=$col['class']?>",
			Count:0,
			Bit:0
		},
<?php
	}
?>
	],

<?php
		//85epic
		$stmt = $dbh->prepare("
		SELECT 
			i.id,
			i.lv,
			ir.code as rank,
			it.code as type,
			i.name,
			CONCAT(ir.class,\" \",it.class) as class
		FROM 
			item as i
		LEFT OUTER JOIN
			itemrank as ir
			ON i.rank=ir.id
		LEFT OUTER JOIN
			itemtype as it
			ON i.type=it.id
		WHERE
			i.rank=3 AND 
			i.lv=85 AND
			i.characteristic=0 AND
			i.type < 150
		ORDER BY
			i.type,
			i.lv;
	");
	$stmt->execute();
?>
	Epic85:[
<?php
	while($col = $stmt->fetch(PDO::FETCH_ASSOC)){
?>
		{
			Id:<?=$col['id']?>,
			Rank:<?=$col['rank']?>,
			Lv:<?=$col['lv']?>,
			Name:"<?=$col['name']?>",
			Type:<?=$col['type']?>,
			Class:"<?=$col['class']?>",
			Count:0,
			Bit:0
		},
<?php
	}
?>
	],


<?php
		//85epic sp
		$stmt = $dbh->prepare("
		SELECT 
			i.id,
			i.lv,
			ir.code as rank,
			it.code as type,
			i.name,
			CONCAT(ir.class,\" \",it.class) as class
		FROM 
			item as i
		LEFT OUTER JOIN
			itemrank as ir
			ON i.rank=ir.id
		LEFT OUTER JOIN
			itemtype as it
			ON i.type=it.id
		WHERE
			i.rank=3 AND 
			i.lv=85 AND
			i.characteristic=0 AND
			i.type >= 150
		ORDER BY
			i.type,
			i.lv;
	");
	$stmt->execute();
?>
	Epic85Sp:[
<?php
	while($col = $stmt->fetch(PDO::FETCH_ASSOC)){
?>
		{
			Id:<?=$col['id']?>,
			Rank:<?=$col['rank']?>,
			Lv:<?=$col['lv']?>,
			Name:"<?=$col['name']?>",
			Type:<?=$col['type']?>,
			Class:"<?=$col['class']?>",
			Count:0,
			Bit:0
		},
<?php
	}
?>
	]
};