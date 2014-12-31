exports.run = function(inData, callback)  {
	var  rtnData = {errCode: 0};
	rtnData.value = {
		list: [
			{				
				img: '../type/400x300.gif',
				title: 'Item Name',
				body: '$000'
			},
			{
				img: '../type/400x300.gif',
				title: 'Item Name',
				body: '$000'
			},
			{
				img: '../type/400x300.gif',
				title: 'Item Name',
				body: '$000'
			},
			{
				img: '../type/400x300.gif',
				title: 'Item Name',
				body: '$000'
			},
			{
				img: '../type/400x300.gif',
				title: 'Item Name',
				body: '$000'
			},
			{
				img: '../type/400x300.gif',
				title: 'Item Name',
				body: '$000'
			}
		]
	};
	callback( rtnData );
};