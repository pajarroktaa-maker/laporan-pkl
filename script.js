
/* =====================================================
   SCRIPT.JS
   LAPORAN PKL
   REKAYASA PERANGKAT LUNAK
   PT GOTHru MEDIA INDONESIA
===================================================== */


/* =====================================================
   1. SAAT WEBSITE SELESAI DIMUAT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Laporan PKL berhasil dimuat.");

    initNavigation();

    initPrintButton();

    initBackToTop();

    initLoading();

    initScrollAnimation();

});


/* =====================================================
   2. NAVIGATION
===================================================== */

function initNavigation() {

    const navLinks =
        document.querySelectorAll(
            ".nav-container nav a"
        );

    if (navLinks.length === 0) {
        return;
    }


    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /*
        Menentukan menu aktif
        berdasarkan posisi halaman
    */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    window.addEventListener(
        "scroll",
        () => {

            let currentSection = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach(link => {

                link.classList.remove(
                    "active"
                );

                const href =
                    link.getAttribute("href");


                if (
                    href ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        }
    );

}


/* =====================================================
   3. PRINT LAPORAN
===================================================== */

function initPrintButton() {

    const printButton =
        document.querySelector(
            ".print-btn"
        );


    if (!printButton) {
        return;
    }


    printButton.addEventListener(
        "click",
        () => {

            window.print();

        }
    );

}


/* =====================================================
   4. BACK TO TOP
===================================================== */

function initBackToTop() {

    const topButton =
        document.querySelector(
            ".top-button"
        );


    if (!topButton) {
        return;
    }


    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   5. LOADING SCREEN
===================================================== */

function initLoading() {

    const loading =
        document.querySelector(
            ".loading"
        );


    if (!loading) {
        return;
    }


    window.addEventListener(
        "load",
        () => {

            setTimeout(() => {

                loading.classList.add(
                    "hide"
                );

            }, 500);

        }
    );

}


/* =====================================================
   6. SCROLL ANIMATION
===================================================== */

function initScrollAnimation() {

    const animatedElements =
        document.querySelectorAll(
            `
            .activity-card,
            .skill-card,
            .vision-item,
            .project-card,
            .suggestion-box > div,
            .photo-card,
            .documentation-item
            `
        );


    if (
        animatedElements.length === 0
    ) {

        return;

    }


    /*
        Observer untuk mendeteksi
        element ketika masuk layar
    */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";


        observer.observe(element);

    });

}


/* =====================================================
   7. TAHUN OTOMATIS
===================================================== */

function setCurrentYear() {

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );


    const currentYear =
        new Date().getFullYear();


    yearElements.forEach(element => {

        element.textContent =
            currentYear;

    });

}


setCurrentYear();


/* =====================================================
   8. KONFIRMASI PRINT
===================================================== */

window.addEventListener(
    "beforeprint",
    () => {

        document.title =
            "Laporan PKL - Rekayasa Perangkat Lunak";

    }
);


/* =====================================================
   9. SELESAI PRINT
===================================================== */

window.addEventListener(
    "afterprint",
    () => {

        console.log(
            "Proses print selesai."
        );

    }
);


/* =====================================================
   10. DETEKSI LINK GAMBAR
===================================================== */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";

                console.warn(
                    "Gambar tidak ditemukan:",
                    image.src
                );

            }
        );

    });


/* =====================================================
   11. EFEK KLIK PROJECT
===================================================== */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                card.classList.toggle(
                    "selected"
                );

            }
        );

    });


/* =====================================================
   12. KEYBOARD SHORTCUT
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        /*
            CTRL + P
            tetap menggunakan print
            bawaan browser
        */

        if (
            event.ctrlKey &&
            event.key.toLowerCase() === "p"
        ) {

            console.log(
                "Membuka halaman print..."
            );

        }


        /*
            HOME
            kembali ke bagian atas
        */

        if (
            event.key === "Home" &&
            !event.ctrlKey
        ) {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }
);


/* =====================================================
   13. CONSOLE INFO
===================================================== */

