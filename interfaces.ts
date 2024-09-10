export interface User {
    name: string;
    email: string;
    birthDate?: Date;
    id: number;
    isBanned: boolean;
}

export function ShowUser(user: User): string {
    return `id number: ${user.id}, username: ${user.name}, Email: ${user.email}, birthDate: ${user.birthDate}`;
}

export interface Admin extends User {
    position: string;
}

export function isAdmin(admin: Admin): boolean {
    return admin.position === 'admin'
}