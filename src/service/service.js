export async function getdata() {
    const url = "https://blue-enchanting-macaw.cyclic.cloud/diogo";
    console.log('ENTROU', url)
    let result = {};
    await fetch(url).then(res => {
        result = res.json()
        console.log('RESULT  ', result)
    });
    return result;
}