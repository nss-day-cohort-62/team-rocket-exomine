import { Governors } from "./Governors.js"
import { Facilities } from "./Facilities.js"
import { Colonies } from "./Colonies.js"
import { Minerals } from "./Minerals.js"
import { MineralInSpaceCart, Orders } from "./SpaceCart.js"


export const Exomining = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>
        <div class="main">
        <article class="choices">
            <section class="choices__governors options">
                ${Governors()}
            </section>

            <section class="choices__facilities options">
                ${Facilities()}
                </section>
        </article>

        <section class ="choices_colonies">${Colonies()}</section>

        </div>
           

       

        <article class ="mineralMarket">
        <section class="mineralCart">${Minerals()} </section>
        <section class ="spaceCart">
            <h2>Space Cart</h2>
            ${MineralInSpaceCart()}
            <button id="orderButton">Purchase Mineral</button>
            </section>

           
        </article>

       
    `
}