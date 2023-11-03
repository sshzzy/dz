<template>
    <div class="maps">
        <div class="Header">
            GoogleMaps
        </div>
        <div class="Maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d577332.5657806599!2d36.72621789973605!3d55.58103355807821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1697213297097!5m2!1sru!2sru"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
    export default{
        name:"GoogleMaps", 
    }
</script>

<style scoped>
    .maps{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;

        font-size: 25px;
        margin-top: 100px;

    }
    iframe{
        width: 80vw;
        min-height: 27vw;
        height: fit-content;
        border: 0;

        margin-top: 30px;
    }
    @media (max-width: 1850px) {
        iframe{
            height: 35vw;
        }
    }
    @media (max-width: 1560px) {
        iframe{
            height: 40vw;
        }
    }
    @media(max-width: 1190px){
        iframe{
            height: 55vw;
        }
    }
    @media (max-width:800px) {
        iframe{
            height: 80vw;
        }
    }
    @media (max-width:700px) {
        iframe{
            height: 95vw;
        }
    }
    @media (max-width:600px) {
        iframe{
            height: 105vw;
        }
    }
    @media (max-width:500px) {
        iframe{
            height: 130vw;
        }
    }
</style>