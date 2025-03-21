import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'BSE @ University of Michigan',
		description: '',
		location: 'Ann Arbor, MI',
		logo: Assets.umich,
		name: '',
		organization: 'Undergraduate - GPA: 4.0',
		period: { from: new Date(2024, 8, 26) },
		shortDescription: '',
		slug: 'umich',	
		subjects: ['Discrete Mathematics', 'Data Structures and Algorithms', 'Computer Organization']
	},
	{
		degree: 'Dougherty Valley High School',
		description: '',
		location: 'San Ramon, CA',
		logo: Assets.dvhs,
		name: '',
		organization: 'High School - GPA: 4.42',
		period: { from: new Date(2020, 8, 10), to: new Date(2024, 8, 10) },
		shortDescription: '',
		slug: 'dvhs',	
		subjects: ['AP Calculus AB', 'AP Calculus BC', 'AP World History', 'AP US History', 'AP Computer Science A', 'AP Physics C: Mechanics', 'AP Language & Composition', 'AP Spanish 5', 'AP US Government', 'AP Statistics']
	},
	{
		degree: 'Brigham Young University',
		description: '',
		location: 'Online',
		logo: Assets.byu,
		name: '',
		organization: 'Dual Enrollment',
		period: { from: new Date(2021, 0, 1), to: new Date(2021, 6, 1) },
		shortDescription: '',
		slug: 'byu',
		subjects: ['CS-041-T001: Computer Science, Part 1 (TL)', 'CS-043-T001: Computer Science, Part 2 (TL)']
	},
	{
		degree: 'Diablo Valley College',
		description: '',
		location: 'Pleasant Hill, CA',
		logo: Assets.dvc,
		name: '',
		organization: 'Dual Enrollment',
		period: { from: new Date(2023, 6, 1), to: new Date(2023, 7, 1) },
		shortDescription: '',
		slug: 'dvc',
		subjects: ['Math 194: Linear Algebra']
	},
	{
		degree: 'Las Positas College',
		description: '',
		location: 'Online',
		logo: Assets.lpc,
		name: '',
		organization: 'Dual Enrollment',
		period: { from: new Date(2023, 8, 1), to: new Date(2024, 5, 1) },
		shortDescription: '',
		slug: 'lpc',
		subjects: ['Math 3: Multivariable Calculus']
	},
	{
		degree: 'Coursera Courses',
		description: '',
		location: 'Online',
		logo: Assets.coursera,
		name: '',
		organization: 'Coursera',
		period: { from: new Date(2020, 8, 1), to: new Date(2024, 6, 1) },
		shortDescription: '',
		slug: 'coursera',
		subjects: ['Computer Science: Algorithms, Theory, and Machines - Princeton University', 'Computer Science: Programming with a Purpose - Princeton University', 'Introduction to Game Development - Michigan State University', 'Game Design and Development with Unity 2020 Specialization - Michigan State University', 'Machine Learning - Stanford University', 'Foundations of User Experience (UX) Design - Google', 'Java for Android - Vanderbilt University', 'Android App Components - Intents, Activities, and Broadcast Receivers - Vanderbilt University', 'Build Your First Android App (Project-Centered Course) - CentraleSupélec']
	}
];
