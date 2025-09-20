// loader.js
(function (w, d) {
        const el = d.getElementById('preLoader');
        if (!el) return;

        const circle = el.querySelector('.loader-circle');
        const icons = Array.from(el.querySelectorAll('.loader-svg')); // palette, bulb, code
        let step = 0;
        let timer = null;

        // Palette → Bulb → Code
        const steps = [{
                color: '#5563ff',
                shadow: '0 0 24px 0 #5563ff33'
        }, // palette (blue)
        {
                color: '#ffb936',
                shadow: '0 0 24px 0 #ffb93633'
        }, // bulb (yellow)
        {
                color: '#24b35c',
                shadow: '0 0 24px 0 #24b35c33'
        } // code (green)
        ];

        function emit(name) {
                const evt = new CustomEvent(name, {
                        bubbles: true
                });
                el.dispatchEvent(evt);
                d.dispatchEvent(evt);
                w.dispatchEvent(evt);
        }

        function applyStep() {
                const s = steps[step % steps.length];

                // Spinner tint
                if (circle && s) {
                        circle.style.borderTopColor = s.color;
                        circle.style.boxShadow = s.shadow;
                }

                // Show exactly one icon at a time, in your HTML order
                if (icons.length) {
                        const active = step % icons.length;
                        icons.forEach((icon, i) => {
                                icon.style.display = (i === active) ? 'block' : 'none';
                                icon.style.color = s.color;
                        });
                }

                step++;
        }

        function startCycle(interval = 900) {
                stopCycle();
                applyStep();
                const reduce = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (!reduce) timer = setInterval(applyStep, interval);
        }

        function stopCycle() {
                if (timer) {
                        clearInterval(timer);
                        timer = null;
                }
        }

        function show() {
                el.classList.remove('hide');
                startCycle(900);
                emit('loader:show');
        }

        function hide(remove = true) {
                el.classList.add('hide');
                stopCycle();
                emit('loader:hide');
                setTimeout(() => {
                        if (remove && el.parentNode) {
                                el.parentNode.removeChild(el);
                                emit('loader:removed');
                        }
                }, 600); // match CSS fade
        }

        // Show now; hide after window load with your fast-hold timing
        show();
        w.addEventListener('load', () => {
                const HOLD_TIME = performance.now() < 1000 ? 2100 : 0;
                setTimeout(() => hide(true), HOLD_TIME);
        });

        // Optional simple API
        w.Loader = {
                show,
                hide,
                start: startCycle,
                stop: stopCycle
        };
})(window, document);