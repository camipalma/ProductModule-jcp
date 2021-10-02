export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    userName: string;
  
    constructor(
      name?: string,
      description?: string,
      price?: number,
      userName?: string
    ) {
      this.name = name || '';
      this.description = description || '';
      this.price = price || 0;
      this.userName = userName || 'Cami';
    }
  }
  