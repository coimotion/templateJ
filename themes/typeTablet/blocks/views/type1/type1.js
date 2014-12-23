ctrl.startup = function() {	
	slide();
};

function slide() {
	var serial=0;
	ctrl.sel('.orbit-container ul li').hide();
	ctrl.sel('.orbit-container ul li:eq(0)').show();	

    ctrl.sel('.prev').click(function() {
    	serial--;
	    if(serial<0){serial=0};
        ctrl.sel(".orbit-container ul li").hide();
        ctrl.sel(".orbit-container ul li:eq("+serial+")").fadeIn(1000);
        ctrl.sel(".orbit-bullets li").removeClass("active");
        ctrl.sel(".orbit-bullets li:eq("+serial+")").addClass("active");        
    });
    ctrl.sel('.next').click(function() {
    	serial++;
	    if(serial>2){serial=2};
        ctrl.sel(".orbit-container ul li").hide();
        ctrl.sel(".orbit-container ul li:eq("+serial+")").fadeIn(1000);        
        ctrl.sel(".orbit-bullets li").removeClass("active");
        ctrl.sel(".orbit-bullets li:eq("+serial+")").addClass("active");
    });       

    ctrl.sel('.orbit-bullets li').click(function(event) {
        serial++;
        if(serial>2){serial=2};
        ctrl.sel(".orbit-container ul li").hide();
        ctrl.sel(".orbit-container ul li:eq("+serial+")").fadeIn(1000);        
        ctrl.sel(".orbit-bullets li").removeClass("active");
        ctrl.sel(".orbit-bullets li:eq("+serial+")").addClass("active");
    }); 

    // Timer
    ctrl.sel(".orbit-container").everyTime(7000, timer);
    function timer(){
        serial++;
        if(serial>2){serial=0};       
        ctrl.sel(".orbit-container ul li").hide();
        ctrl.sel(".orbit-container ul li:eq("+serial+")").fadeIn(3000);
        ctrl.sel(".orbit-bullets li").removeClass("active");
        ctrl.sel(".orbit-bullets li:eq("+serial+")").addClass("active");
    }; 
};

