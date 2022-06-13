<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
            <div class="user-profile__user-panel">
                <h1 class="user-profile__username">@{{ user.username }}</h1>
                <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
                <div class="user-profile__follower-count">
                    <strong>Followers:</strong> {{ followers }}
                </div>               
            </div>
             <CreateTwootPanel @add-twoot="addTwoot"></CreateTwootPanel>
        </div>

        <div class="user-profile__twoots-wapper">

            <TwootItem v-for="[id, twoot] in allTwoots" :key="id" :username="user.username" :twoot="twoot"
                :twootId="id" />
        </div>
    </div>
</template>

<script>
import TwootItem from './TwootItem.vue';
import CreateTwootPanel from './CreateTwootPanel.vue';
export default {
    name: "UsersProfile",
    data() {
        return {
            followers: 0,
            user: {
                id: 1,
                username: "Juampi",
                firstName: "Juan Pablo",
                lastName: "Rodríguez V.",
                email: "juanpablo@nitsnets.com",
                isAdmin: true,
                twoots: new Map()
            },
        };
    },
    computed: {
        allTwoots() {
            return this.user.twoots;
        }
    },
    methods: {
        addTwoot(newTwoot) {
            this.user.twoots.set(this.user.twoots.size + 1, newTwoot);
        }
    },
    mounted() {
        this.user.twoots.set(1, "Hello world");
        this.user.twoots.set(2, "Such a wonderfull language!");
    },
    components: { TwootItem, CreateTwootPanel }
};
</script>

<style lang="scss" scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;

    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
    }

    .user-profile__admin-badge {

        background-color: #4f0891;
        color: white;
        font-weight: bold;
        margin-right: auto;
        padding: 0 10px;
        border-radius: 5px;
    }
}
</style>