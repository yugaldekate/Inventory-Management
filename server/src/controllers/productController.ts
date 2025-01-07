import { Request, Response } from "express";
import { db } from "../db";

export const getProducts = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const search = req.query.search?.toString();
        const products = await db.products.findMany({
                where: {
                    name: {
                        contains: search,
                    },
                },
            });
        console.log(req, " from server");
            
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving products" });
    }
};

export const createProduct = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const { productId, name, price, rating, stockQuantity } = req.body;
        const product = await db.products.create({
            data: {
                productId,
                name,
                price,
                rating,
                stockQuantity,
            },
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error creating product" });
    }
};
