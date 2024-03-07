import { z } from 'zod';

/** Earliest year for selection */
export const earliestYear = 1930;
/** Full names of months */
export const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const validationSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, "Full Name is required")
      .regex(/^[a-zA-Z\s]+$/, "Full Name must not contain symbols"),
    contactNumber: z
      .string()
      .min(1, "Contact Number is required")
      .regex(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "Contact Number must be in a Canadian phone number format like xxx-xxx-xxxx"
      ),
    emailAddress: z
      .string()
      .min(1, "Sorry, this email address is not valid. Please try again.")
      .email("Invalid email format"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long")
      .regex(/[a-z]/, "Password must include a lowercase letter")
      .regex(/[A-Z]/, "Password must include an uppercase letter")
      .regex(/[0-9]/, "Password must include a number"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
    day: z
      .number()
      .min(1, "Day must be at least 1")
      .max(31, "Day must be no more than 31"),
    month: z.enum(monthNames, "Invalid month name"),
    year: z
      .number()
      .min(earliestYear, `Year must not be before ${earliestYear}`),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      const monthIndex = monthNames.indexOf(data.month);
      const date = new Date(data.year, monthIndex, data.day);
      return date.getMonth() === monthIndex;
    },
    {
      message: "Invalid date",
      path: ["day"],
    }
  );

export { validationSchema };
