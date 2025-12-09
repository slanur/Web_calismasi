import { useEffect, useState } from "react";

type Todo = {
    "id": number,
    "todo": string,
    "completed": boolean,
    "userId": number
};

function UseEffect() {
    //usss
    const [todo, setTodo] = useState<Todo>();
    //uffs
    useEffect(() => {
        const API_URL = 'https://dummyjson.com/todos/1';
        fetch(API_URL) //İçine verdiğimiz URL’ye HTTP GET isteği gönderir.
            .then(res => res.json())
            //res → fetch’in döndürdüğü “response” (yanıt) objesidir.
            // res.json() → gelen yanıtı JSON formatına çevirir.
            .then(data => setTodo(data)) // setTodo(data) → bizim todo state’ini bu veriyle güncelliyor.
    }, []);

    if (!todo) {
        return <h1>Yükleniyor...</h1>
    }

    return (
        <div>
            <h1>{todo.todo}</h1>
            <h1>{todo.id}</h1>
        </div>
    );
}

export default UseEffect;

/*
API’den veri çekmek (fetch / axios)
Component ilk açıldığında bir işlem yapmak
Bir state değiştiğinde bir fonksiyon tetiklemek
Event listener ekleme / temizleme
Timer (setInterval, setTimeout)
*/

//! herhangi bir temzileme işlemi olmadığı için return fonksiyonunu sildik

/*
2) useEffect’in 3 temel kullanım şekli
✔️ 1) Sadece component ilk yüklendiğinde çalışsın
    useEffect(() => {
    console.log("Component ilk kez çalıştı");
    }, []);
Bu en yaygın kullanım → API çağrısı burada yapılır.
*/

/*
2) Bir state değiştiğinde çalışsın
    useEffect(() => {
    console.log("count değişti");
    }, [count]);
count değiştikçe effect tekrar çalışır.
*/