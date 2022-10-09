const images = [
 { imgName :  "winter.jpeg",
   subtitle : '"포기가 아니라 선택한거야"',
   cssName : "winter.css",
   weatherText : "冬",
},
{
    imgName : "summer.jpeg",
    subtitle : '"다른 사람이 결정하는 인생은 살고 싶지 않아"',
    cssName : "summer.css",
    weatherText : "夏",
},
{
    imgName : "autumn.jpeg",
    subtitle : '"아무것도 시도하지 않는 것보다는 의미 있는 시간 일거라 믿어"',
    cssName : "autumn.css",
    weatherText : "秋",
},
{
    imgName : "spring.jpeg",
    subtitle : '"올 봄엔 잠시 쉬어가도 괜찮아"',
    cssName : "spring.css",
    weatherText : "春",
}
];

const bgImage  = document.createElement("img");
const chgHead  = document.createElement('link');
const subtitle = document.querySelector(".header-bar__subtitle");
const weatherText = document.querySelector(".weather__text");


function handleBackground(){

    const chgBackground = images[Math.floor(Math.random()*images.length)];
    const randomImg = chgBackground.imgName;
    const randomSubtitle = chgBackground.subtitle;
    const randomCssName = chgBackground.cssName;
    const randomWeatherText = chgBackground.weatherText;

    bgImage.src = `img/${randomImg}`;
    document.body.appendChild(bgImage);

    chgHead.rel = "stylesheet";
    chgHead.href = `css/weatherColor/${randomCssName}`;
    document.head.appendChild(chgHead);

    subtitle.innerText = `${randomSubtitle}`;
    weatherText.innerText = `${randomWeatherText}`;

}

handleBackground();