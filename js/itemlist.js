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
	Rare:[
		{
			Id:24,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたアスカロン",
			Type:ItemType.Weapons.Zanbato,
			Class:"rare zanbato"
		},
		{
			Id:25,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたヒペリクッス",
			Type:ItemType.Weapons.Zanbato,
			Class:"rare zanbato"
		},
		{
			Id:17,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された棘棍棒",
			Type:ItemType.Weapons.Bludgeon,
			Class:"rare bludgeon"
		},
		{
			Id:18,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたメタルスパイク",
			Type:ItemType.Weapons.Bludgeon,
			Class:"rare bludgeon"
		},
		{
			Id:1,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたオーシャンソード",
			Type:ItemType.Weapons.ShortSword,
			Class:"rare shortSword"
		},
		{
			Id:2,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたジェーダイト小剣",
			Type:ItemType.Weapons.ShortSword,
			Class:"rare shortSword"
		},
		{
			Id:8,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された劣刀",
			Type:ItemType.Weapons.Katana,
			Class:"rare katana"
		},
		{
			Id:9,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印された赤月刀",
			Type:ItemType.Weapons.Katana,
			Class:"rare katana"
		},
		{
			Id:31,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたエリックス",
			Type:ItemType.Weapons.Lightsabre,
			Class:"rare lightSabre"
		},
		{
			Id:32,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印された爆熱光剣",
			Type:ItemType.Weapons.Lightsabre,
			Class:"rare lightSabre"
		},
		{
			Id:61,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたメガパンチ",
			Type:ItemType.Weapons.BoxingGlove,
			Class:"rare boxingGlove"
		},
		{
			Id:62,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたストームパンチ",
			Type:ItemType.Weapons.BoxingGlove,
			Class:"rare boxingGlove"
		},
		{
			Id:54,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたシャープシューティング",
			Type:ItemType.Weapons.Claw,
			Class:"rare claw"
		},
		{
			Id:55,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたデルリアクロー",
			Type:ItemType.Weapons.Claw,
			Class:"rare claw"
		},
		{
			Id:38,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたトロン",
			Type:ItemType.Weapons.Knuckle,
			Class:"rare knuckle"
		},
		{
			Id:39,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたモジュラーナックル",
			Type:ItemType.Weapons.Knuckle,
			Class:"rare knuckle"
		},
		{
			Id:69,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたテクリカルトンファー",
			Type:ItemType.Weapons.Tonfa,
			Class:"rare tonfa"
		},
		{
			Id:70,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたスコールトンファー",
			Type:ItemType.Weapons.Tonfa,
			Class:"rare tonfa"
		},
		{
			Id:46,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたゴシックフロウ",
			Type:ItemType.Weapons.Gauntlets,
			Class:"rare gauntlets"
		},
		{
			Id:47,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたハイギアガントレット",
			Type:ItemType.Weapons.Gauntlets,
			Class:"rare gauntlets"
		},
		{
			Id:98,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたレールキャノン",
			Type:ItemType.Weapons.HandCannon,
			Class:"rare handCannon"
		},
		{
			Id:99,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印された光子キャノン",
			Type:ItemType.Weapons.HandCannon,
			Class:"rare handCannon"
		},
		{
			Id:91,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたマスケティア",
			Type:ItemType.Weapons.Musket,
			Class:"rare musket"
		},
		{
			Id:92,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたオカロンマスケット",
			Type:ItemType.Weapons.Musket,
			Class:"rare musket"
		},
		{
			Id:76,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたチーフ357",
			Type:ItemType.Weapons.Revolver,
			Class:"rare revolver"
		},
		{
			Id:77,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたレッドアイ",
			Type:ItemType.Weapons.Revolver,
			Class:"rare revolver"
		},
		{
			Id:105,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された天界のボウガン",
			Type:ItemType.Weapons.Bowgun,
			Class:"rare bowgun"
		},
		{
			Id:106,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたガニメデボウガン",
			Type:ItemType.Weapons.Bowgun,
			Class:"rare bowgun"
		},
		{
			Id:84,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたムカレフ",
			Type:ItemType.Weapons.AutoGun,
			Class:"rare autoGun"
		},
		{
			Id:85,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたポルド17",
			Type:ItemType.Weapons.AutoGun,
			Class:"rare autoGun"
		},
		{
			Id:112,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された頑丈な槍",
			Type:ItemType.Weapons.Spear,
			Class:"rare spear"
		},
		{
			Id:113,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたパティスカ",
			Type:ItemType.Weapons.Spear,
			Class:"rare spear"
		},
		{
			Id:119,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された電磁気棒",
			Type:ItemType.Weapons.Pole,
			Class:"rare pole"
		},
		{
			Id:120,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたセフテック棒",
			Type:ItemType.Weapons.Pole,
			Class:"rare pole"
		},
		{
			Id:133,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された羽根のかけらスタッフ",
			Type:ItemType.Weapons.Staff,
			Class:"rare staff"
		},
		{
			Id:134,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印された妖精の羽スタッフ",
			Type:ItemType.Weapons.Staff,
			Class:"rare staff"
		},
		{
			Id:126,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたコイルロード",
			Type:ItemType.Weapons.Rod,
			Class:"rare rod"
		},
		{
			Id:127,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたレプリッド",
			Type:ItemType.Weapons.Rod,
			Class:"rare rod"
		},
		{
			Id:140,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたポンピングブルーム",
			Type:ItemType.Weapons.Broom,
			Class:"rare broom"
		},
		{
			Id:141,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたオートクリーンホウキ",
			Type:ItemType.Weapons.Broom,
			Class:"rare broom"
		},
		{
			Id:178,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたボーンバトルアックス",
			Type:ItemType.Weapons.BattleAxe,
			Class:"rare battleAxe"
		},
		{
			Id:179,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたデビルアイ",
			Type:ItemType.Weapons.BattleAxe,
			Class:"rare battleAxe"
		},
		{
			Id:163,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された交鋒 トーテム",
			Type:ItemType.Weapons.Totem,
			Class:"rare totem"
		},
		{
			Id:164,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたプラズマトーテム",
			Type:ItemType.Weapons.Totem,
			Class:"rare totem"
		},
		{
			Id:149,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された改革の十字架",
			Type:ItemType.Weapons.Cross,
			Class:"rare cross"
		},
		{
			Id:150,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印された生命の十字架",
			Type:ItemType.Weapons.Cross,
			Class:"rare cross"
		},
		{
			Id:170,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたデュアルライトサイズ",
			Type:ItemType.Weapons.Scythe,
			Class:"rare scythe"
		},
		{
			Id:171,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたデビリアンサイズ",
			Type:ItemType.Weapons.Scythe,
			Class:"rare scythe"
		},
		{
			Id:156,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された鉄片ロザリー",
			Type:ItemType.Weapons.Rosary,
			Class:"rare rosary"
		},
		{
			Id:157,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたレブラー",
			Type:ItemType.Weapons.Rosary,
			Class:"rare rosary"
		},
		{
			Id:185,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたカネツネ",
			Type:ItemType.Weapons.Dagger,
			Class:"rare dagger"
		},
		{
			Id:186,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたアッシュバン",
			Type:ItemType.Weapons.Dagger,
			Class:"rare dagger"
		},
		{
			Id:192,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたパラリオン",
			Type:ItemType.Weapons.DualBlades,
			Class:"rare dualBlades"
		},
		{
			Id:193,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたラムスタン",
			Type:ItemType.Weapons.DualBlades,
			Class:"rare dualBlades"
		},
		{
			Id:200,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された月のワンド",
			Type:ItemType.Weapons.Wand,
			Class:"rare wand"
		},
		{
			Id:201,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたクローゼモス",
			Type:ItemType.Weapons.Wand,
			Class:"rare wand"
		},
		{
			Id:207,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された噛殺",
			Type:ItemType.Weapons.Chakra,
			Class:"rare chakra"
		},
		{
			Id:208,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印された火車",
			Type:ItemType.Weapons.Chakra,
			Class:"rare chakra"
		},
		{
			Id:215,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたライトニングクロースショルダー",
			Type:ItemType.Armor.Cloth.Shoulder,
			Class:"rare cloth shoulder"
		},
		{
			Id:220,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたレイキオンクロースショルダー",
			Type:ItemType.Armor.Cloth.Shoulder,
			Class:"rare cloth shoulder"
		},
		{
			Id:216,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたライトニングクロースジャケット",
			Type:ItemType.Armor.Cloth.Top,
			Class:"rare cloth top"
		},
		{
			Id:221,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたレイキオンクロース上着",
			Type:ItemType.Armor.Cloth.Top,
			Class:"rare cloth top"
		},
		{
			Id:217,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたライトニングクロースパンツ",
			Type:ItemType.Armor.Cloth.Bottom,
			Class:"rare cloth bottom"
		},
		{
			Id:222,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたレイキオンクロースパンツ",
			Type:ItemType.Armor.Cloth.Bottom,
			Class:"rare cloth bottom"
		},
		{
			Id:218,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたライトニングクロースベルト",
			Type:ItemType.Armor.Cloth.Belt,
			Class:"rare cloth belt"
		},
		{
			Id:223,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたレイキオンクロースベルト",
			Type:ItemType.Armor.Cloth.Belt,
			Class:"rare cloth belt"
		},
		{
			Id:219,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたライトニングクロース靴",
			Type:ItemType.Armor.Cloth.Shoes,
			Class:"rare cloth shoes"
		},
		{
			Id:224,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたレイキオンクロース靴",
			Type:ItemType.Armor.Cloth.Shoes,
			Class:"rare cloth shoes"
		},
		{
			Id:250,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された兵士のレザーショルダーパッド",
			Type:ItemType.Armor.Leather.Shoulder,
			Class:"rare leather shoulder"
		},
		{
			Id:255,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたクリンクレザーショルダーパッド",
			Type:ItemType.Armor.Leather.Shoulder,
			Class:"rare leather shoulder"
		},
		{
			Id:251,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された兵士のレザーチュニック",
			Type:ItemType.Armor.Leather.Top,
			Class:"rare leather top"
		},
		{
			Id:256,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたクリンクレザーチュニック",
			Type:ItemType.Armor.Leather.Top,
			Class:"rare leather top"
		},
		{
			Id:252,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された兵士のレザートラウザ",
			Type:ItemType.Armor.Leather.Bottom,
			Class:"rare leather bottom"
		},
		{
			Id:257,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたクリンクレザートラウザ",
			Type:ItemType.Armor.Leather.Bottom,
			Class:"rare leather bottom"
		},
		{
			Id:253,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された兵士のレザーサッシュ",
			Type:ItemType.Armor.Leather.Belt,
			Class:"rare leather belt"
		},
		{
			Id:258,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたクリンクレザーサッシュ",
			Type:ItemType.Armor.Leather.Belt,
			Class:"rare leather belt"
		},
		{
			Id:254,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された兵士のレザーブーツ",
			Type:ItemType.Armor.Leather.Shoes,
			Class:"rare leather shoes"
		},
		{
			Id:259,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたクリンクレザーブーツ",
			Type:ItemType.Armor.Leather.Shoes,
			Class:"rare leather shoes"
		},
		{
			Id:285,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたカルメルサンショルダーパッド",
			Type:ItemType.Armor.Light.Shoulder,
			Class:"rare light shoulder"
		},
		{
			Id:290,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたグラニットセグメンタタエマント",
			Type:ItemType.Armor.Light.Shoulder,
			Class:"rare light shoulder"
		},
		{
			Id:286,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたカルメルサン上甲",
			Type:ItemType.Armor.Light.Top,
			Class:"rare light top"
		},
		{
			Id:291,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたグラニットセグメンタタエアーマー",
			Type:ItemType.Armor.Light.Top,
			Class:"rare light top"
		},
		{
			Id:287,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたカルメルサン下甲",
			Type:ItemType.Armor.Light.Bottom,
			Class:"rare light bottom"
		},
		{
			Id:292,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたグラニットセグメンタタエレギンス",
			Type:ItemType.Armor.Light.Bottom,
			Class:"rare light bottom"
		},
		{
			Id:288,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたカルメルサンバンド",
			Type:ItemType.Armor.Light.Belt,
			Class:"rare light belt"
		},
		{
			Id:293,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたグラニットセグメンタタエベルト",
			Type:ItemType.Armor.Light.Belt,
			Class:"rare light belt"
		},
		{
			Id:289,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたカルメルサン靴",
			Type:ItemType.Armor.Light.Shoes,
			Class:"rare light shoes"
		},
		{
			Id:294,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたグラニットセグメンタタエブーツ",
			Type:ItemType.Armor.Light.Shoes,
			Class:"rare light shoes"
		},
		{
			Id:320,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたステーションラメラーショルダーパッド",
			Type:ItemType.Armor.Heavy.Shoulder,
			Class:"rare heavy shoulder"
		},
		{
			Id:325,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたリヴィットスポールダー",
			Type:ItemType.Armor.Heavy.Shoulder,
			Class:"rare heavy shoulder"
		},
		{
			Id:321,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたステーションラメラーアーマー",
			Type:ItemType.Armor.Heavy.Top,
			Class:"rare heavy top"
		},
		{
			Id:326,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたリヴィット胸甲",
			Type:ItemType.Armor.Heavy.Top,
			Class:"rare heavy top"
		},
		{
			Id:322,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたステーションラメラーゲートル",
			Type:ItemType.Armor.Heavy.Bottom,
			Class:"rare heavy bottom"
		},
		{
			Id:327,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたリヴィットゲートル",
			Type:ItemType.Armor.Heavy.Bottom,
			Class:"rare heavy bottom"
		},
		{
			Id:323,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたステーションラメラーベルト",
			Type:ItemType.Armor.Heavy.Belt,
			Class:"rare heavy belt"
		},
		{
			Id:328,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたリヴィットコイル",
			Type:ItemType.Armor.Heavy.Belt,
			Class:"rare heavy belt"
		},
		{
			Id:324,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたステーションラメラーブーツ",
			Type:ItemType.Armor.Heavy.Shoes,
			Class:"rare heavy shoes"
		},
		{
			Id:329,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたリヴィットサバトン",
			Type:ItemType.Armor.Heavy.Shoes,
			Class:"rare heavy shoes"
		},
		{
			Id:355,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたサラマンダー鋼鉄ショルダーパッド",
			Type:ItemType.Armor.Plate.Shoulder,
			Class:"rare plate shoulder"
		},
		{
			Id:360,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたヘキサゴンポールドロン",
			Type:ItemType.Armor.Plate.Shoulder,
			Class:"rare plate shoulder"
		},
		{
			Id:356,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたサラマンダー鋼鉄レジスト",
			Type:ItemType.Armor.Plate.Top,
			Class:"rare plate top"
		},
		{
			Id:361,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたヘキサゴンメイル",
			Type:ItemType.Armor.Plate.Top,
			Class:"rare plate top"
		},
		{
			Id:357,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたサラマンダー鋼鉄グリーブ",
			Type:ItemType.Armor.Plate.Bottom,
			Class:"rare plate bottom"
		},
		{
			Id:362,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたヘキサゴングリーブ",
			Type:ItemType.Armor.Plate.Bottom,
			Class:"rare plate bottom"
		},
		{
			Id:358,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたサラマンダー鋼鉄ガード",
			Type:ItemType.Armor.Plate.Belt,
			Class:"rare plate belt"
		},
		{
			Id:363,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたヘキサゴンガードル",
			Type:ItemType.Armor.Plate.Belt,
			Class:"rare plate belt"
		},
		{
			Id:359,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたサラマンダー鋼鉄ブーツ",
			Type:ItemType.Armor.Plate.Shoes,
			Class:"rare plate shoes"
		},
		{
			Id:364,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたヘキサゴンサバトン",
			Type:ItemType.Armor.Plate.Shoes,
			Class:"rare plate shoes"
		},
		{
			Id:390,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたサンストーンブレスレット",
			Type:ItemType.Accessories.Bracelet,
			Class:"rare bracelet"
		},
		{
			Id:393,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたイルライト腕輪",
			Type:ItemType.Accessories.Bracelet,
			Class:"rare bracelet"
		},
		{
			Id:391,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたサンストーンペンダント",
			Type:ItemType.Accessories.Necklace,
			Class:"rare necklace"
		},
		{
			Id:394,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたイルライトネックレス",
			Type:ItemType.Accessories.Necklace,
			Class:"rare necklace"
		},
		{
			Id:392,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印されたサンストーンリング",
			Type:ItemType.Accessories.Ring,
			Class:"rare ring"
		},
		{
			Id:395,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたイルライト指輪",
			Type:ItemType.Accessories.Ring,
			Class:"rare ring"
		},
		{
			Id:546,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された保護具",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"rare subEquipment"
		},
		{
			Id:547,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印されたグレノーブル手袋",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"rare subEquipment"
		},
		{
			Id:676,
			Rank:ItemRank.Rare,
			Lv:80,
			Name:"魔法で封印された雲母",
			Type:ItemType.SpecialEquipment.MagicStone,
			Class:"rare magicStone"
		},
		{
			Id:677,
			Rank:ItemRank.Rare,
			Lv:85,
			Name:"魔法で封印された万像石",
			Type:ItemType.SpecialEquipment.MagicStone,
			Class:"rare magicStone"
		},
	],
	Epic80:[
		{
			Id:28,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"デビルオブフレア",
			Type:ItemType.Weapons.Zanbato,
			Class:"epic zanbato",
			Count:0,
			Bit:0
		},
		{
			Id:21,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"怒れるヘルクレス",
			Type:ItemType.Weapons.Bludgeon,
			Class:"epic bludgeon",
			Count:0,
			Bit:0
		},
		{
			Id:5,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ボーンレッドドラゴン",
			Type:ItemType.Weapons.ShortSword,
			Class:"epic shortSword",
			Count:0,
			Bit:0
		},
		{
			Id:13,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"火炎刀 - カリベラ",
			Type:ItemType.Weapons.Katana,
			Class:"epic katana",
			Count:0,
			Bit:0
		},
		{
			Id:35,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"苦痛の女王の悲鳴",
			Type:ItemType.Weapons.Lightsabre,
			Class:"epic lightSabre",
			Count:0,
			Bit:0
		},
		{
			Id:65,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"マナユーズ",
			Type:ItemType.Weapons.BoxingGlove,
			Class:"epic boxingGlove",
			Count:0,
			Bit:0
		},
		{
			Id:58,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"亡霊の爪",
			Type:ItemType.Weapons.Claw,
			Class:"epic claw",
			Count:0,
			Bit:0
		},
		{
			Id:43,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"マナ増強",
			Type:ItemType.Weapons.Knuckle,
			Class:"epic knuckle",
			Count:0,
			Bit:0
		},
		{
			Id:73,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"マナミスリルバー",
			Type:ItemType.Weapons.Tonfa,
			Class:"epic tonfa",
			Count:0,
			Bit:0
		},
		{
			Id:50,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"堕落した悪魔の手",
			Type:ItemType.Weapons.Gauntlets,
			Class:"epic gauntlets",
			Count:0,
			Bit:0
		},
		{
			Id:102,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ブームアンドブーム",
			Type:ItemType.Weapons.HandCannon,
			Class:"epic handCannon",
			Count:0,
			Bit:0
		},
		{
			Id:95,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"火炎のニールスナイパー",
			Type:ItemType.Weapons.Musket,
			Class:"epic musket",
			Count:0,
			Bit:0
		},
		{
			Id:81,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"銃身改造ウェブリーマーク",
			Type:ItemType.Weapons.Revolver,
			Class:"epic revolver",
			Count:0,
			Bit:0
		},
		{
			Id:109,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"暴風の轢殺",
			Type:ItemType.Weapons.Bowgun,
			Class:"epic bowgun",
			Count:0,
			Bit:0
		},
		{
			Id:88,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"半自動シャッフルラクター",
			Type:ItemType.Weapons.AutoGun,
			Class:"epic autoGun",
			Count:0,
			Bit:0
		},
		{
			Id:116,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"皇室近衛隊の銃剣",
			Type:ItemType.Weapons.Spear,
			Class:"epic spear",
			Count:0,
			Bit:0
		},
		{
			Id:123,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"チェスナイト",
			Type:ItemType.Weapons.Pole,
			Class:"epic pole",
			Count:0,
			Bit:0
		},
		{
			Id:137,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"クロコダイルバードの新築の巣",
			Type:ItemType.Weapons.Staff,
			Class:"epic staff",
			Count:0,
			Bit:0
		},
		{
			Id:130,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"エアーロード",
			Type:ItemType.Weapons.Rod,
			Class:"epic rod",
			Count:0,
			Bit:0
		},
		{
			Id:144,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ハンドメイドのほうき",
			Type:ItemType.Weapons.Broom,
			Class:"epic broom",
			Count:0,
			Bit:0
		},
		{
			Id:182,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"虐殺の断頭台",
			Type:ItemType.Weapons.BattleAxe,
			Class:"epic battleAxe",
			Count:0,
			Bit:0
		},
		{
			Id:167,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"青龍戴",
			Type:ItemType.Weapons.Totem,
			Class:"epic totem",
			Count:0,
			Bit:0
		},
		{
			Id:153,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"根深い十字架",
			Type:ItemType.Weapons.Cross,
			Class:"epic cross",
			Count:0,
			Bit:0
		},
		{
			Id:175,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"凍りついた共振の鎌",
			Type:ItemType.Weapons.Scythe,
			Class:"epic scythe",
			Count:0,
			Bit:0
		},
		{
			Id:160,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"明強聖珠",
			Type:ItemType.Weapons.Rosary,
			Class:"epic rosary",
			Count:0,
			Bit:0
		},
		{
			Id:189,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"スパイラルスピン",
			Type:ItemType.Weapons.Dagger,
			Class:"epic dagger",
			Count:0,
			Bit:0
		},
		{
			Id:196,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"黒尾双剣",
			Type:ItemType.Weapons.DualBlades,
			Class:"epic dualBlades",
			Count:0,
			Bit:0
		},
		{
			Id:204,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"破滅の鉄球",
			Type:ItemType.Weapons.Wand,
			Class:"epic wand",
			Count:0,
			Bit:0
		},
		{
			Id:211,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"火光衝天:滅",
			Type:ItemType.Weapons.Chakra,
			Class:"epic chakra",
			Count:0,
			Bit:0
		},
		{
			Id:235,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ダークゴスショルダー",
			Type:ItemType.Armor.Cloth.Shoulder,
			Class:"epic cloth shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:236,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ダークゴスジャケット",
			Type:ItemType.Armor.Cloth.Top,
			Class:"epic cloth top",
			Count:0,
			Bit:0
		},

		{
			Id:237,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ダークゴスパンツ",
			Type:ItemType.Armor.Cloth.Bottom,
			Class:"epic cloth bottom",
			Count:0,
			Bit:0
		},
		{
			Id:238,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ダークゴスベルト",
			Type:ItemType.Armor.Cloth.Belt,
			Class:"epic cloth belt",
			Count:0,
			Bit:0
		},
		{
			Id:239,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ダークゴスサンダル",
			Type:ItemType.Armor.Cloth.Shoes,
			Class:"epic cloth shoes",
			Count:0,
			Bit:0
		},
		{
			Id:270,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"俊敏なカメレオンレザーショルダー",
			Type:ItemType.Armor.Leather.Shoulder,
			Class:"epic leather shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:271,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"狡猾なカメレオンレザー上着",
			Type:ItemType.Armor.Leather.Top,
			Class:"epic leather top",
			Count:0,
			Bit:0
		},
		{
			Id:272,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"敏捷なカメレオンレザーパンツ",
			Type:ItemType.Armor.Leather.Bottom,
			Class:"epic leather bottom",
			Count:0,
			Bit:0
		},
		{
			Id:273,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"密やかなカメレオンレザーベルト",
			Type:ItemType.Armor.Leather.Belt,
			Class:"epic leather belt",
			Count:0,
			Bit:0
		},
		{
			Id:274,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"素早いカメレオンレザー靴",
			Type:ItemType.Armor.Leather.Shoes,
			Class:"epic leather shoes",
			Count:0,
			Bit:0
		},
		{
			Id:305,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"サブマリンボルケーノショルダー",
			Type:ItemType.Armor.Light.Shoulder,
			Class:"epic light shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:306,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"サブマリンボルケーノジャケット",
			Type:ItemType.Armor.Light.Top,
			Class:"epic light top",
			Count:0,
			Bit:0
		},
		{
			Id:307,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"サブマリンボルケーノパンツ",
			Type:ItemType.Armor.Light.Bottom,
			Class:"epic light bottom",
			Count:0,
			Bit:0
		},
		{
			Id:308,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"サブマリンボルケーノベルト",
			Type:ItemType.Armor.Light.Belt,
			Class:"epic light belt",
			Count:0,
			Bit:0
		},
		{
			Id:309,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"サブマリンボルケーノ靴",
			Type:ItemType.Armor.Light.Shoes,
			Class:"epic light shoes",
			Count:0,
			Bit:0
		},
		{
			Id:340,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"未知のダークホールショルダー",
			Type:ItemType.Armor.Heavy.Shoulder,
			Class:"epic heavy shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:341,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"未知のダークホール上着",
			Type:ItemType.Armor.Heavy.Top,
			Class:"epic heavy top",
			Count:0,
			Bit:0
		},
		{
			Id:342,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"未知のダークホールパンツ",
			Type:ItemType.Armor.Heavy.Bottom,
			Class:"epic heavy bottom",
			Count:0,
			Bit:0
		},
		{
			Id:343,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"未知のダークホールベルト",
			Type:ItemType.Armor.Heavy.Belt,
			Class:"epic heavy belt",
			Count:0,
			Bit:0
		},
		{
			Id:344,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"未知のダークホールシューズ",
			Type:ItemType.Armor.Heavy.Shoes,
			Class:"epic heavy shoes",
			Count:0,
			Bit:0
		},
		{
			Id:375,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"インフィニティレクイエム板金アミス",
			Type:ItemType.Armor.Plate.Shoulder,
			Class:"epic plate shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:376,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"インフィニティレクイエム板金上着",
			Type:ItemType.Armor.Plate.Top,
			Class:"epic plate top",
			Count:0,
			Bit:0
		},
		{
			Id:377,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"インフィニティレクイエム板金パンツ",
			Type:ItemType.Armor.Plate.Bottom,
			Class:"epic plate bottom",
			Count:0,
			Bit:0
		},
		{
			Id:378,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"インフィニティレクイエム板金コイル",
			Type:ItemType.Armor.Plate.Belt,
			Class:"epic plate belt",
			Count:0,
			Bit:0
		},
		{
			Id:379,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"インフィニティレクイエム板金ブーツ",
			Type:ItemType.Armor.Plate.Shoes,
			Class:"epic plate shoes",
			Count:0,
			Bit:0
		},
		{
			Id:402,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"スーパースターアームレット",
			Type:ItemType.Accessories.Bracelet,
			Class:"epic bracelet",
			Count:0,
			Bit:0
		},
		{
			Id:403,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"スーパースターネックレス",
			Type:ItemType.Accessories.Necklace,
			Class:"epic necklace",
			Count:0,
			Bit:0
		},
		{
			Id:404,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"スーパースターリング",
			Type:ItemType.Accessories.Ring,
			Class:"epic ring",
			Count:0,
			Bit:0
		},
	],


	Epic80Sp:[
		{
			Id:611,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ウォーロック",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:628,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - 剣聖",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:629,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - ブラッドイーブル",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:630,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - ダークロード",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:631,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - 因陀羅天",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:632,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"剣魔の魂霊グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:633,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ソードマスター",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:634,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - デーモンスレイヤー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:635,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ノーブレス",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:636,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 剣魔",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:637,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - 念帝",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:638,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - カイザー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:639,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - アルティメットディーバ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:640,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - 用毒門主",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:627,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ピピの召喚グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:626,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘルムの惨殺グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:625,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ルイゼのアクティビティー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:612,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - フローズンハート",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:613,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"不死檀の黒いマスク",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:614,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘルムの殺戮グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:615,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"風震の武道グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:616,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アルベルトの決闘グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:617,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"イキの魔法グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:618,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"マイアの魔法グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:619,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"神風の修練グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:620,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ランゼルスの指揮グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:621,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ミュウの戦闘グローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:622,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ロキシーのグローブ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:623,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ジベン皇国の腕章",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:624,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"シンヤの丸薬",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:641,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - バガボンド",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:642,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ダークテンプラー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:643,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 剣豪",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:660,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - ジャスティス",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:661,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - セイント",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:662,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - イモータル",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:663,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - 太乙仙人",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:664,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - クリムゾンローゼ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:665,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - ストームトルーパー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:666,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - オプティマス",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:667,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - フレイヤ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:668,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ナイトメア",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:669,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - シャドウダンサー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:670,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - グランドマスター",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:671,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - 冥王",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:672,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - 念皇 光風霽月",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:659,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - エクリプス",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:658,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - ジーニーウィズ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:657,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - アシュタルテ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:644,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 暗帝",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:645,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アニスの追跡手袋",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:646,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - エルブンナイト",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:647,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ピースメーカー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:648,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - カオス",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:649,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 魔王",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:650,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - レイヴン",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:651,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - デストロイヤー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:652,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - プライム",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:653,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - コマンダー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:654,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - くノ一",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:655,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - イズナビ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:656,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - オーバーマインド",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:673,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"覚醒した者の覚悟 - 覇皇",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:548,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ウェポンマスター",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:565,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ランチャー(女)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:566,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - メカニック(女)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:567,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - スピッドファイア(女)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:568,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - エレメンタルマスター",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:569,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - サモナー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:570,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - バトルメイジ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:571,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - 魔導学者",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:572,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - クルセイダー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:573,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - インファイター",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:574,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - 物理/退魔士",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:575,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - 魔法/退魔士",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:576,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - アベンジャー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:577,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ローグ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:564,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - レンジャー(女)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:563,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - スピッドファイア(男)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:562,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - メカニック(男)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:549,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - バーサーカー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:550,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ソウルブリンガー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:551,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - 阿修羅",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:552,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ネンマスター(女)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:553,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ストライカー(女)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:554,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - 喧嘩屋(女)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:555,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - グラップラー(女)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:556,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ネンマスター(男)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:557,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ストライカー(男)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:558,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - 喧嘩屋(男)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:559,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - グラップラー(男)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:560,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - レンジャー(男)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:561,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - ランチャー(男)",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:578,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - 死霊術師",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:579,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - エレメンタルボマー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:580,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"アテナの智恵 - 氷結師",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:597,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ブラッディア",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:598,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ヘビーバレル",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:599,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - メタルハート",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:600,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - バルキリー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:601,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - アークメイジ",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:602,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ムーンエンプレス",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:603,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ベラトリックス",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:604,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - トリックスター",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:605,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ホーリーオーダー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:606,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ゴッドハンド",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:607,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 竜闘士",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:608,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ドゥームズガーディアン",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:609,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - シルバームーン",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:596,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ジェネラル",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:595,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - マイスター",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:594,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ブラスター",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:581,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 剣聖",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:582,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ヘルベンター",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:583,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ソウルテイカー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:584,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 大暗黒天",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:585,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 百花繚乱",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:586,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - チャンピオン",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:587,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 毒王",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:588,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - トルネード",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:589,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 狂虎帝",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:590,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 武極",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:591,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - 千手羅漢",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:592,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - ジャイアント",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:593,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - デスペラド",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:610,
			Rank:ItemRank.Epic,
			Lv:80,
			Name:"ヘラの守護 - デスブリンガー",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
	],

	Epic85:[
		{
			Id:29,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"別雲剣",
			Type:ItemType.Weapons.Zanbato,
			Class:"epic zanbato",
			Count:0,
			Bit:0
		},
		{
			Id:30,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"陽剣:干将",
			Type:ItemType.Weapons.Zanbato,
			Class:"epic zanbato",
			Count:0,
			Bit:0
		},
		{
			Id:23,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ヤンオルの木の枝",
			Type:ItemType.Weapons.Bludgeon,
			Class:"epic bludgeon",
			Count:0,
			Bit:0
		},
		{
			Id:22,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ミスティルテイン",
			Type:ItemType.Weapons.Bludgeon,
			Class:"epic bludgeon",
			Count:0,
			Bit:0
		},
		{
			Id:6,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"天叢雲剣",
			Type:ItemType.Weapons.ShortSword,
			Class:"epic shortSword",
			Count:0,
			Bit:0
		},
		{
			Id:7,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"陰剣:莫耶",
			Type:ItemType.Weapons.ShortSword,
			Class:"epic shortSword",
			Count:0,
			Bit:0
		},
		{
			Id:16,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"魔法剣:七支刀",
			Type:ItemType.Weapons.Katana,
			Class:"epic katana",
			Count:0,
			Bit:0
		},
		{
			Id:15,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"名刀正宗",
			Type:ItemType.Weapons.Katana,
			Class:"epic katana",
			Count:0,
			Bit:0
		},
		{
			Id:14,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"トリニティイトーニア",
			Type:ItemType.Weapons.Katana,
			Class:"epic katana",
			Count:0,
			Bit:0
		},
		{
			Id:37,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"バルムンク",
			Type:ItemType.Weapons.Lightsabre,
			Class:"epic lightSabre",
			Count:0,
			Bit:0
		},
		{
			Id:36,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"雷剣:ゴルン",
			Type:ItemType.Weapons.Lightsabre,
			Class:"epic lightSabre",
			Count:0,
			Bit:0
		},
		{
			Id:66,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"パウロ・キドニーブロー",
			Type:ItemType.Weapons.BoxingGlove,
			Class:"epic boxingGlove",
			Count:0,
			Bit:0
		},
		{
			Id:68,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"N.O.V.A",
			Type:ItemType.Weapons.BoxingGlove,
			Class:"epic boxingGlove",
			Count:0,
			Bit:0
		},
		{
			Id:67,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"影のさすらい人",
			Type:ItemType.Weapons.BoxingGlove,
			Class:"epic boxingGlove",
			Count:0,
			Bit:0
		},
		{
			Id:59,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"タルウィ・ザリーチェ",
			Type:ItemType.Weapons.Claw,
			Class:"epic claw",
			Count:0,
			Bit:0
		},
		{
			Id:60,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"悪魔の熊手:イグノア",
			Type:ItemType.Weapons.Claw,
			Class:"epic claw",
			Count:0,
			Bit:0
		},
		{
			Id:45,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ベルセルク",
			Type:ItemType.Weapons.Knuckle,
			Class:"epic knuckle",
			Count:0,
			Bit:0
		},
		{
			Id:44,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ライキリ",
			Type:ItemType.Weapons.Knuckle,
			Class:"epic knuckle",
			Count:0,
			Bit:0
		},
		{
			Id:75,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"襲撃のドラウプニル",
			Type:ItemType.Weapons.Tonfa,
			Class:"epic tonfa",
			Count:0,
			Bit:0
		},
		{
			Id:74,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ウヨのゴールデントンファー",
			Type:ItemType.Weapons.Tonfa,
			Class:"epic tonfa",
			Count:0,
			Bit:0
		},
		{
			Id:53,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ロシアンルーレット",
			Type:ItemType.Weapons.Gauntlets,
			Class:"epic gauntlets",
			Count:0,
			Bit:0
		},
		{
			Id:52,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"未完成インフィニティーガントレット",
			Type:ItemType.Weapons.Gauntlets,
			Class:"epic gauntlets",
			Count:0,
			Bit:0
		},
		{
			Id:51,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"猛虎連環掌",
			Type:ItemType.Weapons.Gauntlets,
			Class:"epic gauntlets",
			Count:0,
			Bit:0
		},
		{
			Id:103,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ウヨの黄金キャノン",
			Type:ItemType.Weapons.HandCannon,
			Class:"epic handCannon",
			Count:0,
			Bit:0
		},
		{
			Id:104,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"レーザーホリック",
			Type:ItemType.Weapons.HandCannon,
			Class:"epic handCannon",
			Count:0,
			Bit:0
		},
		{
			Id:96,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"コードナンバー608",
			Type:ItemType.Weapons.Musket,
			Class:"epic musket",
			Count:0,
			Bit:0
		},
		{
			Id:97,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ルール・オブ・サム",
			Type:ItemType.Weapons.Musket,
			Class:"epic musket",
			Count:0,
			Bit:0
		},
		{
			Id:83,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ロード・オブ・レンジャー",
			Type:ItemType.Weapons.Revolver,
			Class:"epic revolver",
			Count:0,
			Bit:0
		},
		{
			Id:82,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"シルバーブレット",
			Type:ItemType.Weapons.Revolver,
			Class:"epic revolver",
			Count:0,
			Bit:0
		},
		{
			Id:110,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ジェネラルボウガン",
			Type:ItemType.Weapons.Bowgun,
			Class:"epic bowgun",
			Count:0,
			Bit:0
		},
		{
			Id:111,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"氷炎のボウガン",
			Type:ItemType.Weapons.Bowgun,
			Class:"epic bowgun",
			Count:0,
			Bit:0
		},
		{
			Id:90,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"オープンファイア",
			Type:ItemType.Weapons.AutoGun,
			Class:"epic autoGun",
			Count:0,
			Bit:0
		},
		{
			Id:89,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"マイスターの憤怒",
			Type:ItemType.Weapons.AutoGun,
			Class:"epic autoGun",
			Count:0,
			Bit:0
		},
		{
			Id:117,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"未完成インフィニティーピアス",
			Type:ItemType.Weapons.Spear,
			Class:"epic spear",
			Count:0,
			Bit:0
		},
		{
			Id:118,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"戦場の女神の槍",
			Type:ItemType.Weapons.Spear,
			Class:"epic spear",
			Count:0,
			Bit:0
		},
		{
			Id:124,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"マスター・オブ・チェイサー",
			Type:ItemType.Weapons.Pole,
			Class:"epic pole",
			Count:0,
			Bit:0
		},
		{
			Id:125,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ラブラブ!クリスタルトゥインクルマジックショット",
			Type:ItemType.Weapons.Pole,
			Class:"epic pole",
			Count:0,
			Bit:0
		},
		{
			Id:139,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ステップ・オブ・ウィザード",
			Type:ItemType.Weapons.Staff,
			Class:"epic staff",
			Count:0,
			Bit:0
		},
		{
			Id:138,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"シャイニングインテリジェンス",
			Type:ItemType.Weapons.Staff,
			Class:"epic staff",
			Count:0,
			Bit:0
		},
		{
			Id:132,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"羊飼いのロッド",
			Type:ItemType.Weapons.Rod,
			Class:"epic rod",
			Count:0,
			Bit:0
		},
		{
			Id:131,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"精霊王の守護",
			Type:ItemType.Weapons.Rod,
			Class:"epic rod",
			Count:0,
			Bit:0
		},
		{
			Id:148,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"マナブルーム",
			Type:ItemType.Weapons.Broom,
			Class:"epic broom",
			Count:0,
			Bit:0
		},
		{
			Id:147,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"スノープリンセス",
			Type:ItemType.Weapons.Broom,
			Class:"epic broom",
			Count:0,
			Bit:0
		},
		{
			Id:146,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ラークンバキューム",
			Type:ItemType.Weapons.Broom,
			Class:"epic broom",
			Count:0,
			Bit:0
		},
		{
			Id:145,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"人魚のハエ叩き",
			Type:ItemType.Weapons.Broom,
			Class:"epic broom",
			Count:0,
			Bit:0
		},
		{
			Id:183,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"デストラクション",
			Type:ItemType.Weapons.BattleAxe,
			Class:"epic battleAxe",
			Count:0,
			Bit:0
		},
		{
			Id:184,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ハイパーリオン",
			Type:ItemType.Weapons.BattleAxe,
			Class:"epic battleAxe",
			Count:0,
			Bit:0
		},
		{
			Id:168,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ずどん:ずどん打",
			Type:ItemType.Weapons.Totem,
			Class:"epic totem",
			Count:0,
			Bit:0
		},
		{
			Id:169,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"風雲雷雨",
			Type:ItemType.Weapons.Totem,
			Class:"epic totem",
			Count:0,
			Bit:0
		},
		{
			Id:155,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"呪われた十字架:トルア",
			Type:ItemType.Weapons.Cross,
			Class:"epic cross",
			Count:0,
			Bit:0
		},
		{
			Id:154,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ラバルム",
			Type:ItemType.Weapons.Cross,
			Class:"epic cross",
			Count:0,
			Bit:0
		},
		{
			Id:176,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"宣告:死神の鎌",
			Type:ItemType.Weapons.Scythe,
			Class:"epic scythe",
			Count:0,
			Bit:0
		},
		{
			Id:177,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"アングラ・マイニュー",
			Type:ItemType.Weapons.Scythe,
			Class:"epic scythe",
			Count:0,
			Bit:0
		},
		{
			Id:162,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"百八雷珠",
			Type:ItemType.Weapons.Rosary,
			Class:"epic rosary",
			Count:0,
			Bit:0
		},
		{
			Id:161,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ウヨの黄金数珠",
			Type:ItemType.Weapons.Rosary,
			Class:"epic rosary",
			Count:0,
			Bit:0
		},
		{
			Id:190,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"シルバースピリット",
			Type:ItemType.Weapons.Dagger,
			Class:"epic dagger",
			Count:0,
			Bit:0
		},
		{
			Id:191,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"煌びやかな女王の懐刀",
			Type:ItemType.Weapons.Dagger,
			Class:"epic dagger",
			Count:0,
			Bit:0
		},
		{
			Id:199,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"オーバー・ザ・フェイト",
			Type:ItemType.Weapons.DualBlades,
			Class:"epic dualBlades",
			Count:0,
			Bit:0
		},
		{
			Id:198,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ディ・エンド",
			Type:ItemType.Weapons.DualBlades,
			Class:"epic dualBlades",
			Count:0,
			Bit:0
		},
		{
			Id:197,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"スパイラルアッシュ",
			Type:ItemType.Weapons.DualBlades,
			Class:"epic dualBlades",
			Count:0,
			Bit:0
		},
		{
			Id:205,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ロード・オブ・ダークネス",
			Type:ItemType.Weapons.Wand,
			Class:"epic wand",
			Count:0,
			Bit:0
		},
		{
			Id:206,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"プリンス・オブ・スパイダー",
			Type:ItemType.Weapons.Wand,
			Class:"epic wand",
			Count:0,
			Bit:0
		},
		{
			Id:214,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"六世界の循環",
			Type:ItemType.Weapons.Chakra,
			Class:"epic chakra",
			Count:0,
			Bit:0
		},
		{
			Id:213,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"火遁の秘技:暴影",
			Type:ItemType.Weapons.Chakra,
			Class:"epic chakra",
			Count:0,
			Bit:0
		},
		{
			Id:245,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"レイディクリーズショルダー",
			Type:ItemType.Armor.Cloth.Shoulder,
			Class:"epic cloth shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:240,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"スペル・バーン・ショルダーパッド",
			Type:ItemType.Armor.Cloth.Shoulder,
			Class:"epic cloth shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:241,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"マナ・バーン・ローブ",
			Type:ItemType.Armor.Cloth.Top,
			Class:"epic cloth top",
			Count:0,
			Bit:0
		},
		{
			Id:246,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"フリージングカットローブ",
			Type:ItemType.Armor.Cloth.Top,
			Class:"epic cloth top",
			Count:0,
			Bit:0
		},
		{
			Id:242,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"マジック・バーン・トラウザ",
			Type:ItemType.Armor.Cloth.Bottom,
			Class:"epic cloth bottom",
			Count:0,
			Bit:0
		},
		{
			Id:247,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"フレームドロップトラウザ",
			Type:ItemType.Armor.Cloth.Bottom,
			Class:"epic cloth bottom",
			Count:0,
			Bit:0
		},
		{
			Id:243,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"エレメンタル・バーン・サッシュ",
			Type:ItemType.Armor.Cloth.Belt,
			Class:"epic cloth belt",
			Count:0,
			Bit:0
		},
		{
			Id:248,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ダークネスロサッシュ",
			Type:ItemType.Armor.Cloth.Belt,
			Class:"epic cloth belt",
			Count:0,
			Bit:0
		},
		{
			Id:244,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ソウル・バーン・シューズ",
			Type:ItemType.Armor.Cloth.Shoes,
			Class:"epic cloth shoes",
			Count:0,
			Bit:0
		},
		{
			Id:249,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ペースダウンシューズ",
			Type:ItemType.Armor.Cloth.Shoes,
			Class:"epic cloth shoes",
			Count:0,
			Bit:0
		},
		{
			Id:280,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"タクティカルオフィサーショルダー",
			Type:ItemType.Armor.Leather.Shoulder,
			Class:"epic leather shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:275,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"闇の刃ショルダー",
			Type:ItemType.Armor.Leather.Shoulder,
			Class:"epic leather shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:276,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"夜の影上着",
			Type:ItemType.Armor.Leather.Top,
			Class:"epic leather top",
			Count:0,
			Bit:0
		},
		{
			Id:281,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"タクティカルコマンダー上着",
			Type:ItemType.Armor.Leather.Top,
			Class:"epic leather top",
			Count:0,
			Bit:0
		},
		{
			Id:282,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"タクティカルリーダーパンツ",
			Type:ItemType.Armor.Leather.Bottom,
			Class:"epic leather bottom",
			Count:0,
			Bit:0
		},
		{
			Id:277,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"赤い牙パンツ",
			Type:ItemType.Armor.Leather.Bottom,
			Class:"epic leather bottom",
			Count:0,
			Bit:0
		},
		{
			Id:278,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"死のベールベルト",
			Type:ItemType.Armor.Leather.Belt,
			Class:"epic leather belt",
			Count:0,
			Bit:0
		},
		{
			Id:283,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"タクティカルロッドベルト",
			Type:ItemType.Armor.Leather.Belt,
			Class:"epic leather belt",
			Count:0,
			Bit:0
		},
		{
			Id:279,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"黄泉の風靴",
			Type:ItemType.Armor.Leather.Shoes,
			Class:"epic leather shoes",
			Count:0,
			Bit:0
		},
		{
			Id:284,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"タクティカルチーフ靴",
			Type:ItemType.Armor.Leather.Shoes,
			Class:"epic leather shoes",
			Count:0,
			Bit:0
		},
		{
			Id:310,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ブラックネスオートショルダー",
			Type:ItemType.Armor.Light.Shoulder,
			Class:"epic light shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:315,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ディフェンスレシーバー防具",
			Type:ItemType.Armor.Light.Shoulder,
			Class:"epic light shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:316,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"サイレンステイカー上着",
			Type:ItemType.Armor.Light.Top,
			Class:"epic light top",
			Count:0,
			Bit:0
		},
		{
			Id:311,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ライトネスオート上着",
			Type:ItemType.Armor.Light.Top,
			Class:"epic light top",
			Count:0,
			Bit:0
		},
		{
			Id:312,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ファイアネスオートパンツ",
			Type:ItemType.Armor.Light.Bottom,
			Class:"epic light bottom",
			Count:0,
			Bit:0
		},
		{
			Id:317,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ニュータイプアタッカーパンツ",
			Type:ItemType.Armor.Light.Bottom,
			Class:"epic light bottom",
			Count:0,
			Bit:0
		},
		{
			Id:313,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"アイネスオートベルト",
			Type:ItemType.Armor.Light.Belt,
			Class:"epic light belt",
			Count:0,
			Bit:0
		},
		{
			Id:318,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"タイトエンドブローカーベルト",
			Type:ItemType.Armor.Light.Belt,
			Class:"epic light belt",
			Count:0,
			Bit:0
		},
		{
			Id:314,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ウィンドネスオート靴",
			Type:ItemType.Armor.Light.Shoes,
			Class:"epic light shoes",
			Count:0,
			Bit:0
		},
		{
			Id:319,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"テールバックランナーブーツ",
			Type:ItemType.Armor.Light.Shoes,
			Class:"epic light shoes",
			Count:0,
			Bit:0
		},
		{
			Id:350,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ゴリアテバードイーターショルダー",
			Type:ItemType.Armor.Heavy.Shoulder,
			Class:"epic heavy shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:345,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"魔力の契約ショルダー",
			Type:ItemType.Armor.Heavy.Shoulder,
			Class:"epic heavy shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:346,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"血の盟約上着",
			Type:ItemType.Armor.Heavy.Top,
			Class:"epic heavy top",
			Count:0,
			Bit:0
		},
		{
			Id:351,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"タランチュラ上着",
			Type:ItemType.Armor.Heavy.Top,
			Class:"epic heavy top",
			Count:0,
			Bit:0
		},
		{
			Id:352,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"キングバブーンパンツ",
			Type:ItemType.Armor.Heavy.Bottom,
			Class:"epic heavy bottom",
			Count:0,
			Bit:0
		},
		{
			Id:347,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"マナの誓いパンツ",
			Type:ItemType.Armor.Heavy.Bottom,
			Class:"epic heavy bottom",
			Count:0,
			Bit:0
		},
		{
			Id:348,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"体力の協約ベルト",
			Type:ItemType.Armor.Heavy.Belt,
			Class:"epic heavy belt",
			Count:0,
			Bit:0
		},
		{
			Id:353,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ローズヘアベルト",
			Type:ItemType.Armor.Heavy.Belt,
			Class:"epic heavy belt",
			Count:0,
			Bit:0
		},
		{
			Id:349,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"血の条約ブーツ",
			Type:ItemType.Armor.Heavy.Shoes,
			Class:"epic heavy shoes",
			Count:0,
			Bit:0
		},
		{
			Id:354,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"インディアンオーナメンタル靴",
			Type:ItemType.Armor.Heavy.Shoes,
			Class:"epic heavy shoes",
			Count:0,
			Bit:0
		},
		{
			Id:380,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"魔法の大激変",
			Type:ItemType.Armor.Plate.Shoulder,
			Class:"epic plate shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:385,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"プレートレンジアーマーガード",
			Type:ItemType.Armor.Plate.Shoulder,
			Class:"epic plate shoulder",
			Count:0,
			Bit:0
		},
		{
			Id:386,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"プレートパワーアーマー上着",
			Type:ItemType.Armor.Plate.Top,
			Class:"epic plate top",
			Count:0,
			Bit:0
		},
		{
			Id:381,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"魔力の嵐",
			Type:ItemType.Armor.Plate.Top,
			Class:"epic plate top",
			Count:0,
			Bit:0
		},
		{
			Id:382,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"霊力の竜巻",
			Type:ItemType.Armor.Plate.Bottom,
			Class:"epic plate bottom",
			Count:0,
			Bit:0
		},
		{
			Id:387,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"プレートマジックアーマーパンツ",
			Type:ItemType.Armor.Plate.Bottom,
			Class:"epic plate bottom",
			Count:0,
			Bit:0
		},
		{
			Id:383,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"マナの渦巻き",
			Type:ItemType.Armor.Plate.Belt,
			Class:"epic plate belt",
			Count:0,
			Bit:0
		},
		{
			Id:388,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"プレートアブソリュートアーマーベルト",
			Type:ItemType.Armor.Plate.Belt,
			Class:"epic plate belt",
			Count:0,
			Bit:0
		},
		{
			Id:384,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"精粋の台風",
			Type:ItemType.Armor.Plate.Shoes,
			Class:"epic plate shoes",
			Count:0,
			Bit:0
		},
		{
			Id:389,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"プレートウィングアーマーブーツ",
			Type:ItemType.Armor.Plate.Shoes,
			Class:"epic plate shoes",
			Count:0,
			Bit:0
		},
		{
			Id:411,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"血まみれの手錠",
			Type:ItemType.Accessories.Bracelet,
			Class:"epic bracelet",
			Count:0,
			Bit:0
		},
		{
			Id:413,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"火炎術師の炮烙腕輪",
			Type:ItemType.Accessories.Bracelet,
			Class:"epic bracelet",
			Count:0,
			Bit:0
		},
		{
			Id:408,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"精製された破壊の魔石腕輪",
			Type:ItemType.Accessories.Bracelet,
			Class:"epic bracelet",
			Count:0,
			Bit:0
		},
		{
			Id:405,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"冷静な王女の腕輪",
			Type:ItemType.Accessories.Bracelet,
			Class:"epic bracelet",
			Count:0,
			Bit:0
		},
		{
			Id:414,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"執行人の刺殺ネックレス",
			Type:ItemType.Accessories.Necklace,
			Class:"epic necklace",
			Count:0,
			Bit:0
		},
		{
			Id:409,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"精製された混沌の魔石ネックレス",
			Type:ItemType.Accessories.Necklace,
			Class:"epic necklace",
			Count:0,
			Bit:0
		},
		{
			Id:406,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"アイスプリンセスのネックレス",
			Type:ItemType.Accessories.Necklace,
			Class:"epic necklace",
			Count:0,
			Bit:0
		},
		{
			Id:412,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"ナイフクイーンのネックレス",
			Type:ItemType.Accessories.Necklace,
			Class:"epic necklace",
			Count:0,
			Bit:0
		},
		{
			Id:410,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"精製された忘却の魔石指輪",
			Type:ItemType.Accessories.Ring,
			Class:"epic ring",
			Count:0,
			Bit:0
		},
		{
			Id:407,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"冷やかな王女の指輪",
			Type:ItemType.Accessories.Ring,
			Class:"epic ring",
			Count:0,
			Bit:0
		},
		{
			Id:415,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"アサシンの刃指輪",
			Type:ItemType.Accessories.Ring,
			Class:"epic ring",
			Count:0,
			Bit:0
		},
	],


	Epic85Sp:[
		{
			Id:674,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"高名な将軍の戦略書",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:675,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"時間の旅人のシルバー時計",
			Type:ItemType.SpecialEquipment.SubEquipment,
			Class:"epic subEquipment",
			Count:0,
			Bit:0
		},
		{
			Id:678,
			Rank:ItemRank.Epic,
			Lv:85,
			Name:"覇王の涙",
			Type:ItemType.SpecialEquipment.MagicStone,
			Class:"epic magicStone",
			Count:0,
			Bit:0
		},
	]
};