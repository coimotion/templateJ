exports.run = function(inData, callback)  {
	var  rtnData = {errCode: 0};
	rtnData.value = {
		list: [
			{					
				name: 'Name'
			},
			{					
				name: 'Name'
			},
			{					
				name: 'Name'
			},
			{					
				name: 'Name'
			}
		]
	};
	callback( rtnData );
};