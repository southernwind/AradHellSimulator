
	<div id="list">
		<div id="weaponList" class="mass">
		
<?php
	require("../private/dbdata.php");
	if(!isset($_GET['p'])){
		$_GET['p'] = 0;
	}
	$start = $_GET['p'] * 20;
	
	$stmt = $dbh->prepare("
		SELECT 
			*
		FROM 
			item 
		WHERE 
			rank=3 AND
			type < 50
		ORDER BY 
			type,lv;
	");
	$stmt->execute();
	$items = array();
	while($col = $stmt->fetch(PDO::FETCH_ASSOC)){
		$items[$col['type']][$col['lv']][$col['id']] = $col;
	}
	foreach($items as $key => $val){
?>
			<div class="itemtype type<?=$key?>">
<?php
		foreach($val as $key2 => $val2){
?>
				<div class="itemlv lv<?=$key2?>">
<?php
			foreach($val2 as $key3 => $val3){
?>
					<div class="item">
						<div class="itemIcon icon-<?=$val3["id"]?> icongray-<?=$val3["id"]?>" title="<?=$val3["name"]?> (0 / 1000)"><?=$val3["name"]?></div>
						<div class="epicBitBar" id="bit-<?=$val3["id"]?>"><span></span></div>
					</div>
<?php
			}
?>
				</div>
<?php
		}
?>
			</div>
<?php
	}
?>
		</div>
		<div id="armorList" class="mass">
<?php
	$stmt = $dbh->prepare("
		SELECT 
			ti.id,
			ti.name,
			ti.lv,
			tis.setid
		FROM 
			item as ti
		LEFT OUTER JOIN
			itemset as tis
			ON ti.id=tis.itemid
		WHERE 
			ti.rank = 3 AND
			ti.type BETWEEN 50 AND 99
		ORDER BY 
			tis.setid,ti.id;
	");
	$stmt->execute();
	$items = array();
	while($col = $stmt->fetch(PDO::FETCH_ASSOC)){
		$items[$col['setid']][$col['id']] = $col;
	}foreach($items as $key => $val){
?>
			<div class="itemset set<?=$key?>">
<?php
		foreach($val as $key2 => $val2){
?>
				<div class="item">
					<div class="itemIcon icon-<?=$val2["id"]?> icongray-<?=$val2["id"]?>" title="<?=$val2["name"]?> (0 / 1000)"><?=$val2["name"]?></div>
					<div class="epicBitBar" id="bit-<?=$val2["id"]?>"><span></span></div>
				</div>
<?php
		}
?>
			</div>
<?php
	}
?>
		</div>
		
		
		<div id="accessoryList" class="mass">
<?php
	$stmt = $dbh->prepare("
		SELECT 
			ti.id,
			ti.name,
			ti.lv,
			tis.setid
		FROM 
			item as ti
		LEFT OUTER JOIN
			itemset as tis
			ON ti.id=tis.itemid
		WHERE 
			ti.rank = 3 AND
			ti.type BETWEEN 100 AND 149
		ORDER BY 
			tis.setid is null,tis.setid,ti.id;
	");
	$stmt->execute();
	$items = array();
	while($col = $stmt->fetch(PDO::FETCH_ASSOC)){
		$items[$col['setid']][$col['id']] = $col;
	}foreach($items as $key => $val){
?>
			<div class="itemset set<?=$key?>">
<?php
		foreach($val as $key2 => $val2){
?>
				<div class="item">
					<div class="itemIcon icon-<?=$val2["id"]?> icongray-<?=$val2["id"]?>" title="<?=$val2["name"]?> (0 / 1000)"><?=$val2["name"]?></div>
					<div class="epicBitBar" id="bit-<?=$val2["id"]?>"><span></span></div>
				</div>
<?php
		}
?>
			</div>
<?php
	}
?>
		</div>
		
		
		<div id="specialEquipmentList" class="mass">
<?php
	$stmt = $dbh->prepare("
		SELECT 
			ti.id,
			ti.name,
			ti.lv,
			tis.setid
		FROM 
			item as ti
		LEFT OUTER JOIN
			itemset as tis
			ON ti.id=tis.itemid
		WHERE 
			ti.rank = 3 AND
			ti.type BETWEEN 150 AND 151
		ORDER BY 
			tis.setid,ti.id;
	");
	$stmt->execute();
	$items = array();
	while($col = $stmt->fetch(PDO::FETCH_ASSOC)){
		$items[$col['setid']][$col['id']] = $col;
	}foreach($items as $key => $val){
?>
			<div class="itemset set<?=$key?>">
<?php
		foreach($val as $key2 => $val2){
?>
				<div class="item">
					<div class="itemIcon icon-<?=$val2["id"]?> icongray-<?=$val2["id"]?>" title="<?=$val2["name"]?> (0 / 1000)"><?=$val2["name"]?></div>
					<div class="epicBitBar" id="bit-<?=$val2["id"]?>"><span></span></div>
				</div>
<?php
		}
?>
			</div>
<?php
	}
?>
		</div>
	</div>