function createNewUser(){                               //Обьвление и определение функции создания пользователя
    let newUser = {                                     //Обьвление и определение нового пользователя  
        getLogen: function() {                          //Обьвление и определение функции получение логина
            return console.log(this.Name[0].toUpperCase() 
            + this.SName.toLowerCase()) ;               //Вывод логина пользователя
        }
    };
        newUser.prototype = {                           //Определение прототипа нового пользователя
            get username() {                            //GetUsername для имени
            		return this.Name;},                 //Возврат имени
    
            set username(UserNames) {                   //SetUsername для имени
                this.Name = Name;},                     //Определение имени

            get usersecondname() {                      //GetUsername для имени
            		return this.SName;},                //Возврат имени
    
            set usersecondname(UserSecondNames) {       //SetUsername для имени
                this.SName = SName;}                    //Определение имени
    
    };
    newUser.Name = prompt("Введите имя",'Number');                      //Обьвление и определение имени
    while (newUser.Name === ''){                                        //Проверка на пустую строку
        newUser.Name = prompt('Введите имя ЗАНОВО! : ','Number');       //Определение имени
    }
    newUser.SName = prompt("Введите фамилию",'Serega');                 //Обьвление и определение фамилии
    while (newUser.SName === ''){                                       //Проверка на пустую строку
        newUser.SName = prompt('Введите фамилию ЗАНОВО! : ','Serega');  //Определение фамилии
    }
    newUser.getLogen();                                                 //Вызов функции определения логина пользователя
    newUser.Name = "Stepan";                                            //Переопределение имени пользователя
    newUser.SName = "Gigga";                                            //Переопределение фамилии пользователя
    newUser.getLogen();                                                 //Вызов функции определения логина пользователя
    return newUser;                                                     //Возврат нового пользователя
    
}
createNewUser();                                                        //Вызов функции создания нового пользователя