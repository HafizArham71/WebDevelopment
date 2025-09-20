// Select elements
const inputElem = document.querySelector('.inputElem');
const inputGroup = document.querySelector('.input-group');
const qrImage = document.querySelector('.qrImage');
const generateQrBtn = document.querySelector('.generateQrBtn');
const imageContainer = document.querySelector('.image');
const downloadBtn = document.querySelector('.downloadBtn');
const loading = document.querySelector('.loading');

// Function to generate QR code
const generateQRCode = e => {
    e.preventDefault();
    loading.style.display = 'block';

    if (inputElem.value) {
        // Reset QR image
        qrImage.src = '';
        qrImage.alt = '';
        imageContainer.style.height = '0';
        imageContainer.style.padding = '0';
        imageContainer.style.border = 'none';

        // Generate new QR code
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150X150&data=${inputElem.value}`;
        qrImage.src = qrCodeUrl;
        qrImage.alt = `QR Code of ${inputElem.value}`;
        downloadBtn.href = qrCodeUrl;
        downloadBtn.setAttribute('download', `QR Code Of ${inputElem.value}`);
        downloadBtn.style.cursor = 'pointer';

        // Clear input field
        inputElem.value = '';
    } else {
        shakeInputElem();
        downloadBtn.removeAttribute('download')
    }
};

// Function to shake input element
const shakeInputElem = () => {
    inputGroup.classList.add('shake');
    setTimeout(() => {
        inputGroup.classList.remove('shake');
    }, 500);
};

// Function to maximize image container height
const maximizeHeight = () => {
    loading.style.display = 'none';
    imageContainer.style.height = '200px';
    imageContainer.style.padding = '1rem 0';
    imageContainer.style.border = '2px solid #1b367d';
};

// Add event listeners
generateQrBtn.addEventListener('click', generateQRCode);
qrImage.addEventListener('load', maximizeHeight);
downloadBtn.addEventListener('click', e => e.preventDefault());