import { useState } from "react"

function tiklaArt() {
    //usss
    const [sayi, setSayi] = useState(42)

    return (
        <div>
            <button onClick={() => setSayi(sayi + 1)}>Artti r</button>
            <h1>Sayi: {sayi}</h1>
        </div>
    );
}

export default tiklaArt;
// usastate kodda yapılan değişiklikleri ekranda direkt olarak görmeye yarıyor