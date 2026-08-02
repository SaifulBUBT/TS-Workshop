function functionName<T>(value: T): T {
  console.log(value, typeof value);
  return value;
}

functionName<string>("Hello");
functionName<number>(123);
functionName<boolean>(true);

//
function margeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

margeObjects({ name: "Saiful" }, { age: 23 });
margeObjects({ name: "Alex" }, { age: 45, country: "Bangladesh" });

//generic types
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

async function fetcUser(): Promise<ApiResponse<User>> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
}

async function fetchProduct(): Promise<ApiResponse<Product>> {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
}

async function main() {
  const userResponse = await fetcUser();
  console.log(userResponse.data.name);

  //
  const productResponse = await fetchProduct();
  console.log(productResponse.data.title);
}
