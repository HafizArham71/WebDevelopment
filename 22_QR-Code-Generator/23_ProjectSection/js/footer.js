// ======================= FOOTER COMPONENT SCRIPT =======================
document.addEventListener('DOMContentLoaded', function () {
        const subscribeForm = document.getElementById('subscribeForm');
        if (!subscribeForm) return;

        const emailInput = document.getElementById('emailInput');
        const subscribeBtn = document.getElementById('subscribeBtn');

        // Utility to check for valid email format
        function validateEmail(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
        }

        // Handle form submission
        subscribeForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const email = emailInput.value.trim();

                // Remove previous error animation class
                emailInput.classList.remove('footer-shake-error');

                if (validateEmail(email)) {
                        // On Success
                        subscribeBtn.textContent = 'Subscribed! 🎉';
                        subscribeBtn.style.backgroundColor = 'var(--footer-success-color)';
                        emailInput.style.borderColor = 'var(--footer-success-color)';
                        emailInput.disabled = true;
                        subscribeBtn.disabled = true;
                } else {
                        // On Error
                        emailInput.style.borderColor = 'var(--footer-error-color)';
                        // Trigger shake animation by adding the class
                        void emailInput.offsetWidth; // This is a trick to restart the animation
                        emailInput.classList.add('footer-shake-error');
                }
        });
});