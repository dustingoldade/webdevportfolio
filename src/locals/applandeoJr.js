/*
 Create function buildQueryString that takes as input JSON object and returns query string.
 Example
 Input: { a: 17 , b: 'test', c: 'krakow'}
 Output: '?a=17&b=test&c=krakow'
*/

describe("build query string", () => {
  it("should build query string", () => {
    const input = { a: 17, b: "test", c: "krakow" };
    const result = buildQueryString(input);
    expect(result).toBe("?a=17&b=test&c=krakow");
  });
  it("should omit undefined | null values", () => {
    const input = { a: 17, b: undefined, c: null };
    const result = buildQueryString(input);
    expect(result).toBe("?a=17");
  });
});



// Please implement body of 'calculateTotalAmountForCategory'
// function to calculate total amount of given category products.
// quantity - number of elements
// price - price per one piece

describe("cart-amount", () => {
    it("fruits", function () {
      const result = calculateTotalAmountForCategory(
        shoppingCartSource,
        Category.FRUIT
      );
  
      expect(result).toEqual(35.5);
    });
  });
  
  function calculateTotalAmountForCategory(
    items: ShoppingCartItem[],
    categoryName: Category
  ): number {
    if (!Category[categoryName]) {
      throw new Error(`Incorrect categoryName: ${categoryName}`);
    }
    // TODO: Implement total amount for given category
  
    return -1;
  }
  
  enum Category {
    FRUIT = 'FRUIT',
    VEGETABLE = 'VEGETABLE'
  }
  
  interface ShoppingCartItem {
    name: string,
    quantity: number;
    price: number;
    category: Category
  }
  
  export const shoppingCartSource: ShoppingCartItem[] = [
    {
        name: 'apple', quantity: 1, price: 2, category: Category.FRUIT
    },
    {
        name: 'orange', quantity: 11, price: 2.5, category: Category.FRUIT
    },
    {
        name: 'strawberry', quantity: 3, price: 2, category: Category.FRUIT
    },
    {
        name: 'radish', quantity: 5, price: 12, category: Category.VEGETABLE
    },
    {
        name: 'carrot', quantity: 6, price: 23, category: Category.VEGETABLE
    },
    {
        name: 'parsley', quantity: 7, price: 4, category: Category.VEGETABLE
    }
  ];