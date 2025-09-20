let eligibilityCheckBtn = document.querySelector('#eligibilityCheckBtn');
let reloadBtn = document.querySelector('#reloadBtn');
let drivingResult = document.querySelector('.resultForDriving');

//* Program to determine eligibility for driving a car
let userAge, userDrivingLicenseStatus, result;

function eligibilityCheckerForDriving () {
    do {
        userAge = parseInt(prompt('Enter Your Age (Number): '));
    } while (isNaN(userAge) || userAge <= 0);
    do {
        userDrivingLicenseStatus = prompt('Have You Driving License: (Yes or No)');
    } while (!(isNaN(userDrivingLicenseStatus)) || userDrivingLicenseStatus == '');
    if (userAge >= 18 && (userDrivingLicenseStatus =='yes' || userDrivingLicenseStatus == 'Yes'))
        result='Yes , You Are Eligible for Drive A car.';
    else
         result='No , You Are Not Eligible for Drive A car.';
    let pElem = document.createElement('p');
    pElem.innerText = result;
    drivingResult.append(pElem); 
    eligibilityCheckBtn.style.display = 'none'; 
}

const reloadPage = () => {
    window.location.reload();
}

eligibilityCheckBtn.addEventListener('click', eligibilityCheckerForDriving);
reloadBtn.addEventListener('click' , reloadPage)
