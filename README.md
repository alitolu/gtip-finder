

# GTİP Kodu Bulma Uygulaması

Bu proje, kullanıcıların çeşitli ürünler için GTİP (Gümrük Tarife İstatistik Pozisyonu) kodlarını bulmasına olanak tanıyan bir web uygulamasıdır. Uygulama, React.js ile geliştirilmiş bir frontend ve Node.js/Express ile oluşturulmuş bir backend'den oluşmaktadır.

## Başlarken

Bu talimatlar, projenin bir kopyasını yerel makinenizde çalıştırmanız için gereklidir. Geliştirme ve test amaçları için kullanılabilir.

### Önkoşullar

Projeyi yerel olarak çalıştırmak için aşağıdaki araçlara ihtiyacınız olacak:

- Node.js
- npm (Node.js ile birlikte geliyor)
- Git

### Kurulum

Projeyi yerel makinenize klonlamak için aşağıdaki adımları izleyin:

1. Git ile bu depoyu klonlayın:
git clone https://github.com/alitolu/gtip-finder.git

2. Backend bağımlılıklarını yükleyin:
cd gtip-finder
npm install

3. Frontend bağımlılıklarını yükleyin:
cd gtip-finder/frontend
npm install

### Çalıştırmak

Backend ve frontend sunucularını ayrı ayrı çalıştırın:

1. Backend için:
cd gtip-finder
npm start

2. Frontend için:
cd gtip-finder/frontend
npm start

Frontend `localhost:3000` adresinde ve backend `localhost:5000` adresinde çalışacak.

## Kullanım

Uygulamayı kullanmak için:

1. Tarayıcınızda `localhost:3000` adresine gidin.
2. Arama kutusuna bir ürün adı girin ve "Ara" butonuna tıklayın.
3. Sonuç olarak GTİP kodu ekranda gösterilecek.

## Katkıda Bulunma

Katkıda bulunmak isteyenler için pull request'ler kabul edilir. Büyük değişiklikler için, lütfen önce neyi değiştirmek istediğinizi tartışmak üzere bir konu açınız.

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.
