<template>
    <v-row justify="center">
        <v-dialog :value="dialog" persistent max-width="600px">
            <form>
                <v-card-title>
                    <span class="headline">Nueva tarea</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field
                            v-model="form.task"
                            :error-messages="taskErrors"
                            :counter="20"
                            label="Tarea"
                            required
                            :min-length="5"
                            :max-length="20"
                            @keyup.enter.prevent="submit"
                        ></v-text-field>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" text @click="closeModal">Cerrar</v-btn>
                    <v-btn color="blue darken-1" text @click="submit">Crear tarea</v-btn>
                </v-card-actions>
            </form>
        </v-dialog>
    </v-row>

</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, maxLength, minLength} from 'vuelidate/lib/validators'
    import {mapMutations} from 'vuex'
    export default {
        name: "TaskModal",
        props: ['dialog'],
        mixins: [validationMixin],
        data () {
            return {
                form: {
                    task: ''
                }
            }
        },
        validations: {
            form: {
                task: {
                    required, maxLength: maxLength(20), minLength: minLength(5)
                }
            }
        },
        computed: {
            taskErrors () {
                const errors = []
                if (!this.$v.form.task.$dirty) return errors
                !this.$v.form.task.maxLength && errors.push('La tarea no puede tener más de 20 caracteres')
                !this.$v.form.task.minLength && errors.push('La tarea no puede tener menos de 5 caracteres')
                !this.$v.form.task.required && errors.push('¡Escribe la tarea!')
                return errors
            }
        },
        methods: {
            ...mapMutations([
                'CREATE_TASK'
            ]),
            closeModal () {
                this.form.task = ''
                this.$v.$reset()
                this.$emit('close')
            },
            submit () {
                // this.$v.touch()
                if (this.$v.$anyError) return

                this.CREATE_TASK({
                    id: Date.now(),
                    title: this.form.task,
                    active: false
                })
                this.closeModal()
            }
        }
    }
</script>