console.log(
    `
=========================================
        LAPORAN PKL
        REKAYASA PERANGKAT LUNAK

        PT GOTHru MEDIA INDONESIA
=========================================

Website laporan berhasil dijalankan.

HTML  : OK
CSS   : OK
JS    : OK

=========================================
    `
);
```javascript
/* =====================================================
   JAVASCRIPT PART 2
   FITUR TAMBAHAN LAPORAN PKL
===================================================== */


/* =====================================================
   14. TOMBOL DARK MODE
===================================================== */

function initDarkMode() {

    const darkButton =
        document.querySelector(".dark-mode-btn");

    if (!darkButton) {
        return;
    }


    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            localStorage.setItem(
                "laporanTheme",
                "dark"
            );

            darkButton.textContent =
                "☀️ Mode Terang";

        } else {

            localStorage.setItem(
                "laporanTheme",
                "light"
            );

            darkButton.textContent =
                "🌙 Mode Gelap";

        }

    });


    const savedTheme =
        localStorage.getItem(
            "laporanTheme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        darkButton.textContent =
            "☀️ Mode Terang";

    }

}


initDarkMode();


/* =====================================================
   15. PROGRESS BAR SCROLL
===================================================== */

function createProgressBar() {

    const progress =
        document.createElement("div");


    progress.className =
        "scroll-progress";


    document.body.prepend(progress);


    window.addEventListener(
        "scroll",
        () => {

            const scrollTop =
                window.scrollY;


            const documentHeight =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;


            if (documentHeight <= 0) {
                return;
            }


            const percentage =
                (scrollTop /
                    documentHeight) *
                100;


            progress.style.width =
                percentage + "%";

        }
    );

}


createProgressBar();


/* =====================================================
   16. UPDATE TANGGAL OTOMATIS
===================================================== */

function setDateAutomatically() {

    const dateElements =
        document.querySelectorAll(
            ".current-date"
        );


    if (dateElements.length === 0) {
        return;
    }


    const now =
        new Date();


    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };


    const dateText =
        now.toLocaleDateString(
            "id-ID",
            options
        );


    dateElements.forEach(element => {

        element.textContent =
            dateText;

    });

}


setDateAutomatically();


/* =====================================================
   17. SMOOTH LINK
===================================================== */

function initSmoothLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


initSmoothLinks();


/* =====================================================
   18. IMAGE PREVIEW
===================================================== */

function initImagePreview() {

    const images =
        document.querySelectorAll(
            `
            .photo-card img,
            .documentation-item img,
            .project-result img
            `
        );


    images.forEach(image => {

        image.style.cursor =
            "zoom-in";


        image.addEventListener(
            "click",
            () => {

                openImagePreview(
                    image.src,
                    image.alt
                );

            }
        );

    });

}


function openImagePreview(
    imageSrc,
    imageAlt
) {

    const overlay =
        document.createElement(
            "div"
        );


    overlay.className =
        "image-preview";


    overlay.innerHTML = `
        <div class="preview-container">

            <button
                class="preview-close"
                aria-label="Tutup"
            >
                ×
            </button>

            <img
                src="${imageSrc}"
                alt="${imageAlt || "Preview"}"
            >

            <p>
                ${imageAlt || "Dokumentasi"}
            </p>

        </div>
    `;


    document.body.appendChild(
        overlay
    );


    document.body.style.overflow =
        "hidden";


    const closeButton =
        overlay.querySelector(
            ".preview-close"
        );


    closeButton.addEventListener(
        "click",
        closeImagePreview
    );


    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {

                closeImagePreview();

            }

        }
    );


    function closeImagePreview() {

        overlay.remove();

        document.body.style.overflow =
            "";

    }

}


initImagePreview();


/* =====================================================
   19. ESC UNTUK MENUTUP PREVIEW
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            const preview =
                document.querySelector(
                    ".image-preview"
                );


            if (preview) {

                preview.remove();

                document.body.style.overflow =
                    "";

            }

        }

    }
);


/* =====================================================
   20. COPY TEXT
===================================================== */

function initCopyButtons() {

    const copyButtons =
        document.querySelectorAll(
            ".copy-button"
        );


    copyButtons.forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                const targetSelector =
                    button.dataset.target;


                if (!targetSelector) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetSelector
                    );


                if (!target) {
                    return;
                }


                try {

                    await navigator
                        .clipboard
                        .writeText(
                            target.innerText
                        );


                    const oldText =
                        button.textContent;


                    button.textContent =
                        "✓ Tersalin";


                    setTimeout(() => {

                        button.textContent =
                            oldText;

                    }, 1500);


                } catch (error) {

                    console.error(
                        "Gagal menyalin:",
                        error
                    );

                }

            }
        );

    });

}


initCopyButtons();


/* =====================================================
   21. SEARCH LAPORAN
===================================================== */

function initSearch() {

    const searchInput =
        document.querySelector(
            "#searchReport"
        );


    if (!searchInput) {
        return;
    }


    const paragraphs =
        document.querySelectorAll(
            ".page-content p, .page-content h4"
        );


    searchInput.addEventListener(
        "input",
        () => {

            const keyword =
                searchInput.value
                    .trim()
                    .toLowerCase();


            paragraphs.forEach(
                element => {

                    if (!keyword) {

                        element.style.background =
                            "";

                        return;

                    }


                    const text =
                        element.textContent
                            .toLowerCase();


                    if (
                        text.includes(
                            keyword
                        )
                    ) {

                        element.style.background =
                            "#fef3c7";

                    } else {

                        element.style.background =
                            "";

                    }

                }
            );

        }
    );

}


initSearch();


/* =====================================================
   22. NOTIFIKASI
===================================================== */

function showNotification(
    message
) {

    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        "notification";


    notification.textContent =
        message;


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.classList.add(
            "show"
        );

    }, 10);


    setTimeout(() => {

        notification.classList.remove(
            "show"
        );


        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 2500);

}


/* =====================================================
   23. DETEKSI OFFLINE / ONLINE
===================================================== */

window.addEventListener(
    "offline",
    () => {

        showNotification(
            "⚠️ Kamu sedang offline."
        );

    }
);


window.addEventListener(
    "online",
    () => {

        showNotification(
            "✓ Koneksi kembali tersedia."
        );

    }
);


/* =====================================================
   24. SIMPAN POSISI SCROLL
===================================================== */

window.addEventListener(
    "beforeunload",
    () => {

        sessionStorage.setItem(
            "laporanScroll",
            window.scrollY
        );

    }
);


window.addEventListener(
    "load",
    () => {

        const savedScroll =
            sessionStorage.getItem(
                "laporanScroll"
            );


        if (savedScroll) {

            setTimeout(() => {

                window.scrollTo(
                    0,
                    Number(savedScroll)
                );

            }, 300);

        }

    }
);


/* =====================================================
   25. KONFIRMASI SEBELUM MENINGGALKAN HALAMAN
===================================================== */

let formChanged = false;


document.querySelectorAll(
    "input, textarea, select"
).forEach(element => {

    element.addEventListener(
        "change",
        () => {

            formChanged = true;

        }
    );

});


window.addEventListener(
    "beforeunload",
    event => {

        if (!formChanged) {
            return;
        }


        event.preventDefault();

        event.returnValue = "";

    }
);


/* =====================================================
   26. STATUS WEBSITE
===================================================== */

console.log(
    "%c LAPORAN PKL AKTIF ",
    `
        background: #2563eb;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-weight: bold;
    `
);

console.log(
    "Semua fitur JavaScript berhasil dimuat."
);

```javascript
/* =====================================================
   JAVASCRIPT PART 3
   FINISHING & INTERACTIVE FEATURES
===================================================== */


