export const getpost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "GET",
  });
  return await response.json();
};

export const getrandomuser = async()=>{
  const response = await fetch('https://randomuser.me/api/',{
    method: "GET",
    });

    return await response.json()
}