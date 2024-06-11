import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    // Get the path to the JSON file
    const jsonFilePath = path.join(process.cwd(), 'public', 'assets', 'data.json');
    
    // Read the file contents
    const fileContents = await fs.readFile(jsonFilePath, 'utf8');
    
    // Parse the file contents to a JSON object
    const data = JSON.parse(fileContents);
    
    // Send the JSON data as a response
    res.status(200).json(data);
  } catch (error) {
    // Handle any errors that occur during file read or JSON parsing
    res.status(500).json({ error: 'Failed to read JSON file' });
  }
}
