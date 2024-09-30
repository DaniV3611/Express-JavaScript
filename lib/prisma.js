// Importa el cliente Prisma desde el paquete @prisma/client
import { PrismaClient } from "@prisma/client";

// Crea una nueva instancia del cliente Prisma
export const db = new PrismaClient();
