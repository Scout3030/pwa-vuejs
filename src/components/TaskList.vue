<template>
    <v-card class="mx-auto">
        <v-toolbar color="red accent-4" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Cosas por hacer</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-btn icon @click.native="$emit('createNewTask')">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-toolbar>

        <v-list two-line>
            <v-list-item-group v-model="selected" multiple active-class="red--text">
                <template v-for="(task, index) in tasks">
                    <task-item
                        :task="task"
                        :key="task.id"
                        @toggleStatus="updateTaskStatus(task)"
                        @editTask="$router.push({name:'taskDetail', params: {id: task.id}})"
                        @removeTask="REMOVE_TASK(task)"
                    />
                    <v-divider v-if="index +1 < task.length" :key="index"></v-divider>
                </template>
            </v-list-item-group>
        </v-list>
    </v-card>

</template>

<script>
    import TaskItem from './TaskItem'
    import {mapMutations} from 'vuex'
    export default {
        name: "TaskList",
        props: ['tasks'],
        components: {TaskItem},
        data() {
            return {
                selected: [0]
            }
        },
        methods: {
            ...mapMutations([
                'UPDATE_TASK_STATUS', 'REMOVE_TASKS', 'REMOVE_TASK'
            ]),
            updateTaskStatus (task) {
                const updatedTask = {
                    id: task.id,
                    title: task.title,
                    active: !task.active
                }
                this.UPDATE_TASK_STATUS(updatedTask)
            }
        }
    }
</script>

<style scoped>

</style>
