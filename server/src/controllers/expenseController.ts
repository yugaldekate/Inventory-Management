import { Request, Response } from "express";
import { db } from "../db"; 

export const getExpensesByCategory = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const expenseByCategorySummaryRaw = await db.expenseByCategory.findMany({
                orderBy: {
                    date: "desc",
                },
            }
        );

        const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item) => ({
                ...item,
                amount: item.amount.toString(),
            })
        );

        res.json(expenseByCategorySummary);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving expenses by category" });
    }
};