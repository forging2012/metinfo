define(function(require, exports, module) {

	var common = require('common');   		//������
	
	/*����*/
	$(".metcms_top_left").append("<i class='fa fa-bars'></i>");
	$(".metcms_cont_left dl.jslist").not($(".metcms_cont_left dl.jslist:eq(0)")).removeClass("jslist").find("dt i").remove();
	var ld = $(".metcms_cont_left");
	ld.attr("id","sidrbox");
	ld.clone().prependTo("body");
	ld.remove();
	
	$(".metcms_top_left i.fa").click(function(){
		$(this).addClass("on");
	});
	
	require('epl/sidr/css/jquery.sidr.dark.css');
	require('epl/sidr/jquery.sidr.min');
	
	$(".metcms_top_left i.fa").sidr({name:'sidrbox'});
	
	/*��*/
	if($("dl.noborder dt").html()=='&nbsp;'||$("dl.noborder dt").html()=='')$("dl.noborder dt").hide();
	
});
