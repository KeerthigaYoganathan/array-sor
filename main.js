console.log("Hi");
let a = [48, 6, 27, 13];
for(let i =0; i<a.length; i++){
    for(let j= i+1; j<a.length; j++){
        if(a[i]<a[j]){
            console.log(a[i]);
            let temp= a[j];
            a[j] = a[i];
            a[i] = temp;
        }
    }
}
console.log(a);