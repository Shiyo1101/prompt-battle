import * as dotenv from 'dotenv';
import * as path from 'path';

const env = process.env.NODE_ENV;

let envPath: string;

if (env === 'production') {
  envPath = path.resolve(__dirname, '.env.prod');
} else {
  envPath = path.resolve(__dirname, '.env.dev');
}

dotenv.config({ path: envPath });

console.log(`Loaded environment variables from ${envPath}`);
