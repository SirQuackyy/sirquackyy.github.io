import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'polyverse',
		company: 'Polyverse',
		description: 'Our non-profit, Polyverse, is dedicated to building an all-encompassing knowledge hub for game developers, our primary goals being to offer free access to comprehensive online lessons on game development and provide users with extensive collections of free assets. Additionally, we organize local events in the Bay Area such as interactive workshops, top-tier game jams, and more. Our aim is to extend our outreach beyond our local communities to impact developers worldwide.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date('February 2023') },
		skills: getSkills('js', 'html', 'css', 'reactjs', 'mongodb'),
		name: 'Founder & Executive Director',
		color: '#ffffff',
		links: [{to: 'https://polyverse.studio/', label: "Website"}],
		logo: Assets.polyverse,
		shortDescription: ''
	},
	{
		slug: 'darim',
		company: 'Darim Vision',
		description: 'Remote software engineer intern for Darim Vision. Implemented video synchronization between virtual reality headsets using network protocols in Unity, work presented at 14th Future Education Conference in Seoul (10 countries, 182 edu-related orgs, 30,000 visitors). System bought and used by Gwacheon City Library.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date('February 2023') },
		skills: getSkills('unity', 'csharp', 'js'),
		name: 'Software Engineer Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.darim,
		shortDescription: ''
	},
	{
		slug: 'galileo',
		company: 'Camp Galileo',
		description: 'Handled management of daily logistics and safety concerns, worked collaboratively with other instructors to manage camp participants and set up activities',
		contract: ContractType.PartTime,
		type: 'Customer Service',
		location: 'Pleasanton, California',
		period: { from: new Date('June 2023'), to: new Date('July 2023') },
		skills: getSkills(),
		name: 'Summer Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.galileo,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
