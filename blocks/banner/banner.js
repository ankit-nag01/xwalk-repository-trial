
import carCard from '../car-Image/car-Image.js';

export default function decorate(block) {
  function getBannerCard() {
    const [
      pretitleEl,
      titleEl,
      ...carCardBlockListEl
    ] = block.children;

    const pretitle = pretitleEl?.textContent?.trim() || "";
    const title = titleEl?.textContent?.trim() || "";
    carCardBlockListEl.forEach((carCardBlock) => {
      carCard(carCardBlock);
    });

    // const teaser = carCardBlockListEl.map((card) => {
    //     const teaserObj = carCard.getCarImage(card)?.firstElementChild;
    //     moveInstrumentation(card, teaserObj);
    //     return teaserObj.outerHTML;
    //   });

      console.log("my teaser value is ",teaser);

    return {
      pretitle,
      title
    };
  }
  
  const bannerBar = getBannerCard(block);

  const bannerHTML = `
    <div class="banner-section">
      <div class="pretitle">${bannerBar.pretitle}</div>
      <div class="title">${bannerBar.title}</div>
      <div class="car-cards">
        ${block.innerHTML} <!-- Assuming car cards are already rendered inside block -->
      </div>
    </div>
  `;

  block.innerHTML = bannerHTML;
}
