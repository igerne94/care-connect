// from doc (https://clerk.com/docs/references/nextjs/basic-rbac)
import { Role } from '@prisma/client';

export { }

// Create a type for the roles
export type Roles = Role;

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}