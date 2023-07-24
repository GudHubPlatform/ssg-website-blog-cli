class MetaIndex extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        document.querySelector('head').innerHTML += `
        <meta name="robots" content="nofollow">
        `;
        this.remove();
    }
}

window.customElements.define('meta-index', MetaIndex);