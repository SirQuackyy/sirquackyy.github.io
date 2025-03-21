import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Reel Deal',
		color: "#5e95e3",
		description: 
			"This game was created for the Indie Dev Game Jam 5. Cast your fate in a deck-building roguelike adventure where the ocean's mysteries meet strategic gameplay! Dive into a world brimming with fantastical fish and uncharted waters, as you wield powerful cards to reel in otherworldly catches. Build your deck, discover rare aquatic treasures, and outsmart the challenges lurking beneath the waves. With ever-changing environments and endless combinations, every run is a fresh catch! Are you ready to master the seas and secure the ultimate REEL DEAL?",
		shortDescription:
			"This game was created for the Indie Dev Game Jam 5. Cast your fate in a deck-building roguelike adventure where the ocean's mysteries meet strategic gameplay! Dive into a world brimming with fantastical fish and uncharted waters, as you wield powerful cards to reel in otherworldly catches. Build your deck, discover rare aquatic treasures, and outsmart the challenges lurking beneath the waves. With ever-changing environments and endless combinations, every run is a fresh catch! Are you ready to master the seas and secure the ultimate REEL DEAL?",
		links: [{ to: 'https://sirquackyy.itch.io/reel-deal', label: 'Itch.io' }],
		logo: Assets.reeldeal,
		name: 'Reel Deal',
		period: {
			from: new Date('November 3, 2024'),
			to: new Date('November 5, 2024')
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Game Jam',
		screenshots: [
			{
				label: 'Tutorial',
				src: 'https://img.itch.zone/aW1hZ2UvMzEzNDk5MS8xODcyOTgxMi5wbmc=/original/fzzRgH.png'
			},
			{
				label: 'Shop Menu',
				src: 'https://img.itch.zone/aW1hZ2UvMzEzNDk5MS8xODcyOTgxMS5wbmc=/original/KfH5Lj.png'
			},
			{
				label: 'Upgrade Select',
				src: 'https://img.itch.zone/aW1hZ2UvMzEzNDk5MS8xODcyOTgwOS5wbmc=/original/UOHh6e.png'
			}
		]
	},
	{
		slug: 'License to Steal',
		color: '#5e95e3',
		description:
			"License to Steal is an application that can take input from either real time video or previously recorded videos of traffic and scan license plates to detect stolen vehicles. The application logs the position of the stolen license plate and can create a heat map for police to easily determine car theft trends in certain locations.",
		shortDescription:
			"License to Steal is an application that can take input from either real time video or previously recorded videos of traffic and scan license plates to detect stolen vehicles. The application logs the position of the stolen license plate and can create a heat map for police to easily determine car theft trends in certain locations.",
		links: [{ to: 'https://github.com/SirQuackyy/Stolen-Vehicle-Detection-System', label: 'Github' },{ to: 'https://devpost.com/software/license-to-steal', label: 'Devpost' }],
		logo: Assets.Unknown,
		name: 'License to Steal',
		period: {
			from: new Date('April 6, 2024'),
			to: new Date('April 7, 2024')
		},
		skills: getSkills('python'),
		type: 'Hackathon',
	},
	{
		slug: 'YOUR Rocket Launch Simulator',
		color: '#5e95e3',
		description:
			"The application takes user input for the motor they are planning to use, the location and time of their launch, and the rocket characteristics. From this, the app creates a forecast for the weather and wind conditions of the launch location at the time of launch and, combining this information with info from the motor and rocket data, calculates and provides interactive graphs for translational/rotational velocity, acceleration, trajectory, fuel consumption, predicted maximum altitude, predicted impact location, thrust/impulse/drag, and energy consumption. It also outputs a KML file that can be imported into Google Earth to see the trajectory of the rocket in the exact location of the launch to provide clearer visualization.",
		shortDescription:
			"The application takes user input for the motor they are planning to use, the location and time of their launch, and the rocket characteristics. From this, the app creates a forecast for the weather and wind conditions of the launch location at the time of launch and, combining this information with info from the motor and rocket data, calculates and provides interactive graphs for translational/rotational velocity, acceleration, trajectory, fuel consumption, predicted maximum altitude, predicted impact location, thrust/impulse/drag, and energy consumption. It also outputs a KML file that can be imported into Google Earth to see the trajectory of the rocket in the exact location of the launch to provide clearer visualization.",
		links: [{ to: 'https://github.com/SirQuackyy/StellarHacks2024', label: 'Github' },{ to: 'https://devpost.com/software/your-rocket-launch-simulator', label: 'Devpost' }],
		logo: Assets.Unknown,
		name: 'YOUR Rocket Launch Simulator',
		period: {
			from: new Date('March 30, 2024'),
			to: new Date('March 30, 2024')
		},
		skills: getSkills('python'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Rocket Representation',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/829/874/datas/original.png'
			},
			{
				label: 'Wind Forecast Graph',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/829/876/datas/original.png'
			},
			{
				label: 'Flight Trajectory Graph',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/829/877/datas/original.png'
			},
			{
				label: 'Google Earth Implementation',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/829/879/datas/original.png'
			}
		]
	},
	{
		slug: 'OneClub',
		color: '#5e95e3',
		description:
			"OneClub is a unified club scheduling management system built for schools. The platform allows users to view all future club meeting dates and times through a calendar, allowing club officers to schedule meetings at the most convenient times and prevent potential scheduling conflicts. Club participants can easily join clubs through a club search with additional information regarding each club, and use a sort feature that sorts clubs by type.",
		shortDescription:
			"OneClub is a unified club scheduling management system built for schools. The platform allows users to view all future club meeting dates and times through a calendar, allowing club officers to schedule meetings at the most convenient times and prevent potential scheduling conflicts. Club participants can easily join clubs through a club search with additional information regarding each club, and use a sort feature that sorts clubs by type.",
		links: [{ to: 'https://github.com/SirQuackyy/OneClub', label: 'Github' },{ to: 'https://devpost.com/software/oneclub', label: 'Devpost' }],
		logo: Assets.oneclub,
		name: 'OneClub',
		period: {
			from: new Date('February 17, 2024'),
			to: new Date('February 18, 2024')
		},
		skills: getSkills('js', 'html', 'css', 'nodejs', 'reactjs', 'mongodb'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Diagram Drawing',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/773/487/datas/original.jpg'
			},
			{
				label: 'Club Search',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/774/024/datas/original.png'
			},
			{
				label: 'Club Calendar',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/774/086/datas/original.png'
			}
		]
	},
	{
		slug: 'dishit',
		color: '#5e95e3',
		description:
			"In a digital age where many people post pictures of everything in their lives, it's common that many people may want to emulate what they see. DishIt was created to help people replicate the food they see on social media with affordable, nearby resources. DishIt uses machine learning and takes an image to classify the food in the image, and then scours the web for recipes that you can replicate",
		shortDescription:
			"In a digital age where many people post pictures of everything in their lives, it's common that many people may want to emulate what they see. DishIt was created to help people replicate the food they see on social media with affordable, nearby resources. DishIt uses machine learning and takes an image to classify the food in the image, and then scours the web for recipes that you can replicate",
		links: [{ to: 'https://devpost.com/software/dishit', label: 'Devpost' }],
		logo: Assets.Unknown,
		name: 'DishIt',
		period: {
			from: new Date('April 10, 2023'),
			to: new Date('April 11, 2023')
		},
		skills: getSkills('js', 'html', 'css', 'nodejs'),
		type: 'Hackathon'
	},
	{
		slug: 'wriggle',
		color: '#5e95e3',
		description:
			"In this 2D platformer game, players take on the role of a small, wriggling worm traversing through a desolate and mysterious world. With a heavy emphasis on movement-based gameplay, players must use their platforming skills to explore the game's interconnected environments, slowly unlocking new abilities that allow them to access previously inaccessible areas. The game's aesthetic is moody and atmospheric, with dark and foreboding visuals and haunting ambient music. Throughout their journey, players will encounter a variety of strange locations. Along the way, players can interact with various NPCs who provide hints and clues to the game's underlying lore and story. With a challenging boss fight and a vast, interconnected world to explore, players will find themselves completely immersed in this haunting and unforgettable adventure.",
		shortDescription:
			"In this 2D platformer game, players take on the role of a small, wriggling worm traversing through a desolate and mysterious world. With a heavy emphasis on movement-based gameplay, players must use their platforming skills to explore the game's interconnected environments, slowly unlocking new abilities that allow them to access previously inaccessible areas. The game's aesthetic is moody and atmospheric, with dark and foreboding visuals and haunting ambient music. Throughout their journey, players will encounter a variety of strange locations. Along the way, players can interact with various NPCs who provide hints and clues to the game's underlying lore and story. With a challenging boss fight and a vast, interconnected world to explore, players will find themselves completely immersed in this haunting and unforgettable adventure.",
		links: [{ to: 'https://sirquackyy.itch.io/wriggle', label: 'Itch.io' }],
		logo: Assets.wriggle,
		name: 'Wriggle',
		period: {
			from: new Date('March 23, 2023'),
			to: new Date('March 25, 2023')
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Game Jam',
		screenshots: [
			{
				label: 'World',
				src: 'https://img.itch.zone/aW1hZ2UvMTk1NjM2My8xMTUwNDQ0My5wbmc=/347x500/K%2BMMRC.png'
			},
			{
				label: 'NPC',
				src: 'https://img.itch.zone/aW1hZ2UvMTk1NjM2My8xMTUwNDQ1MS5wbmc=/347x500/0Mil1G.png'
			},
			{
				label: 'Temple',
				src: 'https://img.itch.zone/aW1hZ2UvMTk1NjM2My8xMTUwNDQ3OC5wbmc=/347x500/2SWh%2Fp.png'
			}
		]
	},
	{
		slug: 'aidensadventure',
		color: '#5e95e3',
		description:
			'This game was created for Bear Jams 2022 Fall Semester. An exciting adventure game in which the player navigates across worlds to pursue love. Just as our hero, Aiden, approaches Sylvestina, the girl of his dreams, to confess his love, she is sucked away by a portal that carries her across galaxies. Aiden follows her into a cave and jumps between similar portals, searching for Sylvestina along the way. While fighting extraterrestrials and navigating different settings, Aiden must switch between the 2nd and 3rd dimensions to reveal the correct path.',
		shortDescription:
			'This game was created for Bear Jams 2022 Fall Semester. An exciting adventure game in which the player navigates across worlds to pursue love. Just as our hero, Aiden, approaches Sylvestina, the girl of his dreams, to confess his love, she is sucked away by a portal that carries her across galaxies. Aiden follows her into a cave and jumps between similar portals, searching for Sylvestina along the way. While fighting extraterrestrials and navigating different settings, Aiden must switch between the 2nd and 3rd dimensions to reveal the correct path.',
		links: [{ to: 'https://indigoxiv.itch.io/aidens-adventure', label: 'Itch.io' }],
		logo: Assets.aiden,
		name: 'Aiden\'s Adventure',
		period: {
			from: new Date('October 23, 2022'),
			to: new Date('October 25, 2022')
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Game Jam'
	},
	{
		slug: 'frinder',
		color: '#5e95e3',
		description:
			"Frinder allows high schoolers to create an account and enter a global chatroom with other high schoolers around the country. You can create a profile with an about me and a list of interests to meet other high schoolers with similar interests, allowing you to make friends more easily.",
		shortDescription:
			"Frinder allows high schoolers to create an account and enter a global chatroom with other high schoolers around the country. You can create a profile with an about me and a list of interests to meet other high schoolers with similar interests, allowing you to make friends more easily.",
		links: [{ to: 'https://github.com/SirQuackyy/SocialGrass', label: 'Github' }, { to: 'https://devpost.com/software/frinder', label: 'Devpost' }],
		logo: Assets.frinder,
		name: 'Frinder',
		period: {
			from: new Date('June 10, 2022'),
			to: new Date('June 12, 2022')
		},
		skills: getSkills('js', 'html', 'css', 'nodejs'),
		type: 'Hackathon'
	},
	{
		slug: 'mood',
		color: '#5e95e3',
		description:
			"Our website, Mood, once granted permission, will use visual input provided by the user to produce a playlist reflecting their mood. The playlist is created using Artificial Intelligence and contains a large number of songs, which are promptly saved to the user's collection. This process can be repeated numerous times, so depending on the day, the user will be able to experience all different kinds of music, even if their mood does not change. The user's mood is calculated by calculating where specific landmarks on the user's face are, and their relative positions in order to tell if how they are probably feeling. The program we use to produce the playlist finds related artists in specific genres that fit under moods and gets better when it gets a feel of what kinds of music you listen to often. As a result, our website Mood encourages the user to listen to a wide array of music currently on Spotify, which also demonstrates their mood.",
		shortDescription:
			"Our website, Mood, once granted permission, will use visual input provided by the user to produce a playlist reflecting their mood. The playlist is created using Artificial Intelligence and contains a large number of songs, which are promptly saved to the user's collection. This process can be repeated numerous times, so depending on the day, the user will be able to experience all different kinds of music, even if their mood does not change. The user's mood is calculated by calculating where specific landmarks on the user's face are, and their relative positions in order to tell if how they are probably feeling. The program we use to produce the playlist finds related artists in specific genres that fit under moods and gets better when it gets a feel of what kinds of music you listen to often. As a result, our website Mood encourages the user to listen to a wide array of music currently on Spotify, which also demonstrates their mood.",
		links: [{ to: 'https://github.com/SirQuackyy/mood', label: 'Github' }, { to: 'https://devpost.com/software/mood-j9f4n8', label: 'Devpost' }],
		logo: Assets.mood,
		name: 'Mood',
		period: {
			from: new Date('June 10, 2022'),
			to: new Date('June 12, 2022')
		},
		skills: getSkills('js', 'html', 'css', 'nodejs'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Home',
				src: 'https://i.ibb.co/q09Lb1w/Screenshot-5.png'
			},
			{
				label: 'Emotion Camera',
				src: 'https://i.ibb.co/9sb7XY8/Screenshot-6.png'
			},
			{
				label: 'Mood Playlist Collection',
				src: 'https://i.ibb.co/5Lh92W3/Screenshot-7.png'
			},
			{
				label: 'Created Playlist',
				src: 'https://i.ibb.co/DLmhzzq/Screenshot-8.png'
			}
		]
	},
	{
		slug: 'groovie',
		color: '#5e95e3',
		description:
			'Groovie was created for Masseyhacks VIII. At first glance, Groovie may appear like just another discord music bot, but in reality, this music bot has a very cool unique feature, it can actually comprehend what you are saying and process it to play music, pause, resume, and much more. This is all thanks to machine learning and voice recognition that allowed us to train it to recognize even the roughest of voices.',
		shortDescription:
			'Groovie was created for Masseyhacks VIII. At first glance, Groovie may appear like just another discord music bot, but in reality, this music bot has a very cool unique feature, it can actually comprehend what you are saying and process it to play music, pause, resume, and much more. This is all thanks to machine learning and voice recognition that allowed us to train it to recognize even the roughest of voices.',
		links: [{ to: 'https://github.com/SirQuackyy/Groovie', label: 'Github' }, { to: 'https://devpost.com/software/groovie-nhkcjt', label: 'Devpost' }, { to: 'https://www.andrewyu.dev/groovie-bot/', label: 'Website' }],
		logo: Assets.groovie,
		name: 'Groovie',
		period: {
			from: new Date('May 14, 2022'),
			to: new Date('May 15, 2021')
		},
		skills: getSkills('js', 'html', 'css', 'nodejs'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Website',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/931/602/datas/gallery.jpg'
			},
			{
				label: 'About',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/931/607/datas/gallery.jpg'
			},
			{
				label: 'Commands',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/931/608/datas/gallery.jpg'
			}
		]
	},
	{
		slug: 'lostmemories',
		color: '#5e95e3',
		description:
			'Lost Memories is a game built for the Games For Change Student Challenge 2022. The game was created to raise awareness for people living with dementia by having players experience life from their perspective. This is a puzzle game in which players are trapped in their mind and have to solve puzzles in order to regain their memories and bring color back into their world.',
		shortDescription:
			'Lost Memories is a game built for the Games For Change Student Challenge 2022. The game was created to raise awareness for people living with dementia by having players experience life from their perspective. This is a puzzle game in which players are trapped in their mind and have to solve puzzles in order to regain their memories and bring color back into their world.',
		links: [{ to: 'https://sirquackyy.itch.io/lost-memories', label: 'Itch.io' }],
		logo: Assets.memories,
		name: 'Lost Memories',
		period: {
			from: new Date('March 16, 2022'),
			to: new Date('April 15, 2022')
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Games For Change',
		screenshots: [
			{
				label: 'Menu',
				src: 'https://i.ibb.co/8g5D64X/menu.png'
			},
			{
				label: 'Cutscene',
				src: 'https://i.ibb.co/DbLjkJY/Lost-Memories.png'
			},
			{
				label: 'Storage Level',
				src: 'https://i.ibb.co/YcVqws1/storage.png'
			},
			{
				label: 'Restoring Color',
				src: 'https://i.ibb.co/4FgkGrc/color.png'
			}
		]
	},
	{
		slug: 'penguinparkour',
		color: '#5e95e3',
		description:
			'This game was created for Bear Jams 2022 Spring Semester. Your pet penguins have been kidnapped and now are being held hostage by the Ragdolls. Jump across platforms that disappear and reappear by switching dimensions. Slow down time and dodge bullets. Dash with your sword and swing with your grapples to take back your penguins.',
		shortDescription:
			'This game was created for Bear Jams 2022 Spring Semester. Your pet penguins have been kidnapped and now are being held hostage by the Ragdolls. Jump across platforms that disappear and reappear by switching dimensions. Slow down time and dodge bullets. Dash with your sword and swing with your grapples to take back your penguins.',
		links: [{ to: 'https://aj-crypto-arch.itch.io/penguin-parkour', label: 'Itch.io' }],
		logo: Assets.penguin,
		name: 'Penguin Parkour',
		period: {
			from: new Date('March 23, 2022'),
			to: new Date('March 25, 2022')
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Game Jam',
		screenshots: [
			{
				label: 'Level',
				src: 'https://img.itch.zone/aW1hZ2UvMTQzMTMyOS84MzQxMTk4LnBuZw==/347x500/LPboSu.png'
			},
			{
				label: 'Grapple',
				src: 'https://img.itch.zone/aW1hZ2UvMTQzMTMyOS84MzQxMjE1LnBuZw==/347x500/9D5tM5.png'
			},
			{
				label: 'Portal',
				src: 'https://img.itch.zone/aW1hZ2UvMTQzMTMyOS84MzQxMjE3LnBuZw==/347x500/%2B%2B5F8J.png'
			},
			{
				label: 'Dash',
				src: 'https://img.itch.zone/aW1hZ2UvMTQzMTMyOS84MzQxMjE5LnBuZw==/347x500/lvIdaA.png'
			},
			{
				label: 'Wall Run',
				src: 'https://img.itch.zone/aW1hZ2UvMTQzMTMyOS84MzQxMjI5LnBuZw==/347x500/M15IQa.png'
			}
		]
	},
	{
		slug: 'flipside',
		color: '#5e95e3',
		description:
			'The Flipside was a game created for Bear Jams 2021 Fall Semester. The Flipside is a game with four different characters that experience gravity in different orientations going North, West, South, and East. In this multiplayer game, they have to work together to solve puzzles and move on to the next level in order to escape after being absorbed by an interdimensional rift.',
		shortDescription:
			'The Flipside was a game created for Bear Jams 2021 Fall Semester. The Flipside is a game with four different characters that experience gravity in different orientations going North, West, South, and East. In this multiplayer game, they have to work together to solve puzzles and move on to the next level in order to escape after being absorbed by an interdimensional rift.',
		links: [{ to: 'https://sirquackyy.itch.io/the-flipside', label: 'Itch.io' }],
		logo: Assets.flipside,
		name: 'The Flipside',
		period: {
			from: new Date('November 23, 2021'),
			to: new Date('November 25, 2021')
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Game Jam'
	},
	{
		slug: '2020game',
		color: '#5e95e3',
		description:
			'2020: The Game was created for MasseyHacks VII. It is a game going through the events of 2020 with a twist at the end.',
		shortDescription:
			'2020: The Game was created for MasseyHacks VII. It is a game going through the events of 2020 with a twist at the end.',
		links: [{ to: 'https://github.com/SirQuackyy/masseyhacks/', label: 'Github' }, { to: 'https://devpost.com/software/2020-the-game', label: 'Devpost' }, { to: 'https://www.andrewyu.dev/masseyhacks/', label: 'Website' }],
		logo: Assets.twentytwenty,
		name: '2020: The Game',
		period: {
			from: new Date('June 11, 2021'),
			to: new Date('June 13, 2021')
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Shopping Game',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/563/658/datas/gallery.jpg'
			},
			{
				label: 'Fire Game',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/563/660/datas/gallery.jpg'
			},
			{
				label: 'Shop',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/563/661/datas/gallery.jpg'
			},
			{
				label: 'Choices 1',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/563/664/datas/gallery.jpg'
			},
			{
				label: 'Choices 2',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/563/663/datas/gallery.jpg'
			}
		]
	},
	{
		slug: 'connectasl',
		color: '#5e95e3',
		description:
			'Currently, 430 million people in the world require rehabilitation for disabling hearing loss. Our goal was to create software that gives such people an opportunity to communicate efficiently. We came up with a translator that converted sign language to both text and speech aimed to help mute, deaf, or aurally challenged people, giving them a way to communicate easily with others. It uses TensorflowJS for machine learning in order to detect sign language and convert it into text. Built for Equal Opportunities Hackathon 2021.',
		shortDescription:
			'Currently, 430 million people in the world require rehabilitation for disabling hearing loss. Our goal was to create software that gives such people an opportunity to communicate efficiently. We came up with a translator that converted sign language to both text and speech aimed to help mute, deaf, or aurally challenged people, giving them a way to communicate easily with others. It uses TensorflowJS for machine learning in order to detect sign language and convert it into text. Built for Equal Opportunities Hackathon 2021.',
		links: [{ to: 'https://github.com/SirQuackyy/connect-asl', label: 'Github' }, { to: 'https://devpost.com/software/connectasl', label: 'Devpost' }],
		logo: Assets.connectasl,
		name: 'ConnectASL',
		period: {
			from: new Date('May 23, 2021'),
			to: new Date('May 23, 2021')
		},
		skills: getSkills('js', 'html', 'css', 'reactjs'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Demonstration',
				src: 'https://i.ibb.co/MgwvBtm/Connect-ASLApplication.png'
			},
			{
				label: 'Flow Chart',
				src: 'https://i.ibb.co/hC0ZL0s/Connect-ASL.jpg'
			}
		]
	},
	{
		slug: 'eyesee',
		color: '#5e95e3',
		description:
			'EyeSee was created for Los Altos Hacks V. EyeSee is a website to allow blind people to be able to see with sound. It allows users to interact with a speaking chatbot and it also has a feature to identify objects in the world around them through their camera using artificial intelligence.',
		shortDescription:
			'EyeSee was created for Los Altos Hacks V. EyeSee is a website to allow blind people to be able to see with sound. It allows users to interact with a speaking chatbot and it also has a feature to identify objects in the world around them through their camera using artificial intelligence.',
		links: [{ to: 'https://github.com/AirWolfXD/LAH-V', label: 'Github' }, { to: 'https://devpost.com/software/canadadry', label: 'Devpost' }, { to: 'https://www.andrewyu.dev/LAH-V/', label: 'Website' }],
		logo: Assets.Unknown,
		name: 'EyeSee',
		period: {
			from: new Date('April 24, 2021'),
			to: new Date('April 25, 2021')
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Object Detection',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/493/221/datas/gallery.jpg'
			},
			{
				label: 'Menu',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/493/222/datas/gallery.jpg'
			},
			{
				label: 'Chatbot',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/493/223/datas/gallery.jpg'
			}
		]
	},
	{
		slug: 'sociapolis',
		color: '#5e95e3',
		description:
			'Website where users can join rooms and video call with each other while playing games in the website together to help people open up and express themselves more during this pandemic. Created for connectivity track in hello:world Cal Hacks.',
		shortDescription:
			'Website where users can join rooms and video call with each other while playing games in the website together to help people open up and express themselves more during this pandemic. Created for connectivity track in hello:world Cal Hacks.',
		links: [{ to: 'https://github.com/SirQuackyy/Sociapolis', label: 'Github' }, { to: 'https://devpost.com/software/sociapolis', label: 'Devpost' }, { to: 'https://www.andrewyu.dev/Sociapolis/', label: 'Website' }],
		logo: Assets.sociapolis,
		name: 'Sociapolis',
		period: {
			from: new Date('April 16, 2021'),
			to: new Date('April 18, 2021')
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Home',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/487/700/datas/gallery.jpg'
			},
			{
				label: 'Pictionary',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/487/737/datas/gallery.jpg'
			},
			{
				label: 'Would You Rather',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/487/738/datas/gallery.jpg'
			}
		]
	},
	{
		slug: 'keepin-safe',
		color: '#5e95e3',
		description:
			'Website built for DVHacks III to give users the latest information on Covid-19 including latest stats, news, and nearby testing/vaccination locations.',
		shortDescription:
			'Website built for DVHacks III to give users the latest information on Covid-19 including latest stats, news, and nearby testing/vaccination locations.',
		links: [{ to: 'https://github.com/SirQuackyy/Keepin-Safe', label: 'Github' }, { to: 'https://devpost.com/software/keepin-safe', label: 'Devpost' }, { to: 'https://www.andrewyu.dev/Keepin-Safe/', label: 'Website' }],
		logo: Assets.keepinsafe,
		name: 'Keepin Safe',
		period: {
			from: new Date('March 19, 2021'),
			to: new Date('March 21, 2021')
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Stats',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/441/597/datas/gallery.jpg'
			},
			{
				label: 'Testing/Vaccination Sites',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/441/599/datas/gallery.jpg'
			},
			{
				label: 'News',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/441/598/datas/gallery.jpg'
			}
		]
	},
	{
		slug: 'covid-unlocked',
		color: '#5e95e3',
		description:
			'Android app to update you with live information about Covid-19 (Built for Equal Opportunity Starhacks Hackathon). Displays the latest information about Covid-19 such as the total deaths, tested positive, recoveries, and more. Also shows the nearest testing sites to you no matter where you are.',
		shortDescription:
			'Android app to update you with live information about Covid-19 (Built for Equal Opportunity Starhacks Hackathon). Displays the latest information about Covid-19 such as the total deaths, tested positive, recoveries, and more. Also shows the nearest testing sites to you no matter where you are.',
		links: [{ to: 'https://github.com/SirQuackyy/CovidTesting', label: 'Github' }, { to: 'https://devpost.com/software/covid-unlocked', label: 'Devpost' }],
		logo: Assets.Unknown,
		name: 'Covid Unlocked',
		period: {
			from: new Date('October 1, 2020'),
			to: new Date('October 1, 2020')
		},
		skills: getSkills('android-studio', 'java'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Stats',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/259/898/datas/gallery.jpg'
			},
			{
				label: 'Testing Sites',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/259/899/datas/gallery.jpg'
			}
		]
	},
	{
		slug: 'ratemate',
		color: '#5e95e3',
		description:
			'RateMate was a website created for Los Altos Hacks IV. This website allowed people to create private rooms, invite others to join with a unique code, select different products, and have others in the room rate them based on their preferences.',
		shortDescription:
			'RateMate was a website created for Los Altos Hacks IV. This website allowed people to create private rooms, invite others to join with a unique code, select different products, and have others in the room rate them based on their preferences.',
		links: [{ to: 'https://devpost.com/software/ratemate-0286yv', label: 'Devpost' }],
		logo: Assets.Unknown,
		name: 'RateMate',
		period: {
			from: new Date('March 23, 2019'),
			to: new Date('March 24, 2019')
		},
		skills: getSkills('js', 'html', 'nodejs'),
		type: 'Hackathon'
	},
];

export default MY_PROJECTS;
