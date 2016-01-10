/* global ItemRank,RareList,Epic80List,Epic85List,LegacyList,UncommonList */

var RATE = {
	ITEM:{
		EPIC:0.01,
		LEGACY:0.03,
		RARE:0.5,
		UNCOMMON:1
	},
	DIFFICULTY:{
		HARD:0.5,
		VERYHARD:1
	},
	LEVEL:{
		LV85:0.25,
		LV80:1
	}
};
var NUMBER_OF_ITEM = {
	HARD:6,
	VERYHARD:9
};
var DIFFICULTY = {
	HARD:0,
	VERYHARD:1
};
$(function(){
	"use strict";
	$("#drop").on("click",drop);
	var $autoDropButton = $("#autodrop");
	$autoDropButton.on("click",autodrop);
	var $generalLogElem = $("#generalLog .log");
	var $dropArea = $("#area .droparea");
	var autoDropTimer = null;
	var autoFlag = false;
	var veryHardEvent = false;
	var count = 0;
	
	
	$("#veryHardEvent input").on("change",function(){
		veryHardEvent = $(this).prop("checked");
	});
	
	
	function drop(){
		count++;
		var logText = "";
		$dropArea.html("");
		var items = elect();
		console.dir(items);
		for(var key in items){
			if(!items.hasOwnProperty(key)){
				continue;
			}
			var $elem = $("<div class=\"equip "+items[key].Class+"\" equip=\""+items[key].Name+"\"></div>");
			$dropArea.append($elem);
			boom($elem);
			if(items[key].Rank === ItemRank.Epic){
				if(logText!==""){
					logText += ",";
				}
				logText += "<span class=\"epic\">["+items[key].Name+"]</span>";
				$(".icon-"+items[key].Id).html(numberImage(++items[key].Count)).parent().addClass("got");
				epic($elem);
			}
		}
		if(logText!==""){
			generalLog(count+"回目:"+logText);
		}
		
	}
	function autodrop(){
		if(!autoFlag){
			autoDropTimer = setInterval(drop,50);
			autoFlag = true;
			$autoDropButton.text("停止");
		}else{
			clearInterval(autoDropTimer);
			autoFlag = false;
			$autoDropButton.text("自動");
		}
	}
	
	function boom($elem) {
		var Vx = 1-Math.random()*2;
		var Vy = -0.5-Math.random()*1;
		var g = 0.0098;
		var t = 9;
		var h = 0;
		var l = 0;
		var Sx = 0;
		var Ox = $elem.get(0).offsetLeft;
		var Oy = $elem.get(0).offsetTop;
		var n = 16;
		setTimeout(function(){
			var i = setInterval(function() {
				Sx += Vx * t;
				l = Sx;
				Vy += g * t;
				h += Vy * t;
				$elem.css({left:Ox+l+"px",top:Oy+h-Vy+"px"});
				if( n-- <= 0 ){
					clearInterval(i);
				}
			}, t);
		},50);
	}
	
	function epic($elem){
		var n = 10;
		var t = 80;
		var p = 0;
		var i = setInterval(function() {
			p -= 600;
			$elem.css({backgroundPosition:p+"px 0"});
			if( n-- <= 0 ){
				clearInterval(i);
			}
		}, t);
	}
	
	function elect(){
		var result = Array();
		//decide difficulty
		var difficulty = Math.random() < RATE.DIFFICULTY.HARD && !veryHardEvent ? DIFFICULTY.HARD : DIFFICULTY.VERYHARD;
		//decide number of item
		var num_item = difficulty === DIFFICULTY.HARD ? NUMBER_OF_ITEM.HARD : NUMBER_OF_ITEM.VERYHARD;
		//decide number of epic rate
		var epic_rate = difficulty === DIFFICULTY.HARD ? RATE.ITEM.EPIC/2 : RATE.ITEM.EPIC;
		
		for(var i = 0; i < num_item; i++){
			var rn_item = Math.random();
			if(rn_item < epic_rate){
				//epic
				result.push(item_get(ItemRank.Epic));
			}else if(rn_item < RATE.ITEM.LEGACY){
				//legacy
				result.push(item_get(ItemRank.Legacy));
			}else if(rn_item < RATE.ITEM.RARE){
				//rare
				result.push(item_get(ItemRank.Rare));
			}else{
				//uncommon
				result.push(item_get(ItemRank.Uncommon));
			}
		}
		return result;
	}
	
	function item_get(rank){
		var array = [];
		switch(rank){
			case ItemRank.Epic:
				if(Math.random() < RATE.LEVEL.LV85){
					array = Epic85List;
				}else{
					array = Epic80List;
				}
				break;
			case ItemRank.Legacy:
				array = LegacyList;
				break;
			case ItemRank.Rare:
				array = RareList;
				break;
			case ItemRank.Uncommon:
				array = UncommonList;
				break;
			default:
				return null;
			
		}
		return array[Math.floor((Math.random()*array.length))];
	}
	
	function generalLog(html){
		$generalLogElem.append("<span class=\"row\">"+html+"</span>").scrollTop(99999999999999);
	}
	
	function numberImage(num){
		var result = "";
		if(num !== 1){
			var numarr = String(num).split("").reverse();
			for(var key in numarr){
				if(!numarr.hasOwnProperty(key)){
					continue;
				}
				result += "<span class=\"n"+numarr[key]+"\"></span>";
			}
		}
		return result;
	}
});