/* =====================================================
   27. TYPING EFFECT
===================================================== */

function initTypingEffect() {

    const element =
        document.querySelector(
            ".typing-text"
        );

    if (!element) {
        return;
    }


    const text =
        element.dataset.text ||
        element.textContent;


    element.textContent = "";

    let index = 0;


    function type() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(type, 60);

        }

    }


    type();

}


initTypingEffect();


/* =====================================================
   28. COUNTER STATISTIK
===================================================== */

function initCounters() {

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    if (counters.length === 0) {
        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const counter =
                        entry.target;


                    const target =
                        Number(
                            counter.dataset.target
                        );


                    if (
                        Number.isNaN(target)
                    ) {
                        return;
                    }


                    let current = 0;

                    const duration = 1200;

                    const steps =
                        Math.max(
                            target / 60,
                            1
                        );


                    const updateCounter =
                        () => {

                            current += steps;


                            if (
                                current <
                                target
                            ) {

                                counter.textContent =
                                    Math.floor(
                                        current
                                    );

                                requestAnimationFrame(
                                    updateCounter
                                );

                            } else {

                                counter.textContent =
                                    target;

                            }

                        };


                    updateCounter();


                    observer.unobserve(
                        counter
                    );

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(counter => {

        counter.textContent = "0";

        observer.observe(counter);

    });

}


initCounters();


/* =====================================================
   29. FILTER DOKUMENTASI
===================================================== */

function initDocumentationFilter() {

    const buttons =
        document.querySelectorAll(
            ".filter-btn"
        );


    const items =
        document.querySelectorAll(
            ".filter-item"
        );


    if (
        buttons.length === 0 ||
        items.length === 0
    ) {

        return;

    }


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                items.forEach(item => {

                    const category =
                        item.dataset.category;


                    if (
                        filter === "all" ||
                        filter === category
                    ) {

                        item.style.display =
                            "";

                    } else {

                        item.style.display =
                            "none";

                    }

                });

            }
        );

    });

}


