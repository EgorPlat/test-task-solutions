export interface IUser {
    id: number,
    name: string,
    username: string
    email: string,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    },
    address: {
        city: string,
        street: string,
        zipcode: string
    }
}