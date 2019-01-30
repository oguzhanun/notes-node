
var square = (x) => {
    var result = x * x;
    return result;
}

console.log(square(9));

var user = {
    
    name : 'oguzhan',

    // Burada arrow function kullanıldığından dolayı fonksiyon içinden this
    // anahtar terimine ulaşılamıyor. onun için normal fonksiyon alternatif
    // olarak kullanılmalı. ya da benim yaptığım gibi nesne ismi üzerinden
    // alt nesneye ulaşmak gerekiyor. user.name de olduğu gibi...
    // ayrıca arrow function ile argument anahtar parametresi de normalden
    // farklı çalışıyor. normal de arguments ile girilen argümanlar
    // nesne olarak 0,1,2 diye adlandırılarak fonksiyona sunuluyor...
    sayHi : ()=>{

        console.log(`Hi ${user.name}`)
    },
    sayHiAlt(){
        console.log(`Hi ${this.name} from Alt`);
        console.log(arguments)
    }
};

user.sayHiAlt(1,2,3,4,5);