import { sendNewsLetterReplyEmail } from "../config/mailer.js";
import prisma from "../config/prismaClient.js";
import ApiError from "../utils/ApiError.js";

export const transformNewsLetter = (newsletter) => ({
    _id: newsletter.id, // mimic MongoDB's _id
    email: newsletter.email,
    createdAt: newsletter.createdAt,
    updatedAt: newsletter.updatedAt,
});

// GET ALL CITIES
export const getNewsLetter = async (req, res, next) => {
    try {
        const { keyword, limit } = req.query;

        let where = {};
        if (keyword) {
            where.email = { contains: keyword, mode: "insensitive" };
        }

        const newsletters = await prisma.newsLetter.findMany({
            where,
            orderBy: { email: "asc" },
            take: limit ? Number(limit) : undefined,
        });

        res.status(200).json(newsletters.map(transformNewsLetter));
    } catch (error) {
        next(new ApiError(500, error.message));
    }
};

// GET CITY BY ID
export const getNewsLetterById = async (req, res, next) => {
    try {
        const newletter = await prisma.city.findUnique({
            where: { id: req.params.id },
        });

        if (!city) return next(new ApiError(404, "City not found"));

        res.status(200).json(transformCity(city));
    } catch (error) {
        next(new ApiError(500, error.message));
    }
};

// CREATE CITY
export const createNewsLetter = async (req, res, next) => {
    try {
        const { email } = req.body;

        const newsLetter = await prisma.newsLetter.create({
            data: { email },
        });

        await sendNewsLetterReplyEmail(email);

        res.status(201).json({ success: true, data: transformNewsLetter(newsLetter) });
    } catch (error) {
        next(new ApiError(400, error.message));
    }
};

// UPDATE CITY
export const updateNewsLetter = async (req, res, next) => {
    try {
        const { id } = req.params;

        const updatedNewsLetter = await prisma.newsLetter.update({
            where: { id },
            data: req.body,
        });

        res.status(200).json(transformNewsLetter(updatedNewsLetter));
    } catch (error) {
        if (error.code === "P2025") {
            return next(new ApiError(404, "NewsLetter not found"));
        }
        next(new ApiError(400, error.message));
    }
};

// DELETE CITY
export const deleteNewsLetter = async (req, res, next) => {
    try {
        const id = req.params.id;

        //  Delete the newsLetter
        await prisma.newsLetter.delete({
            where: { id },
        });



        res.status(200).json({ message: "newsLetter deleted successfully" });
    } catch (error) {
        if (error.code === "P2025") {
            return next(new ApiError(404, "newsLetter not found"));
        }
        next(new ApiError(500, error.message));
    }
};
