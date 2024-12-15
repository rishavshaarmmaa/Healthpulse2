import { Query } from "node-appwrite";
import { databases } from  "@/lib/appwrite.config"; 

export const getAppointmentsByUserId = async (userId: string) => {
  try {
    const appointments = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID!,
      [Query.equal("userId", userId)]
    );
    return appointments;
  } catch (error) {
    console.error("Error fetching user appointments:", error);
    throw error;
  }
};
