export interface userProfileResponseSuccess {
  id: 6;
  email: string;
  UserProfile: {
    id: number;
    user_id: number;
    name: string;
    nik: string | null;
    birthDate: string | null;
    gender: string | null;
    address: string | null;
    phoneNumber: string | null;
  };
}
