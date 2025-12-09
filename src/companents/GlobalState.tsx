


// Global State = Uygulamanın tamamının erişebildiği ortak veri.
/*
🧩 Global State’e Örnekler
Aşağıdaki veriler genelde globaldir:               Veri türü	Neden global?
Kullanıcı bilgisi (username, login state)	       Birçok sayfa kullanır
Tema (dark/light mode)	                           Tüm uygulamayı etkiler
Dil seçimi (TR/EN)	                               Her component'te değişiklik gerekir
Alışveriş sepeti (cart)	                           Navbar, ürün sayfası, ödeme sayfası vs. hepsi kullanır
Bildirim sayısı	                                   Her sayfada görünür
*/

/*
🔥 React Global State’i yönetmenin yolları
Global State'i yönetmek için birkaç farklı çözüm vardır:
✔ 1) React Context API
🎯 React’ın kendi içinde gelen en temel global state çözümüdür.
Kullanımı kolaydır.
Ufak ve orta ölçekli projeler için idealdir.


✔ 3) Redux
🎯 Büyük projelerde en profesyonel çözüm.
Daha karmaşık yapı, ama çok güçlü araçlar sunuyor.
*/