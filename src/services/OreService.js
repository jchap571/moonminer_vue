
import { AppState } from "@/AppState"


class OreService {

    mine(){
        AppState.ore++
    }

}


export const oreService = new OreService()