initDocumentationFilter();


/* =====================================================
   30. COPY NOMOR / DATA SISWA
===================================================== */

function initDataCopy() {

    const buttons =
        document.querySelectorAll(
            "[data-copy]"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                const text =
                    button.dataset.copy;


                if (!text) {
                    return;
                }


                try {

                    await navigator
                        .clipboard
                        .writeText(text);


                    const original =
                        button.textContent;


                    button.textContent =
                        "✓ Berhasil disalin";


                    showNotification(
                        "Data berhasil disalin."
                    );


                    setTimeout(() => {

                        button.textContent =
                            original;

                    }, 1500);


                } catch (error) {

                    console.error(
                        "Copy error:",
                        error
                    );

                }

            }
        );

    });

}


initDataCopy();


/* =====================================================
   31. MODAL INFORMASI
===================================================== */

function initInfoModal() {

    const buttons =
        document.querySelectorAll(
            ".info-button"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const title =
                    button.dataset.title ||
                    "Informasi";


                const content =
                    button.dataset.content ||
                    "Tidak ada informasi.";


                const modal =
                    document.createElement(
                        "div"
                    );


                modal.className =
                    "info-modal";


                modal.innerHTML = `
                    <div class="info-modal-box">

                        <button
                            class="info-modal-close"
                            aria-label="Tutup"
                        >
                            ×
                        </button>

                        <h3>
                            ${title}
                        </h3>

                        <p>
                            ${content}
                        </p>

                    </div>
                `;


                document.body.appendChild(
                    modal
                );


                const close =
                    modal.querySelector(
                        ".info-modal-close"
                    );


                close.addEventListener(
                    "click",
                    () => {

                        modal.remove();

                    }
                );


                modal.addEventListener(
                    "click",
                    event => {

                        if (
                            event.target ===
                            modal
                        ) {

                            modal.remove();

                        }

                    }
                );

            }
        );

    });

}


initInfoModal();


/* =====================================================
   32. AUTO HIDE NAVBAR
===================================================== */

