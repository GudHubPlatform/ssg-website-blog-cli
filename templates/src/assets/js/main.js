import "@gudhub/gh-component";

/* SET URL REFERRER */

window.onload = () => {
    try {
        const referrer = new URL(document.referrer);
        if(referrer.hostname !== 'gudhub.com.ua' && !localStorage.getItem('referrer')) {
            localStorage.setItem('referrer', referrer.href);
        }
    } catch {
    }
}

/* CLEARING NON-NECCESSARY STYLES */

window.beforeCaching = function() {
    
    const styles = document.querySelectorAll('style:not([data-webpack-style="true"])');
    if(styles) {
        for (let style = 0; style < styles.length; style++) {
            styles[style].remove()
        }
    }

    const links = document.querySelectorAll('link');
    if(links) {
        for (let link = 0; link < links.length; link++) {
            if((/.css/g.test(links[link].href) !== -1) && (links[link].href.indexOf('gudhub.com/') !== -1)) { 
                links[link].remove();
            } 
        }
    }  
};

// FORM SUBMIT LISTENER TO PROCESS ADDITIONAL CALLBACKS
// here you will receive form object after user submitted a form

window.addEventListener('submitForm', (event) => {
    const { formDataObj } = event.detail;
});