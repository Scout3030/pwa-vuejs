<template>
    <v-alert prominent type="error">
        <v-row align="center">
            <v-col class="grow">
                ¡Todavía no has creado ninguna tarea!
            </v-col>
            <v-col class="shrink">
                <v-btn @click="$emit('createNewTask')">
                    Crear mi primera tarea
                </v-btn>
            </v-col>
        </v-row>
    </v-alert>
</template>

<script>
    export default {
        name: "TaskEmpty"
    }
</script>
