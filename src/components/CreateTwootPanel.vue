<template>
    <form @click.prevent="createNewTwoot" class="create-twoot-panel">
        <label for="newTwoot">Create new Twoot ({{ newTwootContent.length }}/50)</label>
        <textarea id="newTwoot" rows="4" v-model="newTwootContent"></textarea>
        <div class="create-twoot-panel__submit">
            <div class="create-twoot-type">
                <label for="newTypeTwoot"><strong>Type:</strong></label>
                <select name="newTypeTwoot" id="newTypeTwoot" v-model="typeTwoot">
                    <option :value="option.id" v-for="(option, index) in twootTypes" :key="index">
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
export default {
    data() {
        return {
            twootTypes: [
                { id: 'draft', content: 'Draft' },
                { id: 'instant', content: 'Instant Twoot!' }
            ],
            typeTwoot: 'instant',
            newTwootContent: '',
        }
    },
    computed: {
        newTwootCaractersExceeded() {
            return this.newTwootContent.length > 50;
        }
    },
    methods: {
        createNewTwoot() {
            if (this.typeTwoot != 'draft' && this.newTwootContent) {
                this.$emit('add-twoot', this.newTwootContent)
                this.newTwootContent = '';
            }
        }
    }
}
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