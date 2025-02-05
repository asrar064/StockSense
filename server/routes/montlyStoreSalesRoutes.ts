// routes/monthlyStoreSalesRoutes.ts
import express from "express";
import {
  createMonthlyStoreSales,
  getMonthlyStoreSales,
  updateMonthlyStoreSales,
  deleteMonthlyStoreSales,
  getSalesRecordById,
} from "./../controllers/monthlyStoreStatsController";

const monthlyStoreSalesRoutes = express.Router();

// Route to create a new Monthly Store Sales record
monthlyStoreSalesRoutes.post("/", createMonthlyStoreSales);

// Route to get all Monthly Store Sales records
monthlyStoreSalesRoutes.get("/", getMonthlyStoreSales);

// Route to get Monthly Store Sales of a Store
monthlyStoreSalesRoutes.get("/goc-stats/:id", getSalesRecordById);

// Route to update a Monthly Store Sales record by ID
monthlyStoreSalesRoutes.put("/:id", updateMonthlyStoreSales);

// Route to delete a Monthly Store Sales record by ID
monthlyStoreSalesRoutes.delete("/:id", deleteMonthlyStoreSales);

export default monthlyStoreSalesRoutes;
