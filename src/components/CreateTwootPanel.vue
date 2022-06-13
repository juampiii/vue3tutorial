<template>
    <form @click.prevent="createNewTwoot" class="create-twoot-panel">
        <label for="newTwoot">Create new Twoot ({{ state.newTwootContent.length }}/50)</label>
        <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"></textarea>
        <div class="create-twoot-panel__submit">
            <div class="create-twoot-type">
                <label for="newTypeTwoot"><strong>Type:</strong></label>
                <select name="newTypeTwoot" id="newTypeTwoot" v-model="state.typeTwoot">
                    <option :value="option.id" v-for="(option, index) in state.twootTypes" :key="index">
                        {{ option.content }}
                    </option>
                </select>
            </div>
            <button class="create-twoot-button" :disabled="newTwootCaractersExceeded">
                Create twoot!
            </button>
        </div>
    </form>
</template>


<script>
import { computed, reactive } from 'vue';
export default {
    setup(props, ctx) {
        const state = reactive({
            twootTypes: [
                { id: 'draft', content: 'Draft' },
                { id: 'instant', content: 'Instant Twoot!' }
            ],
            typeTwoot: 'instant',
            newTwootContent: '',
        })

        const newTwootCaractersExceeded = computed(() => state.newTwootContent.length > 50)

        function createNewTwoot() {
            if (state.typeTwoot != 'draft' && state.newTwootContent) {
                ctx.emit('add-twoot', state.newTwootContent)
                state.newTwootContent = '';
            }
        }
        return {
            state,
            newTwootCaractersExceeded,
            createNewTwoot
        };
    }
};
</script>

<style lang="scss" scoped>
.create-twoot-panel {
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea {
        border: 1px solid #DFE3E8;
        border-radius: 5px;
    }

    .create-twoot-panel__submit {
        display: flex;
        justify-content: space-between;

        .create-twoot-type {
            padding: 10px 0;
        }

        button {
            padding: 5px 20px;
            margin: auto 0;
            border-radius: 5px;
            border: none;
            background-color: deeppink;
            color: white;
            font-weight: bold;
        }
    }

    &.--exceeded {
        color: red;
        border-color: red;

        .create-twoot-panel__submit {
            button {
                background-color: red;
                color: white;
            }
        }
    }
}
</style>