module.exports = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	const body = {
		url: process.env.SUPABASE_URL,
		key: process.env.SUPABASE_ANON_KEY,
	};
	res.end(JSON.stringify(body));
};
