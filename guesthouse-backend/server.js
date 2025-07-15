const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "booking.json");

// ✅ GET All Bookings
app.get("/api/bookings", (req, res) => {
  const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : "[]";
  res.send(JSON.parse(data));
});

// ✅ POST New Booking
app.post("/api/bookings", (req, res) => {
  const existingData = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath))
    : [];

  const newBooking = req.body;

  const checkInDate = new Date(newBooking.checkIn);
  const checkOutDate = new Date(newBooking.checkOut);
  const numberOfDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

  let rate = 0;
  switch (newBooking.roomType) {
    case "Single": rate = 800; break;
    case "Double": rate = 1200; break;
    case "Suite":  rate = 1800; break;
  }

  newBooking.amount = rate * numberOfDays;
  newBooking.createdAt = new Date().toISOString();

  existingData.push(newBooking);
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  res.send({ success: true, message: "Booking saved successfully" });
});

// ✅ Admin Dashboard API
app.get("/api/admin/dashboard", (req, res) => {
  const bookings = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath))
    : [];

  const totalBookings = bookings.length;
  const totalRooms = 20;
  const availableRooms = totalRooms - totalBookings;

  const onlinePayments = bookings.filter(
    (b) => b.paymentStatus?.toLowerCase() === "online"
  ).length;

  const cashPayments = bookings.filter(
    (b) => b.paymentStatus?.toLowerCase() === "cash"
  ).length;

  res.json({ totalBookings, availableRooms, onlinePayments, cashPayments });
});

app.get("/", (req, res) => {
  res.send("✅ Backend is Running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
