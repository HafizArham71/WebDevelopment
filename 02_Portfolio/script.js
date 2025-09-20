// ^Accessing Elements

let
    allImages = document.querySelectorAll('img'),
    barsHeader = document.querySelector('.fa-bars'),
    headerContainer = document.getElementById('headerContainer'),
    crossPassword = document.querySelector('.crossPassword'),
    list = document.querySelector('.list'),
    dropDown = document.querySelector('.dropDown'),
    cross = document.querySelector('.fa-cross'),
    passCross = document.querySelector('.passCross'),
    passwordWrapper = document.querySelector('.passwordWrapper'),
    cvBtn = document.querySelector('.cvBtn'),
    passInpt = document.querySelector('.passInpt'),
    submitPassword = document.querySelector('.submitPassword'),
    submitPasswordParent = document.querySelector('.button'),
    inputGroup = document.querySelector('.inputGroup'),
    eyeOff = document.getElementById('eyeOff'),
    eyeOn = document.getElementById('eyeOn'),
    forgotPassword = document.querySelector('.forgot'),
    Links = document.querySelectorAll('.links'),
    mainLinks = document.querySelectorAll('.mainLinks'),
    preLoader = document.getElementById('preloader'),
    passInform,
    check = 0;

var
    typed,
    currentIdx = 0; 

const hideLinkText = () => {
    if (innerWidth <= 500) {
        mainLinks.forEach(link => {
            link.innerText = '';
        })
    }
}

// ^ Functions

window.addEventListener('scroll', e => headerContainer.classList.toggle('bgChange', window.scrollY > 5));

const showMyWebsite = e => {
    startTyping();
    hideLinkText();
    preLoader.style.display = 'none';
} 

const changeTitle = (newTitle) => {
    document.title = `Hafiz Arham | ${newTitle}`;
}

const checkPassword = (e) => {
    const password = passInpt.value;
    console.log(password);

    if (password !== '') {
        handlePasswordValidation(password, e);
    }
};

const handlePasswordValidation = (password, e) => {
    if (password === 'Pakistan1947@123') {
        handleCorrectPassword(e);
    } else {
        handleIncorrectPassword(e);
    }
};

const handleCorrectPassword = (e) => {
    removeExistingPasswordMessage();
    createPasswordMessage('You Entered Correct Password!', 'rgb(31, 238, 245)');
    setTimeout(() => {
        window.open('cv/cv.pdf', '_blank');
        window.location.reload();
        passwordWrapper.style.display = 'none';
    }, 2000);
    e.preventDefault();
};

const handleIncorrectPassword = (e) => {
    e.preventDefault()
    removeExistingPasswordMessage();
    createPasswordMessage('You Entered Wrong Password! Try Again..', 'rgb(249, 51, 51)');

    forgotPassword.style.display = 'inline-block';

    forgotPassword.addEventListener('click', (e) => {
        removeExistingPasswordMessage();
        createPasswordMessage('Lets Visit Without Password! Wait 2-5 seconds.', 'wheat');

        e.preventDefault()
        setTimeout(() => {
            window.open('cv/cv.pdf', '_blank');
            window.location.reload();
            passwordWrapper.style.display = 'none';
        }, 4000);
    });
    passInpt.value = '';
    e.preventDefault();
};

const removeExistingPasswordMessage = () => {
    if (inputGroup.lastElementChild && inputGroup.lastElementChild.className.includes('passwordRightOrWrong')) {
        inputGroup.removeChild(inputGroup.lastElementChild);
    }
};

const addAnimation = () => {
    // Add animation
    document.styleSheets[0].insertRule(`
        .animate-rotate {
          animation: rotate .2s ease-in-out;
        }
      `);

    document.styleSheets[0].insertRule(`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(4deg);
          }
          50% {
            transform: rotate(-4deg);
          }
          75% {
            transform: rotate(4deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `);

}

const createPasswordMessage = (message, color) => {
    const passInform = document.createElement('p');
    passInform.classList.add('passwordRightOrWrong');
    passInform.style.color = color;
    passInform.innerText = message;
    passInform.style.display = 'inline-block';
    inputGroup.append(passInform);

    if (message.toLowerCase().includes('wrong')) {
        addAnimation(passInform)
        passInform.classList.add('animate-rotate');
    }
    else {
        passInform.classList.remove('animate-rotate');
    }

};

const manageBarAndCross = (event) => {
    if (check == 1) {
        if (event.target.classList == 'links') {
            dropDown.style.width = '0';
            cross.style.display = 'none';
            barsHeader.style.display = 'inline-block';
            check = 0;
        }
        else {
            cross.style.display = 'none';
            barsHeader.style.display = 'inline-block';
            dropDown.style.width = '0';
            check = 0;
        }
    }
    else {
        barsHeader.style.display = 'none';
        cross.style.display = 'inline-block';
        dropDown.style.width = '100%';
        check = 1;
    }
}

function startTyping() {
    typed = new Typed('#element', {
        strings: [' Web Developer.', ' Freelancer.', ' Web Designer.', ' Quran Teacher.'],
        typeSpeed: 100,
        onComplete: function () {
            // currentIdx = (currentIdx + 1) % self.options.strings.length; // Update index
            setTimeout(function () {
                startTyping();
            }, 2000); // Replace 1000 with your desired delay in milliseconds (e.g., 2 seconds here)
            // Restart animation on completion
        }
    });
}

// ^Events 

barsHeader.addEventListener('click', manageBarAndCross)

cross.addEventListener('click', manageBarAndCross)

list.addEventListener('click', (event) => {
    manageBarAndCross(event)
})

submitPassword.addEventListener('click', checkPassword);

passCross.addEventListener('click', () => {
    passwordWrapper.style.display = 'none';
}
)

cvBtn.addEventListener('click', () => {
    passwordWrapper.style.display = 'block';
}
)

eyeOff.addEventListener('click', () => {
    eyeOff.style.display = 'none';
    eyeOn.style.display = 'inline-block';
    passInpt.setAttribute('type', 'text')
}
)

eyeOn.addEventListener('click', () => {
    eyeOn.style.display = 'none';
    eyeOff.style.display = 'inline-block';
    passInpt.setAttribute('type', 'password')
}
)


// ^Loop

Links.forEach(Link => {
    Link.addEventListener('click', () => {
        changeTitle(Link.textContent);
    });
});

document.body.onload = setTimeout(showMyWebsite, 4000)
window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    return false;
});
