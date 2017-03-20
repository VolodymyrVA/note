import LowArray from './LowArray'
class LowArrayApp {
    init() {
        let a1 = new LowArray();

        a1.highArray();

        a1.insert(16);
        a1.insert(67);
        a1.insert(0);
        a1.insert(78);
        a1.insert(45);
        a1.insert(32);
        a1.insert(89);
        a1.insert(94);
        a1.insert(25);
        a1.insert(10);
        a1.insert(10);

        let searchKey = 77;
        if (a1.booleanFind(searchKey)) {
            console.log("Found " + searchKey);
        }
        else {
            console.log("Can't find " + searchKey)
        }

        a1.booleanDelete(0);
        a1.booleanDelete(94);

        a1.display();

        console.log(a1.a);
        console.log(a1.booleanFind(15));
    }


}
export default LowArrayApp