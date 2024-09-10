export function greaterThan<T>(a: T, b: T): boolean {
    return a > b;
}

export function type<T>(a: T): T {
    return a;
}

export const mult = (a: number, b: number): number => a * b;

export function concatenateStrings(a: string, ...others: string[]): string {
    return [a, ...others].join(' ');
}