function initNavbarScroll() {

    const navbar =
        document.querySelector(
            ".navbar"
        );


    if (!navbar) {
        return;
    }


    let lastScroll = 0;


    window.addEventListener(
        "scroll",
        () => {

            const currentScroll =
                window.scrollY;


            if (
                currentScroll >
                    lastScroll &&
                currentScroll > 100
            ) {

                navbar.classList.add(
                    "navbar-hidden"
                );

            } else {

                navbar.classList.remove(
                    "navbar-hidden"
                );

            }


            lastScroll =
                currentScroll;

        }
    );

}


initNavbarScroll();


/* =====================================================
   33. PROGRESS SECTION
===================================================== */

function initSectionProgress() {

    const pages =
        document.querySelectorAll(
            ".page"
        );


    const indicator =
        document.querySelector(
            ".section-progress"
        );


    if (
        pages.length === 0 ||
        !indicator
    ) {

        return;

    }


    window.addEventListener(
        "scroll",
        () => {

            let current = 1;


            pages.forEach(
                (page, index) => {

                    const rect =
                        page.getBoundingClientRect();


                    if (
                        rect.top <=
                        window.innerHeight / 2
                    ) {

                        current =
                            index + 1;

                    }

                }
            );


            indicator.textContent =
                `Halaman ${current} / ${pages.length}`;

        }
    );

}


initSectionProgress();


/* =====================================================
   34. FULLSCREEN
===================================================== */

function initFullscreen() {

    const button =
        document.querySelector(
            ".fullscreen-btn"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        async () => {

            try {

                if (
                    !document.fullscreenElement
                ) {

                    await document
                        .documentElement
                        .requestFullscreen();


                    button.textContent =
                        "⛶ Keluar Fullscreen";

                } else {

                    await document
                        .exitFullscreen();


                    button.textContent =
                        "⛶ Fullscreen";

                }

            } catch (error) {

                console.error(
                    "Fullscreen error:",
                    error
                );

            }

        }
    );

}


initFullscreen();


/* =====================================================
   35. KONFIRMASI CETAK
===================================================== */

function initPrintConfirmation() {

    const buttons =
        document.querySelectorAll(
            ".print-confirm"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const confirmed =
                    confirm(
                        "Cetak laporan PKL sekarang?"
                    );


                if (confirmed) {

                    window.print();

                }

            }
        );

    });

}


initPrintConfirmation();


/* =====================================================
   36. RANDOM QUOTE
===================================================== */

function initRandomQuote() {

    const quote =
        document.querySelector(
            ".random-quote"
        );


    if (!quote) {
        return;
    }


    const quotes = [

        "Belajar dari pengalaman untuk menjadi lebih baik.",

        "Setiap proses memberikan pengalaman baru.",

        "Disiplin hari ini adalah bekal untuk masa depan.",

        "Pengalaman PKL menjadi bagian dari perjalanan belajar.",

        "Terus belajar, terus berkembang, dan jangan mudah menyerah."

    ];


    const randomIndex =
        Math.floor(
            Math.random() *
            quotes.length
        );


    quote.textContent =
        quotes[randomIndex];

}


initRandomQuote();


/* =====================================================
   37. DETEKSI DEVICE
===================================================== */

function detectDevice() {

    const device =
        document.body;


    if (
        window.innerWidth <= 600
    ) {

        device.classList.add(
            "mobile-device"
        );

        device.classList.remove(
            "desktop-device"
        );

    } else {

        device.classList.add(
            "desktop-device"
        );

        device.classList.remove(
            "mobile-device"
        );

    }

}


detectDevice();


window.addEventListener(
    "resize",
    detectDevice
);


/* =====================================================
   38. SAVE THEME
===================================================== */

window.addEventListener(
    "beforeunload",
    () => {

        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            localStorage.setItem(
                "laporanTheme",
                "dark"
            );

        } else {

            localStorage.setItem(
                "laporanTheme",
                "light"
            );

        }

    }
);


/* =====================================================
   39. FINAL STATUS
===================================================== */

