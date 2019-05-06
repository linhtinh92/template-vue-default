<template>
    <el-button type="danger" @click="deleteRow" size="mini"><i class="fa fa-trash"></i></el-button>
</template>

<script>
    import axios from 'axios'
    export default {
        props: {
            rows: {default: null},
            scope: {default: null},
        },
        data () {
            return {
                deleteMessage: '',
                deleteTitle: '',
            };
        },
        methods: {
            deleteRow (event) {
                this.$confirm(this.deleteMessage, this.deleteTitle, {
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel',
                    type: 'warning',
                    confirmButtonClass: 'el-button--danger',
                }).then(() => {
                    const vm = this;
                    axios.delete(this.scope.row.urls.delete_url)
                    .then((response) => {
                        if(response.data.error === false) {
                            vm.$message({
                                type: 'success',
                                message: response.data.data.message,
                            });

                            vm.rows.splice(vm.scope.$index, 1);
                        }
                    })
                    .catch((error) => {
                        vm.$message({
                            type: 'error',
                            message: error.data.data.message,
                        });
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Delete Cancelled',
                    });
                });
            },
        },
        mounted () {
            this.deleteMessage = 'Are you sure you want to delete this record?';
            this.deleteTitle = 'Confirmation';
        },
    };
</script>
