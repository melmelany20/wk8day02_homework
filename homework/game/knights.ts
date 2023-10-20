import Game from "./oop"

export default class Knight extends Game{
    static className = 'Knight'

    constructor(protected _gold: number){
        super(_gold)
    }

    attack(): void {
        console.log('Knight attacks with a sword')
    }

    defense(): void {
        console.log('Knight defends with armor')
    }

    collectGold()  {
        return this._gold ++
    }

}