export enum Role {
  EMPLOYEE = "employee",
  MANAGER = "manager",
  HR_ADMIN = "hr_admin",
}

export enum LeaveStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  CANCELLED = "cancelled",
}

export type UserProfile = {
  id: string;
  email: string;
  name: string | null;
  role: Role;
  department?: string;
  designation?: string;
};
