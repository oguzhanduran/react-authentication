import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();

export const contactSelectors = contactAdaptor.getSelectors(
  (state) => state.contacts
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
    deleteContact: contactAdaptor.removeOne,
    deleteAllContacts: contactAdaptor.removeAll,
    updateContact: contactAdaptor.updateOne,
  },
});

export const {
  addContact,
  addContacts,
  deleteContact,
  deleteAllContacts,
  updateContact,
} = contactSlice.actions;
export default contactSlice.reducer;

// Burda state'imiz oluştururken ve reducer'larımızı tanımlarken bir önceki bölümde yaptıklarımızdan farklı işlemler yapacağız. Redux üzerindeki farklı bir yapıyı göüyor olacağız. Data normalizing denen bir yapı var.

// Yeni sistemde sen items'ı initial state'in içinde oluşturma diyor ben senin yerine onun entities ismiyle oluşturacağım diyor. Ve her bir elemana unique bir id atayacağız örneğin sen id'si user1 olan kullanıcıya mı erişmek istedin doğrudan user1 id'li kullanıcıya erişebileceksin.

// const userObject = state.users.entities[userId]; diyerek userObject'i alıyoruz bunu normalde find metoduyla aşağıdaki gibi buluyorduk.

// const userObject = state.users.items.find(user => user.id === id); şeklinde ulaşıyoruduk.

// Bu yapıyı kendimizde kurgulayabiliriz ama burda redux'ın bize verdiği createEntityAdaptor isminde bir tanımı var. Bu tanım bize yardımcı özellikler veriyor mesela CRUD operasyonları için addOne'ı kullanabiliyoruz. Biz mesela bir kayıt eklerken elimizde bir array varsa items.push deyip elimizdeki elemanı veriyorduk. Burda onun yerine addOne isminde bir tanım veriyor ve biz o tanımı doğrudan kullanabiliyoruz.

// addMany birden fazla kaydı ekleyebilmek için gerekli olan tanım. Bu tarz tanımlar bize veriyor.

// Burda bizim yapmamız gereken adaptörü olusturduktan sonra getInitialState diye bir tanım var. Burda items'ı kendimiz tamamlamayacağız onun dışında loading Error bunun gibi tanımları ekleyebilriiz.
