import "@gudhub/gh-component";

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
            if((/.css/g.test(links[link].href) !== -1) && (links[link].href.indexOf('gudhub.com') !== -1)) { 
                links[link].remove();
            } 
        }
    }  
};

/* GOODLE TAG MANAGER IMPORT */

if (window.location.protocol !== 'file:') {
    let linkScript = document.createElement('script');
    linkScript.setAttribute('async', '');
    linkScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-574QDRGJYT');
 
    let codeScript = document.createElement('script');
    codeScript.setAttribute('async', '');
    codeScript.innerHTML = /* javascript */`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-574QDRGJYT');
    `;

    document.head.append(linkScript);
    document.head.append(codeScript);
}