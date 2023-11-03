<template>
    <div>
        <div v-if="!isAut" class="logInOrSingUp">
            <button v-on:click="changeFormView()" class="buttonInForm" style="margin-top: 70px;">{{ resetTextInButton() }}</button>
            <div v-if="isLogIn" class="Forma">
                <input type="text" placeholder="Введите имя пользователя" v-model="DataUserForLogIn.userName">
                <input type="password" placeholder="Введите пароль" v-model="DataUserForLogIn.password">
                <div v-if="resolteVerification2!=''">
                    Неверный логин или пароль
                </div>
                <button v-on:click="logIn" class="buttonInForm">Войти</button>
            </div>
            <div v-else class="Forma">
                <input type="text" placeholder="Придумайте имя пользователя" v-model="DataUserForPost.newUserName">
                <input type="password" placeholder="Придумайте пароль" v-model="DataUserForPost.newPassword">
                <input type="password" placeholder="Повторите пароль" v-model="DataUserForPost.repNewPassword">
                <div v-if="isNotSingUp == '1'">
                    {{ resolteVerification }}
                </div>
                <button v-on:click="verification1" class="buttonInForm">Зарегестрироваться</button>
            </div>
        </div>
        <div v-else class="hello">
            Здравствуй, {{ USERName }}
            <button v-on:click="logOut" class="logOut">
                <div class="content-in-button">
                Покинуть 
                <img src="../img/free-icon-exit-symbol-74915.png" alt="">
            </div>
        </button>
        </div>
    </div>
    <RouterView></RouterView>
    
    </template>
    
    <script>
    export default{
        name: "HomeComponent",
        data: function(){
            return{
                resolteVerification2:"",
    
                isLogIn:true,
                
                user: JSON.parse(localStorage.getItem("USER")),
    
                dataUsers:JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem('USERS')))),
    
                isAut: JSON.parse(localStorage.getItem("isAut")),
    
                isNotSingUp: "0",
    
                resolteVerification:"",
    
                DataUserForLogIn:{
                    userName: "",
                    password: "",
                },
                
                DataUserForPost:{
                    newPassword:"", 
                    repNewPassword:"",
                    newUserName:"",
                    passwordMatch:false, 
                    userId: new Date().getTime()
                }, 
    
                USERName: JSON.parse(localStorage.getItem("USERName")),
    
                USERS: JSON.parse(localStorage.getItem('USERS')),
            }
        }, 
        methods:{
            changeFormView(){
                this.isLogIn = !this.isLogIn
            },
            resetTextInButton(){
                if (this.isLogIn == true){
                    return "Регистрация"
                }else{
                    return "Вход"
                }
            },
            verification1(){
                if (this.DataUserForPost.newUserName == ""){
                    this.isNotSingUp = "1"
                    this.resolteVerification = "Введите имя пользователя"
                }else if(this.DataUserForPost.newPassword != this.DataUserForPost.repNewPassword){
                    this.isNotSingUp = "1"
                    this.resolteVerification = "Пароли не совпадают"
                }else if(this.DataUserForPost.newPassword == ""){
                    this.isNotSingUp = "1"
                    this.resolteVerification = "Введите пароль"
                }else{
                    this.isNotSingUp = "0"
                    this.DataUserForPost.passwordMatch = true
                    //Получили новое текущее состояние массива пользователей
                    this.USERS = JSON.parse(localStorage.getItem('USERS'))
                    //Добавили нового пользователя
                    this.USERS.push(this.DataUserForPost)
                    //Отправили новое состояние массива
                    localStorage.setItem('USERS', JSON.stringify(this.USERS))
                    this.SingUp()
                }
            },
    
            SingUp(){
                if(this.DataUserForPost.newUserName != "" && this.DataUserForPost.passwordMatch == true){
                    localStorage.setItem("USERS", JSON.stringify(this.USERS))
                }
            }, 
            
            logIn(){
                if (this.dataUsers != null){
                    this.dataUsers.map((el)=>{
                        if (this.DataUserForLogIn.userName == el.newUserName && this.DataUserForLogIn.password == el.newPassword) {
                            this.isAut = true
                            localStorage.setItem("isAut", true)
                            localStorage.setItem("USERName",  JSON.stringify(el.newUserName))
                            location.reload()
                        }else{
                            this.resolteVerification2 = "Неверный логин или пароль"
                        }
                    })
                    
                }else{
                    location.reload()
                    alert("Что-то пошло не в ту сторону, попробуй ещё раз")
                }
            },
            logOut(){
                localStorage.setItem("isAut", false)
                localStorage.removeItem("USERName")
                this.isAut = false
            },
        },
    
        created(){
            if(!localStorage.getItem('USERS')) {
                localStorage.setItem('USERS', JSON.stringify([]))
            }
            if (localStorage.getItem("isAut") == null){
                localStorage.setItem("isAut", false)
                this.dataUsers = JSON.parse(localStorage.getItem('USERS'))
            }
        }, 
        
    }
    
    
    </script>
    
    <style scoped>
        .logInOrSingUp{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            background: rgba(91, 91, 91, 0.5);
            height: 600px;
            width: 500px;
            border-radius: 17px;
            margin-left: 150px;
            margin-top: 120px;
        }
        .Forma{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            margin-top: 70px;
            height: 400px;
        }
        
        input{
            padding:10px;
            background: transparent;
            border: none;
            border-bottom: 1px solid rgb(228, 228, 228);
            color: rgb(255, 255, 255);
            width: 200px;
        }
        
        input:active, :hover, :focus {
            outline: 0;
            outline-offset: 0;
        }
    
        .hello{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            height: 0px;
            font-size: 50px;
            margin-top: 60px;
        }
        .logOut{
            display: flex;
            align-items: center;
            justify-content: right;
            height: 45px;
            margin-left: 500px;
            margin-bottom: 100px;
            margin-right: 50px;
        }
        .content-in-button{
            width: 137px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .buttonInForm{
            width: 150px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 35px;
            margin-bottom: 70px;
        }
    
        button{
            border-radius: 20px;
            border: 0;
        }
    
        img{
            width: 20px;
        }
        
        input:focus{
            outline: none;
            border-bottom: 1px;
        }
    </style>