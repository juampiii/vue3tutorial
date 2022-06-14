<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
            <div class="user-profile__user-panel">
                <h1 class="user-profile__username">@{{ state.user.username }}</h1>
                <div class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</div>
                <div class="user-profile__follower-count">
                    <strong>Followers:</strong> {{ state.followers }}
                </div>
                <CreateTwootPanel @add-twoot="addTwoot" />

            </div>
        </div>

        <div class="user-profile__twoots-wapper">

            <TwootItem v-for="twoot in state.user.twoots" :key="twoot.id" :username="state.user.username" :twoot="twoot" />
        </div>
    </div>
</template>

<script>
import TwootItem from '../components/TwootItem.vue';
import CreateTwootPanel from "../components/CreateTwootPanel";
import { users } from "../assets/users";
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: "UsersProfile",
    components: { TwootItem, CreateTwootPanel },
    setup() {
        const route = useRoute();
        const userId = computed(() => route.params.userId)

        const state = new reactive({
            followers: 10,
            user: users[userId.value -1] || users[1]
        });

        function addTwoot(newTwoot) {
            state.user.twoots.unshift({ id: state.user.twoots.length + 1, content: newTwoot });
        }

        return {
            state,
            addTwoot
        };
    }

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