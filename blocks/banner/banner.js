import utility from '../../utility/utility.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block){
  function getBannerContent(){
    const[
      pretitleEl,
      titleEl,
      ...carCardBlockListEl
    ] = block.children;

    const preTitle = pretitleEl?.textContent?.trim() || "";
    const title = titleEl?.textContent?.trim() || "";

    const cardList = Array.from(carCardBlockListEl).map((carCardBlockList) => {
      const[
        carImageEl,
        priceEl,
        ctaText1El,
        ctaLink1El,
        ctaTarget1El,
        ctaText2El,
        ctaLink2El,
        ctaTarget2El
      ] = carCardBlockList.children;

        const image = carImageEl?.querySelector('picture');
        if (image) {
          const img = image?.querySelector('img');
          if (img) {
            img.removeAttribute('width');
            img.removeAttribute('height');
          }
        }
        const carPrice = priceEl?.textContent?.trim() || "";
        const ctaText1 = ctaText1El?.textContent?.trim() || "";
        const linkAnchor1 = ctaLink1El?.querySelector('a')?.href || '#';
        const linkTarget1 = ctaTarget1El?.querySelector('a')?.target || '_self';
        const ctaText2 = ctaText2El?.textContent?.trim() || "";
        const linkAnchor2 = ctaLink2El?.querySelector('a')?.href || '#';
        const linkTarget2 = ctaTarget2El?.querySelector('a')?.target || '_self';

        return{
          imgSrc: carImageEl?.querySelector('img')?.src || '',
          carPrice,
          ctaText1,
          linkAnchor1,
          linkTarget1,
          ctaText2,
          linkAnchor2,
          linkTarget2,
          carCardBlockList
        };
    });

    return{
      preTitle,
      title,
      cardList,
    };
  }

  const bannerContent = getBannerContent();

  const bannerHTML = `
  <div class="banner-section">
    <div class="heading">
      <div class="pretitle">${bannerContent.preTitle}</div>
      <div class="title">${bannerContent.title}</div>
	</div>
        <div class="car-cards">
          ${bannerContent.cardList.map(card => `
            <div class="car-card">
              <div class="car-image">
                <img src="${card.imgSrc}" alt="Car Image">
              </div>
              <div class="car-price">${card.carPrice}</div>
			  <hr>
              <div class="cta-buttons">
                <a href="${card.linkAnchor1}" target="${card.linkTarget1}" class="cta-button1">${card.ctaText1}</a>
                <a href="${card.linkAnchor2}" target="${card.linkTarget2}" class="cta-button2">${card.ctaText2}</a>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="arrow">
		<button type="button" class="pre">Previous</button>
		<button type="button" class="nex">Next</button>
		</div>
      </div>
  
  `;

  block.innerHTML = utility.sanitizeHtml(`
    <div class="banner-wrapper__container">
    ${bannerHTML}
    </div>
    `);

  // Move instrumentation attributes for each car card
  bannerContent.cardList.forEach((card, index) => {
    const newCardEl = block.querySelectorAll('.car-card')[index];
    moveInstrumentation(card.carCardBlockList, newCardEl);
  });

  const carCards = block.querySelectorAll('.car-card');
  let currentCardIndex = 0;
  carCards.forEach((card, index) => {
    card.style.display = index === currentCardIndex ? 'block' : 'none';
  });

  const nextButton = block.querySelector('.nex');
  const prevButton = block.querySelector('.pre');

  nextButton.addEventListener('click', () => {
    carCards[currentCardIndex].style.display = 'none';
    currentCardIndex = (currentCardIndex + 1) % carCards.length;
    carCards[currentCardIndex].style.display = 'block';
  });

  prevButton.addEventListener('click', () => {
    carCards[currentCardIndex].style.display = 'none';
    currentCardIndex = (currentCardIndex - 1 + carCards.length) % carCards.length;
    carCards[currentCardIndex].style.display = 'block';
  });

}