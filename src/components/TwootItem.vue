<template>
    <div class="twoot-item">
        <div class="user-profile__twoot">
            <div class="twoot-item__user">
                @{{ username }}
            </div>
            <div class="twoot-item__content">
                {{ twoot }}
            </div>
        </div>
    </div>
</template>

<script>
// import { reactive } from 'vue'
export default {
    // setup(props) {
    //     const state = reactive({
    //         username: props.username,
    //         twoot: props.twoot,
    //         twootId: props.twootId,
    //     })

    // return{
    //     state
    // }

    // },
    name: "TwootItem",
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: String,
            required: true
        },
        twootId: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.twoot-item {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        transform: scale(1.1, 1.1);
    }

    .twoot-item__user {
        font-weight: bold;
    }
}
</style>