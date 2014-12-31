exports.run = function(inData, callback)  {
	var  rtnData = {errCode: 0};
	rtnData.value = {
		list: [
			{				
				banner: '../type/1024x400_1.gif'
			},
			{
				banner: '../type/1024x400_2.gif'
			},
			{
				banner: '../type/1024x400_3.gif'
			}
		]
	};
	callback( rtnData );
};