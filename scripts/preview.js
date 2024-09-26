import 'dotenv/config';
import { execa } from 'execa';

try {
  await execa('rm', ['-rf', '.next'], { stdio: 'inherit' }); // Delete the .next dir
  await execa('next', ['build'], { stdio: 'inherit' }); // Create a fresh build
  await execa('next', ['start', '--port', process.env.APP_PORT || 3000], { stdio: 'inherit' }); // Start the server

} catch (error) {
  console.error('Error executing commands:', error);
}
