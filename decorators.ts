// // Class decorator
// export function Logger(constructor: Function) {
//     console.log("Logging...");
//     console.log(constructor);
// }

// // Method decorator
// export function LogMethod(
//     target: any,
//     propertyName: string,
//     descriptor: PropertyDescriptor
// ) {
//     const method = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Method ${propertyName} called with arguments: ${args.join(", ")}`);
//         return method.apply(this, args);
//     };
// }

// // Property decorator
// export function LogProperty(target: any, propertyKey: string) {
//     let value: any = target[propertyKey];

//     const getter = () => {
//         console.log(`Getting value of ${propertyKey}: ${value}`);
//         return value;
//     };

//     const setter = (newVal: any) => {
//         console.log(`Setting value of ${propertyKey} to ${newVal}`);
//         value = newVal;
//     };

//     Object.defineProperty(target, propertyKey, {
//         get: getter,
//         set: setter
//     });
// }

// // Using the decorators
// @Logger
// export class Example {
//     @LogProperty
//     public name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     @LogMethod
//     public greet(message: string): void {
//         console.log(`${this.name} says: ${message}`);
//     }
// }
