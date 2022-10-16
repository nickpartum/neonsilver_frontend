import {ISignUp, ISignIn, IUser, ISignOut} from "../common/models";
import userRepository from "../data/repositories/userRepository";
import {CryptoHelper} from "../common/helpers"
import {CustomResponse} from "../common/utils";

export const signUp = async ({firstName, lastName, email, password}: ISignUp) => {

    const user = await userRepository.create({
        firstName,
        lastName,
        email,
        password: await CryptoHelper.encrypt(password)
    });

    return new CustomResponse(200, 'User Created', user)
}

export const signIn = async ({email, password}: ISignIn) => {
    const user = await userRepository.findByEmail(email)

    if (!user) {
        throw Error('User not exist')
    }
    const isValidPassword = await CryptoHelper.compare(password, user.password)

    if (!isValidPassword) {
        throw Error('Password not valid')
    }

    return new CustomResponse(200, 'Authorization success', user)
}

export const signOut = async ({id}: ISignOut) => {
    const user = await userRepository.getById(id)

    if (!user) {
        throw Error(`User with ID#${id} not exist`)
    }

    return new CustomResponse(200, 'Sign Out success')
}