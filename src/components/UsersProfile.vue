<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
            <div class="user-profile__user-panel">
                <h1 class="user-profile__username">@{{ state.user.username }}</h1>
                <div class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</div>
                <div class="user-profile__follower-count">
                    <strong>Followers:</strong> {{ followers }}
                </div>
                <CreateTwootPanel @add-twoot="addTwoot"></CreateTwootPanel>
            </div>
        </div>

        <div class="user-profile__twoots-wapper">

            <TwootItem v-for="[id, twoot] in allTwoots" :key="id" :username="state.user.username" :twoot="twoot"
                :twootId="id" />
        </div>
    </div>
</template>

<script>
import TwootItem from './TwootItem.vue';
import CreateTwootPanel from './CreateTwootPanel.vue';

import { computed, reactive } from 'vue';
export default {
    name: "UsersProfile",
    components: { TwootItem, CreateTwootPanel },
    setup() {
        const state = new reactive({
            followers: 0,
            user: {
                id: 1,
                username: "Juampi",
                firstName: "Juan Pablo",
                lastName: "Rodríguez V.",
                email: "juanpablo@nitsnets.com",
                isAdmin: true,
                twoots: new Map()
            }
        });

        const allTwoots = computed(() => state.user.twoots)

        function addTwoot(newTwoot) {
          state.user.twoots.set(state.user.twoots.size + 1, newTwoot);
        }

        return {
            state,
            allTwoots,
            addTwoot
        };
    },
    mounted() {
        this.addTwoot("Hello world");
        this.addTwoot("Such a wonderfull language!");
    },
    
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
        padding: 20px;
        margin-right: 50px;
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