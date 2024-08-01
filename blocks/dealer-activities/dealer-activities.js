export default function decorate(block) {
    const [
        titleEl,
        subtitleEl,
        headingEl
    ] = block.children;

    const title = titleEl?.textContent?.trim() || "";
    const subtitle = subtitleEl?.textContent?.trim() || "";
    const heading = headingEl?.textContent?.trim() || "";

    function createDealerCard(data) {
        return `
            <div class="card" data-category="${data.category}">
                <div class="image">
                    <img src="${data.image}" alt="carImage" class="car-image" />
                </div>
                <div class="items">
                    <div class="news">${data.dnews}</div>
                    <div class="dname">
                        ${data.dhead}
                        <br/>
                        <b><h4>${data.dname}</h4></b>
                    </div>
                </div>
            </div>
        `;
    }

    const mockData = [
        {
            image: "/content/dam/xwalk-ank/image-dealer.png",
            dnews: "Upcoming test drive | Heads up! We have scheduled a test drive on 13th June for Wagon R",
            dhead: "Dealer name 1",
            dname: "Mayuri Automobile Co. Ltd.",
            category: "testDrive"
        },
        {
            image: "/content/dam/xwalk-ank/image-dealer.png",
            dnews: "Showroom visit available | Visit our showroom anytime during working hours",
            dhead: "Dealer name 2",
            dname: "Sanghi Motors",
            category: "showroom"
        },
        {
            image: "/content/dam/xwalk-ank/image-dealer.png",
            dnews: "Book your test drive now! | Contact us to schedule a test drive",
            dhead: "Dealer name 3",
            dname: "Automobile Solutions",
            category: "testDrive"
        }
    ];

    const cardsHTML = mockData.map(data => createDealerCard(data)).join("");

    block.innerHTML = `
        <div class="main-container">
            <div class="title-section">
                <div class="titleNew">${title}</div>
                <div class="subtitleNew">${subtitle}</div>
            </div>
            <div class="rowNew">
                <div class="col-sm-3">
                    <div class="showroom">Showroom Visit (8)</div>
                </div>
                <div class="col-sm-3">
                    <div class="testDrive">Test Drive (3)</div>
                </div>
                <div class="col-sm-3">
                    <div class="booked">Booked (0)</div>
                </div>
                <hr>
            </div>
            <div class="cards-section">
                ${cardsHTML}
            </div>
        </div>
    `;

    const showroomButton = block.querySelector('.showroom');
    const testDriveButton = block.querySelector('.testDrive');
    const bookedButton = block.querySelector('.booked');
    const cards = block.querySelectorAll('.card');

    showroomButton.addEventListener('click', () => {
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            card.style.display = category === 'showroom' ? 'block' : 'none';
        });
    });

    testDriveButton.addEventListener('click', () => {
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            card.style.display = category === 'testDrive' ? 'block' : 'none';
        });
    });

    bookedButton.addEventListener('click', () => {
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            card.style.display = category === 'booked' ? 'block' : 'none';
        });
    });

    // Initially hide all cards
    cards.forEach(card => {
        card.style.display = 'none';
    });
}
