ctrl.startup = function() {
	if ('<%=bi.client.category%>' === 'mobile' || '<%=bi.client.category%>' === 'tablet') { 		
		ctrl.sel(".content").addClass('mobile');			
	}
	liClick();
};

function liClick() {
    ctrl.sel('.itemNum').click(function() {	
		$(".itemNum").remove()
	}
};