let data;

const onPageLoad = async () =>
{
	let _uid = parser.getUid();

	if (_uid)
	{
		data = await parser.dataFetch(_uid);

		$('img').each(function (i)
		{
			$(this).attr("src", data[i]);
		});
	}
	else {
		console.log("uid not found");
	}
}

$(onPageLoad);