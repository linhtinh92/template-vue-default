<template>
    <div class="main-wrapper account-wrapper">
        <div class="account-page">
            <div class="account-center">
                <div class="account-box">
                    <el-form ref="login" :model="login" class="form-signin" label-width="120px" label-position="top"
                             v-loading.body="loading" :rules="rules">
                        <div class="account-logo">
                            <a href="#">
                                <img src="@/assets/logo.jpg" alt>
                            </a>
                        </div>
                        <el-form-item label="Email" prop="email">
                            <el-input v-model="login.email"></el-input>
                        </el-form-item>
                        <el-form-item label="Password" prop="password">
                            <el-input v-model="login.password" show-password></el-input>
                        </el-form-item>
                        <div class="form-group text-center">
                            <el-button type="success" class="btn btn-primary account-btn" :loading="loading"
                                       @click="onSubmit()" round>Login
                            </el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {http, router} from '@/http'
    import {RepositoryFactory} from '../../../repositories/RepositoryFactory'

    const AuthsRepository = RepositoryFactory.get('auths');
    import helpers from '../../../helpers'

    export default {
        data () {
            return {
                login: {
                    email: '',
                    password: ''
                },
                loading: false,
                rules: {
                    email: [
                        {required: true, message: 'Please input email', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'Please input password', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            onSubmit () {
                this.$refs.login.validate((valid) => {
                    if(valid) {
                        this.loading = true;
                        AuthsRepository.login(helpers.URLSearchParams(this.login)).then(function (response) {
                            http.storeToken(response)
                            router.push({name: 'Dashboard'})
                            this.loading = false;
                        }).catch(error => {
                            this.loading = false;
                        });

                    } else {
                        this.$notify.error({
                            title: 'Error',
                            message: 'This is an error message'
                        });
                        return false;
                    }
                });
            },
        }
    };
</script>
