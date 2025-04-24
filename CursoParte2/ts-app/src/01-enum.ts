export enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}

export type User = {
    username : String;
    role: ROLES;
}

const nicoUser : User = {
    username: "nicolas123",
    role: ROLES.ADMIN
}