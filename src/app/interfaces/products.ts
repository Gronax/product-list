export interface Product {
  image: string;
  name: string;
  orderType: string;
  price: number;
  channel: Channel[];
  availability: boolean;
}
export interface Channel {
  id: number;
  name: string;
}
// export class Product {
//   constructor(
//     public image: string,
//     public name: string,
//     public orderType: string,
//     public price: number,
//     public channel: Channel[],
//     public availability: boolean
//   ) {}
// }
// export class Channel {
//   constructor(
//     public id: number,
//     public name: string
//   ) {}
// }
