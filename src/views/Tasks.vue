<template>
    <v-container>
        <v-layout row wrap mt-5>
            <v-flex xs12>
                <task-list v-if="tasks.length" :tasks="tasks" @createNewTask="dialog = true"/>
                <task-empty v-else @createNewTask="dialog = true"/>
            </v-flex>
        </v-layout>

        <task-modal :dialog="dialog" @close="dialog = false"/>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    import TaskModal from "../components/TaskModal";
    import TaskEmpty from "../components/TaskEmpty";
    import TaskList from "../components/TaskList";
    export default {
        name: "Tasks",
        components: {TaskModal, TaskEmpty, TaskList},
        data() {
            return {
                dialog: false
            }
        },
        computed: {
            ...mapState(['tasks'])
        }
    }
</script>
