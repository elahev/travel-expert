document.addEventListener('DOMContentLoaded', function () {
    const imageGallery = document.getElementById('image-gallery');

    // Image and description arrays
    const images = [
        { src: 'resources/images/travel2.webp', alt: 'Mountain Adventure', desc: 'Explore the breathtaking mountains and wildlife.', url: 'https://banff.ca/mountainadventurers' },
        { src: 'resources/images/travel1.jfif', alt: 'Beautiful Beach', desc: 'Relax on a tropical beach with crystal-clear water.', url: 'https://store.google.com/intl/en/ideas/articles/why-beach-so-relaxing/' },
        { src: 'resources/images/travel3.webp', alt: 'City Escape', desc: 'Discover the hidden gems in a vibrant city.', url: 'https://cityscape-travel.com/' },
        { src: 'resources/images/travel4.webp', alt: 'Desert Safari', desc: 'Experience an exhilarating desert safari.', url: 'https://www.keadventure.com/blog/greatest-desert-destinations-on-earth' },
        { src: 'resources/images/travel5.jfif', alt: 'Forest Retreat', desc: 'Unwind in a peaceful forest retreat.', url: 'https://foresttravel.com/destination/canada/' }
    ];

    // Creating and displaying images and descriptions dynamically
    images.forEach((image, index) => {
        const descElement = document.createElement('div');
        descElement.classList.add('overlay-text');
        const descElementalt = document.createElement('h3');
        const descElementpar = document.createElement('p');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;

        imgElement.classList.add('image-item');

        imgContainer.appendChild(imgElement);
        imageGallery.appendChild(imgContainer);

        // Mouseover event to show full description and image dynamically
        imgContainer.addEventListener('mouseenter', () => {
            descElementalt.innerText = image.alt;
            descElementpar.innerText = image.desc;
            descElement.appendChild(descElementalt);
            descElement.appendChild(descElementpar);
            imgContainer.appendChild(descElement);
        });

        // Remove description on mouseout
        imgContainer.addEventListener('mouseleave', () => {
            imgContainer.lastChild.remove();
        });

        imgContainer.addEventListener('click', () => {
            const redirectWindow = window.open('redirect.html?' + image.url, '',
                `popup=true,
                 width=250px,
                 height=200px`);

            const timer = setInterval(() => {
                if (redirectWindow.closed) {
                    clearInterval(timer);
                    if (localStorage.getItem("travelExpertsIsRedirect") == "true") {
                        window.location.href = image.url;
                    }
                }

            }, 200);

        });

    })
});

