export default function decorate(block){
    function getBannerCard(){
        const[
            pretitleEl,
            titleEl,
            carImageEl,
            priceEl,
            priceTypeEl,
            ctaText1El,
            ctaLink1El,
            ctaTarget1El,
            ctaText2El,
            ctaLink2El,
            ctaTarget2El
        ] = block.children

        const pretitle = pretitleEl?.textContent?.trim() || "";
        const title = titleEl?.textContent?.trim() || "";
        const carImageElement = carImageEl.querySelector('img');
        const carImage = carImageElement.getAttribute('src').trim() || "";
    
        const price = priceEl?.textContent?.trim() || "";
        console.log("my price value is",priceEl);
        const priceType = priceTypeEl?.textContent?.trim() || "";
        const ctatextFirst = ctaText1El?.textContent?.trim() || "";
        const ctaLinkFirst = ctaLink1El?.textContent?.trim() || "";
        const ctaTaregetFirst = ctaTarget1El?.textContent?.trim() || "";
        const ctaTextSecond = ctaText2El?.textContent?.trim() || "";
        const ctaLinkSecond = ctaLink2El?.textContent?.trim() || "";
        const ctaTargetSecond = ctaTarget2El?.textContent?.trim() || "";
       
        return{
        pretitle,
        title,
        carImage,
        price,
        priceType,
        ctatextFirst,
        ctaLinkFirst,
        ctaTaregetFirst,
        ctaTextSecond,
        ctaLinkSecond,
        ctaTargetSecond
        };
        
    }
    
    const bannerBar = getBannerCard(block);

    const bannerHTML = `

    `
}