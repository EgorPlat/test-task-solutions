export const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
}

export const fetchUserById = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await response.json();
}