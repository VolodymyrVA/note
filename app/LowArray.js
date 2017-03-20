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
        let i = 0, j = this.a.length, k;

        while (i < j)
        {  k = Math.floor((i+j)/2);
            if (searchKey <= this.a[k]) j = k;
            else i = k+1;
        }

        if (this.a[ i ] === searchKey) return i;
        else return false;
    }

    insert(value) {
        let j;
        for (j = 0; j < this.nElems; j++){
            if (this.a[j] > value) break;
            //else if (this.a[j] == value) return;
        }
        for (let k = this.nElems; k > j; k--) {
            this.a[k] = this.a[k - 1];
        }
        this.a[j] = value;
        this.nElems++;
    }

    booleanDelete(value) {
        let j;
        for (j = 0; j < this.nElems; j++) {
            if (value == this.a[j])
                break;
        }
        if (j == this.nElems)return false;
        else {
            for (let k = j; k < this.nElems; k++) {
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