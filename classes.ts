import {User} from './interfaces'

export class client implements User {
    constructor(
        public name: string,
        public email: string,
        public birthDate: Date,
        public id: number,
        public isBanned: boolean = false
    ){}

    displayUser(): string {
        return `name: ${this.name}, email: ${this.email}, birthDate: ${this.birthDate}`;
    }
}

export class Admin extends client {
    constructor(
        public name: string,
        public email: string,
        public birthDate: Date,
        public id: number,
        public position: string
    ){
        super(name, email, birthDate, id)
    }

    displayUser(): string {
        return `Admin name: ${this.name}, Position: ${this.position}`;
    }
}