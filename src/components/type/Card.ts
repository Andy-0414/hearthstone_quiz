import * as data from "../../assets/cards.json";

export class Card {
    public id: string;
    public name: string;
    public attack: number;
    public health: number;
    constructor(cardJson: any) {
        this.id = cardJson.id || "none";
        this.name = cardJson.name || "none";
        this.attack = cardJson.attack || 0;
        this.health = cardJson.health || 0;
    }
    getImageUrl(): string {
        return `https://art.hearthstonejson.com/v1/256x/${this.id}.jpg`
    }
}

export class CardManager {
    /**
     * @description CardManager를 가져옴
     * @static
     * @returns {CardManager}
     * @memberof CardManager
     */
    public static getCardManager(): CardManager {
        return this.cardManager;
    }
    private static cardManager: CardManager = new CardManager();
    public cardList: Card[];
    public pullCards: number[] = [];
    constructor() {
        const cardData: any = data;
        this.cardList = cardData.default.map((card: any) => new Card(card));
    }
    /**
     * @description 카드 목록을 가져옴
     *
     * @returns {Card[]}
     * @memberof CardManager
     */
    public getCardList(): Card[] {
        return this.cardList;
    }
    /**
     * @description 랜덤 값 가져오기 (0~최댓값)
     *
     * @param {number} max 최댓값
     * @returns {number}
     * @memberof CardManager
     */
    public getRandom(max: number): number {
        return Math.floor(Math.random() * (max + 1));
    }
    /**
     * @description 중복되지 않는 랜덤 값 가져오기 (0~최댓값)
     *
     * @param {number} max 최댓값
     * @param {number} count 개수
     * @returns {number[]}
     * @memberof CardManager
     */
    public getRandoms(max: number, count: number): number[] {
        const output: number[] = [];
        let randomindex: number;
        while (output.length < count) {
            randomindex = this.getRandom(max);
            if (output.indexOf(randomindex) === -1) {
                output.push(randomindex);
            }
        }
        return output;
    }
    getRandomCard(): Card {
        let randomIndex: number = this.getRandom(this.cardList.length);
        while (this.pullCards.indexOf(randomIndex) != -1) {
            randomIndex = this.getRandom(this.cardList.length)
        }
        this.pullCards.push(randomIndex)
        return this.cardList[randomIndex]
    }
    getRandomCards(count:number): Card[] {
        let output: Card[] = []
        for(let i = 0; i < count; i++){
            output.push(this.getRandomCard())
        }
        return output
    }
    resetPullCardsIndex(): void {
        this.cardList = []
    }
}