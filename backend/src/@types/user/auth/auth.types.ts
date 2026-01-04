
export interface IRegisterRequest {
    body: {
        username: string;
        type: string;
        email: string;
        password: string;
        confirmPassword: string;
    }
}

export interface ILoginRequest {
    body: {
        email: string;
        password: string;
    }
}

export interface IVerifyRequest {
    body: {
        email: string;
        token: string;
    }
}

export interface IForgetPasswordRequest {
    query: {
        email: string;
    }
    body: {
        password: string;
        consfirmPassword: string;
    }
}

export interface IRequestForgetPassword {
    body: {
        email: string
    }
}