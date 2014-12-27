exports.run = function(inData, callback)  {
	var  rtnData = {errCode: 0};
	rtnData.value = {
		list: [
			{					
				about: '關於我',
				pic: '../type/200x200.gif',
				author: '作者姓名',
				title: '發表文章',
				subtitle: 'coServ website blog coServ website blog',
				time: '2014/12/25',
				head: '旅遊日誌',
				img: '../type/400x300.gif',
				subhead: '2014‧日本行'
			},
			{					
				subtitle: 'coServ 最新版出爐',
				time: '2015/01/01',
				img: '../type/400x300.gif',
				subhead: '2015‧澳洲行'
			},
			{					
				subtitle: '支援 live reload 功能',
				time: '2015/01/05',
				img: '../type/400x300.gif',
				subhead: '2015‧澳洲行'
			}
		]
	};
	callback( rtnData );
};