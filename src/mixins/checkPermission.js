export default {
    methods: {
        checkPermission (permissions) {
            let check = false;
            let user = this.$store.state.auth.user;
            const currentPermission = user.permissions
            permissions.forEach((permission) => {
                if(Object.entries(currentPermission).length > 0 && currentPermission[permission] !== undefined && currentPermission[permission]) {
                    check = true;
                }
            });
            return check;
        },
    },
};
