/* global ItemRank,ItemList  */
var RATE = {
	ITEM:{
		EPIC:0.015,
		RARE:1,
	},
	DIFFICULTY:{
		HARD:0.5,
		VERYHARD:1
	},
	EPIC:{
		LV85SP:ItemList.Epic85Sp.length / ((ItemList.Epic80.length * 8 + ItemList.Epic80Sp.length) * 2 + (ItemList.Epic85.length * 8 + ItemList.Epic85Sp.length)),
		LV85:(ItemList.Epic85.length * 8 + ItemList.Epic85Sp.length) / ((ItemList.Epic80.length * 8 + ItemList.Epic80Sp.length) * 2 + (ItemList.Epic85.length * 8 + ItemList.Epic85Sp.length)),
		LV80SP:((ItemList.Epic80Sp.length) * 2 + (ItemList.Epic85.length * 8 + ItemList.Epic85Sp.length)) / ((ItemList.Epic80.length * 8 + ItemList.Epic80Sp.length) * 2 + (ItemList.Epic85.length * 8 + ItemList.Epic85Sp.length)),
		LV80:1,
	},
};
var NUMBER_OF_ITEM = {
	HARD:4,
	VERYHARD:6
};
var NUMBER_OF_EPIC_BIT = {
	NORMAL:5,
	EXPART:6,
	MASTER:8,
	KING:9,
	SLAYER:10
};
var RANK ={
	NORMAL:0,
	EXPART:1,
	MASTER:2,
	KING:3,
	SLAYER:4
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
	var veryHardEvent = $("#veryHardEvent input").prop("checked");
	var count = 0;
	var rank = judgeRank($("#rank").val());
	
	$("#veryHardEvent input").on("change",function(){
		veryHardEvent = $(this).prop("checked");
	});
	$("#rank").on("change",function(){
		rank = judgeRank($(this).val());
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
			if(items[key].Rank === ItemRank.EpicBit){
				$("#bit-"+items[key].Id + " span")
					.css({width:Math.min(100,++items[key].base.Bit/10)+"%"})
					.parents(".item")
					.find(".itemIcon")
					.attr({title:items[key].base.Name + " (" + items[key].base.Bit + "/ 1000)"});
				if(items[key].base.Bit>=1000){
					$("#bit-"+items[key].Id + " span").addClass("complete");
				}
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
		//decide number of epic bit item
		var num_epic_bit;
		switch(rank){
			case RANK.SLAYER:
				num_epic_bit = NUMBER_OF_EPIC_BIT.SLAYER;
				break;
			case RANK.KING:
				num_epic_bit = NUMBER_OF_EPIC_BIT.KING;
				break;
			case RANK.MASTER:
				num_epic_bit = NUMBER_OF_EPIC_BIT.MASTER;
				break;
			case RANK.EXPART:
				num_epic_bit = NUMBER_OF_EPIC_BIT.EXPART;
				break;
			case RANK.NORMAL:
				num_epic_bit = NUMBER_OF_EPIC_BIT.NORMAL;
				break;
			
		}
		
		for(i = 0; i < num_epic_bit; i++){
			var tmp = item_get(ItemRank.Epic);
			var epic = $.extend(true,{base:tmp},tmp);
			epic.Name += "のかけら";
			epic.Class = "epicBit";
			epic.Rank = ItemRank.EpicBit;
			result.push(epic);
		}
		
		for(var i = 0; i < num_item; i++){
			if(Math.random() < epic_rate){
				//epic
				result.push(item_get(ItemRank.Epic));
			}else{
				//rare
				result.push(item_get(ItemRank.Rare));
			}
		}
		
		return result;
	}
	
	function item_get(rank){
		var array = [];
		switch(rank){
			case ItemRank.Epic:
				var mr = Math.random();
				if(mr < RATE.EPIC.LV85SP){
					array = ItemList.Epic85Sp;
				}else if(mr < RATE.EPIC.LV85){
					array = ItemList.Epic85;
				}else if(mr < RATE.EPIC.LV80SP){
					array = ItemList.Epic80Sp;
				}else{
					array = ItemList.Epic80;
				}
				break;
			case ItemRank.Rare:
				array = ItemList.Rare;
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
	
	function judgeRank(str){
		switch(str){
			case "slayer":
				return RANK.SLAYER;
			case "king":
				return RANK.KING;
			case "master":
				return RANK.MASTER;
			case "expart":
				return RANK.EXPART;
			case "normal":
				return RANK.NORMAL;
			default:
				return RANK.NORMAL;
		}
	}
});