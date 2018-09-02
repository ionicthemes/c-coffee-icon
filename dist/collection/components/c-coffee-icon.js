export class CustomCoffeeIconComponent {
    render() {
        return ([
            h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "hidden" },
                h("symbol", { id: "icon-coffee", viewBox: "0 0 20 20" },
                    h("title", null, "icon-coffee"),
                    h("path", { fill: "var(--handle-color)", d: "M15,17H14V9h3a3,3,0,0,1,3,3h0A5,5,0,0,1,15,17Zm1-6v3.83A3,3,0,0,0,18,12a1,1,0,0,0-1-1Z" }),
                    h("rect", { fill: "var(--cup-color)", x: "1", y: "7", width: "15", height: "12", rx: "3", ry: "3" }),
                    h("path", { fill: "var(--smoke-color)", d: "M7.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,0,1-1.79.89Z" }),
                    h("path", { fill: "var(--smoke-color)", d: "M3.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z" }),
                    h("path", { fill: "var(--smoke-color)", d: "M11.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z" }))),
            h("svg", { class: "coffee-icon", "aria-hidden": "true" },
                h("use", { href: "#icon-coffee" }))
        ]);
    }
    static get is() { return "c-coffee-icon"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:c-coffee-icon:**/"; }
}
