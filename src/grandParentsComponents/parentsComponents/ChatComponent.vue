<template>

    <div v-if="Islogin" class="chatik">
        <div class="title">
            Чат для пользователей сайта
        </div>

        <div class="messages" >
            <div v-for="i in ListMSG" :key="i"  class="message">
                <div>
                <div class="userName">
                    {{ i.user }}:
                </div>
                <div class="textMessage">
                    {{i.Message}}
                </div>
            </div>
            </div>
            
        </div>

        <div class="inputMessage">
            <input type="text" placeholder="Введите сообщение" v-model="infoMsg.Message" class="lineMSG">
            <button @click="sendMSG"><img src="../img/free-icon-send-button-60525.png" alt=""></button>
        </div>
        <div class="delete">
            <div>
                Удалить сообщения чата
            </div>
            <button @click="deleteMSG" class="buttonDeleter"><img src="../img/free-icon-trash-bin-7267149.png" alt="" class="trash"></button>
        </div>
    </div>

    <div v-else class="voydi">
        Войдите в аккаунт или зарегистрируйтесь!!!
    </div>
</template>

<script>
    export default{
        name: "ChatPage", 
        data(){
            return{
                Islogin: JSON.parse(localStorage.getItem("isAut")),
                infoMsg: {
                    user: JSON.parse(localStorage.getItem("USERName")), 
                    Message:"", 
                },
                ListMSG: JSON.parse(localStorage.getItem("MSG")), 
            }
        },
        methods:{
            isLogIn(){
                if (localStorage.getItem("isAut") == true){
                    this.Islogin = true
                }
            }, 
            sendMSG(){
                if (this.infoMsg.Message != ""){
                    this.ListMSG.push(this.infoMsg)
                    localStorage.setItem("MSG", JSON.stringify(this.ListMSG))
                    this.ListMSG = JSON.parse(localStorage.getItem("MSG"))
                    this.infoMsg.Message = ""
                }
            }, 
            deleteMSG(){
                localStorage.removeItem("MSG")
                localStorage.setItem("MSG", JSON.stringify([])) 
                this.ListMSG = JSON.parse(localStorage.getItem("MSG"))
            }
        }, 
        created(){
            if(!localStorage.getItem("MSG")){
                localStorage.setItem("MSG", JSON.stringify([])) 
            }
        },
    }
</script>

<style scoped>
    .voydi{
        margin-left: 250px;
        margin-top: 300px;
        font-size: 20px;
        color: rgb(144, 144, 144);
    }
    .title{
        font-size: 23px;
        margin-top: 20px;

    }
    .chatik{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #8a8282;
    }
    .messages{
        min-height: 600px;
        width:900px;
        margin-top: 30px;
        max-height: 100px;

        overflow-y: auto;
    }
    .message{
        background-color: rgb(255, 255, 255);

        max-width: 500px;
        min-width: 200px;
        width: fit-content;
        height: fit-content;
        margin-top: 30px;
        border-radius: 10px;
    }
    .userName{
        margin-left: 10px;
        padding-bottom: 5px;
        padding-top: 5px;
        font-size: 20px;
    }
    .textMessage{
        margin-top: 0.375rem;
        margin-left: 10px;
        max-width: 500px;
        width: fit-content;
        height: fit-content;
        padding-right: 10px;
        padding-bottom: 10px;
        font-size: 19px;

        overflow-wrap: break-word;
    }
    .inputMessage{
        width:900px;
        height: 30px;
        margin-top: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .delete{
        font-size: 20px;

        position: relative;
        top: -750px;
        left: 450px;

        height: 200px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }
    .buttonDeleter{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .trash{
        padding-right: 8.5px;
    }
    input{
        padding:10px;
        width: 90%;
        height: 40px;
        font-size: 20px;
        border-radius: 10px;
        border: 0;
    }
    input:active, :hover, :focus {
        outline: 0;
        outline-offset: 0;
    }
    img{
        height: 40px;
    }
    button{
        border-radius: 29px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        padding-left: 15px;
        margin-left: 20px;
    }
</style>