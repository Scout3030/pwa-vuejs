<template>
    <v-card
        v-if="task"
        max-width="500"
        class="mx-auto mt-5"
    >
        <v-card-title>
            {{task.title}}
        </v-card-title>
        <v-card-actions>
            <v-btn text @click="$router.back()">Volver</v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    export default {
        name: "TaskDetail",
        mounted() {
            const taskId = this.$route.params.id
            this.task = this.$store.getters['task'](taskId)
        },
        data() {
            return {
                task: null
            }
        }
    }
</script>
