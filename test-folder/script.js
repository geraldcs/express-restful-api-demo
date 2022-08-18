document.querySelector('#btn').addEventListener('click', async function() {
    let response = await axios.get('http://localhost:4000/');
    console.log(response.data);
    alert(response.data.message);
})