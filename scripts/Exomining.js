export const Exomining = () => {
    return `
        <h1>Exomining</h1>

        <article class="choices">
            <section class="choices__governors options">
                ${Governors()}
            </section>
            <section class="choices__facilities options">
                ${Facilities()}
            </section>
        </article>

        <article>
            <h2>Space Cart</h2>
            <button id="orderButton">Purchase Mineral</button>
        </article>

        <article class="customOrders">
            <h2>Custom Mineral Orders</h2>
        </article>
    `
}