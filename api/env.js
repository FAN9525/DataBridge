module.exports = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	// Defensive: avoid exposing undefined
	const url = process.env.SUPABASE_URL || '';
	const key = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
	res.end(JSON.stringify({ url, key }));
};
