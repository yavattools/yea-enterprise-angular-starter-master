import { environment as env } from '../../../environments/environment';
export interface Course {
  name?: string;
  date?: string;
  time?: string;
}

export interface Student {
  firstName?: string;
  lastName?: string;
  dob?: string;
  grade?: string;
  imageUrl?: string;
  courses?: Array<Course>;
}

export const student: Student = {
  firstName: 'Adhya',
  lastName: 'Kesineni',
  dob: 'Dec 16th 2014',
  grade: 'Pre K',
  imageUrl: '',
  courses: [
    {
      name: 'Math',
      date: 'March 20th 2020',
      time: '6PM'
    },
    {
      name: 'English',
      date: 'March 20th 2020',
      time: '7PM'
    }
  ]
};
