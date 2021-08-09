# Project-Webtech-ShopRich

## Requirement
โปรแกรมต้องการใช้ Node.js
Download: https://nodejs.org/en/download/
## Install
```
git clone https://github.com/youyyk/webtechVue01.git
npm install
```

### Run for development
npm run serve

### Run for production
npm run build

### Features
แบ่งเป็น 2 role ได้แก่ user และ admin
    1. User (ผู้ใช้)
- user สามารถ Sign up เก็บข้อมูลส่วนตัว และ login เข้าสู่หน้า website shopping
- เมื่อ user login จะสามารถกดเลือกซื้อของได้
- เมื่อ user ทำการซื้อของ สามาถดูประวัติการซื้อได้
- เมื่อ user ทำการแลกของรางวัล สามาถดูประวัติการแลกได้

    2. Admin (ผู้ดูแลระบบ)
- สามารถแก้ไข, เพิ่ม, ลบ ของรางวัลได้
- สามารถแก้ไข, ลบ สินค้าได้ และ เปลี่ยนสถานะการขายได้
- สามารถดู leaderbord ของการได้แต้มและการใช้แต้มเรียงลำดับจากสูงสุดไปต่ำสุด ในช่วงเวลาที่กำหนด

### How to get points
- เมื่อ user ได้ทำการ login ครั้งแรกของวันระบบจะทำการให้แต้ม 1 แต้ม
- ทุกครั้งที่ user ทำการซื้อสินค้าจะได้แต้มเป็นจำนวน 2% จากราคารวมสินค้า

### Account for Example
- Username: admin   Password: pass123
- Username: user01   Password: pass123
- Username: user02   Password: pass123
- Username: user03   Password: pass123
- Username: user04   Password: pass123