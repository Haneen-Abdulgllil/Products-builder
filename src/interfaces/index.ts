
/** 
 * 
 */

export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    imgeURL: string;
    price: string;
    colors: string[];
    category: {
        name: string;
        imgaeURL: string;
    };
}