HELPER.preLoadImage = function (res){
	// console.log(res)
	var img = new Image();
	var imgUrl = res.url;
	img.onload = function(){
		document.getElementById(res.id).innerHTML = `<img src="${imgUrl}" alt="" />`;
	}
	img.src = imgUrl;
}
function loadImage(res) {
	setTimeout(function () {
		// console.log(res)
		for (var i = 0; i < res.length; i++) {
			HELPER.preLoadImage({url:res[i].url,id:res[i].id})
		}
	},50)
}