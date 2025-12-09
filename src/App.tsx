
// function App() {
//   const name = "Sıla";
//   return <h1>Merhaba {name}</h1>

// }

/*
//! alternatif if-else yapısı
//normal if else de kullanılabiliyor
function App() {
  const girisYapildiMi = true;
  return (
    <div>{girisYapildiMi ? <h1>Hoşgeldiniz</h1> : <h1>Lutfen giriş yapın</h1>}
    </div>
  );

};
*/
//CSS verme

function App() {

  return (
    <h1 style={{ color: "blue", fontSize: 48 }}>hello</h1>
  )
}

export default App

// return içinde birden fazla eleman döndğrmek istiyorsak retur fonksiyonun başında <>, sonunda </> kullanmalıyız