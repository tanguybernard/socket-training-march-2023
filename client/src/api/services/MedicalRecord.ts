
export type ResponseApiPost = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}
export const getMedicalRecords = () : Promise<ResponseApiPost[]>  => fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        }
        return response.json();
    })
