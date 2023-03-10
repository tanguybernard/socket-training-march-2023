import http from "./app";

const PORT = 4000;

const server = http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
export default server


