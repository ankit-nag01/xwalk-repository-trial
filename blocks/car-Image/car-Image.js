// export default function carCard(block){
//     function getCarImage(){
//         const[
//             carImageEl,
//             priceEl,
//             ctaText1El,
//             ctaLink1El,
//             ctaTarget1El,
//             ctaText2El,
//             ctaLink2El,
//             ctaTarget2El
//         ] = block.children
//         console.log("my entire value is****", carImageEl);
//         const carImg = carImageEl.querySelector('img');
//         const carImage = carImg.getAttribute('src').trim() || "";
        
//         const carPriceElement = priceEl.querySelector('p');
//         let carPrice = carPriceElement?.textContent.trim() || "";

//         console.log("my car price is",carPrice);

//         const ctaTxtFirst = ctaText1El?.textContent?.trim() || "";
//         const ctaUrlFirst = ctaLink1El?.querySelector("a")?.href || "";
//         const targetFirst = ctaTarget1El?.textContent?.trim() || "_self";
//         if (ctaUrlFirst) {
//             ctaLink1El.querySelector("a").setAttribute('target', targetFirst);
//           }

//         const ctaTextSecond = ctaText2El?.textContent?.trim() || "";
//         const ctaUrlSecond = ctaLink2El?.querySelector("a")?.href || "";
//         const targetSecond = ctaTarget2El?.textContent?.trim() || "_self";
//         if (ctaUrlSecond) {
//             ctaLink2El.querySelector("a").setAttribute('target', targetSecond);
//           }

//         return{
//             carImage,
//             carPrice,
//             ctaTxtFirst,
//             ctaUrlFirst,
//             targetFirst,
//             ctaTextSecond,
//             ctaUrlSecond,
//             targetSecond
//         };
//     }
//     const carElementData = getCarImage();

//     const carImageHTML = `<div class="car-section">
//         <div class="bgImage">
//          <img src="${carElementData.carImage}" class="carImg">
//         </div>
//         <div class="price-btn-section">
//             <p>${carElementData.carPrice}</p>
//             <hr>
//             <a href="${carElementData.ctaUrlFirst}" target="${carElementData.targetFirst}" class="btn-knowMore">${carElementData.ctaTxtFirst}</a>
//             <a href="${carElementData.ctaUrlSecond}" target="${carElementData.targetSecond}" class="btn-build">${carElementData.ctaTextSecond}</a>
//         </div>
//     </div>`

//     block.innerHTML = carImageHTML;
// }

 