let iframesLoaded = 0;
let data = {};
data.count = 3;

let timer = null;

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let onLoad = async () =>
{
    let _uid = parser.getUid();

    if (_uid)
    {
        data = await parser.dataFetch(_uid);
        data = data.data.data;

        for (let i = 0; i < data.images.length; i++)
        {
            let image = data.images[i];
            addIframe(i, data.images.length, data.uuid, image.iuid);
        }
    }
    else
    {
        console.log("uuid not found");
    }
    
    let swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        simulateTouch: false,
        mousewheel: {
            invert: false,
            eventsTarget: '.blog-slider'
        },
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });
}

const addIframe = (i, length, _uuid, _iuid) => {
    let wrapper =
        `<div class="blog-slider__item swiper-slide swiper-slide-next" role="group" aria-label="${i + 1} / ${length}" style="width: 800px; opacity: 0; transform: translate3d(${-800 * i}px, 0px, 0px);">
            <iframe onload="loaded()" src="module.html?_uuid=${_uuid}&_iuid=${_iuid}"></iframe>
        </div>`;
    
    let bullet = `<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide ${i + 1}"></span>`;

    if (i != 0) {
        $(".blog-slider__pagination").append(bullet);
    }
    $(".swiper-wrapper").append(wrapper);
    console.log("added");
}

const loaded = async () =>
{
    iframesLoaded++;

    await timeout(1000);
    if (iframesLoaded == data.images.length)
    {
        loader.toggle();
    }
}

$(onLoad)