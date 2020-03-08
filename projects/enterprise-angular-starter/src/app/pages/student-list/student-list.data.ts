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

export const students: Student[] = [
  {
    firstName: 'Adhya',
    lastName: 'Kesineni',
    dob: 'Dec 16th 2014',
    grade: 'Pre K',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Hasmika',
    lastName: 'Kesineni',
    dob: 'Dec 16th 2007',
    grade: '5th grade',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Karthikeya',
    lastName: 'Vonga',
    dob: 'Dec 16th 2013',
    grade: 'Kindergarden',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Akshya',
    lastName: 'Vonga',
    dob: 'Dec 16th 2010',
    grade: '3rd Grade',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Anivath',
    lastName: 'Swarnamaala',
    dob: 'Dec 16th 2010',
    grade: '3rd Grade',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Aaradhya',
    lastName: 'Vittanaala',
    dob: 'Dec 16th 2003',
    grade: '11th Grade',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Adhya',
    lastName: 'Kesineni',
    dob: 'Dec 16th 2014',
    grade: 'Pre K',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Adhya',
    lastName: 'Kesineni',
    dob: 'Dec 16th 2014',
    grade: 'Pre K',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Adhya',
    lastName: 'Kesineni',
    dob: 'Dec 16th 2014',
    grade: 'Pre K',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Adhya',
    lastName: 'Kesineni',
    dob: 'Dec 16th 2014',
    grade: 'Pre K',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Adhya',
    lastName: 'Kesineni',
    dob: 'Dec 16th 2014',
    grade: 'Pre K',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  },
  {
    firstName: 'Adhya',
    lastName: 'Kesineni',
    dob: 'Dec 16th 2014',
    grade: 'Pre K',
    imageUrl: 'assets/img/avatars/emp.jpg',
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
  }
];
