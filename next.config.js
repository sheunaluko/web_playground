/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { nextRuntime }) => {
	// Undocumented property of next 12.
	if (nextRuntime !== "nodejs") return config;
	return {
	    ...config,
	    entry() {
		return config.entry().then((entry) => ({
		    ...entry,
		    cli: path.resolve(process.cwd(), "lib/cli.ts"),
		}))
	    }
	}
    }
}






module.exports = nextConfig
