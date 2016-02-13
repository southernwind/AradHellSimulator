<div id="hell">
	<link rel="stylesheet" href="css/style.css">
	<script src="js/itemlist.js"></script>
	<script src="js/script.js"></script>
<!--
	
	権利だなんだと騒ぐつもりはないので自由に改変、再配布、公開してもいいよ。
	コード生成に使ったデータも置いておくけど、データが正確であることは保障しないので気をつけること。
	sql/arad_item.sql
	sql/arad_itemrank.sql
	sql/arad_itemset.sql
	sql/arad_itemtype.sql
	sql/arad_setname.sql
	scss/style.scss
	scss/_sprite.scss
	scss/_items.scss
	gulpfile.js
	config.rb
	背景画像とアイテムのアイコン画像はLordOfRangerのスキルアイコン取得機能の部分を少し改変して取得したので、必要ならGitHub見てなんとかしてね。
	
	あと何が要るかなー？
	＊＊＊＊が出るまでノンストップで走らせるボタン？要る？要るのかー？！
	
	外観がシンプルすぎるというか、デザインも何もない状態なのも気になるね。
	どうしようー。
	デザインセンスがないゆえ困っている。
	助けていただきたい。
	
	VERYHARDエピック率1%(1回あたり9個ドロップするので1つ以上エピックがドロップする確率は(1-(0.99^6)≒58519851%),HARDエピック率(同様に1-(0.995^4)≒1.9850499%)に設定してるんだけど、大体こんなもんだよね？もっと低いのかなーうーん。
	ご意見募集中である。
	xmi1996@gmail.comまでご意見賜りたくよろしく。
	
	装備部位でも出る確率違うのかな？
	補助装備と魔法石は出辛いという話を何度か聞いているので気になっている。
	真相はいかに……。
	
	固有エピックがいくつかあるんだけど、今はドロップしないようにしてあるんだ。
	死者の城ではドロップしないから、背景画像から考えると正解ではあるんだけど、ここもどうするか考えねばならないね。
	
	フルHDでギリギリ表示しきれるサイズになっちゃったけど、もうちょっとアラドの画面を小さくするべきかな？
	これでもオリジナルサイズの800x600よりは一回り小さいんだけど、ドロップ表示出来ればいいから、この2/3くらいでも十分ではある。
	
	さっきのデザインの件の言い訳になるんだけど、やっぱりデザイン性のあるものにしてしまうと、余白が必要になってくるでしょ。
	今、この状態でもフルHDの画面が必要になってるのに、これ以上の解像度要求してどうするの？
	という問題点もあるので、しばらくはこのままで。
	
	こことLordOfRangerのページは一応ぽよよんギルドサイトの下位層にあたるわけだけど、デザインの統一感がないね
	せめて統一感だけは出したいけど、トップページがまだあんな状態なのでこの件は保留で。
	ぽよよん専属デザイナー募集してます。
-->
<article>
	<div id="title" class="title">
		地獄パーティーシミュレーター
	</div>
	<div class="main body">
		<div id="area">
			<div class="droparea">
			
			</div>
			<div class="controls">
				<button id="drop">ドロップ</button>
				<button id="autodrop">自動</button><br>
				<label id="veryHardEvent"><input type="checkbox">ベリーハードイベント</label><br>
				<select id="rank">
					<option value="slayer">スレイヤー</option>
					<option value="king">キング</option>
					<option value="master">マスター</option>
					<option value="expart">エキスパート</option>
					<option value="normal">ノーマル</option>
				</select>
			</div>
		</div>
		<div id="chat">
			<div class="box" id="systemLog">
				<div class="tab">システム</div>
				<div class="log">
					<span class="row">アラド戦記ヘルダンジョンのドロップシミュレーター。右下の自動、またはドロップボタンを押すとアイテムがドロップする。</span>
					<span class="row">また、エピック率、ベリーハード率は体感で入れてあるため実際の確率とは異なる。</span>
					<span class="row">適当な部分なくなりました。</span>
				</div>
			</div>
			<div class="box" id="generalLog">
				<div class="tab">一般</div>
				<div class="log">
				
				</div>
			</div>
		</div>
	</div>
	<?php include("itemlist.php");?>
	
	<div>
		ヘルダンジョンのドロップシミュレーターです。<br>
		使い方は一回のみならドロップボタン<br>
		連続で行う場合は自動ボタンで開始で、もう一度押すと止まります。<br>
		確率、ドロップアイテム等に問題があれば直すのでメール下さい。<br>
		地獄珠、コスモソウル、お金などは出ません。またドロップアイテムの強化値は0で固定されています。<br>
		固有エピは今は出ないようにしてあります。<br>
		<br>
		古い方も残しています⇒<a href="../hellv1">v1</a>
	</div>
</article>
</div>