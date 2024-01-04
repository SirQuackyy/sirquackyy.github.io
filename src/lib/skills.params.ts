import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'css',
		color: 'cyan',
		description:
			'',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'unity',
		color: 'black',
		description: '',
		logo: Assets.Unity,
		name: 'Unity'
	}),
	s({
		slug: 'java',
		color: 'orange',
		description: '',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'csharp',
		color: 'cyan',
		description: '',
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'python',
		color: 'yellow',
		description: '',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'nodejs',
		color: 'green',
		description: '',
		logo: Assets.NodeJs,
		name: 'Node.js'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description: '',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'android-studio',
		color: 'green',
		description: '',
		logo: Assets.Android,
		name: 'Android Studio'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
