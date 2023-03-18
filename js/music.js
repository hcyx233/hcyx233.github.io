const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: "布拉格广场",
        artist: '蔡依林 / 周杰伦',
        url: 'http://music.163.com/#/song?id=210049',
        cover: 'http://p1.music.126.net/hQINyGWKnpuCqFUk55jXAQ==/109951167649668323.jpg?param=130y130',	
    },
	]
});
