define(function(require, exports, module) {

	var common = require('common');   		//������
	
	require('epl/font-awesome/css/font-awesome.min.css');//ͼ������
	
	require('epl/include/box');
	
	if(met_mobile){
		require.async('epl/include/ini_mobile');
	}
	
	/*---------ҳ���������---------*/
	
	common.AssemblyLoad($("body"));
		
	/*����֤*/
	if($('form.ui-from').length>0)require.async('epl/form/form');
	
	/*�����ɹ���ʧ����ʾ��Ϣ*/
	if($('.returnover').length>0)require.async('epl/include/ptips');
	
	/*�����ؼ�*/	
	if($('.metcms_upload_download').length>0)require.async('epl/include/download');
	
	/*�Զ�����*/
	if($('#met_automatic_upgrade').val() == 1)require.async('epl/include/patch');
	
	/*---------��̬�¼���-----------------*/
	/*����״̬*/
	$(document).on('focus',"input[type='text'],input[type='input'],input[type='password'],textarea",function(){
		$(this).addClass('met-focus');
	});
	$(document).on('focusout',"input[type='text'],input[type='input'],input[type='password'],textarea",function(){
		$(this).removeClass('met-focus');
	});
	
	/*��ʾ����ѡ��*/
	function showhidedom(m){
		var c = m.attr("data-showhide"),d=$("."+c);
		d.stop(true,true);
		if(d.is(":hidden")){
			d.removeClass('none').hide().slideDown();
			if(m.attr("type")=='radio'){
				m.parents('.fbox').find("input").not(m).change(function(){
					d.slideUp();
				});
			}
		}
	}
	$(document).ready(function(){ 
		var p = $(".ui-from input[type='radio'][data-showhide]:checked,.ui-from input[type='checkbox'][data-showhide]:checked");
		if(p.length>0){
			p.each(function(){
				showhidedom($(this));
			});
		}
	});
	$(document).on('change',".ui-from input[type='radio'][data-showhide]",function(){
		showhidedom($(this));
	});
	$(document).on('change',".ui-from input[type='checkbox'][data-showhide]",function(){
		var s = $(this).attr("checked")== 'checked'?true:false;
		if(s){
			showhidedom($(this));
		}else{
			var c = $(this).attr("data-showhide"),d=$("."+c);
			d.stop(true,true);
			d.slideUp();
		}
	});
	
	var dlp = '';
	/*���������*/
	if($.browser.msie || ($.browser.mozilla && $.browser.version == '11.0')){  
		var v = Number($.browser.version);
		if(v<10){
			function dlie(dl){
				var dw;
				dl.each(function(){
					var dt = $(this).find("dt"),dd = $(this).find("dd");
					if(dt.length>0){
						dt.css({"float":"left","overflow":"hidden"});
						dd.css({"float":"left","overflow":"hidden"});
						var wd = $(this).width() - (dt.width()+30) - 15;
						dd.width(wd);
						dw = wd;
					}
				});
				dl.each(function(){
					var dt = $(this).find("dt"),dd = $(this).find("dd");
					if(dt.length>0){
						dd.width(dw);
					}
				});
			}
			var dl = $(".v52fmbx dl");
			dlie(dl);
			dlp = 1;
		}
		if(v<12){
			/*��ʾ���ּ���*/
			function searchzdx(dom,label){
				if(dom.val()==''){
					label.show();
				}else{
					label.hide();
				}
				dom.keyup(function(){
					if($(this).val()==''){
						label.show();
					}else{
						label.hide();
					}
				});
				label.click(function(){
					$(this).next().focus();
				});
			}
			$(document).ready(function(){ 
				var pd = $("input[type!='hidden'][placeholder],textarea[placeholder]");
				pd.each(function(){
					var t = $(this).attr("placeholder");
					$(this).removeAttr("placeholder");
					$(this).wrap("<div class='placeholder-ie'></div>");
					$(this).before("<label>"+t+"</label>");
					searchzdx($(this),$(this).prev("label"));
				});
				setInterval(function(){
					pd.each(function(){
						searchzdx($(this),$(this).prev("label"));
					});
				}, "200"); 
			});
		}
	}
	
	/*��ȱ仯�����*/
	$("body").attr("data-body-wd",$("body").width());
	$(window).resize(function() {
		if($("body").attr("data-body-wd")!=$("body").width()){
			if(dlp==1){
				dlie(dl);
			}
			$(".ui-table").width("100%");
			$("body").attr("data-body-wd",$("body").width());
		}
	});
	
	
});
