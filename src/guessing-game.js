class GuessingGame {
    constructor() {


    }

    setRange(min, max) {
        this.min = min + 1;
        this.max = max;
    }

    guess() {
        this.mid = this.min + Math.floor((this.max - this.min) / 2);
        return this.mid;

    }

    lower() {
        this.max = this.mid;

    }

    greater() {
        this.min = this.mid + 1;

    }
}

module.exports = GuessingGame;
