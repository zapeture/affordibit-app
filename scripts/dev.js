import 'dotenv/config';
import { execa } from 'execa';

const { stdout } = await execa({ stdout: ['inherit'] })`next dev --port ${process.env.APP_PORT || 3000}`;
console.log(stdout);
