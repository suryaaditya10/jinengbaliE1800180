window.onload = function(){
	var getNavigation_ = document.getElementById('navigation');

	var mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavigation_.parentNode.insertBefore(mobile,getNavigation_);

	document.getElementById('mobile-navigation').onclick = function(){
		var x = getNavigation_.getAttribute('style');
		if(x){
			getNavigation_.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-menu.png)';
		} else {
			getNavigation_.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-close.png)';
		}
	};
	var getElement_ = getNavigation_.getElementsByTagName("LI");
	for(var i=0;i<getElement_.length;i++){
		if(getElement_[i].children.length>1){
			var submenu = document.createElement("span");
			submenu.setAttribute("class","mobile-submenu");
			submenu.setAttribute("OnClick","submenu("+i+")");
			getElement_[i].appendChild(submenu);
		};
	};
	submenu = function (i){
		var sub = getElement_[i].children[1];
		var y = sub.getAttribute('style');
		if(y){
			sub.removeAttribute('style');
			getElement_[i].lastChild.style.backgroundImage='url(images/mobile-expand.png)';
			getElement_[i].lastChild.style.backgroundColor='rgba(11, 163, 156, 0.7)';
		} else {
			sub.style.display='block';
			getElement_[i].lastChild.style.backgroundImage='url(images/mobile-collapse.png)';
			getElement_[i].lastChild.style.backgroundColor='rgba(0,0,0,0.8)';
		}
	};
};
