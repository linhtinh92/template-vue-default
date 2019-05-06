import AuthRepository from '../modules/login/repository/authRepository'

const repositories = {
    auths: AuthRepository,
    //other repositories
}

export const RepositoryFactory = {
    get: name => repositories[name]
}
