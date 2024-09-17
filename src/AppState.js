import { reactive } from 'vue'
import { Upgrade } from './models/Upgrades.js'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  ore: 0,

  upgrades: 0,

  clickUpgrades: [
    {
      id: 'Knife',
      name: 'Knife',
      price: 10,
      quantity: 0,
      multiplier: 5,
    },
    {
      id: 'Drill',
      name: 'Drill',
      price: 20,
      quantity: 0,
      multiplier: 10,
    }

  ]


})



