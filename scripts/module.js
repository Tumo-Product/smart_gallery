let data;
let imagesLoaded = 0;

const onPageLoad = async () =>
{
	let _uid   = 	   parser.getUid();
	let _iuid  = await parser.getIuid();
	let images = await parser.dataFetch(_uid, _iuid);
	data = images.data.data;
	
	$("img").each(function() {
		$(this)[0].onload = loaded;
	});
	
	if (images != undefined)
	{
		$("img").eq(0)[0].src = data.img2;
		$("img").eq(1)[0].src = data.img1;
	}
	else {
		console.log("uid not found");
	}

	if (data.firstText !== undefined || images.secondText !== undefined) {
		$(`.container`).css({"position": "absolute", "top": 30});
		$(`.shadow`).css({"position": "absolute", "top": 50});
		$("#imageText").css("display", "flex");
	}

}

const loaded = () => {
	imagesLoaded++;

	if (imagesLoaded == 2 ) {
		loader.toggle();
	}
}

const disableAnimation = () => {
	$(".bullet div").removeClass("pulseAnimation");
	$(".bullet").attr("onmousedown", "");
}

$(onPageLoad);