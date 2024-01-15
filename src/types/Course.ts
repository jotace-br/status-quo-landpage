export interface ICourse {
  photo: string;
  title: string;
  instructor: string;
  rateValue: number;
  totalStudents: number | string;
  price: number;
  hasDiscount?: boolean;
  originalPrice?: number;
}
