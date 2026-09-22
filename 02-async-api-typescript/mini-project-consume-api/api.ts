
export interface User {
    id: number;
    name: string;
    email: string;
}

export async function getUser(): Promise<User[]> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) throw new Error("tidak berhasil mengambil data");
        const data = await response.json() as User[];
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
