import { Governors } from "./Governors.js"
import { Facilities } from "./Facilities.js"
import { Colonies } from "./Colonies.js"
import { Minerals } from "./Minerals.js"
import { MineralInSpaceCart } from "./SpaceCart.js"


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
        <article>${Colonies()}</article>
            
            <section>${Minerals()}
            </section>

        </article>

       

        <article>
            <h2>Space Cart</h2>
            ${MineralInSpaceCart()}
            <button id="orderButton">Purchase Mineral</button>
        </article>

        <article class="customOrders">
            <h2>Custom Mineral Orders</h2>
        </article>
    `
}