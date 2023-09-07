
    console.log('Script.js is loaded');

    let currentIndex = 0;
    let currentGallery = [];

    const galleries = {
        gallery1: [
            {title: 'Image_1', src: 'images/chalk.jpg'},
            {title: 'Image 2', src: 'images/nahual.jpg'},
            {title: 'Image 3', src: 'images/clip.jpg'},
            {title: 'Image 4', src: 'images/adiz.jpg'},
            {title: 'Image 5', src: 'images/equipment.jpg'},
            {title: 'Image 6', src: 'images/jair.jpg'},
            {title: 'Image 7', src: 'images/pp.jpg'},
            {title: 'Image 8', src: 'images/manuel.jpg'},
            {title: 'Image 9', src: 'images/nicho.jpg'},
            {title: 'Image 10', src: 'images/cadenas.jpg'}
        ],

        gallery2: [
            {title: 'Image A', src: 'images/portafolio/lineas.jpg'},
            {title: 'Image B', src: 'images/portafolio/ritmo.jpg'},
            {title: 'Image C', src: 'images/portafolio/luz.jpg'},
            {title: 'Image D', src: 'images/portafolio/mariposa.jpg'},
            {title: 'Image E', src: 'images/portafolio/barrido.jpg'},
            {title: 'Image F', src: 'images/portafolio/buho.jpg'},
            {title: 'Image G', src: 'images/portafolio/pica.jpg'},
            {title: 'Image H', src: 'images/portafolio/musa.jpg'},
            {title: 'Image I', src: 'images/portafolio/yoyo.jpg'},
            {title: 'Image J', src: 'images/portafolio/woods.jpg'}
        ]
    };

    window.openModal = function(title, imageSrc, galleryId){
        const modal = document.getElementById('myModal');
        const modalImage = document.getElementById('modalImage');

        let galleryContainer;

        if (!modal || !modalImage) {
            console.error('Modal or modalImage element not found.');
            return;
        }

        modalImage.src = imageSrc;

        galleryContainer =  document.getElementById(galleryId);;

        console.log('galleryContainer:', galleryContainer);
        
        if (!galleryContainer) {
            console.error('Gallery container not found.');
            return;
        }

        currentGallery = galleries[galleryId];

        if (!currentGallery) {
            console.error('Gallery not found in galleries object.');
            return;
        }

        currentIndex = currentGallery.findIndex(image => image.src === imageSrc);

        modal.style.display = 'block';

        modalImage.onload = function () {
            const aspectRatio = modalImage.width / modalImage.height;
            if (aspectRatio > 1) {
                modalImage.style.width = '80%';
                modalImage.style.height = '50%';
            } else {
                modalImage.style.width = '35%';
                modalImage.style.height = '40%';
            }
        };
    }


    function closeModal(){
        document.getElementById('myModal').style.display = 'none';
    }

    function prevImage(){
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        displayCurrentImage();
    }

    function nextImage(){
        currentIndex = (currentIndex + 1) % currentGallery.length;
        displayCurrentImage();
    }

    function displayCurrentImage(){
        const modalImage = document.getElementById('modalImage');
        modalImage.src = currentGallery[currentIndex].src;
    }