<template>
    <v-list-item :key="task.title" exact @click.native="$emit('editTask')">
        <template v-slot:default="{ active, toggle}">
            <v-list-item-content>
                <v-list-item-title v-text="task.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
                <v-icon
                    @click.native.stop="$emit('toggleStatus')"
                    v-if="task.active"
                    color="purple"
                >
                    mdi-check-all
                </v-icon>

                <v-icon
                        @click.native.stop="$emit('toggleStatus')"
                        v-else
                        color="red"
                >
                    mdi-comment-remove
                </v-icon>

                <v-icon
                        @click.native.stop="$emit('removeTask')"
                        color="black lighten-1"
                >
                    mdi-delete-forever
                </v-icon>
            </v-list-item-action>
        </template>
    </v-list-item>

</template>

<script>
    export default {
        name: "TaskItem",
        props: ['task']
    }
</script>

<style scoped>

</style>
