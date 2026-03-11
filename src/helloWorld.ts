import env from '#/lib/env';

// Example usage of environment variables
const port = env.EXAMPLE_PORT ? parseInt(env.EXAMPLE_PORT, 10) : 4000;
console.log(`Server will run on port: ${port}`);

// Example function to demonstrate TypeScript types
const add = (a: number, b: number): number => {
  return a + b;
};

// Export the function for use in other parts of the application
export { add };

// Example usage of the add function
console.log(`add(3, 5): ${add(4, 5)}`);
