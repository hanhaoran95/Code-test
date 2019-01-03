<template>
    <div class="div-main-contanier">
        <div class="div-main">
            <form novalidate class="md-layout" @submit.prevent="validate">
                <md-card class="md-layout-item md-size-50 md-small-size-100 card-from-content">
                    <md-card-header>
                        <h1>Register</h1>
                    </md-card-header>

                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('firstName')">
                                    <label for="first-name">First Name</label>
                                    <md-input name="first-name" id="first-name" autocomplete="given-name"
                                              v-model="form.firstName" :disabled="sending" required/>
                                    <span class="md-error"
                                          v-if="!$v.form.firstName.required">The first name is required</span>
                                    <span class="md-error"
                                          v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('lastName')">
                                    <label for="last-name">Last Name</label>
                                    <md-input name="last-name" id="last-name" autocomplete="family-name"
                                              v-model="form.lastName" :disabled="sending" required/>
                                    <span class="md-error"
                                          v-if="!$v.form.lastName.required">The last name is required</span>
                                    <span class="md-error"
                                          v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                                </md-field>
                            </div>
                        </div>

                        <md-field :class="getValidationClass('email')">
                            <label for="email">Email</label>
                            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                                      :disabled="sending" required/>
                            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                        </md-field>

                        <md-field class="div-form-row" :class="getValidationClass('password')">
                            <label>Password</label>
                            <md-input v-model="form.password" type="password" name="password" id="password"
                                      required></md-input>
                            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
                        </md-field>

                        <md-field :class="getValidationClass('PhoneNumber')">
                            <label>PhoneNumber</label>
                            <md-input type="number" v-model="form.PhoneNumber" :disabled="sending" required/>
                            <span class="md-error"
                                  v-if="!$v.form.PhoneNumber.required">The PhoneNumber is required</span>
                        </md-field>

                    </md-card-content>

                    <md-progress-bar md-mode="indeterminate" v-if="sending"/>

                    <md-card-actions>
                        <md-button type="submit" class="md-raised md-primary button-submit" :disabled="sending">Create
                            user
                        </md-button>
                    </md-card-actions>
                    <div @click="goLoginPage" class="div-goLoginPage">Login</div>

                </md-card>

            </form>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, email, minLength} from 'vuelidate/lib/validators'
    import axios from 'axios'

    export default {
        name: 'Register',
        mixins: [validationMixin],
        data: () => ({
            form: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                PhoneNumber: null,
            },
            sending: false,
        }),
        validations: {
            form: {
                firstName: {
                    required,
                    minLength: minLength(3),
                },
                lastName: {
                    required,
                    minLength: minLength(3),
                },
                email: {
                    required,
                    email,
                },
                password: {
                    required,
                },
                PhoneNumber: {
                    required,
                },
            },
        },
        methods: {
            goLoginPage() {
                this.$router.push({name: 'Login'})
            },
            getValidationClass(fieldName) {
                const field = this.$v.form[fieldName]

                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty,
                    }
                }
            },
            clearForm() {
                this.$v.$reset()
                this.form.firstName = null
                this.form.lastName = null
                this.form.email = null
                this.form.password = null
                this.form.PhoneNumber = null
            },
            register() {
                this.sending = true
                this.$router.push({name: 'Profile'})
                // todo: connect server
                // const data = this.form
                // axios({
                //     method: 'post',
                //     url: '/Account/Register',
                //     data: data
                // }).then(res => {
                //     this.clearForm
                //     this.$router.push({name: 'Profile'})
                // })
            },
            validate() {
                this.$v.$touch()
                if (!this.$v.$invalid) {
                    this.register()
                }
            },
        },
    }
</script>

<style scoped>
    .div-main {
        position: absolute;
        top: 10%;
        left: 25%;
        width: 100%;
        
    }

    .card-from-content {
        background-color: #E9EEF3;
        box-shadow: none;
    }

    .div-goLoginPage {
        padding: 10px;
        text-align: right;
        color: #00f;
    }

    .button-submit {
        width: 100%;
        margin: 0;
    }

    .md-progress-bar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }
</style>
