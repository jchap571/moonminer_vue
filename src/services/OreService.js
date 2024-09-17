
import { AppState } from "@/AppState"
import { applyStyles } from "@popperjs/core"



class OreService {

    mine() {
        AppState.ore++
        for (let i = 0; i < AppState.clickUpgrades.length; i++) {
            let upgradeBonus = AppState.clickUpgrades[i].multiplier * AppState.clickUpgrades[i].quantity
            AppState.ore += upgradeBonus

        }
    }

    // look at increase score
    buyUpgrade() {

    }

}


export const oreService = new OreService()