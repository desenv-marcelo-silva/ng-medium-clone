export interface UserInterface {
    username: string;
    email: string;
    password: string;
}
export interface RegisterRequestInterface {
    user: UserInterface;
}