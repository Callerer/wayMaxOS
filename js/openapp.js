function openApp(app) {
        
        const appIcon = document.getElementById(app);
        const appContent = document.getElementById(app + "Content")
        const closeBtn = document.getElementById(app + "closeBtn");

        if (closeBtn) closeBtn.addEventListener("click", () => appContent.style.display = "none");
        if (appIcon) appIcon.addEventListener("click", () => appContent.style.display = "block");
    }
    
openApp("langdoro");

openApp("faultycalc");

openApp("agenda")
