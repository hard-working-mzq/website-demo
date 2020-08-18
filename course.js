
// 课程相关信息
var course = [{
			courseImg:'images/course1.png',
			ipath:'https://blz-videos.nosdn.127.net/1/OverWatch/OVR-S03_E03_McCree_REUNION_zhCN_1080P_mb78.mp4',
			numberImg:'images/one.png',
			title: '课程中的逻辑叠加方法，帮助你建立（完善）交易系统。', 
			info:'利用五个条件（斜率、Pinbar、箱体、RSI、顶底背离）的叠加使用，精确点位，做到客观理性准确入场，再结合仓位控制分布式进场，大幅提高交易胜率！更有配套课程技术指标小课，帮助学员熟练掌握核心指标的使用！',
			teacher:'莫凡老师往期公开课',
			video1Img:'images/video1.png',
			video2Img:'images/video2.png',
			text1:'要获得盈利密码？你需要科学的交易行 为修正！',
			text2:'对话莫凡老师，用大数据统计解读交易行为的背后逻辑'
		},{
			courseImg:'images/course2.png',
			ipath:'https://blz-videos.nosdn.127.net/1/OverWatch/OVR-S03_E03_McCree_REUNION_zhCN_1080P_mb78.mp4',
			numberImg:'images/two.png',
			title: '这套系统最大的特点是高胜率捕捉反转行情，适合抄底和摸顶。手法上日内短线和波段都适用。', 
			info:'TB，Top Bottom简称，TB信号是2B法则基础上优化。建立正确的短线交易理念，辨别各类趋势，清晰数浪，准确使用斐波那契和黄金分割，仓位管理等，并结合图表统计验证自己的方法有效性，搭建起TB信号盈利模型。',
			teacher:'Kevin老师往期公开课',
			video1Img:'images/video3.png',
			video2Img:'images/video4.png',
			text1:'提升盘感，你需要掌握这4大实操步骤',
			text2:'掌握趋势交易策略，巧妙应用思维导图'
		},{
			courseImg:'images/course3.png',
			ipath:'https://blz-videos.nosdn.127.net/1/OverWatch/OVR-S03_E03_McCree_REUNION_zhCN_1080P_mb78.mp4',
			numberImg:'images/three.png',
			title: '没有复杂的技术指标，简单易懂，学完就能用于实盘交易。', 
			info:'趋势的识别、均线的使用、看什么周期做交易、三大维度选择货币对、革兰氏八大法则找到入场的位置、读K术，确认入场时机、严格的风控，做正期望的交易。',
			teacher:'陈海清老师往期公开课',
			video1Img:'images/video5.png',
			video2Img:'images/video6.png',
			text1:'为什么95%的人在交易中亏损？',
			text2:'践行这三个要素，从亏损走向盈利'
		}]

var item = document.querySelector('.video');
 var str = '';

 	for(var i=0;i<course.length;i++){
		str += '<div class="item">'+
			'<img id="one1" src="'+course[i].numberImg+'" alt="">'+
	 		'<div class="Fill">'+
			'<img class="videolist" src="'+course[i].courseImg+'" alt="" ipath="'+course[i].ipath+'">'+
	 			'<div class="text">'+
				'<img id="one2" src="'+course[i].numberImg+'" alt="">'+
				'<h4 id="h4">'+course[i].title+'</h4>'+
				'<span>'+course[i].info+'</span>'+
				'<h4 id="h5">'+course[i].title+'</h4>'+
				'<img class="btn1" src="images/btn.png"  alt="">'+
				'<img class="btn2" src="images/btn.png"  alt="">'+
	 			'</div>'+'</div>'+
	 			'<div class="icon">'+course[i].teacher+'</div>'+
		 		'<div class="rectangle">'+
				'<img class="videolist" src="'+course[i].video1Img+'" alt="" ipath="'+course[i].ipath+'">'+
				'<img class="videolist" src="'+course[i].video2Img+'" alt="" ipath="'+course[i].ipath+'">'+
				'<div class="video1">'+course[i].text1+'</div>'+
				'<div class="video1">'+course[i].text1+'</div>'+
				'</div>'+'</div>';
			}
	item.innerHTML = str;

	// 点击购买按钮
	var btn1 = document.getElementsByClassName("btn1");
	for( var y = 0, j = btn1.length; y < j; y++){
		btn1[y].onclick = function() {
		window.location.href='https://school.jin10.com/course/75';}
	};

	var btn2 = document.getElementsByClassName("btn2");
	for( var y = 0, j = btn2.length; y < j; y++){
		btn2[y].onclick = function() {
		window.location.href=' https://school.jin10.com/course/mobile/75';}
	};
	
	// 客服二维码弹窗
	var modal = document.getElementById('myModal');
	var img = document.getElementById('fixedqr');
	// var modalImg = document.getElementById("img01");
	img.onclick = function(){
	    modal.style.display = "block";
	    // modalImg.src = this.src;
	}
	var span = document.getElementsByClassName("close")[0];
	span.onclick = function() { 
	  modal.style.display = "none";
	}

	// 视频弹窗插件
	$('.videolist').each(function(){ //遍历视频列表
            $(this).click(function(){ //这个视频被点击后执行
                // var img = $(this).attr('src');//获取视频预览图
                var video = $(this).attr('ipath');//获取视频路径
                $('.videos').html("<video id=\"video\" poster='"+img+"' style='width: 100%' src='"+video+"' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video><img onClick=\"close1()\" class=\"vclose\" src=\"images/gb.png\" width=\"25\" height=\"25\"/>");
                $('.videos').show();
            });
        });

        function close1(){
            var v = document.getElementById('video');//获取视频节点
            $('.videos').hide();//点击关闭按钮关闭暂停视频
            v.pause();
            $('.videos').html();
        }