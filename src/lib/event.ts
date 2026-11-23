export const event = {
	name: 'JourneyHacks 2027',
	organizer: 'SFU Surge',
	applicationLinks: {
		hacker: '',
		mentor: ''
	}
};

// Reference from the Final Website Figma page. Confirm dates and copy before publishing.
export const figmaEventDraft = {
	date: '2027-01-09',
	venue: 'Simon Fraser University, Burnaby campus',
	timeZone: 'America/Vancouver',
	applicationsOpen: '2026-12-09',
	// The Apply mockup shows these dates without clarifying whether they are deadlines.
	applicationLabelDates: {
		mentor: '2026-12-20',
		hacker: '2026-12-21'
	},
	description:
		'JourneyHacks is a 12-hour hackathon where new learners and project creators come together to learn, connect, and kick-start strong project ideas.',
	schedule: [
		{ time: '08:30', title: 'Check in' },
		{ time: '09:00', title: 'Opening ceremony' },
		{ time: '10:00', title: 'Intro to Git workshop' },
		{ time: '11:30', title: 'Intro to web dev workshop' },
		{ time: '12:00', title: 'Lunch' },
		{ time: '14:30', title: 'Intro to Figma workshop' },
		{ time: '15:00', title: 'Intro to product management workshop' },
		{ time: '16:00', title: 'Intro to Figma workshop' },
		{ time: '17:00', title: 'Judging' },
		{ time: '18:30', title: 'Judging' },
		{ time: '20:00', title: 'Closing ceremony' }
	]
} as const;
