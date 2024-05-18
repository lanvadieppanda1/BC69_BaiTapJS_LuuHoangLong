
// Bài 1
document.getElementById("btnTinhLuong").onclick = function () {
    let daysWorked = parseFloat(document.getElementById('daysWorked').value);
    let salary = 100000 * daysWorked;
    document.getElementById('salaryResult').innerText = `Tiền lương: ${salary.toLocaleString('vi-VN')} VNĐ`;
};

// Bài 2
document.getElementById("btnTinhGiaTri").onclick = function () {
    let numbers = document.getElementById('numbers').value.split(',').map(Number);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let average = total / numbers.length;
    document.getElementById('averageResult').innerText = `Giá trị trung bình: ${average}`;
};

// Bài 3
document.getElementById("btnQuyDoi").onclick = function () {
    const usd = parseFloat(document.getElementById('usd').value);
    const VNĐ = usd * 23500;
    document.getElementById('currencyResult').innerText = `Số tiền VNĐ: ${VNĐ.toLocaleString('vi-VN')} VNĐ`;
};

// Bài 4
document.getElementById("btnTinh").onclick = function () {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const area = length * width;
    const perimeter = 2 * (length + width);
    document.getElementById('rectangleResult').innerText = `Diện tích: ${area}, Chu vi: ${perimeter}`;
};

// Bài 5
document.getElementById("btnTinhTong").onclick = function () {
    const number = parseInt(document.getElementById('twoDigitNumber').value);
    const unitDigit = number % 10;
    const tensDigit = Math.floor(number / 10);
    const sum = unitDigit + tensDigit;
    document.getElementById('sumDigitsResult').innerText = `Tổng 2 chữ số: ${sum}`;
};