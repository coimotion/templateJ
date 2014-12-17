ctrl.startup = function() {
	if ('<%=bi.client.category%>' === 'mobile' || '<%=bi.client.category%>' === 'tablet') { 		
		ctrl.sel(".jumbotron").addClass('mobile');			
	}
};