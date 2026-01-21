import { sendContactEmail, sendContactReplyEmail, sendEmail } from "../config/mailer.js";
import prisma from "../config/prismaClient.js";
import ApiError from "../utils/ApiError.js";

export const transformContactUs = (contactUs) => ({
    _id: contactUs.id, // mimic MongoDB's _id
    email: contactUs.Name,
    name: contactUs.name,
    subject: contactUs.subject,
    body: contactUs.body,
    createdAt: contactUs.createdAt,
    updatedAt: contactUs.updatedAt,
});

// GET ALL CITIES
export const getContactUs = async (req, res, next) => {
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

        res.status(201).json({
            success: true,
            message: "Your message has been sent successfully",
        });
    } catch (error) {
        next(new ApiError(500, error.message));
    }
};

// GET CITY BY ID
export const getContactUsById = async (req, res, next) => {
    try {
        const newsletter = await prisma.contactUs.findUnique({
            where: { id: req.params.id },
        });

        if (!newsletter) return next(new ApiError(404, "Contact not found"));

        res.status(200).json(transformContactUs(newsletter));
    } catch (error) {
        next(new ApiError(500, error.message));
    }
};

// CREATE CITY
export const contactUs = async (req, res, next) => {
    try {
        const { email, name, subject, body } = req.body;
        // Validation
        if (!name || !email || !body || !subject) {
            return next(new ApiError(400, "Name, Email, Subject and Body are required"));
        }
        const contactUs = await prisma.contactUs.create({
            data: {
                name,
                email,
                subject,
                body
            },
        });

        await sendContactEmail(email, name, subject, body);
        await sendContactReplyEmail(email, name);


        res.status(201).json({
            success: true,
            data: transformContactUs(contactUs),
            message: "your message has been sent"
        }
        );
    } catch (error) {
        next(new ApiError(400, error.message));
    }
};


// DELETE CITY
export const deleteContactUs = async (req, res, next) => {
    try {
        const id = req.params.id;

        //  Delete the newsLetter
        await prisma.newsLetter.delete({
            where: { id },
        });



        res.status(200).json({ message: " contactus deleted successfully" });
    } catch (error) {
        if (error.code === "P2025") {
            return next(new ApiError(404, " contactus not found"));
        }
        next(new ApiError(500, error.message));
    }
};
