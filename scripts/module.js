let data;

const onPageLoad = async () =>
{
	let _uid   = 	   parser.getUid();
	let _iuid  = await parser.getIuid();
	let images = await parser.dataFetch(_uid, _iuid);
	images = images.data.data;

	if (images != undefined)
	{
		$("img").eq(0).attr("src", images.img2);
		$("img").eq(1).attr("src", images.img1);
	}
	else {
		console.log("uid not found");
	}

	loader.toggle();
}

const disableAnimation = () => {
	$(".bullet div").removeClass("pulseAnimation");
	$(".bullet").attr("onmousedown", "");
}

$(onPageLoad);