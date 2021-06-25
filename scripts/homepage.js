let swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    simulateTouch: false,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});

let iframesLoaded = 0;
let data = {};
data.count = 3;

let onLoad = async () =>
{
    let _uid = parser.getUid();

    if (_uid)
    {
        data = await parser.dataFetch(_uid);

        for (let iframe of data.iframes)
        {
            $(".swiper-wrapper").append(
                `<div class="blog-slider__item swiper-slide">
                    <iframe onload="loaded()" src="module.html?_uid=${iframe}"></iframe>
                </div>`);
        }
    }
    else
    {
        console.log("uid not found");
    }
}

const loaded = () =>
{
    iframesLoaded++;

    if (iframesLoaded == data.count)
    {
        loader.toggle();
    }
}

$(onLoad)