console.log(
    `
=========================================
 JAVASCRIPT PART 3
=========================================

✓ Typing Effect
✓ Counter Animation
✓ Documentation Filter
✓ Copy Data
✓ Information Modal
✓ Navbar Scroll
✓ Section Progress
✓ Fullscreen
✓ Print Confirmation
✓ Random Quote
✓ Device Detection
✓ Theme Storage

=========================================
       LAPORAN PKL READY
=========================================
`
);
```
```javascript
/* =====================================================
   JAVASCRIPT PART 4
   ADVANCED REPORT FEATURES
===================================================== */


/* =====================================================
   40. JAM REALTIME
===================================================== */

function initRealtimeClock() {

    const clock =
        document.querySelector(
            ".realtime-clock"
        );

    if (!clock) {
        return;
    }

    function updateClock() {

        const now = new Date();

        const time =
            now.toLocaleTimeString(
                "id-ID",
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            );

        clock.textContent = time;

    }

    updateClock();

    setInterval(
        updateClock,
        1000
    );

}

initRealtimeClock();


/* =====================================================
   41. DAFTAR ISI OTOMATIS
===================================================== */

function createTableOfContents() {

    const container =
        document.querySelector(
            ".auto-toc"
        );

    if (!container) {
        return;
    }

    const headings =
        document.querySelectorAll(
            ".page-content h3, .page-content h4"
        );

    if (headings.length === 0) {
        return;
    }

    const list =
        document.createElement("ul");

    headings.forEach(
        (heading, index) => {

            if (!heading.id) {

                heading.id =
                    "heading-" +
                    (index + 1);

            }

            const item =
                document.createElement("li");

            const link =
                document.createElement("a");

            link.href =
                "#" + heading.id;

            link.textContent =
                heading.textContent;

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    heading.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

            item.appendChild(link);

            list.appendChild(item);

        }
    );

    container.appendChild(list);

}

createTableOfContents();


/* =====================================================
   42. TOMBOL HALAMAN BERIKUTNYA
===================================================== */

function initPageNavigation() {

    const pages =
        Array.from(
            document.querySelectorAll(
                ".page"
            )
        );

    if (pages.length === 0) {
        return;
    }


    const nextButtons =
        document.querySelectorAll(
            ".next-page"
        );

    const previousButtons =
        document.querySelectorAll(
            ".previous-page"
        );


    nextButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const currentPage =
                    button.closest(".page");

                if (!currentPage) {
                    return;
                }

                const currentIndex =
                    pages.indexOf(
                        currentPage
                    );

                const nextPage =
                    pages[
                        currentIndex + 1
                    ];

                if (nextPage) {

                    nextPage.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


    previousButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const currentPage =
                    button.closest(".page");

                if (!currentPage) {
                    return;
                }

                const currentIndex =
                    pages.indexOf(
                        currentPage
                    );

                const previousPage =
                    pages[
                        currentIndex - 1
                    ];

                if (previousPage) {

                    previousPage.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });

}

initPageNavigation();


/* =====================================================
   43. PAGE INDICATOR
===================================================== */

function initPageIndicator() {

    const pages =
        document.querySelectorAll(
            ".page"
        );

    const indicator =
        document.querySelector(
            ".page-indicator"
        );

    if (
        pages.length === 0 ||
        !indicator
    ) {
        return;
    }


    function updateIndicator() {

        let activePage = 1;

        pages.forEach(
            (page, index) => {

                const rect =
                    page.getBoundingClientRect();

                if (
                    rect.top <=
                    window.innerHeight / 2
                ) {

                    activePage =
                        index + 1;

                }

            }
        );


        indicator.textContent =
            `${activePage} / ${pages.length}`;

    }


    updateIndicator();

    window.addEventListener(
        "scroll",
        updateIndicator
    );

}

initPageIndicator();


/* =====================================================
   44. WELCOME MESSAGE
===================================================== */

function showWelcomeMessage() {

    const alreadyShown =
        sessionStorage.getItem(
            "welcomeShown"
        );

    if (alreadyShown) {
        return;
    }


    setTimeout(() => {

        showNotification(
            "👋 Selamat datang di laporan PKL!"
        );

        sessionStorage.setItem(
            "welcomeShown",
            "true"
        );

    }, 1000);

}

