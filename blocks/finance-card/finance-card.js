export default function decorate(block) {
function getFinanceCard(){
const [
titleEl,
cardTitleEl,
cardDescriptionEl,
imageDesktopFrameEl,
imageArrowEl,
imageMobFrameEl,
bgImageEl
] = block.children

 const titleHeading = titleEl?.textContent?.trim() || "";
 const cardTitle = cardTitleEl?.textContent?.trim() || "";
 const cardDescription = cardDescriptionEl?.textContent?.trim() || "";
 const imgElement = imageDesktopFrameEl.querySelector('img');
 const imgDeskFrame = imgElement?.getAttribute('src')?.trim() || "";

 const arrElement = imageArrowEl.querySelector('img');
 const imgArr = arrElement?.getAttribute('src')?.trim() || "";

 const mobElement = imageMobFrameEl.querySelector('img');
 const imgMobFrame = mobElement?.getAttribute('src')?.trim() || "";

 const bgImgElement = bgImageEl.querySelector('img');
 const bgImgFrame = bgImgElement?.getAttribute('src')?.trim() || "";

 return{
 titleHeading,
 cardTitle,
 cardDescription,
 imgDeskFrame,
 imgArr,
 imgMobFrame,
 bgImgFrame
 };
}
//get the content from the Block
const customFinanceBlockContent = getFinanceCard();

//Now constructing the HTML
const containerBlock = document.createElement('div');
containerBlock.className = 'container_block';

const h1 = document.createElement('h1');
h1.textContent = customFinanceBlockContent.titleHeading;
containerBlock.appendChild(h1);

const row = document.createElement('div');
row.className = 'row';
containerBlock.appendChild(row);

const col = document.createElement('div');
col.className = 'col-sm-3';
row.appendChild(col);

const frameDeskImg = document.createElement('img');
frameDeskImg.className = 'leasing_frame_desktop';
frameDeskImg.src = customFinanceBlockContent.imgDeskFrame;
col.appendChild(frameDeskImg);

const arrImg = document.createElement('img');
arrImg.className = 'finance_arrow';
arrImg.src = customFinanceBlockContent.imgArr;
col.appendChild(arrImg);

const cardLeasing = document.createElement('div');
cardLeasing.className = 'card__leasing';
col.appendChild(cardLeasing);

const h3 = document.createElement('h3');
h3.textContent = customFinanceBlockContent.cardTitle;
cardLeasing.appendChild(h3);

const hr = document.createElement('hr');
cardLeasing.appendChild(hr);

const p = document.createElement('p');
p.textContent = customFinanceBlockContent.cardDescription;
cardLeasing.appendChild(p);

const frameMobImg = document.createElement('img');
frameMobImg.className = 'leasing_frame';
frameMobImg.src = customFinanceBlockContent.imgMobFrame;
col.appendChild(frameMobImg);

const frameBg = document.createElement('img');
frameBg.className = 'leasing_frame-bg';
frameBg.src = customFinanceBlockContent.bgImgFrame;
col.appendChild(frameBg);


block.innerHTML = '';
block.appendChild(containerBlock);


const cardBlock = containerBlock.querySelector('.col-sm-3');
const bgImageBlock = customFinanceBlockContent.bgImgFrame;

  cardBlock.addEventListener('mouseenter', function() {
    //cardBlock.style.backgroundColor = 'red';
    cardBlock.style.backgroundImage = `url("${bgImageBlock}")`;
    cardBlock.style.backgroundSize = 'cover'; // Optionally, set background size
    cardBlock.style.backgroundPosition = 'center';
  });

  cardBlock.addEventListener('mouseleave', function(){
    cardBlock.style.backgroundImage = '';
    // cardBlock.style.backgroundColor = '#2648F4';
  })

}
