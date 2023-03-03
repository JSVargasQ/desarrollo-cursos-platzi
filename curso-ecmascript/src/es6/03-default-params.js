function newUser( name, age, country ) {
    var user = {
        name: name || 'JuanSe',
        age: age || 21,
        country: country || 'Colombia'
    };

    console.log(user);
};

newUser();
newUser('Sebas', 22, 'EEUU');


// 
function newAdmin(name = 'Vargas', age = 23, country = 'Mexico') {
    var admin = {
        name: name,
        age: age,
        country: country
    };

    console.log(admin);
}

newAdmin();
newAdmin('Quintero', 24, 'España');