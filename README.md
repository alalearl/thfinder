# TH FINDER

เครื่องมือช่วยค้นหาข้อมูลจังหวัด, อำเภอ, ตำบล, รหัสไปรษณีย์ ของประเทศไทย โดยนำข้อมูลมากจาก [jquery.thailand][jquery.thailand] แบบไม่ได้ compact ให้ขนาดไฟล์เล็กลง ทั้งนี้เครื่องมือนี้ จัดทำมาเพื่อให้ความสะดวกสบายและลดเวลาในการเขียนมากขึ้น (มั้ง)

## ข้อมูล

-- เวอร์ชั่น 1.0.0

## วิธีใช้

- ติดตั้ง package
  `yarn add thfinder` หรือ `npm install thfinder`

- เรียกใช้ `const thFinder = require('thfinder');` หรือ `import thFinder from 'thfinder';` หรือสามารถเลือกเรียกใช้เฉพาะ Method ได้โดย `import { provinces } from 'thfinder';` เป็นต้น

## Methods ต่างๆ

-- `thFinder.provinces()`
แสดงค่าจังหวัดทั้งหมด

-- `thFinder.cities(province = null)`
แสดงค่าเมือง, อำเภอทั้งหมด หากกรอก province name หรือ province code จะแสดงเฉพาะจังหวัดนั้นๆ

-- `thFinder.districts(city = null, province = null)`
แสดงค่าเขต, ตำบลทั้งหมด หากกรอก province name หรือ province code, city name หรือ city code จะแสดงเฉพาะจังหวัด, เมืองนั้นๆ

-- `thFinder.zipCodes(district = null, city = null, province = null)`
แสดงค่ารหัสไปรษณีย์ทั้งหมด หากกรอก district name หรือ district code, city name หรือ city code, province name หรือ province code จะแสดงเฉพาะเขต, ตำบล, เมือง, อำเภอ, จังหวัด นั้นๆ

-- `thFinder.getFromCity(city)`
แสดงข้อมูลทั้งหมดโดยกรองจาก city name หรือ city code

-- `thFinder.getFromProvince(province)`
แสดงข้อมูลทั้งหมดโดยกรองจาก province name หรือ province code

-- `thFinder.getFromDistrict(district = null)`  
แสดงข้อมูลทั้งหมดโดยกรองจาก district name หรือ district code

-- `thFinder.getFromZipCode(zipCode = null)`
แสดงข้อมูลทั้งหมดโดยกรองจาก zip code

ค่าที่ได้จากการแสดงข้อมูลทั้งหมดจะเป็นดังนี้

```
{
    "district": String,
    "districtCode": Number,
    "city": String,
    "cityCode": Number,
    "province": String,
    "provinceCode": Number,
    "zipCode": Number,
}
```

[jquery.thailand]: https://github.com/earthchie/jquery.Thailand.js/blob/master/jquery.Thailand.js/database/raw_database/raw_database.json
