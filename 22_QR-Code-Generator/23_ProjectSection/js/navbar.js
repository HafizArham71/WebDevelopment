// ===== Navbar (navbar.js) =====
(function (w, d) {
        function dispatch(target, name, detail) {
                const evt = new CustomEvent(name, {
                        bubbles: true,
                        detail
                });
                (target || d).dispatchEvent(evt);
        }

        function createNavbar(options = {}) {
                const cfg = Object.assign({
                        root: '.navbar',
                        boxSelector: '.navbar__box',
                        linksContainer: '#navLinks',
                        linkSelector: '.nav-link',
                        indicatorSelector: '.link-indicator',
                        toggleSelector: '#hamburger',
                        mobileBreakpoint: 900,
                        sticky: true,
                        closeOnLinkClickMobile: true,
                        preventDefaultOnLink: true, // matches your old behavior
                        indicatorWidthFactor: 0.5 // matches your old width/2
                }, options);

                const root = typeof cfg.root === 'string' ? d.querySelector(cfg.root) : cfg.root;
                if (!root) return console.warn('[Navbar] root not found:', cfg.root);

                const box = root.querySelector(cfg.boxSelector) || root;
                const navContainer = root.querySelector(cfg.linksContainer) || root.querySelector('.navlinks');
                const toggleBtn = root.querySelector(cfg.toggleSelector);
                const indicator = navContainer ? navContainer.querySelector(cfg.indicatorSelector) : null;
                const links = Array.from(root.querySelectorAll(cfg.linkSelector));

                let isOpen = false;

                function isMobile() {
                        return w.innerWidth < cfg.mobileBreakpoint;
                }

                // Sticky shadow
                function onScroll() {
                        if (!cfg.sticky || !box) return;
                        if (w.scrollY > 0) box.classList.add('scrolled');
                        else box.classList.remove('scrolled');
                        dispatch(root, 'nav:scrolled', {
                                scrolled: w.scrollY > 0
                        });
                }

                // Indicator
                function moveIndicatorTo(link) {
                        if (!indicator || !navContainer || !link) return;
                        const linkRect = link.getBoundingClientRect();
                        const navRect = navContainer.getBoundingClientRect();
                        const left = linkRect.left - navRect.left;
                        const width = linkRect.width * (cfg.indicatorWidthFactor || 1);
                        indicator.style.left = `${left}px`;
                        indicator.style.width = `${width}px`;
                }

                function setActive(link) {
                        links.forEach(l => l.classList.remove('active'));
                        if (link) link.classList.add('active');
                        moveIndicatorTo(link);
                        dispatch(root, 'nav:change-active', {
                                link
                        });
                }

                // Drawer controls
                function open() {
                        if (!navContainer) return;
                        navContainer.classList.add('open');
                        d.body.classList.add('menu-open');
                        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
                        isOpen = true;
                        // Focus first link for accessibility
                        const firstLink = links[0];
                        if (isMobile() && firstLink) firstLink.focus({
                                preventScroll: true
                        });
                        dispatch(root, 'nav:open');
                }

                function close() {
                        if (!navContainer) return;
                        navContainer.classList.remove('open');
                        d.body.classList.remove('menu-open');
                        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
                        isOpen = false;
                        dispatch(root, 'nav:close');
                }

                function toggle() {
                        isOpen ? close() : open();
                }

                // Events
                function onToggleClick(e) {
                        e.preventDefault();
                        toggle();
                }

                function onDocumentClick(e) {
                        if (!isOpen) return;
                        const insideNav = navContainer.contains(e.target);
                        const onToggle = toggleBtn && toggleBtn.contains(e.target);
                        if (!insideNav && !onToggle) close();
                }

                function onKeydown(e) {
                        if (e.key === 'Escape' && isOpen) {
                                close();
                                if (toggleBtn) toggleBtn.focus();
                        }
                }

                // Link behavior
                links.forEach(link => {
                        link.addEventListener('click', (e) => {
                                if (cfg.preventDefaultOnLink) e.preventDefault();
                                setActive(link);
                                if (cfg.closeOnLinkClickMobile && isMobile()) close();

                                // If you want to scroll to section when preventDefault is true:
                                const href = link.getAttribute('href') || '';
                                if (cfg.preventDefaultOnLink && href.startsWith('#')) {
                                        const target = d.querySelector(href);
                                        if (target) target.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                        });
                                }
                        });
                });

                // Init active and indicator on load + resize
                function refreshIndicator() {
                        const active = root.querySelector('.nav-link.active') || links[0];
                        moveIndicatorTo(active);
                }

                // Listeners
                if (cfg.sticky) w.addEventListener('scroll', onScroll, {
                        passive: true
                });
                if (toggleBtn) toggleBtn.addEventListener('click', onToggleClick);
                d.addEventListener('click', onDocumentClick);
                d.addEventListener('keydown', onKeydown);
                w.addEventListener('resize', refreshIndicator);

                // Initial states
                onScroll();
                refreshIndicator();
                if (toggleBtn) toggleBtn.setAttribute('aria-controls', (navContainer && navContainer.id) || 'navLinks');

                // Public API
                const api = {
                        open,
                        close,
                        toggle,
                        setActive,
                        moveIndicatorTo,
                        refreshIndicator,
                        destroy
                };

                function destroy() {
                        w.removeEventListener('scroll', onScroll);
                        if (toggleBtn) toggleBtn.removeEventListener('click', onToggleClick);
                        d.removeEventListener('click', onDocumentClick);
                        d.removeEventListener('keydown', onKeydown);
                        w.removeEventListener('resize', refreshIndicator);
                }

                // Expose API
                root.__navbar = api;
                return api;
        }

        // Auto-init on DOM ready
        if (d.readyState === 'loading') {
                d.addEventListener('DOMContentLoaded', () => createNavbar());
        } else {
                createNavbar();
        }

        // Global factory
        w.Navbar = {
                create: createNavbar
        };
})(window, document);