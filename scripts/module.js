let data;

const onPageLoad = async () =>
{
	let _uid   = 	   parser.getUid();
	let _iuid  = await parser.getIuid();
	let images = await parser.dataFetch(_uid, _iuid);
	data = images.data.data;

	if (images != undefined)
	{
		$("img").eq(0).attr("src", data.img2);
		$("img").eq(1).attr("src", data.img1);
	}
	else {
		console.log("uid not found");
	}

	if (data.firstText !== undefined || images.secondText !== undefined) {
		$(`.container`).css({"position": "absolute", "top": 30});
		$(`.shadow`).css({"position": "absolute", "top": 50});
		$("#imageText").css("display", "flex");
	}

	loader.toggle();
}

const disableAnimation = () => {
	$(".bullet div").removeClass("pulseAnimation");
	$(".bullet").attr("onmousedown", "");
}

$(onPageLoad);