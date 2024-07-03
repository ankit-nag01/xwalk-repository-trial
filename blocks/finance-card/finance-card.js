export default function decorate(block) {
function getFinanceCard(){
const [
titleEl,
cardTitleEl,
cardDescriptionEl,
imageDesktopFrameEl,
imageArrowEl,
imageMobFrameEl
] = block.children

 const titleHeading = titleEl?.textContent?.trim() || "";
 const cardTitle = cardTitleEl?.textContent?.trim() || "";
 const cardDescription = cardDescriptionEl?.textContent?.trim() || "";
 const imgDeskFrame = imageDesktopFrameEl?.textContent?.trim() || "";
 const imgArr = imageArrowEl?.textContent?.trim() || "";
 const imgMobFrame = imageMobFrameEl?.textContent?.trim() || "";

 return{
 titleHeading,
 cardTitle,
 cardDescription,
 imgDeskFrame,
 imgArr,
 imgMobFrame
 };
}

//get the content from the Block

const customFinanceBlockContent = getFinanceCard();
console.log('my custom data +++++' , customFinanceBlockContent);

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
cardLeasing.appendChild('p');

const frameMobImg = document.createElement('div');
frameMobImg.className = 'leasing_frame';
frameMobImg.src = customFinanceBlockContent.imgMobFrame;
col.appendChild(frameMobImg);

//block.appendChild(containerBlock);

// document.addEventListener('DOMContentLoaded', () => {
//      block.appendChild(containerBlock);
//     });

// block.innerHTML = '';
// block.appendChild(containerBlock);

document.addEventListener('DOMContentLoaded', () => {
    block.innerHTML = '';
    block.appendChild(containerBlock);
} )

}