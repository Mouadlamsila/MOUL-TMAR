# مول التمر - موقع التجارة الإلكترونية للتمور

## وصف المشروع  
**"مول التمر"** هو موقع ويب للتجارة الإلكترونية متخصص في بيع التمور عالية الجودة. يهدف إلى تقديم تجربة تسوق إلكترونية سهلة وسريعة تلبي احتياجات محبي التمور، سواء في السوق المحلي أو العالمي، مع التركيز على جودة المنتجات ورضا العملاء.

---

## المميزات الأساسية  

- ✅ **سوق متخصص**: التركيز على التمور ومنتجاتها.  
- 🎨 **واجهة مستخدم احترافية**: تصميم متجاوب وبسيط يسهل استخدامه على جميع الأجهزة.  
- 📝 **معلومات دقيقة عن المنتجات**: تفاصيل حول الفوائد الغذائية ومصدر التمور.  
- 🚚 **دعم التوصيل**: شحن محلي ودولي مع خيارات تغليف متنوعة.  
- 💳 **وسائل دفع متعددة**: دعم خيارات الدفع الإلكتروني (Visa، PayPal...) والدفع عند الاستلام.  

---

## التقنيات المستخدمة  

### Frontend  
- 🔧 **HTML**  
- 🎨 **CSS**  
- ⚙️ **JavaScript**  
- 📱 **Tailwinds**  

### Backend  
- 🖥️ **PHP**  
- 🗄️ **MySQL**

### FarmeWork
- ⚙️ **ReactJs**

### أدوات أخرى  
- 🗃️ **Git** لإدارة النسخ  
- 🔄 **XAMPP/WAMP** لإعداد الخادم المحلي  
- 💻 **Visual Studio Code** (بيئة تطوير)  

---


## 👥 أعضاء الفريق

|                                                   الاتصال                  | المهام                  |      الاسم          |
|---------------------------------------------------------------|-------------------------|--------------------------------|
| [belkahlam2005@gmail.com](mailto:belkahlam2005@gmail.com)     |          قسم الكتالوج   |       MOHAMED BELKAHLA         |
| [mouadlamsila@gmail.com](mailto:mouadlamsila@gmail.com)       |  قسم الإدارة والمستخدم   |       MOUAD LAMSILA            |
| [AmalHmiyd@gmail.com](mailto:zakariaelferrouni@gmail.com)     |             قسم الدفع   |       Amal Hmiyd               |
| [AymenBahiaoui@gmail.com](mailto:AbdessamadMouline@gmail.com) |             قسم السلة   |       Aymen Bahiaoui           |

    

---

## تثبيت المشروع 🚀

اتبع الخطوات التالية لتثبيت المشروع على جهازك المحلي:

1. قم باستنساخ المستودع باستخدام git:

```bash
    git clone https://github.com/Mouadlamsila/MOUL-TMAR.git
    cd moul-tamr
```
---

2. بعد تثبيت المشروع، قم بتثبيت الحزم التالية باستخدام npm:

```bash
    npm install axios --legacy-peer-deps
    npm install redux-devtools-extension --legacy-peer-deps
    npm install react-world-flags --legacy-peer-deps
    npm install react-icons --legacy-peer-deps
```
---


## هيكل المشروع  
```plaintext
moul-tamr/
public/
│── backgrounds/          # يحتوي على صور الخلفيات
│── DataBase/             # يحتوي على ملفات قاعدة البيانات (إن وجدت)
│── PHP/                  # يحتوي على ملفات PHP لمعالجة البيانات
│   │── images/           # دليل لحفظ الصور أو الملفات المتعلقة
│   │── connect.php       # ملف الاتصال بقاعدة البيانات
│   │── delet.php         # حذف البيانات من قاعدة البيانات
│   │── process_pay.php   # معالجة الدفع
│   │── Select.php        # استعلام جلب البيانات من قاعدة البيانات
│   │── update_Dates.php  # تحديث تواريخ البيانات
│   │── Update.php        # تحديث بيانات عامة
│── index.html            # الصفحة الرئيسية للتطبيق
│── main.js               # ملف JavaScript الأساسي للتفاعل مع HTML
src/
│── Redux/                # ملفات Redux لإدارة الحالة
│── App.js                # المكون الرئيسي للتطبيق
│── CardDate.js           # مكون خاص بإدارة البيانات المتعلقة بالبطاقات
│── Header.js             # رأس الصفحة (Header)
│── index.css             # التنسيقات الأساسية للتطبيق
│── index.js              # نقطة الدخول للتطبيق (JS)
│── Login.js              # واجهة تسجيل الدخول
│── Pass.js               # إدارة كلمات المرور
│── Payment.js            # معالجة المدفوعات
│── Produits.js           # عرض وإدارة المنتجات
│── Register.js           # واجهة تسجيل المستخدم الجديد
│── Support.js            # صفحة الدعم الفني
│── Table.js              # جدول عرض البيانات
│── Update.js             # مكون تحديث البيانات
│── UpdateDate.js         # تحديث تواريخ محددة
│── View.js               # عرض التفاصيل والبيانات

```



