-- Create the new database
CREATE DATABASE moul_tmar;
USE moul_tmar;

-- Create the Dates table with an ImagePath column
CREATE TABLE Dates (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Origin VARCHAR(255) NOT NULL,
    Type ENUM('طري', 'شبه جاف', 'جاف') NOT NULL,
    Description TEXT,
    NutritionalInfo TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    ImagePath VARCHAR(255) -- New column to store image paths
);

-- Insert sample data into the Dates table
INSERT INTO Dates (Name, Origin, Type, Description, NutritionalInfo, Price, ImagePath)
VALUES
    ('المجهول', 'المغرب', 'طري', 'تمر كبير الحجم، حلو وطعمه يشبه الكراميل.', 'غني بالألياف والبوتاسيوم', 130.00, 'images/mujhool.jpg'),
    ('العجوة', 'السعودية', 'طري', 'تمر داكن، طري، وحلو قليلًا، وغني بالقيمة الغذائية.', 'عالي بمضادات الأكسدة', 150.00, 'images/ajwa.jpg'),
    ('الخلاص', 'السعودية', 'شبه جاف', 'تمر متوسط الحجم، شبه طري، بنكهة غنية تشبه الكراميل.', 'مفيد للطاقة والنشاط', 25.00, 'images/khallas.jpg'),
    ('البرحي', 'العراق', 'طري', 'تمر صغير، طري، ولذيذ، يُؤكل طازجًا أو مجففًا.', 'غني بالسكريات الطبيعية', 25.00, 'images/barhi.jpg'),
    ('دقلة النور', 'الجزائر', 'شبه جاف', 'يُعرف بـ"ملكة التمور"، نصف جاف، بطعم خفيف يشبه العسل.', 'منخفض الدهون وغني بالبوتاسيوم', 40.00, 'images/dqla_nur.jpg'),
    ('المزافاتي', 'إيران', 'طري', 'تمر داكن، طري، وحلو، يُصدر عالميًا.', 'غني بالسكريات الطبيعية ومضادات الأكسدة', 40.00, 'images/mazafati.jpg'),
    ('الصفاوي', 'السعودية', 'طري', 'تمر مشابه للعجوة، داكن وحلو قليلًا.', 'غني بالمعادن والألياف', 90.00, 'images/safawi.jpg'),
    ('السكري', 'السعودية', 'طري', 'تمر حلو جدًا ومثالي للاستخدام في الحلويات.', 'مصدر طبيعي للطاقة', 120.00, 'images/sukkari.jpg'),
    ('الزهدي', 'العراق', 'شبه جاف', 'تمر ذهبي، بطعم جوزي وخفيف الحلاوة.', 'عالي بالألياف ومنخفض الدهون', 60.00, 'images/zahdi.jpg'),
    ('العنبره', 'السعودية', 'طري', 'تمر كبير الحجم وغني بالقيمة الغذائية.', 'مفيد للطاقة والنشاط', 60.00, 'images/ambera.jpg'),('الخضري', 'السعودية', 'جاف', 'تمر بني داكن، طويل العمر التخزيني.', 'مصدر غني بالألياف', 100.00, 'images/khodri.jpg'),
    ('المبروم', 'السعودية', 'شبه جاف', 'تمر طويل، بطعم حلو خفيف وقوام مطاطي.', 'مفيد للصحة العامة', 100.00, 'images/mabroom.jpg'),
    ('الربي', 'إيران', 'شبه جاف', 'تمر بني غامق، مثالي كوجبة خفيفة.', 'غني بالمعادن والسكريات', 60.00, 'images/robi.jpg'), ('الفرض', 'عُمان', 'جاف', 'تمر صغير، دائري، وعمر تخزيني طويل.', 'مفيد للصحة العامة', 55.00, 'images/fard.jpg'),
    ('اللولو', 'الإمارات', 'طري', 'تمر طري ومطاطي، حلو جدًا.', 'غني بالطاقة', 40.00, 'images/lulu.jpg'),('الحساوي', 'اليمن', 'طري', 'تمر حلو وطري، غني بالنكهة.', 'غني بالفيتامينات والمعادن', 60.00, 'images/hasawi.jpg'),
    ('نبتة علي', 'السعودية', 'شبه جاف', 'تمر متوسط الحجم، بني ذهبي.', 'مفيد للصحة العامة', 40.00, 'images/nabta_ali.jpg'),('الجيهل', 'المغرب', 'شبه جاف', 'تمر طويل وداكن، يُقدم مع القهوة.', 'غني بالطاقة', 60.00, 'images/jihl.jpg'),
    ('الخلاصه', 'الإمارات', 'شبه جاف', 'تمر حلو جدًا ولزج.', 'مناسب للحلويات', 60.00, 'images/khalasa.jpg');


    CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,               -- Nom complet
    email VARCHAR(255) NOT NULL,              -- Adresse email
    card_number VARCHAR(16) NOT NULL,         -- Numéro de carte (16 chiffres)
    expiry_date VARCHAR(5) NOT NULL,          -- Date d'expiration (format MM/AA)
    cvv VARCHAR(3) NOT NULL,                  -- Code de sécurité (3 chiffres)
    amount DECIMAL(10, 2) DEFAULT 0.00,       -- Montant payé
    transaction_id VARCHAR(50),               -- ID unique de transaction
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Date du paiement
);


INSERT INTO payments (name, email, card_number, expiry_date, cvv, amount, transaction_id)
VALUES (
    'John Doe',
    'johndoe@example.com',
    '1234567812345678',
    '12/25',
    '123',
    100.00,
    'TXN123456'
);