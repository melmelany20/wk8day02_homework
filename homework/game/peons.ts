import Game from "./oop"

export default class Peon extends Game{
    static className = 'Peon'

    constructor(protected _gold: number){
        super(_gold)
    }

    attack(): void {
        console.log('Peon attacks with a Club')
    }

    defense(): void {
        console.log('Peon defends with a shield')
    }

    collectGold()  {
        return this._gold ++
    }

}