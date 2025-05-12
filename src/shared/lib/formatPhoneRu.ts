export function formatPhoneRu(input: string): string {
	const digits = input.replace(/\D/g, '');
	let normalized: string;
	if (digits.length === 11 && (digits.startsWith('8') || digits.startsWith('7'))) {
		normalized = '7' + digits.slice(1);
	} else if (digits.length === 10) {
		normalized = '7' + digits;
	} else {
		return input;
	}

	const match = normalized.match(/^7(\d{3})(\d{3})(\d{2})(\d{2})$/);
	if (!match) return input;

	const [, code, part1, part2, part3] = match;
	return `+7 (${code}) ${part1}-${part2}-${part3}`;
}