showWelcomeMessage();


/* =====================================================
   45. DETEKSI PERUBAHAN UKURAN LAYAR
===================================================== */

function updateResponsiveStatus() {

    const status =
        document.querySelector(
            ".responsive-status"
        );

    if (!status) {
        return;
    }


    if (
        window.innerWidth <= 600
    ) {

        status.textContent =
            "📱 Mode Mobile";

    } else if (
        window.innerWidth <= 1000
    ) {

        status.textContent =
            "💻 Mode Tablet";

    } else {

        status.textContent =
            "🖥️ Mode Desktop";

    }

}

updateResponsiveStatus();

window.addEventListener(
    "resize",
    updateResponsiveStatus
);


/* =====================================================
   46. AUTO SAVE CATATAN
===================================================== */

function initAutoSave() {

    const notes =
        document.querySelector(
            "#pklNotes"
        );

    if (!notes) {
        return;
    }


    const saved =
        localStorage.getItem(
            "pklNotes"
        );


    if (saved) {

        notes.value = saved;

    }


    notes.addEventListener(
        "input",
        () => {

            localStorage.setItem(
                "pklNotes",
                notes.value
            );

        }
    );

}

initAutoSave();


/* =====================================================
   47. HAPUS CATATAN
===================================================== */

function initClearNotes() {

    const button =
        document.querySelector(
            ".clear-notes"
        );

    const notes =
        document.querySelector(
            "#pklNotes"
        );


    if (
        !button ||
        !notes
    ) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            const confirmDelete =
                confirm(
                    "Hapus semua catatan?"
                );


            if (!confirmDelete) {
                return;
            }


            notes.value = "";

            localStorage.removeItem(
                "pklNotes"
            );


            showNotification(
                "Catatan berhasil dihapus."
            );

        }
    );

}

initClearNotes();


/* =====================================================
   48. COPY LINK WEBSITE
===================================================== */

function initCopyWebsiteLink() {

    const button =
        document.querySelector(
            ".copy-link"
        );

    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        async () => {

            const url =
                window.location.href;


            try {

                await navigator
                    .clipboard
                    .writeText(url);


                showNotification(
                    "🔗 Link berhasil disalin!"
                );


            } catch (error) {

                console.error(
                    "Gagal menyalin link:",
                    error
                );

            }

        }
    );

}

initCopyWebsiteLink();


/* =====================================================
   49. SHARE WEBSITE
===================================================== */

function initShareButton() {

    const button =
        document.querySelector(
            ".share-button"
        );

    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        async () => {

            const shareData = {

                title:
                    "Laporan PKL",

                text:
                    "Laporan PKL Rekayasa Perangkat Lunak",

                url:
                    window.location.href

            };


            if (
                navigator.share
            ) {

                try {

                    await navigator.share(
                        shareData
                    );

                } catch (error) {

                    console.log(
                        "Share dibatalkan."
                    );

                }

            } else {

                try {

                    await navigator
                        .clipboard
                        .writeText(
                            window.location.href
                        );


                    showNotification(
                        "🔗 Link berhasil disalin!"
                    );

                } catch (error) {

                    console.error(
                        error
                    );

                }

            }

        }
    );

}

initShareButton();


/* =====================================================
   50. SCROLL KE BAB TERTENTU
===================================================== */

function initChapterButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-chapter]"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    button.dataset.chapter;


                const target =
                    document.getElementById(
                        id
                    );


                if (!target) {
                    return;
                }


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}

initChapterButtons();


/* =====================================================
   51. FINAL LOG
===================================================== */

console.log(
    `
=========================================
       JAVASCRIPT PART 4
=========================================

✓ Realtime Clock
✓ Automatic Table of Contents
✓ Next / Previous Page
✓ Page Indicator
✓ Welcome Message
✓ Responsive Detection
✓ Auto Save Notes
✓ Clear Notes
✓ Copy Website Link
✓ Share Website
✓ Chapter Navigation

=========================================
       ALL SYSTEM READY
=========================================
`
);
```

