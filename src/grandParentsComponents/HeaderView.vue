<template >
    <main>       
        <div class="Links">
            <section>        
                <router-link :to="({name: 'home'})" class="isActive">Твоя домашняя страница</router-link>
            </section>
            <section>
                <router-link :to="({name: 'chat'})" class="isActive">Чаты</router-link>
            </section>
            <section>
                <router-link :to="({name: 'maps'})" class="isActive">Карта</router-link>
            </section>
        
        </div>
        <section>
            <RouterView/>
        </section>
    </main>

</template>

<script>

</script>

<style scoped>
    .Links{
        width:800px;
        display:flex;
        justify-content: space-between;
    }
    .isActive{
        text-decoration: none;
        color: azure;
        width: 200px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(31, 31, 31, 0.5);
        border-radius: 20px;
        margin: center;
    }
</style>