// Bu bölümde odaklandığımız şey redux toolkit ile kullanabildiğimiz EntityAdaptor mantığı. EntityAdaptor kullandığımızda data normalization işlemlerini yapabiliyoruz.

// Yani biz array içersinde aradığımız ifadeyi tek tek dönüp find ile vs. aramak yerine normalleştirilmiş veriyi kullanarak direkt olarak erişebiliyoruz.

// Önceden istediğimiz id'li elemanı bulmak için tek tek array'i dönüyorduk eğer istediğim id'li eleman en sonda ise tüm array'i dönmem gerekiyordu. Bu durum çok fazla veri ile çalıştığımız zaman çeşitli performans problemlerine sebebiyet verebiliyor. Redux'ın veri normalleştirme modeliyle direk olarak istediğim veriye erişebiliyorum.

// Biz reducer'ın altında direk fonksiyonları ekleyebiliyoruz. Bir veri eklerken birden fazla veri eklerken bir veriyi silerken tamamını silerken veya güncellerken istediğimiz hazır fonksiyonu kullanabiliyıruz.

// Daha önce bu tanımlı fonksiyonların karşılığını tek tek state action diyerek devam ettiriyorduk.

// initial state'imizi oluştururken daha doğrusu adaptör'ü oluştururken createEntityAdaptor tanımını redux-toolkit altından alıyoruz. Ve bunu dışa aktarıyoruz. Sonra initial state'i tanımlarken olusturduğumuz contact adaptor altndaki getInitialState'i alarak yapıyoruz.

// Sadece initial state'i tanımlama yöntemimiz değişiyor.

// Sonra bu reducer'ın içindeki fonksiyonları kullanıyoruz componentlerde mesela addContact için dispatch kullanıyoruz. dispatch(addContact(eklemek istediğimiz verileri parametre olarak geçiyoruz. id, name vs)) Burda tek değişen şey action. Yani addContact action'ını elle yazmadıkta bize verilen tanımı kullanmış olduk.

// delete içinde benzer işlemi uyguladık. contactAdaptor altındaki removeOne'ı kullandık. dispatch(deleteContact(id)) yaoarak onClick ile gönderdiğimiz ilgili id'li contact'ı siliyoruz.

// Önceden contactları seçmek için useSelector kullanıyorduk şu şekilde. const contacts = useSelector(state => state.contacts.list) diyorduk. Bizim contactSlice kısmında tanımladığımız selector bize bunları otomatik olarak olusturuyor.

// Biz contactSelectors.selectAll diyerek tümünü seçebiliyoruz yada selectById, selectEntities, selectIds veya  selectTotal diyebiliyoruz.

// Biz bu bölümde entityAdaptör ile nasıl çalışabiliriz. Verimizi nasıl normalleştirebiliriz. Büyük çaplı verilerle çalışırken nasıl performans kaybını absorve edebiliriz. Bunu öğrenmiş olduk.

// Böylelikle redux toolkit ile uygulama geliştirirken yeni bir kavram daha öğrenmiş oluyoruz. Bu yapı tercih edilmesi gereken bir yapı
