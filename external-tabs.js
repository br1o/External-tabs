/**
 * @author benoit & bruno
 */

jQuery(function () {

	getUrlVars = function(){
		var vars = [], hash;
		var hashes = window.location.href.match(/([^?=&]+)(=([^&]*))?/g); 
		for(var i = 0; i < hashes.length; i++){
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}
	var arrUrlParam = getUrlVars();
	var strSection = arrUrlParam['section'];
	var strAnchor = arrUrlParam['anchor'];

	// tabs
	
	var tabContainers = jQuery('div.tabs > div');
	
	tabContainers.hide().filter(':first').show();
	
	jQuery('ul.tabNavigation a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		jQuery('ul.tabNavigation a').removeClass('selected');
		jQuery(this).addClass('selected');
		return false;
	});
	
	if(!strSection){
		jQuery('ul.tabNavigation a').filter(':first').click();	
	} else {
		jQuery('ul.tabNavigation a[href="#'+strSection+'"]').click();	
	}
	
	if(strAnchor){
		document.location.href='#'+strAnchor;
	}
	
	// eof tabs
	
});


