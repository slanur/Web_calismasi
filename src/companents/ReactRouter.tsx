import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import About from '../pages/About';
import NotFound from '../pages/NotFound.tsx';

const ReactRouter = () => {
    return (
        //Routes-> route tanımlarının kapsayıcısı
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
};

export default ReactRouter;


// React Router, bir React uygulamasında farklı URL’lere göre farklı component (sayfa) göstermemizi sağlar.

/*
✔ Farklı URL’lere farklı ekran gösterir.
✔ Sayfa yenilenmeden geçiş yapmamızı sağlar. (SPA mantığı)
✔ Sayfalar arası hızlı, kesintisiz navigasyon sağlar.
*/

// <Route path="/" element={<Home />} /> -> Tarayıcıdaki URL tam olarak / olduğunda Home componentini ekrana basar.

// <Route path="*" element={<NotFound />} />  -> diğer girilen tüm sayfalat için not found sayfalar gösterilir 