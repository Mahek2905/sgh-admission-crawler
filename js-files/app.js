let DATA = "http://json-schema.org/draft-04/schema#";

const myFun = async () => {
    let var1 = await fetch(DATA);
    console.log(var1.properties[4]);
}