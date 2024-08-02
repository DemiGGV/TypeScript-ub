// interface Order {
//   address: string;
// }
// interface TelephoneOrder extends Order {
//   callerNumber: string;
// }
// interface InternetOrder extends Order {
//   email: string;
// }
 
// type PossibleOrders = TelephoneOrder | InternetOrder | undefined;
 
// function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
//     return !!order && 'email' in order;
// }
 
// function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
//   return !!order && 'callerNumber' in order;
// }
 
// function makeOrder(order: PossibleOrders) {
//   if (isAnInternetOrder(order)) {
//     console.log(order.email);
//   } else if (isATelephoneOrder(order)) {
//     console.log(order.callerNumber);
//   }
// }


// Create two variants: aliases and interfaces

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

// interface IProduct {
//   title: string,
//   price: number,
//   isNew: boolean,
//   isSale?: boolean,
// }

// interface IVehicle {
//   wheels: number,
//   year: number,
//   brand: string,
// }

// interface ICar extends IProduct, IVehicle {
//   type: string,
//   model: string,
// }

// // const icar1: ICar = {}

// type Product = {
//   title: string,
//   price: number,
//   isNew: boolean,
//   isSale?: boolean,
// }

// type Vehicle = {
//   wheels: number,
//   year: number,
//   brand: string,
// }

// type Car = Product & Vehicle & {
//   type: string,
//   model: string,
// }

// // const car1: Car = {}

export {}

// function head (value: string) : string;
// function head (value: number[]) : number;
// function head (value: boolean[]) : boolean;
// function head(value: any): any {
//   return value[0];
// }

// const s = head([1,2]);

// export function append<T>(el: T, list: T[]): T[] {
//   return list.concat(el);
// }

// append(1, [123, 123])
// append('1', [123, 123])

// export function keys <O extends object> (obj: O): Array <keyof O> {
//   const currentKeys = [];
 
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) currentKeys.push(key);
//   }
  
//   return currentKeys;
// }
 
 
// export function values <O extends object> (obj: O): Array <O[keyof O]> {
//   const currentValues = [];
 
//   for (let key in obj) {
//     currentValues.push(obj[key]);
//   }
 
//   return currentValues;
// }

// export function createMap(list) {
//   return function(cb) {
//     const result = [];
 
//     for (let el of list) {
//       result.push(cb(el))
//     }
 
//     return result;
//   }
// }

