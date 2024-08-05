import utility from '../../utility/utility.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
    function getDealerContent(){
    const [
        titleEl,
        subtitleEl,
        ...headingListItemsEl
    ] = block.children;

    const title = titleEl?.textContent?.trim() || "";
    const subtitle = subtitleEl?.textContent?.trim() || "";

    const headingList = Array.from(headingListItemsEl).map((headingListItems) => {
      const[
        headingEl
      ] = headingListItems.children;

      const heading = headingEl?.textContent?.trim() || "";

      return{
        heading
      };
    });

    // const cardList = Array.from(cardListItemsEl).map((cardListItems) => {
    //   const[
    //     cardImageEl,
    //     dealerNameEl,
    //     dealerNumberEl,
    //     dealermailEl,
    //     dealerDateEl,
    //     dealerTimeEl,
    //     videoCallTextEl,
    //     videoCallURLEl,
    //     videoCallTargetEl,
    //     btnTextEl,
    //     btnURLEl,
    //     btnTargetEl
    //   ] = cardListItems.children;

    //   const image = cardImageEl?.querySelector('picture');
    //     if (image) {
    //       const img = image?.querySelector('img');
    //       if (img) {
    //         img.removeAttribute('width');
    //         img.removeAttribute('height');
    //       }
    //     } 
    //   const dname = dealerNameEl?.textContent?.trim() || "";
    //   const dnumber = dealerNumberEl?.textContent?.trim() || "";
    //   const dmail = dealermailEl?.textContent?.trim() || "";
    //   const ddate = dealerDateEl?.textContent?.trim() || "";
    //   const dtime = dealerTimeEl?.textContent?.trim() || "";
    //   const vcallText = videoCallTextEl?.textContent?.trim() || "";
    //   const vcallUrl = videoCallURLEl?.querySelector('a')?.href || '#';
    //   const vcallTarget = videoCallTargetEl?.querySelector('a')?.target || '_self';
    //   const btnTxt = btnTextEl?.textContent?.trim() || "";
    //   const btnUrl = btnURLEl?.querySelector('a')?.href || '#';
    //   const btnTarget = btnTargetEl?.querySelector('a')?.target || '_self';

    //   return{
    //     imgSrc: cardImageEl?.querySelector('img')?.src || '',
    //     dname,
    //     dnumber,
    //     dmail,
    //     ddate,
    //     dtime,
    //     vcallText,
    //     vcallUrl,
    //     vcallTarget,
    //     btnTxt,
    //     btnUrl,
    //     btnTarget
    //   };
    // });

    return{
        title,
        subtitle,
        headingList,
        // cardList
    };
}


const dealerContent = getDealerContent();


const dealerHTML = `
<div class="main-container">
            <div class="title-section">
                <div class="titleNew">${dealerContent.title}</div>
                <div class="subtitleNew">${dealerContent.subtitle}</div>
            </div>
            <div class="rowNew">
                ${dealerContent.headingList.map(head => `
                    <div class="col-sm-3">
                        <div class="showroom">${head.heading}</div>
                    </div>
                `).join('')}
            </div>
            <hr/>
        </div>
`;

block.innerHTML = utility.sanitizeHtml(`
    <div class="Dealer__Activities__container">
    ${dealerHTML}
    </div>
    `);

}
