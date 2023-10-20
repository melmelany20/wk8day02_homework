import Game from "./oop"

export default class Orges extends Game{
    static className = 'Orges'

    constructor(protected _gold: number){
        super(_gold)
    }

    attack(): void {
        console.log('Orges attacks with with a club')
    }

    defense(): void {
        console.log('Orges defends with a shield')
    }

    collectGold()  {
        return this._gold ++
    }

}