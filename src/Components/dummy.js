const d = async() =>{
    const res = await fetch('https://www.jsonkeeper.com/b/HXGB');
    const output = await res.json();
    console.log(output);
}

d();