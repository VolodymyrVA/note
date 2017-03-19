class LowArray {
    constructor() {
        this.a;
        this.nElems;
    }

    highArray(max) {
        this.a = [];
        this.nElems = 0;
    }

    booleanFind(searchKey) {
        for (let i = 0; i < this.nElems; i++) {
            if (this.a[i] == searchKey) break;
            if (i == this.nElems) return false;
            else return true;
        }
    }

    insert(value) {
        this.a[this.nElems] = value;
        this.nElems++;
    }

    booleanDelete(value) {
        let j;
        for (j = 0; j < this.nElems; j++){
            if (value == this.a[j])
                break;
        }
        if (j == this.nElems)return false;
        else {
            for (let k = j; k < this.nElems; k++){
                this.a[k] = this.a[k + 1];
            }
            this.a.pop();
            this.nElems--;
            return true;
        }
    }

    display() {
        for (let i = 0; i < this.nElems; i++) {
            console.log(this.a[i] + "");
        }
    }

}
export default LowArray